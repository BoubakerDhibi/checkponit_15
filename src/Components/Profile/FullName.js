import React from 'react'

function FullName() {
    const researchgateProfile = "https://www.researchgate.net/profile/Boubaker-Dhibi" ;
    return (
        <div>
            <h1> BOUBAKER DHIBI</h1>
            <a href={researchgateProfile} target="_https://www.researchgate.net/profile/Boubaker-Dhibi"> <i style={{color:"blue"}}class="bi bi-researchgate"></i> </a>
        </div>
    )
}

export default FullName
