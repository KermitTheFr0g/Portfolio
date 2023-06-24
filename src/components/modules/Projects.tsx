import { FC } from "react";
import Image from 'next/image';
import ProjectCard from "../ProjectCard";

const AboutMe:FC = () => {
    const projects = [
        {
            id: 1,
            name: "Dungeon Looters",
            description: "An API game I am working on...",
            image: "https://via.placeholder.com/150",
            link: "https://dungeonlooters.io"
        },
        {
            id: 2,
            name: "Black Swan NFT",
            description: "A live NFT project I released",
            image: "https://via.placeholder.com/150",
            link: "https://blackswan.xyz"
        },
        {
            id: 3,
            name: "NFT Social Media",
            description: "A social media platform for NFTs...",
            image: "https://via.placeholder.com/150",
            link: "https://nft.social"
        },
        {
            id: 4,
            name: "Blog",
            description: "A blog I am working on...",
            image: "https://via.placeholder.com/150",
            link: "https://blog.techbits.io"
        }
    ]

    return(
        <div className="m-auto bg-accent rounded-lg p-5 md:py-5 md:px-10 md:w-11/12">
            <div className="text-3xl">Projects</div>
            <p>A showcase of my best projects...</p>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
                {
                    projects.map((project) => {
                        return (
                            <ProjectCard 
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutMe;