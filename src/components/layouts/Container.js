import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ContainerHome from './Container/ContainerHome';
const Container = () => {
    const location = useLocation();
    useEffect(() => {
        console.log("Location: " + location);
        console.log("Location array:",location.pathname.split("/"));
    },[]);
    return(
        <>
            {(() => {
                if(location.pathname.split("/")[1] === ""){
                    return(
                        <ContainerHome />
                    )
                }
            })()}
        </>
    );
}
export default Container;