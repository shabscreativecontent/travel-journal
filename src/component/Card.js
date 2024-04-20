import '../App.css'
import React from 'react'


function Card(props){

   return (
      <div className='cardW'>
         <div className='card'>
            <img src={props.items.imageUrl} alt='state-view'/>
            <div>
               <div className='icon-card'>
                  <i class="fa-solid fa-location-dot"></i>
                  <h3>{props.items.location.toUpperCase()}</h3>
                  <a href={props.items.googleMapUrl}>View on Google Maps</a>
               </div>
               <h1>{props.items.title}</h1>
               <span>{props.items.startDate}  - {props.items.endDate}</span>
               <p>{props.items.description}</p>
            </div>
         </div>
         <hr/>
      </div>
   )
}


export default Card