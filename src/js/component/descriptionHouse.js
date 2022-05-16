import React from "react";

export const DescriptionHouse = ({image, name, description}) => {
 return <div className="row g-0">
   <div className="col-md-4 mx-5 my-5">
     <img src={image} className="img-fluid rounded-start" alt="..." style={{height:"450px", width:"450px"}}/>
   </div>
   <div className="col-md-6">
     <div className="card-body mx-5 my-5 justify-content-center">
       <h5 className="card-title">{name}</h5>
       <p className="card-text">{description}</p>
     </div>
   </div>
 </div>

}