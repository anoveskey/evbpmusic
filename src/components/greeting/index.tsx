import React from 'react';

interface GreetingProp {
    name?: string;
}

const Greeting = ({ name }: GreetingProp) => (
    <p>
        {name ? `${name}, ` : null} Here is a greeting paragraph that I made just for fun.
    </p>
);

export default Greeting;
