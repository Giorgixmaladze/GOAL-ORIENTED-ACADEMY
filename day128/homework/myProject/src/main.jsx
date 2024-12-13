import React from 'react'
import ReactDOM from 'react-dom/client'
import RenderInfo from './render'
import ImageRender from './imageRender'


const div = document.getElementById("root")
const root = ReactDOM.createRoot(div)

root.render(
<div>
    <RenderInfo />
    <ImageRender />
  
</div>
)







