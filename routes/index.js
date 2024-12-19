const express = require("express");
const router = express.Router();

let messages = [];

router.get("/", (req, res) => {
    res.render("index", { messages });
});

router.get("/new", (req, res) => {
    res.render("new-message");
});

router.post("/new", (req, res) => {
    const { user, text } = req.body;
    messages.push({ user, text, added: new Date() });
    res.redirect("/");
});

module.exports = router;