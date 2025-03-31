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
  
    try {
      const response = await fetch("/api/salvar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Captura a resposta da API
  
      if (response.ok) {
        router.push("/sucesso");
      } else {
        alert(data.message || "Erro ao salvar os dados."); // Exibe a mensagem retornada pela API
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro inesperado. Tente novamente.");
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
  
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="text-gray-700">Nome:</span>
          <input
             type="text"
             name="nome"
             value={formData.nome}
             onChange={handleChange}
             required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Telefone:</span>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Data de Nascimento:</span>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Localização:</span>
          <input
            type="text"
            name="localizacao"
            value={formData.localizacao}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
          />
        </label>
  
        <label className="flex flex-col">
          <span className="text-gray-700">Pedido de Oração:</span>
          <textarea
            name="pedidoOracao"
            rows="4"
            value={formData.pedidoOracao}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black resize-none"
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
