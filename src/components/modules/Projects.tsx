import { FC } from "react";
import Image from 'next/image';


const AboutMe:FC = () => {
    const projects = [
        {
            id: 1,
            name: "Dungeon Looters",
            description: "An API game I am working on...",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "NFT Social Media",
            description: "A social media platform for NFTs...",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Blog",
            description: "A blog I am working on...",
            image: "https://via.placeholder.com/150"
        }
    ]

    return(
        <div className="m-auto bg-accent rounded-lg p-5 md:py-5 md:px-10 md:w-11/12">
            <div className="text-3xl">Projects</div>
            <p>A showcase of my best projects...</p>
            <div className="flex flex-col md:flex-row justift-center justify-between">
                {
                    projects.map((project) => {
                        return (
                            <div key={project.id} className="bg-background m-3 md:m-0 rounded-xl md:w-1/4 md:mt-7 md:hover:scale-110 transition duration-500">
                                <div className="p-5">
                                <div className="text-2xl">{project.name}</div>
                                <p>{project.description}</p>
                                <Image className="m-auto" src={project.image} width={200} height={200} alt={project.name} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutMe;