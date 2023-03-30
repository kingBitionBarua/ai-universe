import React from 'react';

const Button = ({children}) => {
    // console.log(props);
    // const { children } = props; // option: ---2
    return (
        <div className='text-center'>
            <button className="btn btn-accent">{children}</button>
        </div>
    );
};

export default Button;