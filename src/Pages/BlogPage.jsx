import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import Blog4 from '../../app/components/Blog/Blog4';

const BlogPage = () => {
    return (
        <div>
              <BreadCumb
                Title="Blog Grid"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <Blog4></Blog4>          
        </div>
    );
};

export default BlogPage;