import React from 'react';
import { useLocation } from 'react-router-dom';

const Css = () => {
    let location = useLocation();

    console.log(location.pathname.substring(1));

    return (
        <div>
            CSS
        </div>
    );
};

export default Css;