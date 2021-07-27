import React from 'react';


const Pages = ({itemsPerPage, totalItems, paginate}) => {

	const pageNumbers = populatePagenumbers(totalItems, itemsPerPage)

	return (
		<ul className='pagination'>
			{pageNumbers.map(pageNumber => (
				<li key={pageNumber} className='page-item'>
					<a onClick={() => paginate(pageNumber)} className='page-link' href='!#' >
						{pageNumber}
					</a>
				</li>
			))}
		</ul>
	)

}

const populatePagenumbers = (totalItems, itemsPerPage) => {
	let pageNumbers = [];
	for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
		pageNumbers.push(i);
	}

	return pageNumbers
}

export default Pages;