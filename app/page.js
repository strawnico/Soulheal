"use client";

import Image from "next/image";
import ImagemInicial from "../public/imgInicial.png";
import Link from "next/link";
import PriButton from "../components/PrimaryButton";
import Input from "../components/CompInput";

export default function Login() {
  return (
    <main className="flex">
      <div className="justify-center flex-col mx-auto flex">
        <div className="border-2 border-[#00000]">
          <Image src={ImagemInicial} alt="Picture of the author" />
          <div className="flex">
            <div className="justify-center flex flex-col mx-auto">
              <h2 className="font-works font-bold text-xl">
                {" "}
                Olá novamente 👋{" "}
              </h2>
              <p className=" text-sm w-64 font-works text-[#959595]">
                Preencha as informações abaixo para fazer log in.
              </p>
              <Input id="email" placeholder="E-mail" type="email" />
              <Input id="senha" placeholder="Senha" type="password" />
              <div className="flex">
                <div>
                  <input type="checkbox" />
                  <label className="text-xs"> Manter-se conectado </label>
                </div>
                <Link href="/cadastro" className="text-[#7B9A74] text-xs">
                  Esqueceu a senha?
                </Link>
              </div>
              <PriButton>Entrar</PriButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
