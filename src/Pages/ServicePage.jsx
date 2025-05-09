import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import WhyChoose1 from '../../app/components/WhyChoose/WhyChoose1';
import Services4 from '../../app/components/Services/Services4';
import Brand4 from '../../app/components/Brand/Brand4';
import Blog3 from '../../app/components/Blog/Blog3';

const ServicePage = () => {
    return (
        <div>
            <BreadCumb
                Title="Services"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <WhyChoose1></WhyChoose1> 
            <Services4></Services4> 
            <Brand4></Brand4> 
            <Blog3
                paddingTop="agenko-blog pb-80"
            ></Blog3>       
        </div>
    );
};

export default ServicePage;