import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reg" element={<Registerpage />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
