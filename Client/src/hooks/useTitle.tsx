import { useEffect } from "react"

export const useTitle = (title:String) =>{
    useEffect(()=>{
        document.title = `${title} - Student Management System`; 
    }, [title])
}