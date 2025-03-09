import express from 'express'

const app = express();

app.use(
    cors({
        origin: process.env.BASE_URL,
        credential: true,
        method: ["GET", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello from Chai");
});

app.get("/chai", (req, res) =>{
    res.send("Which tea would you prefer..?")
})

app.get("/Cohort", (req, res) =>{
    res.send("This cohort is so coooll")
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})