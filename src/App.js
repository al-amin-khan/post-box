import { Container } from "@material-ui/core";
import Main from "./Main/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from "./NoMatch/NoMatch";
import Detail from "./Detail/Detail";

function App() {
  return (
    <div>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Main></Main>
            </Route>
            <Route path='/home'>
              <Main></Main>
            </Route>
            <Route path='/detail/:postId'>
              <Detail></Detail>
            </Route>
            <Route path='*'>
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
