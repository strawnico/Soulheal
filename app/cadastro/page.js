"use client";

import Image from "next/image";
import Link from "next/link";
import ImagemInicial from "../../public/imgInicial.png";
import Logo from "../../public/logo.png";
import PriButton from "../../components/PrimaryButton";
import Input from "../../components/CompInput";
import Mobile from "../../components/mobile";
import { useState } from "react";
import { auth } from "../../auth/firebase";
import { db } from "../../auth/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = async () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const docRef = await addDoc(collection(db, "users"), {
          email: email,
          name: name,
          uid: user.uid,
        });
    
        window.location.pathname = "/";
      })

      .catch((error) => {
        if (senha.length < 8) {
          alert("oleoleola");
        } else if (
          { error }.error.message ==
          "Firebase: Error (auth/email-already-in-use)."
        ) {
          alert("aaaaa");
        }
      });
  };

  return (
    <main>
      <div className="h-screen">
        <div className="relative">
          <Image
            src={ImagemInicial}
            className="w-full"
            alt="Picture of the author"
          />
          <Image
            className="absolute bottom-[-1.5rem] left-7"
            src={Logo}
            alt="Picture of the author"
          />
        </div>
        <div className="flex mt-8">
          <div className="justify-center flex flex-col mx-auto">
            <h2 className="font-works font-bold text-xl">
              {" "}
              Olá, seja bem-vindo!{" "}
            </h2>
            <p className=" text-sm w-64 font-works text-[#959595]">
              Preencha as informações abaixo para iniciar sua experiência.
            </p>
            <Input
              id="email"
              value={email}
              onChange={setEmail}
              placeholder="E-mail"
              type="email"
            />
            <Input
              id="name"
              value={name}
              onChange={setName}
              placeholder="Nome"
              type="text"
            />
            <Input
              id="senha"
              value={senha}
              onChange={setSenha}
              placeholder="Senha"
              type="password"
            />
            <div className="flex mt-4">
              <input type="checkbox" />
              <label className="ml-1 text-sm justify-center">
                {" "}
                Manter-se conectado{" "}
              </label>
              <Link
                href="/"
                className="text-verdePrincipal text-sm justify-center mx-auto ml-10"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <PriButton emitClickEvent={cadastrar}>Cadastrar</PriButton>
            <span className="flex items-center justify-between my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="2"
                viewBox="0 0 145 2"
                fill="none"
              >
                <path
                  d="M1 1H143.146"
                  stroke="url(#paint0_linear_745_212)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_745_212"
                    x1="1"
                    y1="1.49913"
                    x2="143.471"
                    y2="1.49929"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C2C2C2" stopOpacity="0" />
                    <stop offset="0.484375" stopColor="#BABABA" />
                  </linearGradient>
                </defs>
              </svg>
              <p className=" font-normal font-works text-[#BABABA] text-sm">
                ou
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="2"
                viewBox="0 0 145 2"
                fill="none"
              >
                <path
                  d="M143.699 1H1.55271"
                  stroke="url(#paint0_linear_745_213)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_745_213"
                    x1="143.699"
                    y1="1.49913"
                    x2="1.22743"
                    y2="1.49929"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C2C2C2" stopOpacity="0" />
                    <stop offset="0.484375" stopColor="#BABABA" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="flex font-works text-sm justify-center">
              <p className="text-[#929292]">Já tem uma conta?</p>
              <Link href="/" className="text-verdePrincipal ml-1 font-bold">
                Entrar
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
