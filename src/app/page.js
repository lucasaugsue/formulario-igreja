"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    dataNascimento: "",
    localizacao: "",
    pedidoOracao: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/sucesso");
    } else {
      alert("Erro ao salvar os dados.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 flex flex-col items-center justify-center px-4 py-6">
    <main className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-b from-blue-500 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
          <img src="/church.svg" alt="Igreja" className="w-8 h-8" />
        </div>
  
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-2">
          Bem-vindo à nossa igreja!
        </h1>
        <p className="text-center text-gray-600">
          Preencha o formulário para que possamos conhecer você melhor.
        </p>
      </div>
  
      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-gray-700">Nome:</span>
          <input
            type="text"
            name="nome"
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Telefone:</span>
          <input
            type="tel"
            name="telefone"
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Data de Nascimento:</span>
          <input
            type="date"
            name="dataNascimento"
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Localização:</span>
          <input
            type="text"
            name="localizacao"
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Pedido de Oração:</span>
          <textarea
            name="pedidoOracao"
            rows="4"
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </label>
  
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </main>
  
    <footer className="w-full text-white py-4 mt-8 flex justify-center border border-white bg-gradient-to-b from-blue-500 to-blue-900 rounded-lg">
      <div className="flex gap-12">
        <a href="https://www.facebook.com/igrejacem/?locale=pt_BR" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center">
          <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 filter invert" />
          <span className="text-xs mt-1">Facebook</span>
        </a>
  
        <a href="https://www.instagram.com/cem.miami/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center">
          <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 filter invert" />
          <span className="text-xs mt-1">Instagram</span>
        </a>
  
        <a href="/admin" className="flex flex-col items-center">
          <img src="/user.svg" alt="Admin" className="w-6 h-6 filter invert" />
          <span className="text-xs mt-1">Admin</span>
        </a>
      </div>
    </footer>
  </div>
  
  );
}
