const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/todo", async function (req, res) {
  const payload = req.body;
  //   const parsePayload = createTodo.safeParse(payload);

  if (payload) {
    res.status(411).json({
      msg: "something is wrong",
    });
    return;
  }

  await todo.create({
    title: payload.title,
    desc: payload.desc,
    completed: false,
  });

  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const payload = req.body;
  const parsePayload = updateTodo.safeParse(payload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "something is wrong",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({ msg: "todo mark as completed" });
});

app.listen(3000);
