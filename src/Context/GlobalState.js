import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const MethodProvider = (props) => {

    const [region, setRegion] = useState("Masally")

    return <GlobalContext.Provider value={{ element: region, id: "50", links: ["Main", "About Us", "Contact", "Portfolio"], setRegion}}
    >{props.children}</GlobalContext.Provider>
}