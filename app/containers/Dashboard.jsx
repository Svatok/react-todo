import React from 'react';
import ProjectItem from '../components/ProjectItem';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Dashboard = () => (
  <div className='main-container'>
    <div className='row'>
      <div className='col-xs-8 col-xs-offset-2'>
        <div className='projects'>
          <ProjectItem/>
        </div>
      </div>
    </div>
    <div className='row'></div>
    <div className='row'>
      <div className="col-xs-12 div_add_button_project">
        <a className="btn btn-primary add-project">
          <span className="icon-plus">Add TODO List</span>
        </a>
      </div>
    </div>
  </div>
);

export default Dashboard;
