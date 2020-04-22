import React from 'react';





const searchBox = ({searchField, searchChange}) => {
	return (

		<div className = 'pa3'>


			<input className = 'pa3 ba b--green bg-lightest-blue'
			type='Search' placeholder='Search Robots' onChange = {searchChange} />

		</div>


		);
}


export default searchBox;