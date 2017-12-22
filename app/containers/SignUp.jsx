import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button } from 'react-bootstrap';
import { TextField, PasswordField } from '../components/common_components/fields';
import { submitSignUp } from '../actions/users';
import { required, email, minLength8 } from '../utils/validation';

const SignUp = (props) => {
  const submitSignUpData = (data) => {
    if (data.password !== data.password_confirmation) {
      throw new SubmissionError({
        password_confirmation: 'Passwords doesn\'t match'
      });
    }
    submitSignUp(data, props.dispatch);
  };

  return (
    <div className="authform">
      <form
        noValidate
        onSubmit={props.handleSubmit(submitSignUpData)}
      >
        <h3>Sign up</h3>
        <Field
          label="Email address"
          name="email"
          type="email"
          component={TextField}
          validate={[required, email]}
        />
        <Field
          label="Password"
          name="password"
          component={PasswordField}
          validate={[required, minLength8]}
        />
        <Field
          label="Password confirmation"
          name="password_confirmation"
          component={PasswordField}
          validate={[required, minLength8]}
        />
        <Button className="btn btn-primary right" type="submit">Register</Button>
        <span>
          Already registered? <Link to="/login">Sign in</Link>
        </span>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  submitSignUp
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'signUp'
})(SignUp));
