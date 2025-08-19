import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import IGoal from "../interfaces/IGoal";

type GoalContextType = {
  goal: IGoal | null;
  setGoal: (goal: IGoal) => void;
};

const GoalContext = createContext<GoalContextType | undefined>(undefined);

export const GoalProvider = ({ children }: { children: ReactNode }) => {
  const [goal, setGoalState] = useState<IGoal | null>(null);

  // Carrega do localStorage ao montar
  useEffect(() => {
    const storedGoal = localStorage.getItem("goal");
    if (storedGoal) {
      setGoalState(JSON.parse(storedGoal));
    }
  }, []);

  // Salva no localStorage sempre que mudar
  const setGoal = (goal: IGoal) => {
    setGoalState(goal);
    localStorage.setItem("goal", JSON.stringify(goal));
  };

  return (
    <GoalContext.Provider value={{ goal, setGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = () => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("useGoal must be used within a GoalProvider");
  }
  return context;
};