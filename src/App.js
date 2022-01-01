import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Header from "./Component/Header";
import MainLayout from "./Page/MainLayout";
import New from "../src/Page/New/New";
import Past from "./Page/Past/Past";
import Ask from "./Page/Ask/Ask";
import Show from "./Page/Show/Show";
import Jobs from "./Page/Jobs/Jobs";
import Comments from "./Page/Comment/Comment";
import Login from "./Page/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/"}
          exact
          render={(props) => (
            <MainLayout>
              <New {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/new"}
          exact
          render={(props) => (
            <MainLayout>
              <New {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/past"}
          render={(props) => (
            <MainLayout>
              <Past {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/ask"}
          render={(props) => (
            <MainLayout>
              <Ask {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/show"}
          render={(props) => (
            <MainLayout>
              <Show {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/jobs"}
          render={(props) => (
            <MainLayout>
              <Jobs {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/comment"}
          render={(props) => (
            <MainLayout>
              <Comments {...props} />
            </MainLayout>
          )}
        />
        <Route
          path={"/login"}
          render={(props) => (
              <Login {...props} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
