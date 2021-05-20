import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import FavouritesPage from "./components/FavouritesPage";
import JobDetail from "./components/JobDetail";
import SearchPage from "./components/SearchPage";
import Toast from "./components/Toast";
import store from "./store/index.js";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Toast />
        <Navbar bg="primary" variant="dark">
          <Nav className="mx-auto">
            <Link to="/favourites" className="text-white text-decoration-none">
              Favourites
            </Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/favourites" component={FavouritesPage} />
          <Route path="/:jobId" component={JobDetail} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
