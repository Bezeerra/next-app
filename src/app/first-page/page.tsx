// /src/app/first-page/page.tsx
import React from 'react';
import { fetchHtmlContent } from '../../lib/fetchHtml';
import Link from "next/link";

const FirstPage = async () => {
  let htmlContent: string;

  try {
    htmlContent = await fetchHtmlContent();
  } catch (err) {
    console.log(err)
    htmlContent = '<p>Error fetching content.</p>';
  }

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
            <h1>Conteúdo Renderizado</h1>
            <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
            <div className="mt-10">
              <div>
                Return to the old Page:
                <Link href={"/"}>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ml-2">
                    Next Page
                  </button>
                </Link>
              </div>
            </div>
          </main>
      </div>
  );
};

export default FirstPage;
