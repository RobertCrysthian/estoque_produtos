import './EditProduct.css'
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export default function EditProduct(){

    const parametros =useParams()
    const [data, setData] = useState([])

    const dados = () => {
        axios.get(`http://localhost:8080/produtos/${parametros.id}`)
          .then(resposta => { setData(resposta.data)})

          .catch(erro => { console.log(erro) })
      }

      useEffect(() => {
        dados()
      }, [parametros.id])

      if (!data) return null;

const submitar = (event) => {
    event.preventDefault()

     axios.put(`http://localhost:8080/produtos/${parametros.id}`, {
        nome:data.nome,
        preco:data.preco,
        qtdEstoque:data.qtdEstoque
     })
    alert("Dados alterados com sucesso")
    window.location="http://localhost:3000/?"
}

console.log(data)
    return(
            <Box className="editProduct" sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
                <Typography component="h1" variant="h6">Formulário de Produtos</Typography>
                    <Box className="box" component="form" sx={{ width: '80%' }} onSubmit={submitar}>
                    <label>Nome do produto</label>
                    <input
                        className='campoTexto'
                        value={data.nome}
                        onChange={(e) => setData({
                            nome: e.target.value,
                            preco: data.preco,
                            qtdEstoque: data.qtdEstoque
                            
                        })}
                        required>
                    </input>
                    <label>Preço do produto</label>
                    <input
                        className='campoTexto'
                        value={data.preco}
                        onChange={(e) => setData({
                            nome: data.nome,
                            preco: e.target.value,
                            qtdEstoque: data.qtdEstoque
                        })}
                        required>
                    </input>
                    <label>Quantidade em estoque</label>
                    <input
                        className='campoTexto'
                        value={data.qtdEstoque}
                        onChange={(e) => setData({
                            nome: data.nome,
                            preco: data.preco,
                            qtdEstoque: e.target.value   
                        })}
                        required>
                    </input>

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="contained">Salvar</Button>
                </Box>
            </Box>

    )
}