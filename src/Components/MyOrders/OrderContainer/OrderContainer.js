import React from 'react';

const OrderContainer = ({order, orderId, getOrderIdForDelete, index, activeOrder}) => {
    const {name, price} = order.order;
    // console.log('from order container', order)
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td className="text-danger">{order.status}</td>
            <td>
                <button onClick={() => getOrderIdForDelete(orderId)} className="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button>
                <button className="btn btn-sm btn-success">Approved</button>
            </td>
        </tr>
    );
};

export default OrderContainer;