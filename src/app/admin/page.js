"use client";
import { useState } from "react";

export default function Admin() {
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
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Área Restrita</h2>
          <p className="text-gray-600">Digite a senha para acessar:</p>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="mt-3 p-2 border border-gray-300 rounded-md text-black"
          />
          <button
            onClick={verificarSenha}
            className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Painel do Admin</h1>
      <table className="mt-6 w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Nome</th>
            <th className="p-3">Telefone</th>
            <th className="p-3">Email</th>
            <th className="p-3">Data de Nascimento</th>
            <th className="p-3">Localização</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((pessoa, index) => (
            <tr key={index} className="border-t text-center text-black">
              <td className="p-3">{pessoa.nome}</td>
              <td className="p-3">{pessoa.telefone}</td>
              <td className="p-3">{pessoa.email}</td>
              <td className="p-3">{pessoa.data_nascimento}</td>
              <td className="p-3">{pessoa.localizacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
