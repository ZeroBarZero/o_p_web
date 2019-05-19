import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import AppBar from 'components/appBar.js'
import Footer from 'components/Footer.js'

const Root = () => (
    <BrowserRouter>
        <AppBar />
        <App/>
        <Footer />
    </BrowserRouter>
);

export default Root;