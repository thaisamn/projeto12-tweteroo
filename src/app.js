import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send(" Oi Mundo! 4");
});

app.listen(5000, () => console.log("Funcionando com sucesso porta 5000"));
