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
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-900 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        {/* Ícone da igreja */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-b from-blue-500 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <img src="/church.svg" alt="Igreja" className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">
            Bem-vindo à nossa igreja!
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-4">
          Preencha o formulário para que possamos conhecer você melhor.
        </p>

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
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none text-black"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold p-2 rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
