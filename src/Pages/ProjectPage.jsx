import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import Project4 from '../../app/components/Project/Project4';

const ProjectPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Project"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <Project4></Project4>          
        </div>
    );
};

export default ProjectPage;