import { memo } from "react"
const ChildComponent = memo(({text})=>{
    return <p>{text}</p>
})

export default ChildComponent;