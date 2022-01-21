import React from "react";
import { useSelector } from "react-redux";

function AdminListItem() {
  const order = useSelector((store) => store.orderReducer);

  return (
    <>
      <td>{order.customer_name}</td>
      <td>{order.time}</td>
      <td>{order.type}</td>
      <td>{order.total}</td>
    </>
  );
}

export default AdminListItem;
