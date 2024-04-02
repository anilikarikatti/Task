import './App.css';
import Login from './components/Login/login';
import AppRoutes from './routes/appRoutes';
import AuthRoutes from './routes/authRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  let isLogin = localStorage.getItem("login");
  return (
    <div className="container App" >
      <BrowserRouter>
      {isLogin  ? <AppRoutes/> : <AuthRoutes/>}
     </BrowserRouter>
    </div>
  );
}

export default App;
