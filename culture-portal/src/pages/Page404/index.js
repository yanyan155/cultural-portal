import React, { Component } from 'react';

import Page404Component from '../../components/Page404Component';

class Page404 extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Page404Component />
        );
    }
}

export default Page404;