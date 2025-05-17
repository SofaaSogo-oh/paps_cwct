import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './components/Base/ErrorPage';
import Base from './components/Base/Base';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage />}/>
        <Route path='/' element={<WelcomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
