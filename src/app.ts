import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";

import { conectarServidoNoBd } from "./config/db";
import { routerUsuario } from "./route/usuario";
import { routerLancamento } from "./route/lancamento";

// Cria a aplicação
export const app = express();

// Libera o acesso aos serviços
app.use(cors());

// Permite receber e enviar JSON
app.use(express.json());

// Configura os logs
app.use(logger("dev"));

// Conecta no BD
conectarServidoNoBd();

// Configuração de rotas
app.use("/usuario", routerUsuario);
app.use("/lancamento", routerLancamento);
app.use("/", (req, res) => res.send("API do app Julius"));
