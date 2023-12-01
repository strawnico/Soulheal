"use client";

import { useState, useEffect } from "react";
import auth from "../auth/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Safe({children}) {
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("Usuário não autenticado");
        window.location.pathname = "/";
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        [children]
      )}
    </div>
  );
}