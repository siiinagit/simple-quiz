import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const KvizContext = createContext();

const KvizContextProvider = ({ children }) => {
  const [data, setupData] = useState([]);
  const [amount, setupAmount] = useState(10);
  const [category, setupCategory] = useState("0");
  const [dificulty, setupDificulty] = useState("medium");
  const [counter, setupCounter] = useState(0);
  const [result, setupResult] = useState(0);
  const [showresult, setupShowResult] = useState(false);
  const [buttonColor, setupButtonColor] = useState(false);

  let nav = useNavigate();

  const setupQuiz = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${dificulty}&type=multiple`
      );
      const data = await response.json();
      setupData(data.results);
    } catch (err) {
      alert(err);
    }
    nav("/questions");
  };
  console.log(data);

  const checkifTrue = (crc) => {
    setupButtonColor(true);
    if (crc === "crct") {
      setupResult((prev) => prev + 1);
    }
  };

  const values = {
    data,
    amount,
    category,
    dificulty,
    counter,
    result,
    showresult,
    buttonColor,
    setupButtonColor,
    setupAmount,
    setupCategory,
    setupCounter,
    setupData,
    setupDificulty,
    setupResult,
    setupShowResult,
    setupQuiz,
    checkifTrue,
  };

  return <KvizContext.Provider value={values}>{children}</KvizContext.Provider>;
};

export default KvizContextProvider;
