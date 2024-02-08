const express = require("express");
const path = require("path");
const apiRouter = require("./route/index.js");


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use("/api", apiRouter);

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});