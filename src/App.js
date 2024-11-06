import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Header from './components/Navigation/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Users from './components/Users/User'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import _ from "lodash"

function MainLayout() {
  const [account, setAccount] = useState('')
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

  useEffect(() => {
    let session = sessionStorage.getItem('account')
    if (session) {
      setAccount(JSON.parse(session))
    }
  }, [])

  return (
    <div>
      {account && !_.isEmpty(account) && account.isAuthenticated && header}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
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