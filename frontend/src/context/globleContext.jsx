import { createContext, useState } from "react";
import api from "../service/api";

export const GlobleContext = createContext();

export const GlobleProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([]);
    const getQuiz = async () => {
        try {
            const response = await api.listAllQuiz();
            console.log("All Quiz :-", response.data );
            setQuizzes(response.data);
        } catch (error) {
            console.log(error);
        }
    }
  return <GlobleContext.Provider
  value={{getQuiz, quizzes}}

  >
    {  children }
  </GlobleContext.Provider>;
};

