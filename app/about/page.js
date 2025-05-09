import BreadCumb from '../components/Common/BreadCumb';
import About1 from '../components/About/About1';
import WhoWeAre2 from '../components/WhoWeAre/WhoWeAre2';
import Team1 from '../components/Team/Team1';
import Testimonial4 from '../components/Testimonial/Testimonial4';
import Brand4 from '../components/Brand/Brand4';

export default function About() {
    return (
        <div>
            <BreadCumb
                Title="About Us"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <About1 />
            <WhoWeAre2 />
            <Team1 />
            <Testimonial4 />
            <Brand4 />
        </div>
    );
}
