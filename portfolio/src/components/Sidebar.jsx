import { Menu, Moon, Sun } from 'lucide-react';
import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { myContext } from '@/App';
function Sidebar({setOpen}) {

    const {dark,setDark} = useContext(myContext)
    
    return (


        <motion.div
        
        >
            <div >
                <div className='fixed top-4 right-5 cursor-pointer ' onClick={()=>setOpen(false)}>
                    <Menu/>
                </div>

                <div className='fixed top-4 left-5 cursor-pointer' onClick={()=>setDark(!dark)}>
                    {dark?<Sun />:<Moon/>}
                </div>

                

                <div className=' space-y-7 flex flex-col items-center mt-16'>
                <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link smooth={true} to='#home'>Home</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link smooth={true} to='#about'>About</Link>
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
                        <Link smooth={true} to='#projects'>Projects</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{scale:1.5}}
                        whileTap={{scale:2}}
                    >
                        <Link smooth={true} to='#contact'>Contact</Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar