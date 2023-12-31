import './Persons.css'

const Persons = ({persons, filter, handleDelete}) => {
    return (
        <>
            <h2 className='filtered-numbers'>Filtered Numbers</h2>
            
            {/* use regex to test for alphabetical name search */}
            <ul>
                {persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0 && /^[1-zA-Z]+$/.test(filter)).map(person => <li key={person.name} className='phone-entry'>{person.name} {person.number}</li>)}
            </ul>

            <br />
            <h2 className='all-numbers'>All Numbers</h2>
            <ul>
                {persons.map(person => <li key={person.name}>{person.name} {person.number} <button onClick={()=>handleDelete(person)}>delete</button></li>)}
            </ul>
        </>
    )
}

export default Persons