import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import Contact from '../../app/components/Contact/Contact';

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Contact"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <Contact></Contact>         
        </div>
    );
};

export default ContactPage;