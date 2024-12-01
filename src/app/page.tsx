"use client";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";


export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="">
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => setCount(count + 1)}>Append Value </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setCount(count - 1)}>Subtract Value</button>
            <p className=""> Sum: {count}</p>
        </div>
        <div className="mt-10">
            <div>
              Go to the next page to look IP Address:
                <Link href={"/first-page"}>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ml-2">
                        Next Page</button>
                </Link>
            </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Bezeerra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to github →
        </a>
      </footer>
    </div>
  );
}
