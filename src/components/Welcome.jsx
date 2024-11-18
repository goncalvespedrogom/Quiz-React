import { useContext } from "react";
import { QuizContext } from "../context/quiz"; 

import Quiz from "../img/quiz.svg";

import "./Welcome.css"

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState)

  return (
    <div id="welcome">
      <h2>Seja bem-vindo!</h2>
      <img src={Quiz} alt="Início do Quiz" />
      <p>Clique no botão abaixo para começar</p>
      <button>Iniciar</button>
    </div>
  );
};

export default Welcome;