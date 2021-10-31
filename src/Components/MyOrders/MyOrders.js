import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import OrderContainer from './OrderContainer/OrderContainer';
import '../ManageAllOrders/ManageAllOrders.css'

const MyOrders = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [myOrders, setMyOrders] = useState([]);
    const [orderId, setOrderId] = useState({})
    // console.log('after login', loggedUser.user.email)
    const loggedUserEmail = {
        email: loggedUser.user.email
    };
    useEffect(() => {
        fetch('http://localhost:5000/getMyOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loggedUserEmail)
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    // console.log('my order list', myOrders._id)

    // set single order id
    const getOrderIdForDelete = id => {
        setOrderId(id);
    }


    // delete order by order id
    const deleteOrderByOrderId = (id) => {
        const finalOrderId = {
            o_id: id
        }
        fetch('http://localhost:5000/deleteOrderByOrderId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalOrderId)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        // console.log(id)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="text-center py-3">My Orders List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(order => <OrderContainer getOrderIdForDelete={getOrderIdForDelete} orderId={order._id} key={order._id} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <h5 className="modal-title w-100">Are you sure?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Do you really want to delete these records? This process cannot be undone.</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={() => deleteOrderByOrderId(orderId)} type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;