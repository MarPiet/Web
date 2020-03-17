import React from "react"
import Button from "react-bootstrap/Button"
import picture1 from "../img/LaserGrid.png"
import picture2 from "../img/Relaatio.png"
import picture3 from "../img/KeyFinder.png" 
import Image from "react-bootstrap/Image"
import { FaGithub } from 'react-icons/fa';
const picJumbos = document.getElementsByClassName("picJumbo")



class Presentation extends React.Component{

    

    render(){
        return(
            
        <div className="picsContainer">
            <div className="picContainer1" >            
                    <div className="picJumbo">

                        <p>Laser Grid</p>
                        <Button href="https://marpiet.github.io/LaserGridWeb/" target="_blank">Website</Button>
                        <br></br>              
                        <Button variant="dark" href="https://github.com/MarPiet/LaserGridWeb/tree/master" target="_blank">View Code</Button>
                        <br></br>
                        <FaGithub />     

                    </div>
                <Image src={picture1}></Image>
            </div>

         
            <div className="picContainer2">  
                <div className="picJumbo">
                        <p>Relaatio</p>
                        <Button href="https://marpiet.github.io/RelaatioProjekti/" target="_blank">Website</Button>
                        <br></br>
                        <Button variant="dark" href="https://github.com/MarPiet/RelaatioProjekti/tree/master" target="_blank">View Code</Button>
                        <br></br>
                        <FaGithub />  
                </div>
                <Image id="img2"src={picture2}></Image>  
            </div>
  
            <div className="picContainer3">  
                <div className="picJumbo">
                        <p>Key Finder</p>
                        <Button href="https://marpiet.github.io/KeyFinder/" target="_blank">Website</Button>
                        <br></br>                  
                        <Button variant="dark" href="https://github.com/MarPiet/KeyFinder/tree/master" target="_blank">View Code</Button>
                        <br></br>
                        <FaGithub />  

                </div>
                <Image id="img3"src={picture3}></Image>
            </div>

        </div>
        )
    }
}

export default Presentation