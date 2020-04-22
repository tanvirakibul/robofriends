import React from 'react';


// class Card extends React.Component{
// 	render(){
// 		return(
			
// 			<div>

// 			<h1> Hello </h1>

// 			</div>



// 			)
// 	}
// }



const Card = ({id, name, email}) =>{

	return(

		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

		<img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>


		<div>

		<h4> {name} </h4>
		<p> {email} </p>
		</div>

		</div>

		)
}


export default Card;