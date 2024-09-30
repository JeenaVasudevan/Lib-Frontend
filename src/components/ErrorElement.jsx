import React from 'react';

function ErrorElement(props) {
    const {field,type}=props
    let message
    if(type==="required"){
        message=`${field} is required`
    }
    else if(type==='pattern' && field==='Password'){
        message=`${field} should have atleast one caps ,small, and number`
    }
    return (
        <span>{message}</span>
    );
}

export default ErrorElement;