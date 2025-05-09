import BreadCumb from '../../components/Common/BreadCumb';
import BlogDetails from '../../components/BlogDetails/BlogDetails';

export default async function BlogDetailsPage(props) {
    const params = await props.params;
    // If BlogDetails expects an id prop, pass it. Otherwise, remove as needed.
    return (
        <div>
            <BreadCumb
                Title="Blog Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <BlogDetails id={params.id} />
        </div>
    );
}
