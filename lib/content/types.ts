export interface DetailSection {
  heading: string;
  items: readonly string[];
}

export interface FlavorDetail {
  title: string;
  sections: readonly DetailSection[];
  cta: { label: string; href: string };
}
