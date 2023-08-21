import { useState } from 'react'
import './RegisterForm.css'
import axios from 'axios'


export default function RegisterForm() {


    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [qtdStock, setQtdStock] = useState('')


    const submit = () => {
        axios.post("http://localhost:8080/produtos", {
            nome: name,
            preco: price,
            qtdEstoque: qtdStock
        })
    }

    return (
        <>
            <section className="main_section">
                <div className="div_form">
                    <form type="submit" onSubmit={submit}>

                        <label>Nome do produto:</label>
                        <input placeholder='nome do produto que será adicionado' value={name} onChange={e => setName(e.target.value)} />

                        <label>Preço</label>
                        <input placeholder='preço do produto que será adicionado' value={price} onChange={e => setPrice(e.target.value)} />

                        <label>Qtd Estoque</label>
                        <input placeholder='Quantidade de produtos no estoque' value={qtdStock} onChange={e => setQtdStock(e.target.value)} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}