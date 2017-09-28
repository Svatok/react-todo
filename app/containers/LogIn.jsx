import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { TextField, PasswordField } from '../components/common_components/fields';
import { submitLogIn } from '../actions/users';
import { required, email } from '../utils/validation';

const LogIn = props => (
  <div className="authform">
    <form
      className={classNames({'has-error': props.formHasError})}
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
        <i class="fa fa-facebook view"></i>
        <span>Facebook in!</span>
      </Link>
    </form>
  </div>
);

const mapStateToProps = state => ({
  formHasError: state.form.logIn && (state.form.logIn.syncErrors || state.form.logIn.submitErrors)
});

const mapDispatchToProps = {
  submitLogIn
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'logIn'
})(LogIn));
