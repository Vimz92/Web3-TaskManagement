import React from 'react'
import chat from '../images/chat.png'
import team from '../images/team.png'
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.png'
import user4 from '../images/user4.png'
import user5 from '../images/user5.png'


const styles = {
  main:'p-3  h-full inline-flex  space-x-2 flex items-center',
}


const Update = () => {
  return (
    <div className="flex items-center">
      <main className={styles.main}>
        <div className="flex flex-col p-8 h-[45vh] w-[15rem]  hover:bg-violet-600 active:bg-[#F2BC9E] focus:outline-none focus:ring focus:ring-violet-300 shadow-2xl bg-[#F2BC9E] transition-all rounded-md">
          
          <img src={team} width={60} height={60}/>
          <div className="mt-[8rem] "> Team Members </div>
          <div className="flex"> 
          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user1}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user1}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user2}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user3}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user4}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user5}/>
          </span>
          </div>
          <h1 className="mt-[1rem]">Project Completion</h1>
     
        </div>
      </main>

      <main className={styles.main}>
        <div className="flex flex-col p-8 h-[45vh] w-[15rem]  hover:bg-violet-600 active:bg-[#F2BC9E] focus:outline-none focus:ring focus:ring-violet-300 bg-[#92C7EB] transition-all rounded-md">
          <img src={chat} width={60} height={70}/>
          <div className="mt-[9rem]"> Team Members </div>
          <div className="flex"> 
          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user1}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user1}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user2}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user3}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user4}/>
          </span> 

          <span className="border-2 border-white rounded-full">
          <img className="w-6 h-6 rounded-full object-cover" 
          src={user5}/>
          </span>
          </div>
          <h1 className="mt-[1rem]">Project Completion</h1>
        






        </div>



      </main>


    </div>
  )
}

export default Update