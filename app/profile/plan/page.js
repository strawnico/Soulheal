'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineCheck } from 'react-icons/ai';
import Input from '../../../components/CompInput';
import PriButton from '../../../components/PrimaryButton';

export default function Plan() {
  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={'../profile'}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">Planos</p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <div className="bg-[#FAFAFA] rounded-md flex items-center flex-col p-4 gap-4">
          <div className="text-center">
            <p>Mensal</p>
            <p className="font-semibold text-2xl">
              R$69,90<span className="text-sm">/mês</span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <AiOutlineCheck className="text-verdePrincipal"></AiOutlineCheck>
            <p>Acesso completo ao aplicativo</p>
          </div>
          <div className="w-40">
            <PriButton>Compre agora</PriButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <div className="bg-[#FAFAFA] rounded-md flex items-center flex-col p-4 gap-4 relative overflow-hidden">
          <div className="bg-[#2F9A9A] rotate-[32deg] absolute -right-32 w-96 text-center p-[0.1rem]">
            <p className="text-white ml-6 text-sm">Melhor opção</p>
          </div>
          <div className="text-center">
            <p>Anual</p>
            <p className="font-semibold text-2xl">R$600</p>
          </div>
          <div className="flex gap-1 items-center">
            <AiOutlineCheck className="text-verdePrincipal"></AiOutlineCheck>
            <p>Acesso completo ao aplicativo</p>
          </div>
          <div className="w-40">
            <PriButton>Compre agora</PriButton>
          </div>
        </div>
      </div>
    </main>
  );
}
