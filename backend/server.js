import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())//profe en la documentacion no pide cors pero me estaba dando error y lo tive que agregar

app.get("/saludo/:nombre",(req,res)=>{
    const nombre=req.params.nombre;
    res.json(`Hola ${nombre}`)

})  

app.listen(PORT,()=>{
    console.log(`servidor andando en el puerto ${PORT}`)
})