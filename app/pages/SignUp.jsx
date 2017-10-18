import React, { Component } from 'react';
import Page from '../pages/Page';
import SignUpContainer from '../containers/SignUp';

class SignUp extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Sign Up | ToDo App';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'ToDo App' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <SignUpContainer {...this.props} />
      </Page>
    );
  }
}

export default SignUp;
