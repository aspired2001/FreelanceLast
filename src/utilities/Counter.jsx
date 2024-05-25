// Counter.js
import React from "react";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ n }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (typeof n !== 'number' || n <= 0) {
            console.error('Invalid prop: "n" must be a positive number.');
            return;
        }

        const interval = setInterval(() => {
            if (count < n) {
                setCount((prevCount) => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 60);

        return () => clearInterval(interval);
    }, [count, n]);

    return <div
        className="max-sm:text-2xl text-3xl"
    >{count}</div>;
};

Counter.propTypes = {
    n: PropTypes.number.isRequired,
};

export default Counter;
