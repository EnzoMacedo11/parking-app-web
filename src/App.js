import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" Component={Home}/>
    <Route path="/login" Component={Login}/>
    <Route path="/register" Component={Register}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
