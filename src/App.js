import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import { UserProvider } from "./context.js";
import History from "./pages/history";
import Search from "./pages/search";


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/history" Component={History}/>
          <Route path="/search" Component={Search}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
