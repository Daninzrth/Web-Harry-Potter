import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const CardHouse = ({image, name, lema}) => {
    const {store , actions} = useContext(Context)
    return (
    
    <div className="card card-block mx-2 py-2" style={{width: "24rem"}}>
    <img className="card-img-top" src={image} style={{height: "325px"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{lema}</p>
      <div className='d-flex'>
        <Link to={'/houses/'+name}>
      <button href="#" className="btn btn-outline-primary">Learn more!</button>
      </Link>
      <button className='btn btn-outline-warning ms-auto' onClick={() => {actions.addFav(name)}}><i class="far fa-heart"></i></button>
      </div>
    </div>
  </div>)
}