import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  const { _id, category, description, imageurl, name, price, rating, stock } =
    item;

  const handleUpdateItem = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const imageurl = form.imageurl.value;

    const updatedItem = {
      name,
      category,
      description,
      price,
      rating,
      stock,
      imageurl,
    };
    console.log(updatedItem);

    // send data to the server
    fetch(`http://localhost:5000/item/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-slate-100 p-24 text-gray-700 font-serif">
      <h1 className="text-3xl font-extrabold">Update Equipment: {name}</h1>
      <form onSubmit={handleUpdateItem}>
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
                defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={description}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={stock}
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
                defaultValue={imageurl}
                placeholder="Image URL"
                className="input input-bordered text-slate-200 w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-slate-400 hover:bg-slate-500 text-gray-700 hover:text-gray-100"
        />
      </form>
    </div>
  );
};
