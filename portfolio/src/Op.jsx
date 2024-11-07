import React, { useState } from 'react'

function Op() {
    const [dark ,setDark]= useState(false);
  return (
    <div className={`dark:bg-black ${dark&& 'dark'} flex items-center justify-center w-full h-screen `}>
        <div className={`w-[50%] rounded-md shadow-lg p-5  dark:text-white transition-all duration-500 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores illum, debitis unde suscipit laboriosam facere doloremque quia odio doloribus minus voluptas natus quidem delectus consequatur totam labore fuga veritatis animi reprehenderit officiis? Quis cupiditate perspiciatis sed dolorem nihil odit eaque sit earum veritatis doloremque quibusdam laboriosam optio excepturi libero distinctio, voluptatem aspernatur quasi esse laborum impedit deleniti dicta? Nemo quos enim est at, accusantium maxime iure dolore voluptates nesciunt repellendus nam praesentium, in corporis fuga excepturi tempore laboriosam? Corrupti similique, eveniet placeat necessitatibus quisquam quod temporibus, nihil odit eius, possimus deserunt consequatur est. Quis magnam iure architecto dolores quam.
        </div>
        <button className='p-5 shadow-md transition-all duration-500' onClick={()=>setDark(!dark)} >{dark?"Dark":"White"} me</button>
    </div>
  )
}

export default Op