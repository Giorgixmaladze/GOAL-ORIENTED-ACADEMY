import React from "react";

function ProfileCard({name,age,occupation}) {
    return(
        <div className="profile-card">
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{occupation}</p>
        </div>

    )
}

export default ProfileCard
