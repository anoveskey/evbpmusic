import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => (
    <Routes>
        <Route path="/" component={Greeting} />
        <Route path="/discography" component={<Greeting name="discography" />} />
        <Route path="/shows" component={<Greeting name="shows" />} />
        <Route component={<Greeting name="404" />} />
    </Routes>
);

export default App;
