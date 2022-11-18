import React from 'react';
import './index.css';

interface GreetingProp {
    name?: string;
}

const Greeting = ({ name }: GreetingProp) => (
    <p className="my-greeting">
        {name ? `${name}, ` : null} Here is a greeting paragraph that I made just for fun.
    </p>
);

export default Greeting;
