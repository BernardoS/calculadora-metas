import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GoalInfo from "../pages/GoalInfo";
import GoalPlan from "../pages/GoalPlan";


const MainRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/calculadora-metas/" element={<Home/>}/>
                <Route path="/calculadora-metas/info" element={<GoalInfo/>}/>
                <Route path="/calculadora-metas/resultados" element={<GoalPlan/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;