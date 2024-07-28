import { Button } from '@/components/ui/button';
import getStrapiData from '@/utilities/getStrapiData';

export default async function Home() {
  const data = await getStrapiData('/api/title');
  const title = data?.data.attributes.title;

  return (
    <main className='px-4 py-10'>
      <Button variant='outline'>{title}</Button>
    </main>
  );
}
