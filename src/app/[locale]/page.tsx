import Form from '@/components/Form';
import { getTranslations } from 'next-intl/server';

export default async function IndexPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations();

  const handleSubmit = async () => {
    'use server';

    // This code will only run on the server
  };

  return (
    <>
      <h1>{t('IndexPage.title')}</h1>
      <Form onSubmit={handleSubmit} />
    </>
  );
}
