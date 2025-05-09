import BreadCumb from '../../components/Common/BreadCumb';
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';

export default async function ProjectDetailsPage(props) {
    const params = await props.params;
    // If ProjectDetails expects an id prop, pass it. Otherwise, remove as needed.
    return (
        <div>
            <BreadCumb
                Title="Project Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <ProjectDetails id={params.id} />
        </div>
    );
}
