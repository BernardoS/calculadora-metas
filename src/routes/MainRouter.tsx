import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


const MainRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/calculadora-metas/" element={<Home/>}/>
                <Route path="/calculadora-metas/info" element={<h1>Informações</h1>}/>
                <Route path="/calculadora-metas/resultados" element={<h1>Resultados</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;