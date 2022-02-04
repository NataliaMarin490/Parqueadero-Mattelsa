import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import VisitorPage from "./components/visitorPage/VisitorPage";
import AdminPage from "./components/adminPage/AdminPage";
import EmployeePage from "./components/employeePage/EmployeePage";
import LoginAdmin from "./components/loginAdmin/LoginAdmin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/visitor" element={<VisitorPage />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
