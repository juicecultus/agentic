import BreadCumb from '../components/Common/BreadCumb';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

export default function ProjectDetailsPage() {
    return (
        <div>
            <BreadCumb
                Title="Project Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <ProjectDetails />
        </div>
    );
}
