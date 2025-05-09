'use client';
import React from 'react';
import HeroBanner3 from '../../app/components/HeroBanner/HeroBanner3';
import Brand3 from '../../app/components/Brand/Brand3';
import About1 from '../../app/components/About/About1';
import Counter1 from '../../app/components/Counter/Counter1';
import Services3 from '../../app/components/Services/Services3';
import Project3 from '../../app/components/Project/Project3';
import WhoWeAre2 from '../../app/components/WhoWeAre/WhoWeAre2';
import Testimonial3 from '../../app/components/Testimonial/Testimonial3';
import Cta1 from '../../app/components/Cta/Cta1';
import Blog3 from '../../app/components/Blog/Blog3';

const Home3 = () => {
    return (
        <div>
            <HeroBanner3></HeroBanner3>
            <Brand3></Brand3>
            <About1></About1>
            <Counter1></Counter1>
            <Services3></Services3>
            <Project3></Project3>
            <WhoWeAre2></WhoWeAre2>
            <Testimonial3></Testimonial3>
            <Cta1></Cta1>
            <Blog3
                paddingTop="agenko-blog pt-130 pb-80"
            ></Blog3>
        </div>
    );
};

export default Home3;