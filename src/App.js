import "./App.css";
import { useContext } from "react";
import { KvizContext } from "./context";
import WelcomePage from "./WelcomePage";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import ResultsCard from "./ResultsCard";
import QuestionCard from "./QuestionCard";
import KvizContextProvider from './context';
import Tester from "./Tester";

function App() {
  // const {
  //   pitanja,
  //   odgovorinapitanja,
  //   func,
  //   changeColor,
  //   svidetalji,
  //   pt2,
  //   result,
  //   kvizLista,
  //   recievedData, isCorrect, data, istrue, setistrue
  // } = useContext(KvizContext);

  return (
    <Router>
      <KvizContextProvider>
        <Tester />
        <Routes>
        <Route path="/simple-quiz" element= { <WelcomePage />} />
        <Route path="/questions" element= { <QuestionCard />} />
        <Route path="/results" element= { <ResultsCard />} />
      </Routes>
      </KvizContextProvider>
    </Router>
    
  );
}

export default App;
