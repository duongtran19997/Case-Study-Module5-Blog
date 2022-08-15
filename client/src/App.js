import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Post from "./components/post/Post";
function App() {
    return (
            <Router>
                <TopBar/>
                <Switch>
                    <Route exact path='/'> <Home/></Route>
                    <Route exact path='/login'> <Login/></Route>
                    <Route exact path='/register'> <Register/></Route>
                    <Route exact path='/settings'> <Settings/></Route>
                    <Route exact path='/post/:postId'> <Post/></Route>
                    <Route exact path='/write'> <Write/></Route>

                </Switch>
            </Router>
    );
}

export default App;
