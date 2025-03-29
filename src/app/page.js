"use client";
import { useState } from "react";

export default function Home() {
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

  // Envia os dados para a API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("res", response)

    if (response.ok) {
      alert("Dados enviados com sucesso!");
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        dataNascimento: "",
        localizacao: "",
        pedidoOracao: "",
      });
    } else {
      alert("Erro ao salvar os dados.");
    }
  };

  return (
    <div>
      <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Bem-vindo à nossa igreja!
        </h1>
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
              onChange={(e) => handleChange(e)}
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
      </main>
    </div>
  );
}
