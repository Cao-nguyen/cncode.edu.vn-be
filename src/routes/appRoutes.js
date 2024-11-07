import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import Users from '../components/Users/User'

const AppRoutes = (props) => {
    return (
        <Switch>
            <PrivateRoutes path="/users" component={Users} />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/*">
                <div>404 - Trang không tồn tại</div>
            </Route>
        </Switch>
    );
}

export default AppRoutes