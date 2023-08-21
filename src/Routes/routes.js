import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

import EditProduct from "../Componentes/EditProduct";


export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path="produtos/:id" element={<EditProduct />}/>
            </Routes>
        </BrowserRouter>
    )
}