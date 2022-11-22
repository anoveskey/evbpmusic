import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useRoutes,
} from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => {
    let routes = useRoutes([
        { path: "/", element: <Greeting />},
        { path: "discography", element: <Greeting name="discography" />},
        { path: "shows", element: <Greeting name="shows" />},
        { path: "*", element: <Greeting name="404" />},
    ]);

    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
