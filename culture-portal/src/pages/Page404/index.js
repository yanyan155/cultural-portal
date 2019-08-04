import React, { Component } from 'react';

import SearchPage from '../../components/Page404Component';

class Page404 extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <SearchPage />;
  }
}

export default Page404;
