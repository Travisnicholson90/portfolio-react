import classes from './ProjectsPage.module.css';
import { useInView } from 'react-intersection-observer';

const ProjectsPage = () => {
    const {ref: blogRef, inView: blogInView} = useInView();
    const {ref: jobsRef, inView: jobsInView} = useInView();
    const {ref: plannerRef, inView: plannerInView} = useInView();
    const {ref: shoesRef, inView: shoesInView} = useInView();


  return (
<div className={`${classes.container}`}>
    <div className={`${classes.main}`}>
        <div ref={blogRef} className={`overflow-hidden p-4 ${classes.blog} ${blogInView ? `${classes['show-blog']}` : `${classes['hide-blog']}`}`}>
            <div className={`${classes.wrapper} bg-purple`}>
                <div className={`${classes.links} px-8 text-xl lg:text-2xl  bg-purple`}>
                    <a className='hover:cursor-pointer hover:opacity-70' href="">
                    <p className='text-pink'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="https://tech-blog-usyd.herokuapp.com/" target='blank' >
                    <p className='text-pink'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-purple text-lightPink`}>
                    <h2 className='overflow-hidden text-3xl lg:text-5xl text-center'>CMS Style Tech Blog</h2>
                </div>
                <div className={`${classes.tech} bg-purple`}>
                <span className={`${classes.span} text-xl lg:text-2xl  bg-purple`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
                <span className={`${classes.span} text-xl lg:text-2xl  bg-purple`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
            </div>
            </div>
        </div>

        <div ref={jobsRef} className={`overflow-hidden p-4  ${classes.jobs} bg-darkGreen ${jobsInView ? `${classes['show-jobs']}` : `${classes['hide-jobs']}`}`}>
        <div className={`${classes.wrapper} bg-darkGreen`}>
                <div className={`${classes.links} px-8 text-xl lg:text-2xl  bg-darkGreen`}>
                    <a className='hover:cursor-pointer' href="">
                    <p className='text-lime'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="">
                    <p className='text-lime'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-darkGreen text-lightPink`}>
                    <h2 className='overflow-hidden text-3xl lg:text-5xl text-center'>Jobs Board</h2>
                </div>
                <div className={`${classes.tech} bg-darkGreen`}>
                <span className={`${classes.span} text-xl lg:text-2xl  bg-darkGreen`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
                <span className={`${classes.span} text-xl lg:text-2xl  bg-darkGreen`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
            </div>
            </div>
        </div>

        <div ref={plannerRef} className={`overflow-hidden p-4  ${classes.shoes} bg-grayishWhite ${plannerInView ? `${classes['show-planner']}` : `${classes['hide-planner']}`}`}>
        <div className={`${classes.wrapper} bg-grayishWhite`}>
                <div className={`${classes.links} px-8 text-xl lg:text-2xl  bg-grayishWhite`}>
                    <a className='hover:cursor-pointer' href="">
                    <p className='text-red'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="">
                    <p className='text-red'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-grayishWhite text-brightPeach`}>
                    <h2 className='overflow-hidden text-3xl lg:text-5xl text-center'>Personal Planner</h2>
                </div>
                <div className={`${classes.tech} bg-grayishWhite`}>
                <span className={`${classes.span} text-xl text-peach lg:text-2xl  bg-grayishWhite`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
                <span className={`${classes.span} text-xl text-peach lg:text-2xl  bg-grayishWhite`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
            </div>
            </div>
    </div>
    <div ref={shoesRef} className={`overflow-hidden p-4  ${classes.planner} bg-darkBlue ${shoesInView ? `${classes['show-shoes']}` : `${classes['hide-shoes']}`}`}>
        <div className={`${classes.wrapper} bg-darkBlue`}>
                <div className={`${classes.links} px-8 text-xl lg:text-2xl  bg-darkBlue`}>
                <a className='hover:cursor-pointer' href="https://github.com/Travisnicholson90/quiz-app">
                    <p className='text-lightBlue'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="https://scintillating-pika-e66b90.netlify.app/">
                    <p className='text-lightBlue'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-darkBlue text-lightPink`}>
                    <h2 className='overflow-hidden text-3xl lg:text-5xl text-center'>Web Dev Quiz</h2>
                </div>
                <div className={`${classes.tech} bg-darkBlue`}>
                <span className={`${classes.span} text-xl lg:text-2xl  bg-darkBlue`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Authentication</span>
                </span>
                <span className={`${classes.span} text-xl lg:text-2xl  bg-darkBlue`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Authentication</span>
                </span>
            </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ProjectsPage;
