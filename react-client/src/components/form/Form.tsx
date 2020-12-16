import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { RouteState } from "../../models/Routes.model";
import "./form.css";

type Props = { dataSubmitted: Function };

export default class Form extends React.Component<Props, RouteState> {
  constructor(props: Props) {
    super(props);
    this.state = { email: "", url: "" };
  }

  handleChange(event: React.ChangeEvent): void {
    const { value, id } = event.target as HTMLTextAreaElement;
    this.setState({
      ...this.state,
      [id]: value,
    });
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    this.props.dataSubmitted(this.state);
  }

  render() {
    return (
      <form className='base-form' onSubmit={(e) => this.handleSubmit(e)}>
        <h3>PLEASE SUBMIT YOUR EMAIL+URL REQUEST</h3>
        <TextField
          id="email"
          type="email"
          label="E-MAIL"
          variant="outlined"
          onChange={(e) => this.handleChange(e)}
        />
        <TextField
          id="url"
          type="url"
          label="OS URL"
          variant="outlined"
          onChange={(e) => this.handleChange(e)}
        />
        <Button type="submit" variant="contained" color="primary">
          SUBMIT
        </Button>
      </form>
    );
  }
}
