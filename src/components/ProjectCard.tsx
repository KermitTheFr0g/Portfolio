import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    name: string,
    description: string,
    image: string,
    link: string
}

const ProjectCard:FC<Project> = (props) => {
    return (
        <Link href={props.link} className="bg-background m-3 sm:m-3 md:m-5 rounded-xl md:w-1/4 md:mt-7 md:hover:scale-110 transition duration-500">
            <div className="p-5">
            <div className="text-2xl">{props.name}</div>
            <p>{props.description}</p>
            <Image className="m-auto p-3" src={props.image} width={200} height={200} alt={props.name} />
            </div>
        </Link>
    )
}

export default ProjectCard