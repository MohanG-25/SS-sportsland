import React,{useEffect,useState} from 'react'
import axios from 'axios'
const FetchHockey=()=>{
    const[data,setData]=useState([])
    const hockey=async()=>{
       const {data}= await axios.get('https://s-serverside.herokuapp.com/api/methods/hockey')
       setData(data)
       console.log(data)
    }
    const [user_name,set_user_name]=useState([])
    const [user_email,set_user_email]=useState([])
    const handleName=(e)=>{
        set_user_email(e.target.value)
    }
    const handleEmail=(e)=>{
        set_user_email(e.target.value)
    }
    const sendEmail=(e)=>{
        e.preventDefault();
        var bname=document.getElementById("uname").value
        var bmail=document.getElementById("umail").value
        alert("you are booked successfully ");
        alert("And for confirmation you need to send a professional mail for our comapany with enter your details properly!!");
        alert("Then only we can reach you as soon as possible with your products!!! THANK YOU")
        window.location.href="mailto:export@sscricket.com?bname="+bname+"&bmail="+bmail;
        set_user_name('')
        set_user_email('')
    }
    return(
      <div>
        <button onClick={hockey} className='form control btn btn-primary'>click here to buy</button>
        <br></br>
        <div>
            {data.length>0 &&data.map((H)=>(
                <ul>
                 <div className='hockey-details'>
                    <p>HOCKEYBALL:{H.hockeyball}</p>
                    <p>STICK:{H.stick}</p>
                 </div>
                 <br></br>
                        <div className="hockey-form">
                        <form>  
                            <br></br> 
                            <label>Name:</label>
                            <input id="uname"type="text" name="name" placeholder="name"  onChange={ handleName} required/>
                            <br></br>
                            <br></br>
                            <label>Email:</label>
                            <input id="umail"type="email" name="email" placeholder="email"  onEmail={handleEmail} required/>
                            <br></br>
                            <br></br>
                            <button style={{backgroundColor:"green"}} onClick={sendEmail} >BUY</button>
                        </form>
                        </div>
              </ul>
            ))}
        </div>
      </div>
    )
}
export default FetchHockey