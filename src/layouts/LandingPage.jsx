import { useInView } from 'react-intersection-observer';

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import classes from './LandingPage.module.css';

const LandingPage = () => {
    const {ref: titleRef, inView: titleInView} = useInView();
    const {ref: aboutRef, inView: aboutInView} = useInView();
    const {ref: contactRef, inView: contactInView} = useInView();
    const {ref: projectsRef, inView: projectsInView} = useInView();
    const {ref: skillsRef, inView: skillsInView} = useInView();
    
    return (
        <div className={`${classes['grid']}`}>
            <div ref={titleRef} className={`flex flex-col gap-4 ${classes.title} ${titleInView ? `${classes['show-title']}` : `${classes['hide-title']}`}`}>
                <h1 className="overflow-hidden text-center text-5xl lg:text-7xl">Travis Nicholson</h1>
                <h2 className="overflow-hidden text-center text-3xl lg:text-5xl">Fullstack Developer</h2></div>
            <div ref={aboutRef} className={` ${classes.about} ${aboutInView ? `${classes['show-about']}` : `${classes['hide-about']}` }`}>
                <About />
            </div>
            <div ref={contactRef} className={`${classes.contact} ${contactInView ? `${classes['show-contact']}` : `${classes['hide-contact']}`}`}>
                <Contact/>
            </div>
            <div ref={skillsRef} className={`${classes.skills} ${skillsInView ? `${classes['show-skills']}` : `${classes['hide-skills']}`}`}> 
                <Skills />
            </div>
            <div ref={projectsRef} className={`${classes.projects} ${projectsInView ? `${classes['show-projects']}` : `${classes['hide-projects']}`}`}>
                <Projects />
            </div>
        </div>
    )
}

export default LandingPage;