'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Exercise from '@/components/gym/Exercise';

export default function Page({ params }) {
  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={'../../gym'}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">{params.train}</p>
      </div>
      <Exercise></Exercise>
    </main>
  );
}
