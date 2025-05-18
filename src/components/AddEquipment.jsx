import React from "react";
import Swal from "sweetalert2";

export const AddEquipment = () => {
  const handleAddItem = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const imageurl = form.imageurl.value;

    const newItem = {
      name,
      category,
      description,
      price,
      rating,
      stock,
      imageurl,
    };
    console.log(newItem);

    // send data to the server
    fetch("http://localhost:5000/item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-slate-100 p-24 text-gray-700 font-serif">
      <h1 className="text-3xl font-extrabold">Add Equipment</h1>
      <form onSubmit={handleAddItem}>
        {/* form name & category row */}
        <div className="md:flex gap-3 mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
        </div>
        {/* form Description & Price row */}
        <div className="md:flex gap-3 mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
        </div>
        {/* form Rating & Stock Status row */}
        <div className="md:flex gap-3 mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stock"
                placeholder="Stock"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
        </div>
        {/* form image url row */}
        <div className="gap-3 mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="imageurl"
                placeholder="Image URL"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-block bg-slate-400 hover:bg-slate-500 text-gray-700 hover:text-gray-100"
        />
      </form>
    </div>
  );
};
