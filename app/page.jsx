"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";




const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/assets/resume/PethumSandaruwan.pdf';  // Replace with the actual file path
  link.download = 'PethumSandaruwan.pdf';  // Name of the file when downloaded
  link.click();
};
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
                             Hello I'm <br />
              <span className="text-accent">Pethum Sandaruwan</span>
            </h1>
            <p className="max-w-[700px] mb-9 text-white/80">
            I am passionate about both backend and frontend development,
             quickly adapting to new technologies. I thrive in dynamic environments,
              working efficiently as a team member. 
              My goal is to contribute effectively to projects while continually expanding
              my full-stack development skills.
            </p>
            
            {/* Adjusted flex container */}
            <div className="flex items-center gap-8 mb-8 xl:mb-0">

            
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
               
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
             
              {/* Social icons */}
              <Social
                containerStyles="flex gap-6"
                                iconStyles="w-9 h-9 border 
                                            border-accent 
                                            rounded-full flex 
                                            justify-center items-center 
                                            text-accent 
                                            text-base 
                                            hover:bg-accent 
                                            hover:text-primary 
                                            transition-all duration-500"
              />
            </div>
          </div>
          <div   className="order-1 xl:order-none mb-8 xl:mb-0">
            
            
            <Photo/>
            
            
            </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;