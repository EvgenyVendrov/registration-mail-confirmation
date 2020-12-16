import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { MessageState } from "../models/Routes.model";
import { EmailApi } from "../services/Email.api";

interface RouteParams {
  token: string;
}

class CreateRouteContainer extends React.Component<
  RouteComponentProps<RouteParams>,
  MessageState
> {
  constructor(props: RouteComponentProps<RouteParams>) {
    super(props);
    this.state = { message: "loading - please wait..." };
    this.isTokenValid();
  }

  private isTokenValid(): void {
    const token = this.props.match.params.token;
    new EmailApi()
      .confirmEmail(token)
      .then((response) => this.setMessage(response));
  }

  private setMessage(message: string): void {
    this.setState({ message });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.message}</h1>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateRouteContainer);
