const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favH:[],
			favC:[],
			gryffindor:[],
			slytherin:[],
			hufflepuff:[],
			ravenclaw: [],
			houses: [{name: "Gryffindor", description:"Its emblematic animal was the lion, and its colours were scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as 'Nearly Headless Nick', was the House Ghost. The founder of the House was Godric Gryffindor. Gryffindor corresponded to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and was guarded by a portrait of The Fat Lady. She permitted entrance if given the correct password, which was changed numerous times throughout the school year.[4] Famous Gryffindors included Albus Dumbledore, Harry Potter,[4] and Minerva McGonagall.[5]"},
					{name:"Hufflepuff", description:" Its emblematic animal was the badger, and yellow and black were its colours. Pomona Sprout was the Head of Hufflepuff during 1991–1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff was currently unknown. The Fat Friar was its ghost. The founder of the House was Helga Hufflepuff.Hufflepuff corresponded to the element of earth. The Hufflepuff dormitories and common room were located somewhere in the basement, near the castle's kitchens. It could be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of 'Helga Hufflepuff' and was described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that led to the dormitories, which had perfectly round doors, similar to barrel tops."},
					{name:"Ravenclaw", description:" Its emblematic animal was the eagle, and its colours were blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw was the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponded to the element of air. The Ravenclaw common room and dormitories were located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, could be answered by non-Ravenclaws. Famous Ravenclaws included Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander."},
					{name:"Slytherin", description:"Was founded by Salazar Slytherin. Its emblematic animal was the serpent, and its colours were emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses hadn't produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw."}],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async() => {
				await fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
				.then(response => response.json())
				.then(data => {console.log(data)
				 setStore({gryffindor:data})})
				.catch(error => console.log('error', error));

				await fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
				.then(response => response.json())
				.then(data => {console.log(data)
				 setStore({slytherin:data})})
				.catch(error => console.log('error', error));

				await fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
				.then(response => response.json())
				.then(data => {console.log(data)
				 setStore({hufflepuff:data})})
				.catch(error => console.log('error', error));

				await fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
				.then(response => response.json())
				.then(data => {console.log(data)
				 setStore({ravenclaw:data})})
				.catch(error => console.log('error', error));
			},
			addFav: (name) =>{
				setStore({favH:[...getStore().favH, name] })
			},
			addFavC: (name) =>{
				setStore({favC:[...getStore().favC, name] })
			},
			deleteC: (name) =>{
				let newArray = getStore().favC.filter((valor) => {
					return valor != name;
				})
				setStore({favC:newArray})
			},
			deleteH: (name) =>{
				let newArray = getStore().favH.filter((valor) => {
					return valor != name;
				})
				setStore({favH:newArray})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
