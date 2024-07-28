type StrapiAttributes = {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
};

type StrapiData = {
  data: {
    id: number;
    attributes: StrapiAttributes;
  };
  meta: Record<string, unknown>;
};
