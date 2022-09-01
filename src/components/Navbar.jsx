import React from 'react'

export default function Navbar(){
    return (
        <div className="nav" style={{backgroundColor:'#F55A5A', height:'55px', display:'flex', justifyContent:'center',alignItems:'center', color:'#f5f5f5f5', marginBottom:'45px',width:'100%'}}>
            <i className="fa-solid fa-earth-americas" style={{fontSize:'24px'}}></i>
            <p style={{fontSize:'14.46px', paddingLeft:'7px', fontWeight:'400'}}>my travel journal.</p>
        </div>


    )
}