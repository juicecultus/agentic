import BreadCumb from '../components/Common/BreadCumb';
import BlogDetails from '../components/BlogDetails/BlogDetails';

export default function BlogDetails() {
    return (
        <div>
            <BreadCumb
                Title="Blog Details"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <BlogDetails />
        </div>
    );
}
