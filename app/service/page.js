import BreadCumb from '../components/Common/BreadCumb';
import WhyChoose1 from '../components/WhyChoose/WhyChoose1';
import Services4 from '../components/Services/Services4';
import Brand4 from '../components/Brand/Brand4';
import Blog3 from '../components/Blog/Blog3';

export default function Service() {
    return (
        <div>
            <BreadCumb
                Title="Services"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <WhyChoose1 />
            <Services4 />
            <Brand4 />
            <Blog3 paddingTop="pm-blog pb-80" />
        </div>
    );
}
