import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { TextField, PasswordField } from '../components/common_components/fields';
import { submitSignUp } from '../actions/users';
import { required, email, minLength6 } from '../utils/validation';

const SignUp = props => (
  <div className="authform">
    { props.error &&
      <div className="alert alert-danger mb-0" role="alert">
        <i className="icon icon-round-notice font-18 mr-15" />
        {props.error}
      </div>
    }
    <form
      className={classNames({'has-error': props.formHasError})}
      noValidate
      onSubmit={props.handleSubmit(submitSignUp)}
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
        validate={[required, minLength6]}
      />
      <Field
        label="Password confirmation"
        name="password_confirmation"
        component={PasswordField}
        validate={[required, minLength6]}
      />
      <Button className="btn btn-primary right" type="submit">Register</Button>
      <span>
        Already registered? <Link to="/login">Sign in</Link>
      </span>
    </form>
  </div>
);

const mapStateToProps = state => ({
  formHasError: state.form.signUp && (state.form.signUp.syncErrors || state.form.signUp.submitErrors)
});

const mapDispatchToProps = {
  submitSignUp
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signUp'
})(SignUp));
