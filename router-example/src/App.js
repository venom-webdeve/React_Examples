import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import About from "./components/about/About";
import Admin from "./components/admin/Admin";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/notfound/NotFound";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/protectedRoute/PrivateRoute";

function App() {
  return (
    <>
     <Router>
     <NavBar/>
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/profile' component={Profile}/>
         <Route path='/about' component={About}/>
         <Route path='/contact' component={Contact}/>
         <Route path='/blog' component={Blog}/>
         <PrivateRoute path='/admin' component={Admin}/>
         <Route path='*' component={NotFound}/>
       </Switch>
     </Router>
    </>
  );
}

export default App;
