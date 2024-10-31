import './App.scss';
import Nav from './components/Navigation/Nav';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="gioithieu">
            Giới thiệu
          </Route>
          <Route path="khoahoc">
            Khoá học
          </Route>
          <Route path="tintuc">
            Tin tức
          </Route>
          <Route path="/" exact>
            Trang chủ
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            404 - Không tìm thấy trang
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;