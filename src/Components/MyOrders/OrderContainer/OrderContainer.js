import React from 'react';

const OrderContainer = ({order, orderId, getOrderIdForDelete}) => {
    const {name, price} = order;
    return (
        <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>Pending</td>
            <td><button onClick={() => getOrderIdForDelete(orderId)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button></td>
        </tr>
    );
};

export default OrderContainer;