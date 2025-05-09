import BreadCumb from '../components/Common/BreadCumb';
import BlogSidebar from '../components/BlogSidebar/BlogSidebar';

export default function BlogSidebarPage() {
    return (
        <div>
            <BreadCumb
                Title="Blog Standard"
                content="Parent Media empowers businesses with innovative strategies & creative agency solutions"
            />
            <BlogSidebar />
        </div>
    );
}
