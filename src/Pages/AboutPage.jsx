import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import About1 from '../../app/components/About/About1';
import WhoWeAre2 from '../../app/components/WhoWeAre/WhoWeAre2';
import Team1 from '../../app/components/Team/Team1';
import Testimonial4 from '../../app/components/Testimonial/Testimonial4';
import Brand4 from '../../app/components/Brand/Brand4';

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                Title="About Us"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>
            <About1></About1>
            <WhoWeAre2></WhoWeAre2>
            <Team1></Team1>
            <Testimonial4></Testimonial4>
            <Brand4></Brand4>
        </div>
    );
};

export default AboutPage;