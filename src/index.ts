import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send({ users: users });
});

app.post("/user", async (req, res) => {
  const { username, password } = req.body;
  const data = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.send({
    username: data.username,
    message: "user created successfully",
  });
});

app.listen(3000);
