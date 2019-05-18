import React, { Component } from 'react';


const CoolButton = ({ isSmall, isDanger, className, isSuccess, children }) =>{

    const classNameString = `
    button
    ${className}
    ${isSmall ? 'is-small' : ''}
    ${isDanger ? 'is-danger' : ''}
    ${isSuccess ? 'is-success' : ''}
    `

    return (
    <button className={classNameString}>
        {children}
    </button>
    )
};

export default CoolButton