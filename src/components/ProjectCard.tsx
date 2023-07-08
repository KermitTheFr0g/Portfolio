import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface Project {
    id: number,
    name: string,
    description: string,
    image: string,
    link: string
}

const ProjectCard:FC<Project> = (props) => {
    return (
        <motion.div 
            className="bg-background m-3 sm:m-3 md:m-5 rounded-xl md:w-1/4 md:mt-7"
            transition={{ delay: 0.01 * props.id, duration: 0.3 }}
            initial={{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y:20 }}   
            whileHover={{ scale: 1.1}}
        >
            <div className="p-5">
            <div className="text-2xl">{props.name}</div>
            <p>{props.description}</p>
            <Image className="shadow-xl m-auto p-3" src={props.image} width={250} height={250} alt={props.name} />
            </div>
        </motion.div>
    )
}

export default ProjectCard