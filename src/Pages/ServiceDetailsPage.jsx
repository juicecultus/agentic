import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import ServiceDetails from '../../app/components/ServiceDetails/ServiceDetails';
import Process3 from '../../app/components/Process/Process3';
import Pricing1 from '../../app/components/Pricing/Pricing1';
import Brand4 from '../../app/components/Brand/Brand4';

const ServiceDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Services Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <ServiceDetails></ServiceDetails> 
            <Process3></Process3> 
            <Pricing1></Pricing1>
              <Brand4></Brand4>     
        </div>
    );
};

export default ServiceDetailsPage;