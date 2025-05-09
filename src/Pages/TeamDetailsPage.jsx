import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import TeamDetails from '../../app/components/TeamDetails/TeamDetails';
import WhyChoose2 from '../../app/components/WhyChoose/WhyChoose2';

const TeamDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Team Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <TeamDetails></TeamDetails>  
            <WhyChoose2></WhyChoose2>        
        </div>
    );
};

export default TeamDetailsPage;