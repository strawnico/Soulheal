const recuperarList = [
    {
      name: "Ansiedade",
      id: 1,
      image: "https://uploaddeimagens.com.br/images/004/647/095/original/ansiet.png?1698243589",
      url: "https://youtu.be/mzAqzL2XIQA?si=-MBk0z0rAAeM-Qac"
    },
    {
      name: "Estresse",
      id: 2,
      image: "https://uploaddeimagens.com.br/images/004/647/097/original/estresse.png?1698243718",
      url: "https://youtu.be/mVC6P6gzGO0?si=DNhx4RaUQergWFKT"
    },
    // Outros itens da lista de meditações para recuperação
  ];
  
  const evoluirList = [
    {
      name: "Dormir",
      id: 3,
      image: "https://uploaddeimagens.com.br/images/004/647/035/original/sleep.png?1698241563",
      url: "https://youtu.be/e0Sfr3wYM8c?si=0nRaNo0K_jxg0wqV"
    },
    {
      name: "Respirar",
      id: 4,
      image: "https://uploaddeimagens.com.br/images/004/647/090/original/breath.png?1698243350",
      url: "https://youtu.be/2y4tkxnI7yc?si=YJqlA5XKHFl1TVWL"
    },
    // Outros itens da lista de meditações para evolução
  ];
  
  export default function GET(req, res) {
    const { id } = req.query; // Alteração aqui
  
    let selectedMeditation;
  
    selectedMeditation = recuperarList.find(item => item.id === parseInt(id, 10));
  
    if (!selectedMeditation) {
      selectedMeditation = evoluirList.find(item => item.id === parseInt(id, 10));
    }
  
    if (selectedMeditation) {
      res.status(200).json(selectedMeditation);
    } else {
      res.status(404).json({ message: 'Meditação não encontrada' });
    }
  }
  