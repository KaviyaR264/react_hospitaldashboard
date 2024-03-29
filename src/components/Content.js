import React from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Charts from './Charts';

const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <div style={{ marginBottom: '20px' }} /> 
      <Main />
      <div style={{ marginBottom: '20px' }} /> 
      <Charts />
    </div>
  );
};

export default Content;
