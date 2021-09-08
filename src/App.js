import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Login from './components/Login';
import {auth,db} from './components/firebase';
import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Images from './components/Images';
import Myimages from './components/Myimages';
import Home from './components/Home';
import Mission from './components/Mission';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
        {
          user?(<Router>
            <Navbar/>
            <Switch>
              <Route exact path="/">
                  <Images/>
              </Route>
              <Route exact path="/images">
                    <Images/>
              </Route>
              <Route exact path="/myimages"> 
                    <Myimages/>
              </Route>
              <Route exact path="/about"> 
                    <About/>
              </Route>
              <Route exact path="/contact"> 
                    <Contact/>
              </Route>
              <Route exact path="/mission"> 
                    <Mission/>
              </Route>
            </Switch>
            <Footer/>
          </Router>
            ):(<Login/>)
        }
    </div>
  );
}

export default App;
