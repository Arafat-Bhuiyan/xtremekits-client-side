import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AllSportsEquipment = () => {
  const items = useLoaderData();
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:5000/item/${id}`, {
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
                  {item.price}
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded"
                  >
                    View Details
                  </button>
                  <Link
                    to={`/updateItem/${item._id}`}
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

// import React from "react";
// import { useLoaderData } from "react-router-dom";

// export const AllSportsEquipment = () => {
//   const items = useLoaderData()
//   return (
//     <div className="bg-slate-100 text-gray-700">
//       <div className="p-9">
//         <h1 className="font-bold text-xl pl-4">All Sports Equipment</h1>
//         <p className="font-light text-xs text-gray-500 pl-4">
//           Browse through our collection of must-haves
//         </p>
//         <div className="grid md:grid-cols-3 gap-4 px-4">
//           {/* Cards */}
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="card w-96 mt-4 bg-slate-100 shadow-xl"
//             >
//               <figure>
//                 <img src={item.imageurl} alt="Shoes" />
//               </figure>
//               <div className="card-body bg-white rounded-lg">
//                 <h2 className="card-title text-2xl">{item.name}</h2>
//                 <p className="text-gray-500 font-semibold text-lg">
//                   Price: {item.price}
//                 </p>
//                 <p className="text-gray-500 font-semibold text-lg">
//                   Rating: {item.rating}
//                 </p>
//                 <p className="text-gray-500 font-semibold text-lg">
//                   Stock: {item.stock}
//                 </p>
//                 <div className="card-actions flex justify-center">
//                   <button className="bg-slate-600 hover:bg-slate-700 rounded-xl w-[35%] h-10 text-sm text-slate-100 font-bold font-sans">
//                     View Details
//                   </button>
//                   <button className="bg-slate-600 hover:bg-slate-700 rounded-xl w-[25%] h-10 text-sm text-slate-100 font-bold font-sans">
//                     Edit
//                   </button>
//                   <button className="bg-slate-600 hover:bg-slate-700 rounded-xl w-[15%] h-10 text-sm text-slate-100 font-bold font-sans">
//                     X
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
