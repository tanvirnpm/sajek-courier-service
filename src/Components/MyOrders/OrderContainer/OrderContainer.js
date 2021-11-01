import React from 'react';

const OrderContainer = ({order, orderId, getOrderIdForDelete, index}) => {
    const {name, price} = order.order;
    // console.log('from order container', order)
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{order.status}</td>
            <td><button onClick={() => getOrderIdForDelete(orderId)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button></td>
        </tr>
    );
};

export default OrderContainer;