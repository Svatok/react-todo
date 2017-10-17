import React, { Component } from 'react';
import Page from '../pages/Page';
import DashboardContainer from '../containers/Dashboard';

class Dashboard extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Dashboard | ToDo';
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
        <DashboardContainer {...this.props} />
      </Page>
    );
  }
}

export default Dashboard;
