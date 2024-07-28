import { z } from 'zod';
import { getErrorMessage } from './handleCatchError';

const ApiResponseSchema = z.object({
  data: z.object({
    id: z.number(),
    attributes: z.object({
      title: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
      locale: z.string(),
    }),
  }),
  meta: z.record(z.unknown()),
});

type ApiResponse = z.infer<typeof ApiResponseSchema>;

export default async function getStrapiData(url: string): Promise<ApiResponse | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  try {
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();
    // Validate the data using zod
    return ApiResponseSchema.parse(data);
  } catch (error) {
    console.error(getErrorMessage(error));
    return null;
  }
}

