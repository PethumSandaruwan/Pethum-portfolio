"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs ,FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs,SiShadcnui,SiMongodb, SiMysql, SiPostman, SiTypescript  } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IoLogoFirebase } from "react-icons/io5";

const about = {
  title: "About me",
  description: "I am passionate about both backend and frontend development.",
  Info: [
    { fieldName: "Name", fieldValue: "Pethum Sandaruwan" },
    { fieldName: "Phone", fieldValue: "(+94) 716060511" },
    { fieldName: "Experience", fieldValue: "12yrs" },
    { fieldName: "Whatsapp", fieldValue: "(+94) 716060511" },
    { fieldName: "Nationality", fieldValue: "Sri lankan" },
    { fieldName: "Email", fieldValue: "pethumsandaruwan007@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
  ],
};

const education = {
  title: "My Education",
  description: "Education background",
  items: [
    {
      institute: "Sabaragamuwa University",
      degree: "B.Sc (Hons) in Computing & Information Systems",
      duration: "2022-present",
    },
    {
      institute: "Gankanda Central Collage ",
      degree: "G.C.E Advanced Level (Physical Science Stream)",
      duration: "2017 – 2020",
    },
  ],
};

const expirience = {
    title: "My Expirience",
    description: "Proffessional Expirience",
    items: [
      {
        company4: "Peoples Bank",
        degree: "",
        duration: "2021-2022",
      },
      
    ],
  };

const skills = {
  title: "My skills",
  description: "Frameworks/Libraries",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMysql/>, name: "Mysql" },
    { icon: <SiTypescript />, name: "TypeScript"  },
    { icon: <SiShadcnui />, name: "Shadcnui" },
    { icon: <SiMongodb />, name: "Mongodb" },
    { icon: <SiPostman />, name: "Postman" },

    
  ],
};



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="expirience">Expirience</TabsTrigger>
          </TabsList>
          
          <div className="min-h-[70vh] w-full">
            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-2md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {skills.skillList.map((skill, index) => (
                          <li 
                            key={index} 
                            className="group bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" // Added 'group' class here
                          >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                  <div className="text-6xl transition-all duration-300 group-hover:text-accent"> {/* 'group-hover' applied here */}
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>


            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {about.Info.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[84px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <h4>{item.fieldName}</h4>
                        <div className="flex items-center  gap-2">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p>{item.fieldValue}</p>
                        </div>
                        
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent text-center">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree} </h3>
                        <div className="flex items-center  gap-2">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p>{item.institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* Expirience Tab */}
             <TabsContent value="expirience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expirience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {expirience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expirience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent text-center">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree} </h3>
                        <div className="flex items-center  gap-2">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;