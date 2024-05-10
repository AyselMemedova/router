import React  from "react";
import TableItem from "../TableItem/TableItem";

const Table = ({items}) => {
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            items.map((item,index)=>{
            return(<TableItem key={index} item={item} index={index} />)
        })
        }
      </tbody>
    </table>
  );
};

export default Table;