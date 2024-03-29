'use client';

import Image from 'next/image';
import ImagemInicial from '../public/imgInicial.png';
import SideImage from '../public/sideImage.png';
import Logo from '../public/logo.png';
import Link from 'next/link';
import PriButton from '../components/PrimaryButton';
import Input from '../components/CompInput';
import Mobile from '../components/mobile';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = async () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(async (userCredential) => {
        localStorage.setItem('uid', auth.currentUser.uid);
        notifySuccess();
        window.location.pathname = '/home';
      })
      .catch((error) => {
        console.log({ error }.error);
        notifyError();
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const notifyError = () =>
    toast('E-mail ou senha incorretos', {
      style: {
        background: 'red',
        color: 'white',
      },
    });

  const notifySuccess = () =>
    toast('Login feito com sucesso!', {
      style: {
        background: 'green',
        color: 'white',
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
            <h2 className="font-works font-bold text-xl"> Olá novamente 👋 </h2>
            <p className=" text-sm w-64 font-works text-[#959595]">Preencha as informações abaixo para fazer log in.</p>
            <Input id="email" placeholder="E-mail" value={email} onChange={setEmail} name="email " type="email" />
            <Input
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={setSenha}
              name="senha"
              type="password"
              hasShowHidePassword={true}
            />
            <div className="flex mt-4">
              <input type="checkbox" />
              <label className="ml-1 text-sm justify-center"> Manter-se conectado </label>
              <Link href="/" className="text-verdePrincipal text-sm justify-center mx-auto ml-10">
                Esqueceu a senha?
              </Link>
            </div>
            <PriButton emitClickEvent={entrar}> Entrar</PriButton>
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
              <p className=" text-[#929292]">Não tem uma conta?</p>
              <Link href="/cadastro" className="text-verdePrincipal ml-1 font-bold">
                Cadastrar
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
