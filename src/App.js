import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		const newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};
	return (
		<main>
			<section className='container'>
				<h3>{people.length} birthdays coming up</h3>
				<List people={people} removePerson={removePerson} />
				<button className='btn' onClick={() => setPeople([])}>
					{people.length === 0 ? 'no upcoming birthday' : 'clear all'}
				</button>
			</section>
		</main>
	);
}

export default App;
