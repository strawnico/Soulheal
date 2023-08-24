"use client";

import Image from "next/image";
import ImagemInicial from "../public/imgInicial.png";
import Link from "next/link";
import PriButton from "../components/PrimaryButton";

export default function Home() {
  return (
    <main>
      <Image src={ImagemInicial} alt="Picture of the author" />
      <h2 className="font-works font-bold"> Olá novamente </h2>{" "}
      <p className="font-works text-[#959595]"> Preencha as informações abaixo para fazer log in </p>{" "}
      <input id="email" placeholder="E-mail" />
      <input id="senha" placeholder="Senha" />
      <div>
        <input type="checkbox" />
        <label> Manter - se conectado </label>{" "}
      </div>{" "}
      <Link href="/cadastro">Esqueceu a senha?</Link> 
      <PriButton>Entrar</PriButton>
    </main>
  );
}
