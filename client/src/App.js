import { useEffect } from 'react';
import { HomePage } from "./components/HomePage.jsx";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form.jsx";
import { getEpisodes } from './redux/actions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes())
  }, [dispatch]);

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
