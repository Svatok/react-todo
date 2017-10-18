import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import { TextField, PasswordField } from '../components/common_components/fields';
import { submitLogIn } from '../actions/users';
import { required, email } from '../utils/validation';

const LogIn = props => (
  <div className="authform">
    <Form
      noValidate
      onSubmit={props.handleSubmit(submitLogIn)}
    >
      <h3>Log in</h3>
      <div className="form-group">
        <Link className="right" to="/signup">Sign up</Link>
        <Field
          label="Email address"
          name="email"
          type="email"
          component={TextField}
          validate={[required, email]}
        />
      </div>
      <div className="form-group">
        <Link className="right" to="/">Forgot password?</Link>
        <Field
          label="Password"
          name="password"
          component={PasswordField}
          validate={[required]}
        />
      </div>
      <Button className="btn btn-primary right" type="submit">Log in</Button>
      <Link className="btn" to="/">
        <i className="fa fa-facebook view" />
        <span>Facebook in!</span>
      </Link>
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
