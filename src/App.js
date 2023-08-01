import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import CoworkingsPage from "./page/CoworkingsPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/UpdateCoworkingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path="/coworkings/create" element={<CreateCoworkingPage />} />
        <Route path="/coworkings/:id/update" element={<UpdateCoworkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
