import { createContext } from "react";
import Child from "../components/child";

export const FirstContext = createContext()
export const SecondContext = createContext()


const Render = () => {
    return (
        <FirstContext.Provider value={"Giorgi"}>
            <SecondContext.Provider value={"Khmaladze"}>
                <Child />
            </SecondContext.Provider>
        </FirstContext.Provider>
    )
}

export default Render
