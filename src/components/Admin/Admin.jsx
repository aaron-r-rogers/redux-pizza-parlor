import React from "react";
import { useSelector } from "react-redux";
import "./Admin.css";
import AdminListItem from "./AdminListItem";
import { useEffect } from "react";

function Admin() {
  const orders = useSelector((store) => store.orderReducer);
  return (
    <div>
      <header className="adminHeader">
        <h1>Prime Pizza Orders</h1>
      </header>

      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Time Order Placed</td>
            <td>Type</td>
            <td>Cost</td>
          </tr>
          <tr>
            {orders.map((order, i) => {
              return <AdminListItem key={i} order={order} />;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
