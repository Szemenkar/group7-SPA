const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


//Change the following code to match your database and login
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password!",
    database: "newssumdb",
});



app.get("/api/articles", (req, res) => {
    const sortBy = req.query.sortBy || "newest";
    let sortOrder = sortBy === "newest" ? "DESC" : "ASC";


    const query = `SELECT title, summary, link, published, newsID FROM news ORDER BY published ${sortOrder}`;


    db.query(query, (error, results) => {
        if (error) {
            console.error("Error executing query:", error); // Logga detaljer om felet
            return res.status(500).send("Error fetching articles");
        }


        const { search } = req.query;


        if (search) {
            const searchTerm = search.toLowerCase();
            results = results.filter(
                (article) =>
                    article.title.toLowerCase().includes(searchTerm) ||
                    article.summary.toLowerCase().includes(searchTerm)
            );
        }


        res.json(results);
    });
});


app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`);
});