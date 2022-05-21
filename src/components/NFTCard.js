
import Header from '../components/Header'
import TodoWindow from '../components/TodoWindow'
import Update from '../components/Update'
import RecentProject from '../components/RecentProject'
import Schedule from '../components/Schedule'
import '../index.css'

const NFTCard = () => {
  return ( <>
        <Header />
      <div className='h-[10vh] ml-[5rem]'>
      <TodoWindow /> 
      </div> 
      <div className='ml-[40rem] mt-[2rem] flex-col'>
      <Update />
      <Schedule />
      </div>
      <div className='ml-[7rem] mt-[2rem] '>
      <RecentProject />
      </div>
      </>
    
  )
}

export default NFTCard