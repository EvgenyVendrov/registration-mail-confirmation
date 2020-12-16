import * as React from "react";
import { RoutesApi } from "../services/Routes.api";
import { RouteState } from "../models/Routes.model";
import { Button } from "@material-ui/core";
import { RoutesSavedLocaly } from '../models/Routes.model';

type State = { routes: RouteState[] };

export default class AllRoutesPage extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      routes: [],
    };
    this.getRoutes();
  }

  getRoutes(): void {
    new RoutesApi().getRoutes().then((routes) => {
      this.setState({
        routes,
      });
    });
  }

  refreshRoutes(): void{
    this.setState({
      routes:[]
    });
    new RoutesApi().updateLocalStorge()
      .then(() => {
        const savedObj: RoutesSavedLocaly = new RoutesApi().getRoutesFromLS();
        this.setState({
         routes: savedObj.routes,
        });
      })
    
  }

  render() {
    return (
      <React.Fragment>
        <h1>ALL ROUTES:</h1>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => this.refreshRoutes()}
        >
          REFRESH DATA
        </Button>
        {this.state.routes.length === 0 ? (
          <h1>NO DATA AVAILABLE RIGHT NOW</h1>
        ) : (
          <ul>
            {this.state.routes.map((item, index) => (
              <li key={`item-${index++}`}>
                <h4>{`EMAIL: ${item.email}`}</h4>
                <h4>{`URL: ${item.url}`}</h4>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  }
}
