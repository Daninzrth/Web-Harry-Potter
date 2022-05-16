import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Description } from '../component/description';
import { Context } from "../store/appContext";

export const Descriptions = () => {
    const {name} = useParams ();
    const {store , action} = useContext(Context);
    return <div>
        {store.gryffindor?.map((obj,i) =>{
            if (obj.name == name) {
                return <Description  image={obj.image} nameCharapter={obj.name} species={obj.species} gender={obj.gender} birth={obj.dateOfBirth} eye={obj.eyeColour} hair={obj.hairColour} patronus={obj.patronus} alive={obj.alive} actor={obj.actor} ancestry={obj.ancestry} house={obj.house} i={i}/>
            }
        })
        }
        {store.slytherin?.map((obj,i) =>{
            if (obj.name == name) {
                return <Description  image={obj.image} nameCharapter={obj.name} species={obj.species} gender={obj.gender} birth={obj.dateOfBirth} eye={obj.eyeColour} hair={obj.hairColour} patronus={obj.patronus} alive={obj.alive} actor={obj.actor} ancestry={obj.ancestry} house={obj.house} i={i}/>
            }
        })
        }
        {store.hufflepuff?.map((obj,i) =>{
            if (obj.name == name) {
                return <Description  image={obj.image} nameCharapter={obj.name} species={obj.species} gender={obj.gender} birth={obj.dateOfBirth} eye={obj.eyeColour} hair={obj.hairColour} patronus={obj.patronus} alive={obj.alive} actor={obj.actor} ancestry={obj.ancestry} house={obj.house} i={i}/>
            }
        })
        }
        {store.ravenclaw?.map((obj,i) =>{
            if (obj.name == name) {
                return <Description  image={obj.image} nameCharapter={obj.name} species={obj.species} gender={obj.gender} birth={obj.dateOfBirth} eye={obj.eyeColour} hair={obj.hairColour} patronus={obj.patronus} alive={obj.alive} actor={obj.actor} ancestry={obj.ancestry} house={obj.house} i={i}/>
            }
        })
        }
    </div>
}