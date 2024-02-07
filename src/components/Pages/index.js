import React, { useState } from 'react'
import AboutSection from '../AboutSection';
import { homeObjOne } from '../AboutSection/Data';
import Contact from '../Contact';
import LandingSection from '../LandingSection';
import { projectObj, projectObj2, projectObj3, projectObj4 } from '../ProjectDetails/Data';
import Project1 from '../../images/swanson-vineyards.png';
import Project2 from '../../images/Cherry-pie.png';
import Project3 from '../../images/windsor-vineyards.png';
import Project4 from '../../images/ace-cider-resize.png';
import Navbar from '../Navbar'
import Portfolio from '../Portfolio';
import Sidebar from '../Sidebar'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState({
		activeObject : null, 
		objects: [
			{id : 1, project: Project1, title: projectObj.headline, img: Project1, short: projectObj.shortDescription, path: projectObj.path},
			{id : 2, project: Project2, title: projectObj2.headline, img: Project2, short: projectObj2.shortDescription, path: projectObj2.path},
			{id : 3, project: Project3, title: projectObj3.headline, img: Project3, short: projectObj3.shortDescription, path: projectObj3.path},
			{id : 4, project: Project4, title: projectObj4.headline, img: Project4, short: projectObj4.shortDescription, path: projectObj4.path}
		]})
	function toggleActive(idx) {
		setIsActive({...isActive, activeObject: isActive.objects[idx]});
	}
	function toggleStyles(idx) {
    console.log(isActive.objects)
		if(isActive.objects[idx] === isActive.activeObject) {
      
      return 'card-image active-card';
    } else {
      return 'card-image inactive-card'
    }
    
	
	}
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <LandingSection />
      <AboutSection {...homeObjOne} />
      <Portfolio isActive={isActive} toggleActive={toggleActive} toggleStyles={toggleStyles} />
      <Contact />
    </>
  )
}

export default Home