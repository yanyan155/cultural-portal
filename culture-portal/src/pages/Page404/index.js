import React from 'react';
import logo from '../../assets/images/error.jpg';

const Page404 = () => (
    <div className="error-page">
        <img alt="404" src={logo} />
        <p>Something went wrong</p>
        <p>You can go back to <a href="/">main page</a></p>
    </div>

)

export default Page404;