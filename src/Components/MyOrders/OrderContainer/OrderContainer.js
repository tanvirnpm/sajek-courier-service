import React from 'react';

const OrderContainer = ({order, orderId, getOrderIdForDelete, index, activeOrder}) => {
    const {name, price} = order.order;
    // console.log('from order container', order)
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{order.status} <span className="btn btn-success btn-sm" onClick={()=> activeOrder(orderId)}>Active</span></td>
            <td><button onClick={() => getOrderIdForDelete(orderId)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button></td>
        </tr>
    );
};

export default OrderContainer;