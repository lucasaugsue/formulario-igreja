import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM pessoas");
    return Response.json(result.rows);
  } catch (error) {
    console.error("Erro ao listar dados:", error);
    return Response.json({ error: "Erro ao listar dados." }, { status: 500 });
  }
}
