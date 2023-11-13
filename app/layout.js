"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import auth from "../auth/firebase.js";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soulheal",
  description: "Be healthy",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("Usuário não autenticado");
        if (window.location.pathname == "/"){
          setLoading(false);
        } else {
          window.location.pathname = "/"
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
       <body className={inter.className}>
      <div>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
         [children]
        )}
      </div>
      </body>
    </html>
  );
}
