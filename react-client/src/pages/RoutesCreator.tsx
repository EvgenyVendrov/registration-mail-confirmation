import * as React from "react";
import Box from "@material-ui/core/Box";
import { RoutesApi } from "../services/Routes.api";
import { MessageState, RouteState } from "../models/Routes.model";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Form from "../components/form/Form";

export default class CreateRouteContainer extends React.Component<
  any,
  MessageState
> {
  constructor(props: any) {
    super(props);
    this.state = { message: "" };
  }

  dataSubmitted(data: RouteState): void {
    this.setMessage('RESOLVING REQUEST - PLEASE WAIT ...');
    new RoutesApi()
      .createRoute(data)
      .then((response) => this.setMessage(response));
  }

  private setMessage(message: string): void {
    this.setState({ message });
  }

  render() {
    return (
      <React.Fragment>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Form
            dataSubmitted={(data: RouteState) => this.dataSubmitted(data)}
          ></Form>
          <Link to="/view-all-routes">
            <Button type="submit" variant="contained" color="secondary">
              VIEW ALL ROUTES
            </Button>
          </Link>
        </Box>
        <h1>{this.state.message}</h1>
      </React.Fragment>
    );
  }
}
