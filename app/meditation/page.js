"use client";

import NavBar from "@/components/NavBar";
import Switch from "@/components/meditation/switch";
import Option from "@/components/meditation/option";
import { useState, useEffect } from "react";
import EnterSafe from "../../components/safe.js";

export default function Meditation() {
  const [switchOption, setSwitchOption] = useState("recuperar");

  const handleClickEvent = (event, data) => {
    setSwitchOption(data);
  };

  const recuperarList = [
    {
      name: "Ansiedade",
      id: 1,
      image: "https://uploaddeimagens.com.br/images/004/647/095/original/ansiet.png?1698243589",
      // Mais detalhes...
    },
    {
      name: "Estresse",
      id: 2,
      image: "https://uploaddeimagens.com.br/images/004/647/097/original/estresse.png?1698243718",
      // Mais detalhes...
    },
    // Outros itens da lista de meditações para recuperação
  ];
  
  const evoluirList = [
    {
      name: "Dormir",
      id: 3,
      image: "https://uploaddeimagens.com.br/images/004/647/035/original/sleep.png?1698241563",
      // Mais detalhes...
    },
    {
      name: "Respirar",
      id: 4,
      image: "https://uploaddeimagens.com.br/images/004/647/090/original/breath.png?1698243350",
      // Mais detalhes...
    },
    // Outros itens da lista de meditações para evolução
  ];
  

  return (
    <EnterSafe>
      <div className="h-32 w-full flex-col flex items-center gap-2 justify-center shadow-lg rounded-b-3xl">
        <p className="font-semibold text-2xl text-gray-600">Meditação</p>
        <Switch
          selectedOption={switchOption}
          emitClickEvent={handleClickEvent}
        ></Switch>
      </div>
      <div className="items-start w-full grid grid-cols-2 gap-2 px-4 mt-4 meditationHeight overflow-y-scroll">
        {switchOption == "recuperar"
          ? recuperarList.map((recuperarItem) => {
              return (
                <Option
                  key={recuperarItem.id}
                  optionName={recuperarItem.name}
                  optionId={recuperarItem.id.toString()}
                  image={recuperarItem.image}
                />
              );
            })
          : evoluirList.map((evoluirItem) => {
              return (
                <Option
                  key={evoluirItem.id}
                  optionName={evoluirItem.name}
                  optionId={evoluirItem.id.toString()}
                  image={evoluirItem.image}
                />
              );
            })}
      </div>
      <NavBar selectedOption={"Meditation"}></NavBar>
    </EnterSafe>
  );
}
