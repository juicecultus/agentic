import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import BlogSidebar from '../../app/components/BlogSidebar/BlogSidebar';

const BlogSidebarPage = () => {
    return (
        <div>
               <BreadCumb
                Title="Blog Standard"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <BlogSidebar></BlogSidebar>          
        </div>
    );
};

export default BlogSidebarPage;