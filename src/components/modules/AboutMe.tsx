import { FC } from "react";

const AboutMe:FC = () => {
    return(
        <div>
            <div>
              <div>About Me</div>
              <p>
                talk some stuff about me here
              </p>

              <div className=''>
                <div>Projects</div>
                <ul>
                  <li>NFT Social Media</li>
                  <li>Blog</li> 
                  <li>Dungeon Looters</li>
                </ul>
              </div>

              <div>
                <div>Skills</div>
                <ul>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                </ul>
              </div>
            </div>

            <div>
              <div>Experience</div>
              <ul>
                <li>Experience 1</li>
                <li>Experience 2</li>
                <li>Experience 3</li>
              </ul>
            </div>
        </div>
    )
}

export default AboutMe;