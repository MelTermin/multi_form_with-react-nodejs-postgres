const express= require ('express')
const cors= require ('cors')
const pool= require("./db")

const app=express()
app.use(cors())
app.use(express.json())


//routes//

//create a form//

app.post("/create-form", async(req,res) => {
  try {
    const {product_type,gender,smoker,postal_code,coverage,residency,email}= req.body
    console.log(req.body)
    const newForm= await pool.query("INSERT INTO Quotes (product_type,gender,smoker,postal_code,coverage,residency,email) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *", [product_type,gender,smoker,postal_code,coverage,residency,email])
    res.status(200).json(newForm.rows[0])
  } catch(err) {
    console.error(err.message)

  }
})

//get all todos

app.get("/create-form", async (req, res) => {
  try {
    const allFormIputs = await pool.query("SELECT * FROM Quotes");
    res.json(allFormIputs.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/create-form/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const form = await pool.query("SELECT * FROM Quotes WHERE id = $1", [
      id
    ]);

    res.json(form.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



app.listen(5005, () => console.log('Example app listening on port 5005!'));