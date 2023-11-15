'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Input from '../../../components/CompInput';

export default function Config() {
  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={'../profile'}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">Configurações</p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <Input placeholder="Nome"></Input>
        <Input placeholder="Sobrenome"></Input>
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
      </div>
    </main>
  );
}
