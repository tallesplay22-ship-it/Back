require("dotenv").config();
const cors = require("cors");

const express = require("express");

const connectDatabase = require("./config/database.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const logger = require("./middlewares/loggerMiddleware.js");
const errorHandler = require("./middlewares/errorMiddleware.js");

const app = express();

connectDatabase();

app.use(cors());

app.use(express.json());

app.use(logger);

app.use(productRoutes);

app.use(userRoutes);

app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada."
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});