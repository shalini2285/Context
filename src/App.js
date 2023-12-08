
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Report from './Component/Report';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/Report' element={<Report />} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
