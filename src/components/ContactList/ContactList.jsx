
export const ContactList = ({ contacts, onClick}) => {
	return (
		<ul>
			{contacts.map(({id, name, number}) => {
				return (<li key={id}> {name}: {number}
					<button type='button' onClick={() => {onClick(id)}}>Delete</button></li>)
			})}
		</ul>
	)
}