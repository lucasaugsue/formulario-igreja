import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { nome, telefone, email, dataNascimento, localizacao, pedidoOracao } = body;

    // Verifica se já existe um usuário com o mesmo e-mail
    const emailCheckQuery = "SELECT * FROM pessoas WHERE email = $1";
    const emailCheckResult = await pool.query(emailCheckQuery, [email]);

    if (emailCheckResult.rows.length > 0) {
      throw new Error("Já existe um usuário com esse email! There is already a user with that email!");
    }

    // Se não existir, insere o novo usuário
    const insertQuery = `
      INSERT INTO pessoas (nome, telefone, email, data_nascimento, localizacao, pedido_oracao)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [nome, telefone, email, dataNascimento, localizacao, pedidoOracao];
    const result = await pool.query(insertQuery, values);

    return Response.json(result.rows[0], { status: 201 });

  } catch (error) {
    console.error("Erro ao processar requisição:", error.message);
    
    return Response.json(
      { message: error.message || "Erro ao salvar no banco" }, 
      { status: error.message.includes("usuário") ? 400 : 500 } // 400 para erro de usuário, 500 para outros erros
    );
  }
}
