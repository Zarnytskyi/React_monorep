import React from 'react'

const ShoppingList = ({item}) => {
  return (
    <div>ShoppingList
        <ol>
            {item.map((items)=>(
                <li>{items}</li>
            ))}
        </ol>
    </div>
  )
}

export default ShoppingList