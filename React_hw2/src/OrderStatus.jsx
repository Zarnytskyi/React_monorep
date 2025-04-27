import React from 'react'

const OrderStatus = ({items}) => {
  return (
    <div>
        <h2>Order Status</h2>
        <ul>
            {items.map((order)=>(
                <li>
                    Order Id: #{order.orderId}
                    <br/>
                    Status: {order.status}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default OrderStatus