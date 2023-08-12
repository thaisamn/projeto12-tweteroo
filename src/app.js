import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let usuarios = [];
let tweets = [];

app.get("/", (req, res) => {
  res.send(" Oi Mundo! 4");
});

app.post("/sign-up", (req, res) => {
  const usuarioExistente = usuarios.find(
    (u) => u.username === req.body.username
  );

  if (usuarioExistente) {
    return res.status(400).send("Usuario já existe!");
  }

  usuarios.push(req.body);

  return res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const usuarioExistente = usuarios.find(
    (u) => u.username === req.body.username
  );

  if (!usuarioExistente) {
    return res.status(401).send("UNAUTHORIZED");
  }

  tweets.push(req.body);

  return res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  const tweetsDeUsuarios = tweets.map((tt) => {
    const usuariott = usuarios.find((u) => u.username === tt.username);
    return {
      ...tt,
      avatar: usuariott.avatar,
    };
  });

  return res.status(200).send(tweetsDeUsuarios);
});

app.listen(5000, () => console.log("Funcionando com sucesso porta 5000"));
