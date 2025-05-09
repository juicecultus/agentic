import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import ProjectDetails from '../../app/components/ProjectDetails/ProjectDetails';

const ProjectDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Project Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <ProjectDetails></ProjectDetails>         
        </div>
    );
};

export default ProjectDetailsPage;