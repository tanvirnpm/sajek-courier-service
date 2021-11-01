import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderContainer from '../MyOrders/OrderContainer/OrderContainer';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './ManageAllOrders.css';


const ManageAllOrders = () => {
    const [loggeduser, setLoggedUser] = useContext(UserContext);
    const [allOrders, setAllOrders] = useState([])
    const [orderId, setOrderId] = useState({})
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    useEffect(() => {
        fetch('https://fierce-cliffs-54848.herokuapp.com/getAllOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    // console.log('all orders', allOrders)
    // set single order id
    const getOrderIdForDelete = id => {
        // console.log(id)
        setOrderId(id);
    }


    // delete order by order id
    const deleteOrderByOrderId = (id) => {
        const finalOrderId = {
            o_id: id
        }
        fetch('https://fierce-cliffs-54848.herokuapp.com/deleteOrderByOrderId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalOrderId)
        })
            .then(res => res.json())
            .then(result => result.acknowledged && setDeleteConfirm(true))
        // console.log(id)
    }
    // active order now
    const activeOrder = id => {
        fetch(`http://localhost:5000/orderActive/${id}`)
        .then(res=>res.json())
        .then(result => console.log(result))
    }
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center py-3">Manage All Orders</h1>
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
                            allOrders.map(order => <OrderContainer activeOrder={activeOrder} orderId={order._id} key={order._id} getOrderIdForDelete={getOrderIdForDelete} order={order} />)
                        }

                    </tbody>
                </table>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <h5 className="modal-title w-100">{deleteConfirm? <span className="text-success">Order Has been deleted</span> : 'Are you sure?'}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {deleteConfirm?'':<div className="modal-body">
                            <p>Do you really want to delete these records? This process cannot be undone.</p>
                        </div>}
                        <div className="modal-footer justify-content-center">
                            <button type="button" onClick={()=> setDeleteConfirm(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {deleteConfirm?'':<button onClick={() => deleteOrderByOrderId(orderId)} type="button" className="btn btn-danger">Delete</button>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ManageAllOrders;