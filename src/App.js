import "./App.css";
import PageNotFound from "./containers/HomeTemplate/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutesAdmin, renderRoutesHome } from "./routers";
import AuthPage from "./containers/AdminTemplate/AuthPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        {/* Trang Home - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang About - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* Trang List Movie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}

        {/* Auth Page */}
        <Route path="/auth" component={AuthPage} />

        {/* Trang không tìm thấy */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
