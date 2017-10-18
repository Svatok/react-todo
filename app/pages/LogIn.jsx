import React, { Component } from 'react';
import Page from '../pages/Page';
import SignUpContainer from '../containers/LogIn';

class LogIn extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Log In | ToDo App';
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

export default LogIn;
