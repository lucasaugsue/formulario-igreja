"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  const [senha, setSenha] = useState("");
  const [acessoPermitido, setAcessoPermitido] = useState(false);
  const [dados, setDados] = useState([]);

  const senhaCorreta = "aleluia77"; 

  const verificarSenha = () => {
    if (senha === senhaCorreta) {
      setAcessoPermitido(true);
      buscarDados();
    } else {
      alert("Senha incorreta!");
    }
  };

  const buscarDados = async () => {
    const response = await fetch("/api/listar");
    if (response.ok) {
      const data = await response.json();
      setDados(data);
    } else {
      alert("Erro ao buscar os dados.");
    }
  };

  if (!acessoPermitido) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-900 px-4">
        <button 
          onClick={() => router.push("/")} 
          className="absolute top-6 left-6 text-white flex items-center gap-2 hover:opacity-80 transition"
        >
          <img src="/arrow-left.svg" alt="Voltar" className="w-5 h-5 filter invert" />
          <span className="text-lg font-medium">Voltar</span>
        </button>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Área Restrita</h2>
          <p className="text-gray-600 mb-4">Digite a senha para acessar:</p>

          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            onClick={verificarSenha}
            className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-blue-500 to-blue-900 min-h-screen relative">
      <button 
        onClick={() => router.push("/")} 
        className="absolute top-6 left-6 text-white flex items-center gap-2 hover:opacity-80 transition"
      >
        <img src="/arrow-left.svg" alt="Voltar" className="w-5 h-5 filter invert" />
        <span className="text-lg font-medium">Voltar</span>
      </button>

      <h1 className="text-3xl font-bold text-white text-center mb-6 mt-12">Painel do Admin</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Nome</th>
              <th className="p-3 text-left">Telefone</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Data de Nascimento</th>
              <th className="p-3 text-left">Endereço</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((pessoa, index) => (
              <tr key={index} className="border-t text-gray-700 hover:bg-gray-100 transition">
                <td className="p-3">{pessoa.nome}</td>
                <td className="p-3">{pessoa.telefone}</td>
                <td className="p-3">{pessoa.email}</td>
                <td className="p-3">
                  {new Date(pessoa.data_nascimento).toLocaleDateString("pt-BR")}
                </td>
                <td className="p-3">{pessoa.localizacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
