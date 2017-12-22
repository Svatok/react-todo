import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import { TextField, PasswordField } from '../components/common_components/fields';
import { submitLogIn } from '../actions/users';
import { required, email, minLength8 } from '../utils/validation';

const LogIn = props => (
  <div className="authform">
    <Form
      noValidate
      onSubmit={props.handleSubmit(submitLogIn)}
    >
      <h3>Log in</h3>
      <div className="form-group">
        <Field
          label="Email address"
          name="email"
          type="email"
          component={TextField}
          validate={[required, email]}
        />
      </div>
      <div className="form-group">
        <Field
          label="Password"
          name="password"
          component={PasswordField}
          validate={[required, minLength8]}
        />
      </div>
      <Button className="btn btn-primary right" type="submit">Log in</Button>
      <span>
        Don’t have an account?
        <br />
        <Link to="/signup">Sign up</Link>
      </span>
    </Form>
  </div>
);

const mapDispatchToProps = {
  submitLogIn
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'logIn',
  enableReinitialize: true
})(LogIn));
