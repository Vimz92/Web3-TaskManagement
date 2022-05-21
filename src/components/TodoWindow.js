import React,{useState} from "react";
import {FaPlus,FaTrash,FaCheckCircle} from "react-icons/fa";


const styles = {
  container: "w-[40%] h-[50vh]  over ",
  textContainer: "flex  h-20 ml-[12rem]",
  heading: " flex items-center text-white font-bold",
  heading1:"flex items-center text-white font-bold",
  circle:"w-[45px] h-[45px] bg-[#1427A7] flex place-items-center justify-center rounded-full cursor-pointer hover:bg-red",
  input: "flex items-center bg-transparent  outline-none text-white w-[100%] ml-3",
  inputContainer: "flex flex-col  p-3 w-[90%] rounded bg-[#171924] hover:bg-sky-700 ml-[2rem] ",
  showItem: " flex  items-center justify-center w-[90%] h-[7vh] mr-[7rem] ml-[2rem] m-3 p-3 rounded bg-[#171924] hover:bg-sky-700",
  plusIcon:"",
  eachItem:"flex items-center justify-center ",
  checkCircle:" ",
  checkTrash:"",
};

const TodoWindow = () => {


const [inputData, setInputData] = useState("")
const [items, setItems] = useState([])

const addItem =() => {
    if(!inputData){

    }else {
        setItems([...items, inputData])
        setInputData("")
    }
    
}

  return (
    <div className={styles.container}>
        
             <div className={styles.textContainer}/> 
              <div className="flex items-center justify-evenly" > 
              <h1 className={styles.heading}> Today To Do List 
            
              </h1>
              <div className={styles.plusIcon}> 
              <div className={styles.circle}> 
              <FaPlus onClick={addItem} size={15} color={"white"} /> 
              </div>
              </div>
              </div>
              <div className='flex flex-col ml-[3rem] '>
              <p className="text-white "> Saturday  </p>
              <p className="text-white"> 12 October 2019  </p>
              </div>
              

              <div className={styles.inputContainer}>
             <input className={styles.input} placeholder="Add your tasks here..."
                value={inputData}
                onChange={(e)=>setInputData(e.target.value)}/>
                </div>
            {
                items.map((curElem) => {
                return (
                    <> 
                     <div className={styles.showItem}> 
                    <div className={styles.eachItem} > 
                    <div className="{styles.checkCircle}"> 
              <FaCheckCircle color={"green"} size={20}/> 
              </div>    
                  <h1 className={styles.heading1}> {curElem}  
                 <div className={styles.checkTrash}> 
                    <FaTrash color={"red"} size={20}/> 
                    </div>
                    </h1>
                    
                    </div>
                    </div>
               
                
                
                
                
               
                </>
                   
                )
                })
            }
              
             
          
       
      </div>
 
    
  );
};

export default TodoWindow;