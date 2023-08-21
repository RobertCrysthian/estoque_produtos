import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import RegisterForm from '../RegisterForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function TableProduct({apiData, setApiData, dados}) {

    const [itens, setItens] = useState([])

    const addNewObj = (obj) => {
        setItens([...itens, obj])
    }

    const deleteItem = (id) => {
        axios.delete(`http://localhost:8080/produtos/${id}`)
        .then(() => {
             const newItens = apiData.filter(item => item.id !== id)
             setApiData([...newItens])

            // window.location.reload(true);
        })
    }

    useEffect(() => {
        dados()
      }, [])
    

    return (
        <>
            <RegisterForm objList={obj => addNewObj(obj)}/>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome Produto</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell>Qtd Estoque</TableCell>
                            <TableCell>Editar</TableCell>
                            <TableCell>Deletar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.map((e) => {
                            return(
                                <TableRow key={e.id}>
                                <TableCell>{e.id}</TableCell>
                                <TableCell>{e.nome}</TableCell>
                                <TableCell>{e.preco}</TableCell>
                                <TableCell>{e.qtdEstoque}</TableCell>
                                <TableCell>
                                    <Link to={`produtos/${e.id}`}>{'[Editar]'}</Link>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => deleteItem(e.id)}>Apagar</Button>
                                </TableCell>
                              </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}