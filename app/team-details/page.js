import BreadCumb from '../components/Common/BreadCumb';
import TeamDetails from '../components/TeamDetails/TeamDetails';
import WhyChoose2 from '../components/WhyChoose/WhyChoose2';

export default function TeamDetailsPage() {
    return (
        <div>
            <BreadCumb
                Title="Team Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <TeamDetails />
            <WhyChoose2 />
        </div>
    );
}
