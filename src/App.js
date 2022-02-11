import React,{Suspense} from "react";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import { renderRoutesAdmin, renderRoutesHome,renderRoutesCheckOut } from "./routers";
import Loading from "components/Loading";
import Loader from "components/Loading/loader";

import AuthPage from "./containers/AdminTemplate/AuthPage";


function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter  >
      <Loading/>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        {renderRoutesCheckOut()}
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
    </Suspense>
  );
}

export default App;
