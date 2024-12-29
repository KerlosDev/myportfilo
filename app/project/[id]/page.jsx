import Hero from "@/app/components/Hero";
import Nav from "@/app/components/Nav";
import ProjectCont from "@/app/components/ProjectCont";
import React from "react";


const page = ({ params }) => {


    const { id } = React.use(params);



    return (
        <>
            <Nav></Nav>
            
            <ProjectCont id={id}></ProjectCont></>


    )
}

export default page