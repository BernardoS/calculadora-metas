import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GoalInfo from "../pages/GoalInfo";
import GoalPlan from "../pages/GoalPlan";
import { GoalProvider } from "../contexts/GoalContext";


const MainRouter = () => {
    return (
        <BrowserRouter>
            <GoalProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<GoalInfo />} />
                    <Route path="/resultados" element={<GoalPlan />} />
                </Routes>
            </GoalProvider>

        </BrowserRouter>
    )
}

export default MainRouter;