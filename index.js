const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname + '/public')));

app.get("/1.4/book", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.4/book.html'));
});

app.get("/1.4/film", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.4/film.html'));
});

app.get("/1.6/grid", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.6/grid.html'));
});

app.get("/1.6/flex", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.6/flex.html'));
});

app.get("/1.6/float", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.6/float.html'));
});

app.get("/1.10/git", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.10/git.html'));
});

app.get("/1.12/first", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.12/first.html'));
});

app.get("/1.12/second", (req, res)=>{
    res.sendFile(path.join(__dirname+'/1.12/second.html'));
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));