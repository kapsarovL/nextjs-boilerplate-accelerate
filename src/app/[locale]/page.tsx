import { useTranslations } from 'next-intl'; // Hook for translations

export default function Home() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <h1 className="text-4xl font-bold">Next.js Boilerplate Accelerate
        {t('welcome')} {/* Translated welcome message */}
        </h1>
        <p className="mt-2 text-lg">This is a simple boilerplate for Next.js applications.</p>
        <small className="mt-2 text-sm font-bold text-gray-900">It`s built with React.js, Shadcn-UI, TypeScript, Tailwind CSS.</small>
        <p className="mt-4 text-lg">Feel free to customize it to your needs.</p>`
        <p className="mt-4 text-lg">Welcome to my Next.js application.
        {t('description')} {/* Translated description */}
        </p>
      </main>
    );
  }
  