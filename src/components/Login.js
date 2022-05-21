import React, { useState, useEffect } from 'react'
import loginbg from '../images/login.jpg';




const styles = {
  button:' bg-red-500 p-3 fonttext-white font-bold rounded-lg ',

}

const Login = () => {

 

const [walletAddress, setWalletAddress] = useState(null) // store the address in walletAddress

const connectWallet = async () =>{
    
    if(typeof window.ethereum !== 'undefined') {
  
      const accounts =  await window.ethereum.request({ method: 'eth_requestAccounts'});
    setWalletAddress(accounts[0])

    }
}

const getNFTData = async () => {
if(!walletAddress) return;

    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)

    const data = await response.json();

    debugger
}

useEffect(() => {
    getNFTData()
}, [walletAddress])


  return (
  <>
    
    <div className="flex justify-center  items-center h-[100vh]">
    <img src={loginbg} width={500} height={500} />
     
<h1> {walletAddress} </h1>
   
   <button className={styles.button}  onClick={connectWallet}> Connect your wallet here<br/>  
  
   </button>  
    </div>
    </>
  
  )
}

export default Login