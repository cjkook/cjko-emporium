import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

// sign in with Google
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./login.styles.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="login">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form className="input" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">
            ->
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
