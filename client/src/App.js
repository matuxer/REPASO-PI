import { HomePage } from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/form' element={<Form />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
