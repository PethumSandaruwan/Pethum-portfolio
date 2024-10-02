"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./Stair";




const StairTransition = () => {
    const pathname =usePathname();
  return (

    <div>
            <AnimatePresence mode ="wait">
                   
                    <div key={pathname}>

                         <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                             <Stair/>
                         </div>

                         <motion.div
                                      className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                                      initial={{ opacity: 1 }} // Initial state: fully opaque
                                      animate={{
                                        opacity: 0, // Final state: fully transparent
                                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }, // Fade-out effect
                                      }}
                                    />
                          
                        

                    </div>
        
        
             </AnimatePresence>


    </div>
    
  )
}

export default StairTransition