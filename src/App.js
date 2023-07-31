import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import CoworkingsPage from "./page/CoworkingsPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path="/coworkings/create" element={<CreateCoworkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
