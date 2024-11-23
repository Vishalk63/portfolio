import { Menu, Moon, Sun } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion"
import Sidebar from './Sidebar';
import { myContext } from '../App';

function Navbar() {
    const [open, setOpen] = useState(false)
    const {dark,setDark} = useContext(myContext) 
    return (
        <div >
            <motion.div className='w-full flex justify-between items-center py-2 px-9 fixed top-0 left-0 bg-white bg-opacity-5 backdrop-blur-md  text-white dark:bg-neutral-950 dark:text-white z-10 drop-shadow-lg '

            >
                <motion.div className='text-3xl text-white dark:text-white cursor-pointer font-semibold '
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{scale:1.8}}
                >
                    Portfolio
                </motion.div>

                <div className='md:flex justify-center items-center space-x-16 hidden sm:hidden '>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                        
                    >
                        <Link  smooth={true} to='#home'>Home</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link  smooth={true} to='#about'>About</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link smooth={true} to='#skill'>Skills</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link  smooth={true} to='#projects'>Projects</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link  smooth={true} to='#contact'>Contact</Link>
                    </motion.div>


                    {/* <div className='cursor-pointer ' onClick={()=>setDarkMode(!isDarkMode)}>
                        {isDarkMode?"Off-darkmod":"On-DarkMode"}
                    </div> */}
                </div>


                <motion.div className='hidden md:block cursor-pointer'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={()=>setDark(!dark)}
                >
                    {dark?<Sun />:<Moon/>}
                </motion.div>

                <div className='md:hidden cursor-pointer ' onClick={() => setOpen(true)}>
                    <Menu />
                </div>

            </motion.div>

            {/* ------------------------- */}
            <motion.div className='  md:hidden bg-white backdrop-blur-md bg-opacity-5 text-white dark:bg-neutral-900 dark:text-white drop-shadow-md h-full w-[40%] fixed right-0 top-0 z-20'
                initial={{ x: "100%" }}
                animate={{ x: open ? 0 : "100%" }}
                // transition={{duration:0.2,type:'tween'}}
            // transition={{ duration: 0.3 }}
            >
                <Sidebar setOpen={setOpen} />
            </motion.div>
        </div>
    )
}

export default Navbar