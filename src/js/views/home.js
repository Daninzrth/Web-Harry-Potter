
import React, {useContext} from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { CardHouse } from "../component/cardHouse.js";
import { Context } from "../store/appContext";
import { Header } from "../component/header";

export const Home = () => {
	
	const {store , action} = useContext(Context);
	
 
	return <div className="mt-5">
		<Header/>
		<h2 className="my-1">Characters</h2>
		<div className="container-fluid my-4" id="container-scroll">
        <div className="overflow-auto row flex-row flex-nowrap mt-4 pb-4 pt-2">
		{
			store.gryffindor?.map((obj,i) => {
				if (obj.image != "") {
				return <Cards nameCharapter={obj.name} imagen={obj.image} house={obj.house} actor={obj.actor} ancestry={obj.ancestry} i={i}/>
				}
			})}
		{
			store.slytherin?.map((obj,i) => {
				if (obj.image != "") {
				return <Cards nameCharapter={obj.name} imagen={obj.image} house={obj.house} actor={obj.actor} ancestry={obj.ancestry} i={i}/>
				}
			})}
		{
			store.hufflepuff?.map((obj,i) => {
				if (obj.image != "") {
				return <Cards nameCharapter={obj.name} imagen={obj.image} house={obj.house} actor={obj.actor} ancestry={obj.ancestry} i={i}/>
				}
			})}
		{
			store.ravenclaw?.map((obj,i) => {
				if (obj.image != "") {
				return <Cards nameCharapter={obj.name} imagen={obj.image} house={obj.house} actor={obj.actor} ancestry={obj.ancestry} i={i}/>
				}
			})}
		</div>
		</div>
		<h2 className="my-1">Houses</h2>
		<div className="container-fluid text-center my-4" id="container-scroll">
        <div className="overflow-auto row flex-row flex-nowrap mt-4 pb-4 pt-2">
		   <CardHouse name="Gryffindor" image="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-gryffindor-harry-potter-61cm_12422_1.jpg" lema="Valued bravery, daring, nerve, and chivalry."/>
		   <CardHouse name="Hufflepuff" image="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-hufflepuff-harry-potter-61cm_12419_1.jpg" lema="Valued hard work, dedication, patience, loyalty, and fair play."/>
		   <CardHouse name="Ravenclaw" image="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-ravenclaw-harry-potter-61cm_12420_1.jpg" lema="Valued intelligence, knowledge, curiosity, creativity and wit."/>
		   <CardHouse name="Slytherin" image="https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg" lema="Valued ambition, leadership, self-preservation, cunning and resourcefulness."/>
		</div>
		</div>


		
	</div>
};
