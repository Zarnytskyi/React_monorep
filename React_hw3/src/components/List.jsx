import React, { useState } from 'react'
import '../style.css';

const List = () => {
    const [people, setPeople] = useState([
        { id: 1, name: 'Иван', age: 20 },
        { id: 2, name: 'Мария', age: 22 },
        { id: 3, name: 'Алексей', age: 21 },
        { id: 4, name: 'Марина', age: 19 },
        { id: 5, name: 'Даша', age: 23 },   
        { id: 6, name: 'Глеб', age: 24 },   
        { id: 7, name: 'Дима', age: 18 },    
        { id: 8, name: 'Гриша', age: 20 },    
        { id: 9, name: 'Серафим', age: 21 }
      ]);
      const handleDelete =(id)=>{
        setPeople(people.filter((person)=>person.id!==id))
        console.log(id)
      }
  return (
    <div className='con'>
        <h1>Список людей</h1>
        <ol>
            {people.map((person) => {
                return (
                    <li key={person.id}>
                        {person.name} - {person.age} лет
                        <button onClick={()=>handleDelete(person.id)}>Delete</button>
                    </li>
                )
            })}
        </ol>
    </div>
  )
}

export default List