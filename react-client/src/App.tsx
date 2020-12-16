import * as React from "react";
import { Route, Switch } from "react-router-dom";
import CreateRoute from "./pages/RoutesCreator";
import MailConfirmationPage from "./pages/MailConfirmationPage";
import AllRoutesPage from "./pages/AllDataPage";

function App() {
  return (
    <main>
      <Switch>
        <Route
          path={"/confirm-mail/:token"}
          component={MailConfirmationPage}
          exact
        />
        <Route path={["/", "/create-route"]} component={CreateRoute} exact />
        <Route path={"/view-all-routes"} component={AllRoutesPage} exact />
      </Switch>
    </main>
  );
}

export default App;
