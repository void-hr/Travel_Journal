import React from "react";

export default function Card(props){
    
    
    return (

        <div className="card" style={{width:'470px', marginLeft:'auto', marginRight:'auto'}}> 
        <div className="card--body" style={{height:'168px', width:'470px', marginTop:'18px', display:'flex'}}>
            <img src={props.item.imageUrl} style={{objectFit:'cover'}}></img>
            
            <div className="card--details" style={{display:'flex', flexDirection:'column'}}> 
           <div className="location" style={{marginTop:'19px'}}> 
           <i className="fa-solid fa-location-dot" style={{color:'#F55A5A', fontSize:'9.55px', paddingRight:'5px', fontStretch:'7px'}}></i> 
           <span className="location--name" style={{letterSpacing:'0.3em', fontSize:'10.24px'}}>{props.item.locations}</span> 
           <a href= {props.item.googleMapsUrl} className="location--maps" style={{paddingLeft:'12px',  fontSize:'10.24px', textDecoration:'underline', color:'#918E9B'}}>Views on Google Maps</a>
           </div>
            <h1 style={{marginTop:'7px', fontSize:'25px'}}>{props.item.title}</h1>
            <b style={{fontSize:'10.24px'}}>{props.item.startDate} - {props.item.endDate}</b>
            <p style={{lineHeight:'150%', fontSize:'10.24px'}}>{props.item.description}</p>
        </div>
        </div>
        <hr style={{color:'#F5F5F5', border:'1px solid'}}/>  
        </div>
        
    )
    
}





