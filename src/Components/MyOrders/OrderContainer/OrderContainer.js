import React from 'react';

const OrderContainer = ({order, orderId, getOrderIdForDelete, index, activeOrder}) => {
    const {name, price} = order.order;
    // console.log('from order container', order)
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{price}</td>
            {order.status == 'Pending' && <td className="text-white"><span className="bg-danger rounded-pill px-2 py-1">{order.status}</span></td>}
            {order.status == 'Active' && <td className="text-white"><span className="bg-success rounded-pill px-2 py-1">{order.status}</span></td>}
            <td>
                <button onClick={() => getOrderIdForDelete(orderId)} className="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete</button>
                {
                    order.status == 'Active'?'':<button onClick={()=> activeOrder(orderId)} className="btn btn-sm btn-success">Approved</button>
                }
            </td>
        </tr>
    );
};

export default OrderContainer;