import React from 'react'
import team from '../images/team.png'
import image130 from '../images/image130.png'
import image129 from '../images/image129.png'
import chat from '../images/chat.png'

const styles = {
  recentProject:' ',
  pending:'',
  working:'',
  table:'bg-[#2A3550] w-[75%] ',
  thead:'',
  tabledata:'h-[2.8rem]',
  tabledata1:'flex gap-3 p-2 shadow-white text-white',
  tabledata2:'flex gap-3 p-2 shadow-white text-white',
  tabledata3:'flex gap-3 p-2',
  tabledata4:'flex gap-3 p-2',
  tbody:'ml-[10rem] bg-[#35415E] divide-y-bg-gray  rounded-lg p-3 items-center ',
}

const RecentProject = () => {
  return (
    <div className={styles.recentProject}>
       <table className={styles.table}>
         <thead className={styles.thead}>
           <tr>
             <th> RECENT PROJECTS </th>
             <th> CREATED </th>
             <th> REPORTER </th>
             <th> DUE </th>
             <th> STATS </th>
           </tr>
         </thead>
         <tbody className={styles.tbody}>
           <tr className="hover:bg-violet-600 active:bg-[#35415E] focus:outline-none focus:ring focus:ring-violet-300 transition-all"> 
           <td className={styles.tabledata1}> <img src={image130} width={30} height={30}/> Collabee Private Co.</td>
           <td className={styles.tabledata}>Thu, 26 Oct</td>
           <td className={styles.tabledata}>Christian Matthews</td>
           <td className={styles.tabledata}>Thu, 26 Oct</td>
           <td className={styles.pending}>In Progress</td>
           </tr>

           <tr className="hover:bg-violet-600 active:bg-[#F2BC9E] focus:outline-none focus:ring focus:ring-violet-300 transition-all"> 
           <td className={styles.tabledata2}> <img src={chat} width={30} height={30}/> Cambr Card.</td>
           <td className={styles.tabledata}>Wed, 25 Oct</td>
           <td className={styles.tabledata}>Aurthur Cook</td>
           <td className={styles.tabledata}>Thu, 26 Oct</td>
           <td className={styles.working}>Open</td>
           </tr>

           <tr className="hover:bg-violet-600 active:bg-[#F2BC9E] focus:outline-none focus:ring focus:ring-violet-300 transition-all"> 
           <td className={styles.tabledata3}> <img src={image129} width={30} height={30}/> Target</td>
           <td className={styles.tabledata}>Tue, 24 Oct</td>
           <td className={styles.tabledata}>Evelyn Tucker</td>
           <td className={styles.tabledata}>Thu, 26 Oct</td>
           <td className={styles.pending}>In Progress</td>
           </tr>

           <tr className="hover:bg-violet-600 active:bg-[#F2BC9E] focus:outline-none focus:ring focus:ring-violet-300 transition-all"> 
           <td  className={styles.tabledata4}> <img src={team} width={30} height={30}/>Gramma Limited</td>
           
           <td className={styles.tabledata}>Mon, 23 Oct</td>
           <td className={styles.tabledata}>Donald Curtis</td>
           <td className={styles.tabledata}>Thu, 26 Oct</td>
           <td className={styles.working}>Open</td>
           </tr>

         </tbody>
       </table>
    </div>
  )
}

export default RecentProject