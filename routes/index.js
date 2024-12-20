const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // Add this line to import uuid
let messages = [];

router.get("/", (req, res) => {
    res.render("index", { messages });
});

router.get("/new", (req, res) => {
    res.render("new-message");
});

router.post("/new", (req, res) => {
    const { user, text } = req.body;
    messages.push({ id: uuidv4(), user, text, added: new Date() });
    res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
    const { id } = req.params;
    messages = messages.filter(message => message.id !== id);
    res.redirect("/");
});

module.exports = router;