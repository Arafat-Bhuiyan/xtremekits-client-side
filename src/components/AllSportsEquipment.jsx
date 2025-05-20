import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AllSportsEquipment = () => {
  const loadedItems = useLoaderData();
  const navigate = useNavigate();
  const [items, setItems] = useState(loadedItems);
  console.log(items);

  const handleViewDetails = (_id) => {
    navigate(`/items/${_id}`);
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = items.filter((p) => p._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-slate-100 text-gray-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">All Sports Equipment</h1>
      <p className="text-gray-600 mb-6">
        Manage your products from the table below
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow">
          <thead className="bg-slate-200 text-sm text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium">{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4 text-green-600 font-semibold">
                  ${item.price}
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded"
                  >
                    View Details
                  </button>
                  <Link
                    to={`/update-item/${item._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
