import React from "react";

const images = ["../giorgaa.jpg","../giorgaa-2.jpg"]
function ImageRender(){
    const imageMap = images.map(image => <img src={image} width="400"/>)
    return(
        <>
            {imageMap}
            <br />
        </>
    )
}

export default ImageRender;


