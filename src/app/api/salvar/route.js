import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Necessário para o Neon
});

export async function POST(req) {
  try {
    console.log("entrou na rota :D")
    
    const body = await req.json(); // Pega os dados do formulário
    const { nome, telefone, email, dataNascimento, localizacao, pedidoOracao } = body;

    const query = `
      INSERT INTO pessoas (nome, telefone, email, data_nascimento, localizacao, pedido_oracao)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [nome, telefone, email, dataNascimento, localizacao, pedidoOracao];
    const result = await pool.query(query, values);

    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar no banco:", error.message);
    return Response.json({ message: "Erro ao salvar no banco", error: error.message }, { status: 500 });
  }
}
