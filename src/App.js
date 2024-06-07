import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Main/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/at-home" element={<Main />} />
        <Route path="/bath" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
