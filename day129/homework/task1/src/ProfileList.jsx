import React from "react";
import ProfileCard from "./ProfieCard";
/**
 * 
 * ProfileList Component:
Accepts the list of profiles as a prop from the App component.
Maps through the list to render individual ProfileCard components for each user. 
 */

function ProfileList({profiles}) {
    
    return(
        <div  className="Profile-list">
            {profiles.map((profile) =>(
                <ProfileCard key = {profile.key} name = {profile.name} age = {profile.age} occupation={profile.occupation}/>
            ))}
        </div>
    )
}


export default ProfileList;