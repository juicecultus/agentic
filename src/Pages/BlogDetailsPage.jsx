import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import BlogDetails from '../../app/components/BlogDetails/BlogDetails';

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Blog Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <BlogDetails></BlogDetails>            
        </div>
    );
};

export default BlogDetailsPage;