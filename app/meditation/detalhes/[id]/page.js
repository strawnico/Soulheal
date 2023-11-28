"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Details({ params }) {
  const [meditation, setMeditation] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fetchMeditation = async () => {
    try {
      const res = await axios.get(`/api/meditationDetails/${params.id}`);
      setMeditation(res.data);
    } catch (error) {
      console.error("Erro ao buscar meditação:", error);
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
    <div className="w-screen h-screen">
      <div className="flex items-center mt-3 absolute">
        <Link href={"../"}>
          <IoIosArrowBack className="cursor-pointer text-2xl ml-4"></IoIosArrowBack>
        </Link>

        <h2 className="flex pl-3 font-sans text-lg">
          {meditation.name}
        </h2>
      </div>
      <div className="flex justify-center items-center h-full">
        {isMounted && (
          <ReactPlayer
            style={{
              display: "flex",
              backgroundColor: "fff",
            }}
            controls={true}
            url={meditation.url}
          />
        )}
      </div>
    </div>
  );
}
