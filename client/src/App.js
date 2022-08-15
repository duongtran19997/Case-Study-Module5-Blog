import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import {useContext} from "react";
import {Context} from "./context/Context";
function App() {
    const {user} = useContext(Context)
    console.log(user)
    return (
            <Router>
                <TopBar/>
                <Switch>
                    <Route exact path='/'> <Home/></Route>
                    <Route exact path='/login'> {user?<Home/>:<Login/>}</Route>
                    <Route exact path='/register'> {user?<Home/>:<Register/>}</Route>
                    <Route exact path='/settings'>{user?<Settings/>:<Login/>}</Route>
                    <Route exact path='/post/:postId'> <Single/></Route>
                    <Route exact path='/write'> {user?<Write/>:<Login/>}</Route>

                </Switch>
            </Router>
    );
}

export default App;
