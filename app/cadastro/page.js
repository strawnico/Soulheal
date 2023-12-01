'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImagemInicial from '../../public/imgInicial.png';
import Logo from '../../public/logo.png';
import SideImage from '../../public/sideImage.png';
import PriButton from '../../components/PrimaryButton';
import Input from '../../components/CompInput';
import Mobile from '../../components/mobile';
import { useState } from 'react';
import { auth } from '../../auth/firebase';
import { db } from '../../auth/firebase.js';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async () => {
    var padrao = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

    if (!padrao.test(senha)) return notifyPassword();

    createUserWithEmailAndPassword(auth, email, senha)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const docRef = await setDoc(doc(db, 'users', user.uid), {
          email: email,
          name: name,
          uid: user.uid,
        });
        notifySuccess();
        window.location.pathname = '/';
      })

      .catch((error) => {
        if (senha.length < 8) {
          notifyPassword();
        } else if ({ error }.error.message == 'Firebase: Error (auth/email-already-in-use).') {
          notifyEmailInUse();
        }
      });
  };

  const notifyPassword = () =>
    toast('Insira uma senha de pelo menos um caracter especial, uma letra maiscula e no minimo 8 caracteres', {
      style: {
        background: 'red',
        color: 'white',
        textAlign: 'center',
      },
    });

  const notifyEmailInUse = () =>
    toast('Já existe uma conta com este e-mail', {
      style: {
        background: 'yellow',
        color: 'black',
        textAlign: 'center',
      },
    });

  const notifySuccess = () =>
    toast('Conta criada com sucesso!', {
      style: {
        background: 'green',
        color: 'white',
        textAlign: 'center',
      },
    });

  return (
    <main className="lg:flex lg:justify-center">
      <div className="h-screen flex flex-col lg:flex-row max-w-screen-2xl">
        <div className="relative lg:flex-1 lg:flex lg:p-6">
          <Image src={SideImage} className="hidden lg:flex"></Image>
          <Image
            src={ImagemInicial}
            className="w-full lg:hidden h-48 object-cover rounded-b-3xl"
            alt="Picture of the author"
          />
          <Image
            className="absolute bottom-[-1.5rem] lg:left-[34%] lg:hidden md:left-[29%] left-[8%]"
            src={Logo}
            alt="Picture of the author"
          />
        </div>
        <div className="flex mt-8 lg:mt-0 lg:h-screen h-fit lg:flex-1">
          <div className="justify-center flex flex-col mx-auto">
            <Image className="hidden lg:flex mb-4" src={Logo} alt="Picture of the author" />
            <h2 className="font-works font-bold text-xl"> Olá, seja bem-vindo! </h2>
            <p className=" text-sm w-64 font-works text-[#959595]">
              Preencha as informações abaixo para iniciar sua experiência.
            </p>
            <Input id="email" value={email} onChange={setEmail} placeholder="E-mail" type="email" />
            <Input id="name" value={name} onChange={setName} placeholder="Nome" type="text" />
            <Input id="senha" value={senha} onChange={setSenha} placeholder="Senha" type="password" />
            <PriButton emitClickEvent={cadastrar}>Cadastrar</PriButton>
            <span className="flex items-center justify-between my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="145" height="2" viewBox="0 0 145 2" fill="none">
                <path d="M1 1H143.146" stroke="url(#paint0_linear_745_212)" strokeWidth="2" strokeLinecap="round" />
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
              <p className=" font-normal font-works text-[#BABABA] text-sm">ou</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="145" height="2" viewBox="0 0 145 2" fill="none">
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
      <Toaster />
    </main>
  );
}
