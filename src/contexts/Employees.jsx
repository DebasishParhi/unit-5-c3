import { createContext,useState } from "react";
export const Employees = createContext()
export const EmployeesProvider = ({children})=>{
    const [isAuth,setAuth] =useState(false)
    const handlechange =(state)=>{
        setAuth(state)
    }
    return <Employees.Provider value={{isAuth,handlechange}}>{children}</Employees.Provider>
}