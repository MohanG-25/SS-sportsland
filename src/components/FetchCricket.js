import React ,{ useEffect,useState } from "react"
// import {useRef} from 'react'
import axios from 'axios'
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
const FetchCricket=()=>{
    const[data,setData]=useState([])
    const cricket=async()=>{
        //   fetch('/api/methods')
        //  .then((response)=> response.json())
        //  .then((json)=>{
        //     console.log(json)
        //     setData(json)
        //   })
        const {data}=await axios.get('https://s-serverside.herokuapp.com/api/methods/cricket')
              setData(data)
              console.log(data)   
          
     }
    //   useEffect(()=>{
    //      const getData=async()=>{
    //           const {data}=await axios.get('/api/methods')
    //           setData(data)
    //           console.log(data)
    //       }
    //      getData();
    // },[])
    // const form=useRef();
    const [user_name,set_user_name]=useState([])
    const [user_email,set_user_email]=useState([])
    const handleName=(e)=>{
        set_user_email(e.target.value)
    }
    const handleEmail=(e)=>{
        set_user_email(e.target.value)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        var bname=document.getElementById("uname").value
        var bmail=document.getElementById("umail").value
        // emailjs.sendForm('service_y5ohs0d', 'template_sw3o3oa',form.current, 'yZBmtWe6VwLyhANXW')
        alert("you are booked successfully ");
        alert("And for confirmation you need to send a professional mail for our comapany with enter your details properly!!");
        alert("Then only we can reach you as soon as possible with your products!!! THANK YOU")
        window.location.href="mailto:export@sscricket.com?bname="+bname+"&bmail="+bmail;
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        set_user_name('')
        set_user_email('')
       
    }
    return(
        <div >
            <button onClick={cricket} className="form control btn btn-primary" >click here to buy</button>
            <br></br>
            <div>
                {data.length>0 &&data.map((G)=>(
                   <ul>
                        <div class="cricket-details">
                            <p key={G._id}>BAT: {G.bat}</p>
                            <p key={G._id}>HARKBALL:{G.harkball}</p>
                            <p key={G._id}>HELMET:{G.helmet}</p>
                            <p key={G._id}>GLOWS:{G.glows}</p>
                        </div>
                        <br></br>
                        <div className="cricket-form">
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
export default FetchCricket
