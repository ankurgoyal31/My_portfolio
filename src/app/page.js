"use client"
import Link from 'next/link';
import React from 'react'
import { store } from './back/sr';
 import { useState,useEffect } from 'react';
 const page = () => {
  const [first, setfirst] = useState({name:'',email:'',description:''})
  const handle = (e)=>{
    setfirst({...first,[e.target.name]:e.target.value});
  }
  useEffect(() => {
    let info =document.querySelector(".greet");
    let about = document.querySelector(".center");
    let learn = document.querySelectorAll(".learn");
    let box = document.querySelectorAll(".box")
    // console.log(info)
    info.style.fontSize = "18px"
    function change() {
      if(window.scrollY>20){
about.style.color = " #667688";
about.style.fontSize = "18px";
    }else {
    about.style.color = "white";
    about.style.fontSize = "16px";
  }
    if(window.scrollY>460){
 learn.forEach(el=>{
    el.style.color = "#f5f7f9";
  });
  box.forEach(el=>{
el.style.animation="glowPulse 2.5s infinite"; 
  }); 

 }else{
    learn.forEach(el=>{
    el.style.color = "#bd09ea";
  });
  box.forEach(el=>{
   });
  }
     
     }
      window.addEventListener("scroll",change);
    return ()=>window.removeEventListener("scroll",change)
   
   }, [])
  
  const send = ()=>{
 try{
  let y = store(first.name,first.email,first.description);
  console.log(y)
  alert("thankes for review....")
 }catch{
  return false
 }
  } 
  return (
    <>
    <div className='set_width'> 
    <div>
      <div className='greet'>
        <img className='image' width={"150px"} height={"150px"} src="/myimage.jpeg" alt="" />
        {/* <img src="https://static.naukimg.com/s/8/801/i/src/resources/svg/chat-emoji.1d26c5e5.svg" alt="" /> */}
        <h2>Ankur goyal</h2>
        <h1>Wecome My Portfolio</h1>
        <h2>Hello ! i am a Full Stack Web Devloper With Ai</h2>
        <div className='buttons'>
         <Link style={{textDecoration:'none'}} href={"https://www.linkedin.com/in/ankur-goyal-535029320"}><div className='btn'> Linkdin </div></Link>  
         <Link style={{textDecoration:'none'}} href={"https://github.com/ankurgoyal31/"}><div className='btn'> Github </div></Link>  
        </div>
      </div>
       {/* <video width={"100%"} height={"700px"} autoPlay loop muted playsInline>
          <source  src="https://previews.customer.envatousercontent.com/h264-video-previews/1722475.mp4" type="video/mp4" />
        </video> */}
          <img  style={{backgroundSize:'cover',backgroundPosition:'center'}} className='setimage' width={"100%"} height={"700px"} src="https://blogs.mathworks.com/matlab/files/2024/02/animatingFlickbook_1.gif" alt="" />

      {/* <img className='setimage' width={"100%"} height={"700px"} src="https://assets-v2.lottiefiles.com/a/4c271a64-1167-11ee-8ab3-67521f0ca529/Lq3stVUtsl.gif" alt="" /> */}
       <div className='whole'>
               </div>
     </div>
    <div className='main'> 
      <div className='center'> 
      <h1 className='title'>About Me </h1>
      <p>
I am a Full Stack Developer and 3rd-year Computer Science student passionate about building scalable web applications and AI-powered systems. I have hands-on experience with React.js, Next.js, Node.js, and MongoDB.
</p>
 <p>
I have developed real-world projects including LLM-integrated chat applications, vector-based recommendation systems, complaint management platforms, and production-ready full-stack applications.
</p>

<p>
I focus on writing clean, efficient code and building practical solutions that solve real problems.
</p>
</div>

          <h3 className='title'>My  Skills</h3> 

    <div className='language'>
     <div className='box'>
      <div>
        💹
       </div>
      <div>
        java Script
      </div>
      <div className='learn'>
        85%
      </div>
    </div>
     <div className='box'>
      <div>
📄</div>
      <div>
       Html
      </div>
      <div className='learn'>
        80%
      </div>
    </div>
     <div className='box'>
      <div>
🎨      </div>
      <div>
        Css
      </div>
      <div className='learn'>
        75%
      </div>
    </div>
    </div>
    <h3 className='title'>Framworks</h3>
    <div className='language'>
         <div className='box'>
      <div>
        ⚛️
      </div>
      <div >
        React js
      </div>
      <div className='learn'>
        80%
      </div>
    </div>
     <div className='box'>
      <div>
🟢      </div>
      <div>
       Node Js
      </div>
      <div className='learn'>
        75%
      </div>
    </div>
     <div className='box'>
      <div>
▲⚡
      </div>
      <div>
       Next Js
      </div>
      <div className='learn'>
        85%
      </div>
    </div>
     <div className='box'>
      <div>
🚂      </div>
      <div>
        Express Js
      </div>
      <div className='learn'>
        80%
      </div>
    </div>  
     <div className='box'>
      <div>
🍃
      </div>
      <div>
        Mongo Db
      </div>
      <div className='learn'>
        75%
      </div>
    </div>
    </div>
     <h3 className='title'>AI / Generative AI</h3>
<div className='language'> 
        <div className='box'>
      <div>
🤖
      </div>
      <div>
        LLM Integration
      </div>
      <div className='learn'>
        75%
      </div>
    </div>  
     <div className='box'>
      <div>
🌐
      </div>
      <div>
       Groq API
      </div>
      <div className='learn'>
        80%
      </div>
    </div>  
         <div className='box'>
      <div>
🔢
      </div>
      <div>
      Vector Embeddings
      </div>
      <div className='learn'>
        85%
      </div>
      </div>
      <div className='box'>
      <div>
🧮      </div>
      <div>
      vector database
      </div>
      <div className='learn'>
        70%
      </div>
      </div>
       <div className='box'>
      <div>
🔎      </div>
      <div>
       Semantic Search
      </div>
      <div className='learn'>
        75%
      </div>
      </div>
 </div>
    <h3 className='title'>My Projects</h3>
    <div className='language'>
       <div className='box2'>
      
      <h2>
Complaint Management System
      </h2>
      <p>Developed a full-stack complaint tracking platform with role-based
access control for users and admins. Designed and implemented
secure CRUD REST APIs for complaint creation, status updates,
and data management. Integrated authentication and protected
routes. Deployed production-ready application using Next.js,
Node.js, and MongoDB.</p>
     <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://civic-complaint-system-i5w8.vercel.app/"}>  
        check out
       </Link>      </div> 
      </div>
       <div className='box2'>
      
      <h2>
AI Movie Recommendation System
      </h2>
      <p>Built an embedding-based movie recommendation engine using
Vector Embeddings and Pinecone. Integrated Groq LLM API
for intelligent similarity search and dynamic results.
Implemented secure authentication and deployed full-stack
application using Next.js, Node.js, and MongoDB.</p>
            <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://movie-recommand-two.vercel.app/"}>  
        check out
       </Link>      </div>
      </div>
       <div className='box2'>
      
      <h2>
Event Management System    
  </h2>
  <p>Created a full-stack event platform where users can create
custom events and generate downloadable event cards.
Built secure REST APIs for event storage and management.
Deployed production-ready application with MongoDB backend.</p>
          <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://merried-henna.vercel.app/"}>  
        check out
       </Link>      </div>
      </div>
       <div className='box2'>
       
      <h2>
Linktree Clone Website
      </h2>
      <p>Built a personalized profile link management platform.
Users can create custom profile pages with multiple links.
Implemented secure authentication and dynamic routing.
Deployed full-stack app using Next.js and MongoDB.</p>
          <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://link-tree-wine-phi.vercel.app/"}>  
        check out
       </Link>      </div>
      </div>
<div className='box2'>
      
      <h2>
 Ai Movie Review System
      </h2>
      <p>Developed a full-stack complaint tracking platform with role-based
access control for users and admins. Designed and implemented
secure CRUD REST APIs for complaint creation, status updates,
and data management. Integrated authentication and protected
routes. Deployed production-ready application using Next.js,
Node.js, and MongoDB.</p>
     <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://civic-complaint-system-i5w8.vercel.app/"}>  
        check out
       </Link>      </div> 
      </div>

       <div className='box2'>
       
      <h2>
AI Chatbot Application      </h2>
      <p>Developed a real-time AI chatbot using LLM API integration.
Implemented session handling and dynamic prompt processing.
Designed backend APIs for request management and optimized
response latency for better user interaction.</p>
           <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://chat-beige-sigma.vercel.app/"}>  
        check out
       </Link>      </div>
      </div>
       <div className='box2'>
      
      <h2>
        URL Shortener Application
       </h2>
      <p>Developed a full-stack URL shortening service that converts
long URLs into short, shareable links. Implemented unique
short code generation, redirection handling, and database
storage using MongoDB. Built secure REST APIs and deployed
the application with production-ready configuration.</p>
         <div className='product'>  <Link style={{textDecoration:'none',color:'black'}} href={"https://short-run-virid.vercel.app/"}>  
        check out
       </Link>      </div>
      </div>
     </div>
      </div>
      <h2 className="title">Contact Me</h2>

<div className="contact-container">
  <form className="contact-form">
    
    <div className="input-group">
      <label>Name</label>
      <input name='name' value={first.name} onChange={handle}  type="text" placeholder="Enter your name" required />
    </div>

    <div className="input-group">
      <label>Email</label>
      <input name='email' value={first.email} onChange={handle} type="email" placeholder="Enter your email" required />
    </div>

    <div className="input-group">
      <label>Message</label>
      <textarea name='description' value={first.description} onChange={handle} rows="5" placeholder="Write your message..." required />
    </div>

    <button onClick={send} className="contact-btn">
      Send Message 
    </button>

  </form>
</div>
</div>
     </>
  )
}

 export default page;
