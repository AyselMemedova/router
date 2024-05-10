import axios from "axios";
import React, { useContext } from "react";
import MainContext from "../../../context/context";
// import toast  from 'react-hot-toast';

const TableItem = ({ item, index }) => {

    const { data, setData } = useContext(MainContext)
    const deleteItem = (id) => {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(resp => {
                setData([...data.filter(x => x.id !== resp.data.id)])
                //   toast.success('item silindi')
            })

    };

    return (<>
        <tr>
            {/* <th scope="row">{index + 1}</th> */}
            <th scope="row">{item.id}</th>

            <td>
                <img
                    style={{ width: "60px", height: "60px" }}
                    src={item.image}
                    alt=""
                />
            </td>
            <td>{item.name}</td>
            <td>{item.price} $</td>
            <td>
                <button className="btn btn-warning m-0">Edit</button>
            </td>
            <td>
                <button className="btn btn-danger m-0" onClick={() => {
                    deleteItem(item.id)
                }}>Delete</button>
            </td>
        </tr>
        
    </>


    );
};

export default TableItem;