import React from 'react';
import './Assets/sass/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Header,
  Sidebar,
  Chat,
  Login
} from "./Components";
import { useSelector } from 'react-redux';
import { Fade } from 'react-awesome-reveal';

function App() {

  const user = useSelector(state => state.user);

  return (
    <div className="app">
      <Fade>
        <Router>
          {
            !user ? <Login />
              : (
                <>
                  <Header />
                  <div className="app__body">
                    <Sidebar />
                    <Switch>
                      <Route exact path="/" component={null} />
                      <Route path="/room/:roomId" component={Chat} />
                    </Switch>
                  </div>
                </>
              )
          }
        </Router>
      </Fade>
    </div>
  );
}

export default App;
