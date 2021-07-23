import { createConnection } from "typeorm";

export const conectarServidoNoBd = async () => {
  const conexao = await createConnection();

  console.log(`App conectado ao BD ${conexao.options.database}`);

  // Funcionalidade que fica escutando os eventos que estão sendo processados
  process.on("SIGINT", () => {
    conexao.close().then(() => console.log("Conexão com o BD fechada"));
  });
};
