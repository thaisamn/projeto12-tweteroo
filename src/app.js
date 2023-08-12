import express from "express";

const app = express();
app.use(express.json());

let usuarios = [];
let usuario = {
  username: "bobesponja",
  avatar:
    "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
};

let tweet = {
  username: "bobesponja",
  tweet: "Eu amo hambúrguer de siri!",
};

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
  usuario = req.body;

  return res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  return res.send("esta funcionando a rota tweets");
});

app.get("/tweets", (req, res) => {
  return res.send("esta funcionando a rota get tweets");
});

app.listen(5000, () => console.log("Funcionando com sucesso porta 5000"));
