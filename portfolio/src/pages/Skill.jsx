import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { Card } from '@/components/ui/card'

function Skill() {

  const mySkills = [
    {
      skillName: "HTML",
      myProgress: 85
    },
    {
      skillName: "CSS",
      myProgress: 80
    },
    {
      skillName: "JavaScript",
      myProgress: 80
    },
    {
      skillName: "React Js",
      myProgress: 85
    },
    {
      skillName:"Redux Toolkit",
      myProgress:75
    },
    {
      skillName: "Node Js",
      myProgress: 80
    },
    {
      skillName: "Express Js",
      myProgress: 90
    },
    {
      skillName:"Mongodb",
      myProgress:90
    },
    {
      skillName:"Tailwind Css",
      myProgress:80
    },
    {
      skillName:"Chakra UI",
      myProgress:60
    },
    {
      skillName:"ShadCn",
      myProgress:60
    },
    {
      skillName:"gitHub",
      myProgress:80
    }

  ]
  return (
    <div id='skill' className='w-full h-auto flex justify-center items-center  dark:bg-black dark:text-white'>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1, type: 'tween' }}
      > */}
        <div className=' w-full p-16 text-white '>
          <h1 className='text-center text-4xl mb-6 font-semibold '>Skills</h1>

          <Card className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8 shadow-sm rounded-xl dark:bg-black  bg-white backdrop-blur-md bg-opacity-5'>
          {
            mySkills.map((item,index)=>(
              <div key={index}>
                <SkillCard skillName={item.skillName} myProgress={item.myProgress} />
              </div>
            ))
          }
          </Card>
          
          

        </div>
      {/* </motion.div> */}
    </div>
  )
}

export default Skill