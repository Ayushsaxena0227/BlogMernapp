import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addblog from "./pages/Addblog";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<Addblog />} />
      </Routes>
    </>
  );
}

export default App;
