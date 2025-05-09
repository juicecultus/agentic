import React from 'react';
import BreadCumb from '../../app/components/Common/BreadCumb';
import Team3 from '../../app/components/Team/Team3';
import Cta2 from '../../app/components/Cta/Cta2';

const TeamPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Team"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <Team3></Team3>
            <Cta2></Cta2>         
        </div>
    );
};

export default TeamPage;