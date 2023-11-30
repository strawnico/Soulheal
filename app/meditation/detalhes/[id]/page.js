'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export default function Details({ params }) {
  const [meditation, setMeditation] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const list = [
    {
      name: 'Ansiedade',
      id: 1,
      image: 'https://uploaddeimagens.com.br/images/004/647/095/original/ansiet.png?1698243589',
      url: 'https://youtu.be/mzAqzL2XIQA?si=-MBk0z0rAAeM-Qac',
    },
    {
      name: 'Estresse',
      id: 2,
      image: 'https://uploaddeimagens.com.br/images/004/647/097/original/estresse.png?1698243718',
      url: 'https://youtu.be/mVC6P6gzGO0?si=DNhx4RaUQergWFKT',
    },
    // Outros itens da lista de meditações para recuperação
    {
      name: 'Dormir',
      id: 3,
      image: 'https://uploaddeimagens.com.br/images/004/647/035/original/sleep.png?1698241563',
      url: 'https://youtu.be/e0Sfr3wYM8c?si=0nRaNo0K_jxg0wqV',
    },
    {
      name: 'Respirar',
      id: 4,
      image: 'https://uploaddeimagens.com.br/images/004/647/090/original/breath.png?1698243350',
      url: 'https://youtu.be/2y4tkxnI7yc?si=YJqlA5XKHFl1TVWL',
    },
    // Outros itens da lista de meditações para evolução
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fetchMeditation = async () => {
    try {
      const data = list.filter((item) => item.id == params.id);
      setMeditation(data[0]);
    } catch (error) {
      console.error('Erro ao buscar meditação:', error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchMeditation();
    }
  }, [params.id]);

  if (!params.id) {
    return <p>Meditação não encontrada</p>;
  }

  return (
    <div className="w-screen h-screen p-6">
      <div className="flex items-center mt-3 absolute">
        <div className="flex items-center gap-4">
          <Link href={'../'}>
            <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
          </Link>
          <p className="text-2xl font-semibold">{meditation.name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        {isMounted && (
          <ReactPlayer
            style={{
              display: 'flex',
              backgroundColor: 'fff',
            }}
            controls={true}
            url={meditation.url}
          />
        )}
      </div>
    </div>
  );
}
