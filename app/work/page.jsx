"use client";
import {easeIn, motion} from "framer-motion";
import React,{useState} from "react";
import {BsArrowUpRight,BsGithub  } from "react-icons/bs";

import {Swiper,SwiperSlide}from "swiper/react";
import"swiper/css";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects =[
 
  {num:'01',
    category:'Fullstack Web',
    title:'E-Market Hub | E-commerce Platform',
    description:'Developed a full-stack e-commerce platform with features user authentication, product management, shopping cart, and secure payment integration.',
    stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Stripe"},{name:"Redis"},{name:"MongoDB"}],
    image:'/assets/work/thumb1.png',
    Live:'',
    github:"https://github.com/PethumSandaruwan/E-Commerce-Store.git",
    
   },
   {num:'02',
    category:'Fullstack',
    title:'Guidely',
    description:'Guidely connects IT students with professionals for free project guidance',
    stack:[{name:"NextJs"},{name:"MongoDB"},{name:"TypeScript(React)"},{name:"NodeJs"},],
    image:'/assets/work/thumb2.png',
    Live:'',
    github:"",
 
   },
   {num:'03',
    category:'Frentend Web',
    title:'TastyTrails | Food Delivery Website',
    description:'A user-friendly food delivery website designed for offering a seamless experience for customers to order food with ease. Explore, order, and enjoy our services effortlessly.',
    stack:[{name:"ReactJs"},{name:"HTML5"},,{name:"CSS3"},{name:"JavaScriptt"}],
    image:'/assets/work/thumb3.png',
    Live:'',
    github:"https://github.com/MenathNDGD/TastyTrails-FoodDelivery-ReactPHP.git",
    
   },
   {num:'04',
    category:'Frontend Web ',
    title:'PureGem',
    description:'Developed a responsive and user-friendly frontend for a gem-selling platform, incorporating product showcases and educational resources on gemstones.',
    stack:[{name:"HTML"},{name:"CSS"},{name:" JavaScript"},],
    image:'/assets/work/thumb4.png',
    Live:'https://pethumsandaruwan.github.io/PureGem/',
    github:"https://github.com/PethumSandaruwan/PureGem.git",
    
   },
   {num:'05',
    category:'Fullstack ',
    title:'Creative Maths Student Management System',
    description:'Student management system',
    stack:[{name:"React"},{name:"Mongodb"},{name:" Express"},{name:" Node JS"},{name:"Stripe"},],
    image:'/assets/work/thumb5.png',
    Live:'',
    github:"https://github.com/PethumSandaruwan/Creative-Maths-Management-System.git",
    
   },


]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
   const handleSlideChange = (swiper)=>{
                   // get current slide index
                    const currentIndex = swiper.activeIndex;
                    // update project state based on current slide
                    setProject(projects[currentIndex]);
   }
  return (
        <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
                  className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        
          <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl: gap-[30px]">
                  <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                  xl:justify-between order-2 xl:order-none">
                  <div className="flex flex-col gap-[30px] h-[50%] ">
                    {/* outline num */}
                    <div className="text-8xl leading-none font-extrabold text-transparent
                    text-outline">
                        {project.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white
                                        group-hover: text-accent transition-all duration-500 capitalize">
                                        {project.category} project
                         </h2>
                         <h1 className="text-white/60 text-2xl">{project.title}</h1>
                            {/* project description */}
                               <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                            return <li key={index} className="text-xl text-accent">
                                     {item.name}
                                     
                                      { /* remove the last comma*/}
                                      {index !== project.stack.length - 1 && ", "}
                                    </li>;
                            })}
                            </ul>
                            {/* border */}
                              <div className="border border-white/20"></div>
                              {/* buttons */}
                              <div className="flex items-center gap-4">
                                  {/* Live project button */}
                                        <Link href={project.Live}>
                                          <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                              Obg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl
                                              group-hover:text-accent" />
                                              </TooltipTrigger>
                                                <TooltipContent>
                                                   <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                          </TooltipProvider>
                                        </Link>
                                   {/* github project button */}
                                         <Link href={project.github}>
                                          <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                              Obg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl
                                              group-hover:text-accent" />
                                              </TooltipTrigger>
                                                <TooltipContent>
                                                   <p>Github Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                          </TooltipProvider>
                                        </Link>
                              </div>
                      </div>
                    </div>
                      <div className="w-full xl:w-[50%]">
                               <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px] mb-12"
                                onSlideChange={handleSlideChange}>

                                {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                          <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                               {/* overlay */}
                                               <div className="absolute top-0 bottom-0 w-full h-full Obg-black/
                                                  10 z-10"></div>
                                                    {/* image */}
                                                    <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className="object-cover"
                                                        alt="#"/>

                                                    </div>
                                          </div>
                                      </SwiperSlide>;
                                })}

                                {/* slider buttons */}
                                <WorkSliderBtns
  contoinerStyles="flex gap-2 absolute right-0 bottom-[calc(10%_-_22px)] z-20 w-full justify-between xl:w-max xl:justify-none "
  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 rounded-full"
  iconsStyles="text-white text-3xl" // Define icon styles if needed
/>

                                </Swiper>
                  </div>
              </div>
          </div>
        </motion.section>
  );
};

export default Work;