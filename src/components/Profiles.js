import React from 'react';
import ProfileCard from './ProfileCard';

const Profiles = ({users}) => {
    return (       
        users.map((user)=>{
        return <ProfileCard key={user.id} user={user}/>
        })        
    )
};

export default Profiles;