import BreadCumb from '../../components/Common/BreadCumb';
import TeamDetails from '../../components/TeamDetails/TeamDetails';
import WhyChoose2 from '../../components/WhyChoose/WhyChoose2';

export default function TeamDetailsPage({ params }) {
    // If TeamDetails expects an id prop, pass it. Otherwise, remove as needed.
    return (
        <div>
            <BreadCumb
                Title="Team Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <TeamDetails id={params.id} />
            <WhyChoose2 />
        </div>
    );
}
