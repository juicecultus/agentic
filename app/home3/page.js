'use client';
import HeroBanner3 from '../components/HeroBanner/HeroBanner3';
import Brand3 from '../components/Brand/Brand3';
import About1 from '../components/About/About1';
import Counter1 from '../components/Counter/Counter1';
import Services3 from '../components/Services/Services3';
import Project3 from '../components/Project/Project3';
import WhoWeAre2 from '../components/WhoWeAre/WhoWeAre2';
import Testimonial3 from '../components/Testimonial/Testimonial3';
import Cta1 from '../components/Cta/Cta1';
import Blog3 from '../components/Blog/Blog3';

export default function Home3Page() {
    return (
        <div>
            <HeroBanner3 />
            <Brand3 />
            <About1 />
            <Counter1 />
            <Services3 />
            <Project3 />
            <WhoWeAre2 />
            <Testimonial3 />
            <Cta1 />
            <Blog3 paddingTop="pm-blog pt-130 pb-80" />
        </div>
    );
}
