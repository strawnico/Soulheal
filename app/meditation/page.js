'use client';

import NavBar from '@/components/NavBar';
import Switch from '@/components/meditation/switch';
import Option from '@/components/meditation/option';
import { useState } from 'react';
import Mobile from '@/components/mobile';

export default function Meditation() {
  const [switchOption, setSwitchOption] = useState('recuperar');

  const handleClickEvent = (event, data) => {
    setSwitchOption(data);
  };

  const recuperarList = [
    {
      name: 'Ansiedade',
      id: 1,
      image: 'https://uploaddeimagens.com.br/images/004/647/095/original/ansiet.png?1698243589',
    },
    {
      name: 'Estresse',
      id: 2,
      image: 'https://uploaddeimagens.com.br/images/004/647/097/original/estresse.png?1698243718',
    },
  ];

  const evoluirList = [
    {
      name: 'Dormir',
      id: 1,
      image: 'https://uploaddeimagens.com.br/images/004/647/035/original/sleep.png?1698241563',
    },
    {
      name: 'Respirar',
      id: 2,
      image: 'https://uploaddeimagens.com.br/images/004/647/090/original/breath.png?1698243350',
    },
  ];

  return (
    <main>
      <div className="h-32 w-full flex-col flex items-center gap-2 justify-center shadow-lg rounded-b-3xl">
        <p className="font-semibold text-2xl text-gray-600">Meditação</p>
        <Switch selectedOption={switchOption} emitClickEvent={handleClickEvent}></Switch>
      </div>
      <div className="items-start w-full grid grid-cols-2 gap-2 px-4 mt-4 meditationHeight overflow-y-scroll">
        {switchOption == 'recuperar'
          ? recuperarList.map((recuperarItem) => {
              return <Option key={recuperarItem} optionName={recuperarItem.name} image={recuperarItem.image}></Option>;
            })
          : evoluirList.map((evoluirItem) => {
              return <Option key={evoluirItem} optionName={evoluirItem.name} image={evoluirItem.image}></Option>;
            })}
      </div>
      <NavBar selectedOption={'Meditation'}></NavBar>
    </main>
  );
}
