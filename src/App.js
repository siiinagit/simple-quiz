import "./App.css";
import WelcomePage from "./WelcomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultsCard from "./ResultsCard";
import QuestionCard from "./QuestionCard";
import KvizContextProvider from "./context";

function App() {
  return (
    <Router>
      <KvizContextProvider>
        <Routes>
          <Route path="/simple-quiz" element={<WelcomePage />} />
          <Route path="/questions" element={<QuestionCard />} />
          <Route path="/results" element={<ResultsCard />} />
        </Routes>
      </KvizContextProvider>
    </Router>
  );
}

export default App;
