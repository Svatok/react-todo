import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { InputField, PasswordField } from '../components/common_components/fields';
import { submitSignUp } from '../actions/users';
import { required, email, minLength6 } from '../utils/validation';

const SignUp = props => (
  <div>
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">Sign Up</h1>
      </div>
    </div>
    <div className="page-body__content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            { props.error && props.error.map(err =>
              <div key={err.title} className="alert alert-danger mb-0" role="alert">
                <i className="icon icon-round-notice font-18 mr-15" />
                {err.title}
              </div>
            )}
            <form
              className={classNames({'has-error': props.error})}
              noValidate
              onSubmit={props.handleSubmit(submitSignUp)}
            >
              <div className="mb-60">
                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  component={InputField}
                  validate={[required, email]}
                />
                <Field
                  label="Password *"
                  name="password"
                  component={PasswordField}
                  validate={[required, minLength6]}
                />
                <Field
                  label="Repeat Password *"
                  name="password_confirmation"
                  component={PasswordField}
                  validate={[required, minLength6]}
                />
              </div>
              <div className="mb-40">
                <Button bsStyle="info" type="submit">Sign Up</Button>
              </div>
              <p className="in-black">
                Already have an account?
                <Link to="/login">Log in!</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = {
  // submitSignUpAsCandidate,
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'signUp'
})(SignUp));
