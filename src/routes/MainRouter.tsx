import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GoalInfo from "../pages/GoalInfo";


const MainRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/calculadora-metas/" element={<Home/>}/>
                <Route path="/calculadora-metas/info" element={<GoalInfo/>}/>
                <Route path="/calculadora-metas/resultados" element={<h1>Resultados</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;