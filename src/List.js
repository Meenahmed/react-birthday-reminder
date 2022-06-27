import React from 'react';

const List = ({ people, removePerson }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article key={id} className='person'>
						<div className='image-con'>
							<img src={image} />
						</div>
						<div className='info'>
							<div>
								<h4>{name}</h4>
								<p>{age}</p>
							</div>
							<button
								className='btn remove-btn'
								onClick={() => removePerson(id)}
							>
								remove
							</button>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
