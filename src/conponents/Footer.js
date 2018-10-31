import React from 'react';

const Footer = (props) => {

    const {company, email} = props;

    return (
        <h5>Powered By {company} | Contract By Email : {email}</h5>
    )
}

export default Footer;