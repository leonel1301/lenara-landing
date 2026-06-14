export type LegalBlock = {
  paragraphs?: string[];
  list?: string[];
};

export type LegalSection = LegalBlock & {
  id: string;
  title: string;
  subsections?: LegalSection[];
};

export type LegalDocumentContent = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};
