import React from 'react';
import ReactDOM from 'react-dom';

import MainPageComponent from './components/MainPageComponent';
import SearchPageComponent from './components/SearchPageComponent';
import ArchitectPageComponent from './components/ArchitectPageComponent';

const AllComponentsDeleteLater = (props) => {
  
  return (
    <div className="container">
      <MainPageComponent />
      ---------------------------- page2
      <SearchPageComponent />
      ---------------------------- page3
      <ArchitectPageComponent />
    </div>
  )
}

ReactDOM.render(<AllComponentsDeleteLater />,
  document.querySelector('#root'));
