import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Header from './components/Navigation/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

function MainLayout() {
  const location = useLocation();
  const noHeaderRoutes = ['/register'];
  const customHeaderRoutes = [''];

  let header;
  if (noHeaderRoutes.includes(location.pathname)) {
    header = null;
  } else if (customHeaderRoutes.includes(location.pathname)) {
    header = <Header />;
  } else {
    header = <Nav />;
  }

  return (
    <div>
      {header}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/*">
          <div>404 - Trang không tồn tại</div>
        </Route>
      </Switch>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;