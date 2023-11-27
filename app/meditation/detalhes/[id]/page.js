'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Details({ params }) {
  const [meditation, setMeditation] = useState({});

  const fetchMeditation = async () => {
    try {
      const res = await axios.get(`/api/meditationDetails/${params.id}`);
      setMeditation(res.data);
    } catch (error) {
      console.error("Erro ao buscar meditação:", error);
      // Aqui você pode adicionar um log para ver o objeto de erro completo
      console.log(error.response); // Isso mostrará a resposta da API, se disponível
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchMeditation();
    }
  }, [params.id]);

  if (!params.id) {
    return <p>Meditação não encontrada</p>;
  }

  return (
    <div>
      <h2>{meditation.name}</h2>
      {/* Renderize outras informações detalhadas da meditação */}
    </div>
  );
}
