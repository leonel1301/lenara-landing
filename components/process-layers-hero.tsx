"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type {
  CanvasTexture,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  WebGLRenderer,
} from "three";

import type { ProcessStep } from "@/lib/process";
import { cn } from "@/lib/utils";

type Layer = {
  id: ProcessStep;
  number: string;
  title: string;
};

type Props = {
  layers: Layer[];
  kicker: string;
  hint: string;
};

const layerColors = [
  ["#7184f1", "#4256c8"],
  ["#aa82da", "#725ac1"],
  ["#6ba3df", "#426fd1"],
  ["#70b1b8", "#5474d5"],
] as const;

const fallbackTransforms = [
  "translate3d(-7%, -96%, 0) rotate(-5deg)",
  "translate3d(4%, -42%, 0) rotate(3deg)",
  "translate3d(-3%, 12%, 0) rotate(-2deg)",
  "translate3d(8%, 66%, 0) rotate(4deg)",
];

function drawLayerTexture(
  THREE: typeof import("three"),
  number: string,
  title: string,
  colors: readonly [string, string],
) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  context.save();
  context.beginPath();
  context.roundRect(0, 0, canvas.width, canvas.height, 42);
  context.clip();
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const glow = context.createRadialGradient(780, 12, 0, 780, 12, 340);
  glow.addColorStop(0, "rgba(255,255,255,0.28)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = "rgba(255,255,255,0.14)";
  context.lineWidth = 2;
  for (let x = 64; x < canvas.width; x += 96) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }

  context.fillStyle = "rgba(255,255,255,0.76)";
  context.font = "600 31px Geist, Arial, sans-serif";
  context.letterSpacing = "7px";
  context.fillText(number, 76, 96);

  context.fillStyle = "#ffffff";
  context.font = "650 52px Geist, Arial, sans-serif";
  context.letterSpacing = "-1px";
  context.fillText(title, 174, 103);

  context.strokeStyle = "rgba(255,255,255,0.42)";
  context.lineWidth = 5;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(76, 171);
  context.lineTo(774, 171);
  context.stroke();

  context.strokeStyle = "rgba(255,255,255,0.9)";
  context.beginPath();
  context.moveTo(76, 171);
  context.lineTo(250 + Number(number) * 105, 171);
  context.stroke();

  for (let index = 0; index < 4; index += 1) {
    context.beginPath();
    context.fillStyle =
      index < Number(number)
        ? "rgba(255,255,255,0.96)"
        : "rgba(255,255,255,0.32)";
    context.arc(836 + index * 40, 171, 7, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

export function ProcessLayersHero({ layers, kicker, hint }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }

    let disposed = false;
    let disposeScene: (() => void) | undefined;

    const initialize = async () => {
      try {
        const THREE = await import("three");

        if (disposed) {
          return;
        }

        const renderer: WebGLRenderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
        camera.position.set(0, 0.12, 8.4);

        const group = new THREE.Group();
        group.rotation.set(-0.18, 0.11, -0.035);
        scene.add(group);

        scene.add(new THREE.AmbientLight(0xffffff, 2.1));
        const keyLight = new THREE.DirectionalLight(0xcdd8ff, 4.4);
        keyLight.position.set(4, 6, 7);
        scene.add(keyLight);
        const rimLight = new THREE.DirectionalLight(0x8c78ff, 3.2);
        rimLight.position.set(-5, -2, 4);
        scene.add(rimLight);

        const shape = new THREE.Shape();
        const width = 4.4;
        const height = 1.02;
        const radius = 0.16;
        const x = -width / 2;
        const y = -height / 2;
        shape.moveTo(x + radius, y);
        shape.lineTo(x + width - radius, y);
        shape.quadraticCurveTo(x + width, y, x + width, y + radius);
        shape.lineTo(x + width, y + height - radius);
        shape.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius,
          y + height,
        );
        shape.lineTo(x + radius, y + height);
        shape.quadraticCurveTo(x, y + height, x, y + height - radius);
        shape.lineTo(x, y + radius);
        shape.quadraticCurveTo(x, y, x + radius, y);

        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 0.09,
          bevelEnabled: true,
          bevelSegments: 4,
          bevelSize: 0.045,
          bevelThickness: 0.035,
          curveSegments: 12,
        });
        geometry.center();

        const edgeGeometry = new THREE.EdgesGeometry(geometry, 24);
        const labelGeometry = new THREE.PlaneGeometry(width, height);
        const cards: Mesh[] = [];
        const materials: MeshStandardMaterial[] = [];
        const labelMaterials: MeshBasicMaterial[] = [];
        const textures: CanvasTexture[] = [];
        const edgeMaterials: import("three").LineBasicMaterial[] = [];
        const basePositions = [
          { x: -0.34, y: 1.58, z: -0.18, rotation: -0.055 },
          { x: 0.23, y: 0.54, z: 0.02, rotation: 0.035 },
          { x: -0.18, y: -0.5, z: 0.22, rotation: -0.025 },
          { x: 0.34, y: -1.54, z: 0.42, rotation: 0.05 },
        ];

        layers.forEach((layer, index) => {
          const texture = drawLayerTexture(
            THREE,
            layer.number,
            layer.title,
            layerColors[index],
          );
          if (!texture) {
            return;
          }

          textures.push(texture);
          const material = new THREE.MeshStandardMaterial({
            color: layerColors[index][1],
            roughness: 0.3,
            metalness: 0.08,
            transparent: true,
            opacity: 0.97,
          });
          materials.push(material);

          const card = new THREE.Mesh(geometry, material);
          const base = basePositions[index];
          card.position.set(base.x, base.y, base.z);
          card.rotation.z = base.rotation;
          card.userData.base = base;
          card.userData.index = index;

          const labelMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            depthWrite: false,
            toneMapped: false,
          });
          labelMaterials.push(labelMaterial);
          const label = new THREE.Mesh(labelGeometry, labelMaterial);
          label.position.z = 0.092;
          card.add(label);

          const edgeMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.42,
          });
          edgeMaterials.push(edgeMaterial);
          card.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
          group.add(card);
          cards.push(card);
        });

        const connectorPoints = basePositions.map(
          (position) =>
            new THREE.Vector3(position.x - 2.48, position.y, position.z - 0.18),
        );
        const connectorCurve = new THREE.CatmullRomCurve3(connectorPoints);
        const connectorGeometry = new THREE.TubeGeometry(
          connectorCurve,
          64,
          0.018,
          8,
          false,
        );
        const connectorMaterial = new THREE.MeshBasicMaterial({
          color: 0x7b8fe3,
          transparent: true,
          opacity: 0.52,
        });
        group.add(new THREE.Mesh(connectorGeometry, connectorMaterial));

        const nodeGeometry = new THREE.SphereGeometry(0.075, 18, 18);
        const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xdbe2ff });
        connectorPoints.forEach((position) => {
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          node.position.copy(position);
          group.add(node);
        });

        const particlePositions = new Float32Array(84 * 3);
        for (let index = 0; index < 84; index += 1) {
          particlePositions[index * 3] = (Math.random() - 0.5) * 7.4;
          particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 5.6;
          particlePositions[index * 3 + 2] = -1.3 + Math.random() * 1.6;
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(particlePositions, 3),
        );
        const particleMaterial = new THREE.PointsMaterial({
          color: 0x7b8fe3,
          size: 0.026,
          transparent: true,
          opacity: 0.5,
          sizeAttenuation: true,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const pointer = new THREE.Vector2();
        const pointerTarget = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        let hoveredIndex = -1;
        let frame = 0;
        let isVisible = true;

        const resize = () => {
          const { width: cssWidth, height: cssHeight } =
            container.getBoundingClientRect();
          if (cssWidth <= 0 || cssHeight <= 0) {
            return;
          }
          renderer.setSize(cssWidth, cssHeight, false);
          camera.aspect = cssWidth / cssHeight;
          camera.updateProjectionMatrix();
        };

        const handlePointerMove = (event: PointerEvent) => {
          const bounds = canvas.getBoundingClientRect();
          pointerTarget.set(
            ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
            -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
          );
          raycaster.setFromCamera(pointerTarget, camera);
          const match = raycaster.intersectObjects(cards, false)[0];
          hoveredIndex = match
            ? cards.indexOf(match.object as Mesh)
            : -1;
          canvas.style.cursor = hoveredIndex >= 0 ? "pointer" : "grab";
        };

        const handlePointerLeave = () => {
          pointerTarget.set(0, 0);
          hoveredIndex = -1;
          canvas.style.cursor = "grab";
        };

        const render = (timestamp: number) => {
          if (disposed || !isVisible || document.hidden) {
            return;
          }

          const elapsed = timestamp * 0.001;
          pointer.lerp(pointerTarget, prefersReducedMotion ? 0.2 : 0.065);
          group.rotation.y +=
            (0.11 + pointer.x * 0.14 - group.rotation.y) * 0.045;
          group.rotation.x +=
            (-0.18 - pointer.y * 0.07 - group.rotation.x) * 0.045;
          particles.rotation.z = prefersReducedMotion ? 0 : elapsed * 0.012;

          cards.forEach((card, index) => {
            const base = card.userData.base as (typeof basePositions)[number];
            const isHovered = hoveredIndex === index;
            const targetScale = isHovered ? 1.055 : 1;
            const targetX = base.x + (isHovered ? 0.16 : 0);
            const floatOffset = prefersReducedMotion
              ? 0
              : Math.sin(elapsed * 0.82 + index * 0.9) * 0.025;

            card.scale.lerp(
              new THREE.Vector3(targetScale, targetScale, targetScale),
              0.09,
            );
            card.position.x += (targetX - card.position.x) * 0.08;
            card.position.y +=
              (base.y + floatOffset - card.position.y) * 0.08;
            materials[index].opacity +=
              ((isHovered ? 1 : 0.97) - materials[index].opacity) * 0.08;
            edgeMaterials[index].opacity +=
              ((isHovered ? 0.8 : 0.42) - edgeMaterials[index].opacity) * 0.08;
          });

          renderer.render(scene, camera);
          frame = window.requestAnimationFrame(render);
        };

        const handleVisibilityChange = () => {
          if (!document.hidden && isVisible) {
            cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(render);
          }
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        const intersectionObserver = new IntersectionObserver(
          ([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible && !document.hidden) {
              cancelAnimationFrame(frame);
              frame = window.requestAnimationFrame(render);
            } else {
              cancelAnimationFrame(frame);
            }
          },
          { threshold: 0.05 },
        );
        intersectionObserver.observe(container);

        canvas.addEventListener("pointermove", handlePointerMove);
        canvas.addEventListener("pointerleave", handlePointerLeave);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        resize();
        renderer.render(scene, camera);
        setIsReady(true);
        frame = window.requestAnimationFrame(render);

        disposeScene = () => {
          cancelAnimationFrame(frame);
          resizeObserver.disconnect();
          intersectionObserver.disconnect();
          canvas.removeEventListener("pointermove", handlePointerMove);
          canvas.removeEventListener("pointerleave", handlePointerLeave);
          document.removeEventListener("visibilitychange", handleVisibilityChange);
          textures.forEach((texture) => texture.dispose());
          materials.forEach((material) => material.dispose());
          labelMaterials.forEach((material) => material.dispose());
          edgeMaterials.forEach((material) => material.dispose());
          geometry.dispose();
          edgeGeometry.dispose();
          labelGeometry.dispose();
          connectorGeometry.dispose();
          connectorMaterial.dispose();
          nodeGeometry.dispose();
          nodeMaterial.dispose();
          particleGeometry.dispose();
          particleMaterial.dispose();
          renderer.dispose();
        };
      } catch {
        if (!disposed) {
          setIsReady(false);
        }
      }
    };

    void initialize();

    return () => {
      disposed = true;
      disposeScene?.();
    };
  }, [layers, prefersReducedMotion]);

  return (
    <figure
      ref={containerRef}
      className="relative h-[390px] w-full overflow-hidden rounded-[2rem] border border-primary/15 bg-[linear-gradient(145deg,color-mix(in_oklch,var(--background)_88%,var(--primary)),color-mix(in_oklch,var(--background)_96%,transparent))] shadow-[0_32px_90px_-48px_color-mix(in_oklch,var(--primary)_58%,transparent)] md:h-[470px] lg:h-[540px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[16%] top-[18%] h-[58%] rounded-full bg-primary/20 blur-3xl"
      />
      <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/30 bg-background/65 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-foreground/75 uppercase shadow-sm backdrop-blur-md md:left-7 md:top-7">
        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
        {kicker}
      </div>

      <div
        aria-hidden
        className={cn(
          "absolute inset-0 z-10 transition-opacity duration-700",
          isReady ? "opacity-0" : "opacity-100",
        )}
      >
        {layers.map((layer, index) => (
          <div
            key={layer.id}
            className="absolute left-[17%] top-1/2 flex h-[18%] w-[66%] items-center gap-4 rounded-2xl border border-white/40 px-5 text-white shadow-xl"
            style={{
              background: `linear-gradient(120deg, ${layerColors[index][0]}, ${layerColors[index][1]})`,
              transform: fallbackTransforms[index],
            }}
          >
            <span className="text-xs font-bold tracking-[0.22em] text-white/75">
              {layer.number}
            </span>
            <span className="text-base font-semibold md:text-lg">{layer.title}</span>
          </div>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "absolute inset-0 z-10 size-full touch-pan-y transition-opacity duration-700",
          isReady ? "opacity-100" : "opacity-0",
        )}
      />

      <figcaption className="absolute bottom-4 left-1/2 z-20 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full border border-border/70 bg-background/78 px-3 py-1.5 text-center text-[11px] leading-tight text-muted-foreground shadow-sm backdrop-blur-md md:bottom-6 md:text-xs">
        {hint}
      </figcaption>
    </figure>
  );
}
