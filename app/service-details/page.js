import BreadCumb from '../components/Common/BreadCumb';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Process3 from '../components/Process/Process3';
import Pricing1 from '../components/Pricing/Pricing1';
import Brand4 from '../components/Brand/Brand4';

export default function ServiceDetailsPage() {
    return (
        <div>
            <BreadCumb
                Title="Services Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <ServiceDetails />
            <Process3 />
            <Pricing1 />
            <Brand4 />
        </div>
    );
}
