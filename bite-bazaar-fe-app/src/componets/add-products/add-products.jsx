import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../axios/axios";
import { showAppAlert } from "../../store/app-alert/app-alert-slice";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectCategory, setSelectCatgory] = useState("");

  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    const dataObj = {
      name,
      oldPrice,
      newPrice,
      image,
      selectCategory
    };
    console.log(dataObj);
    try {
      const response = await axios.post("/user/add-product", dataObj);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }

  };

  const handleImageUpload = async () => {
    dispatch(showAppAlert('Product added successfully'))
  };

  return (
    <>
      <Grid className="mx-3 mt-3 border-bottom">
        <h1 className="fw-bold text-success">
          Bite <span className="text-secondary">Bazaar</span>
        </h1>
      </Grid>
      <div className="width-100 d-flex justify-content-center mt-5">

        <form onSubmit={formDataHandler}>
          <div className="d-flex flex-column fw-bold mt-3" >
            <label>Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="d-flex flex-column fw-bold mt-3">
            <label>Old Price</label>
            <input
              type="number"
              value={oldPrice}
              onChange={(e) => {
                setOldPrice(e.target.value);
              }}
              required
            />
          </div>

          <div className="d-flex flex-column fw-bold mt-3">
            <label>New Price</label>
            <input
              type="text"
              value={newPrice}
              onChange={(e) => {
                setNewPrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="d-flex flex-column fw-bold mt-3">
            <label>Upload Image</label>
            <input type="file" onChange={handleImageChange} required/>
          </div>
          <div className="d-flex flex-column fw-bold mt-3" >
            <label>Select Category</label>
            <select onChange={(e) => setSelectCatgory(e.target.value)}>
              <option>Select Category</option>
              <option value="Baked">Baked</option>
              <option value="Fresh">Fresh</option>
              <option value="Pantry">Pantry</option>
            </select>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-success" onClick={handleImageUpload}>Upload Image</button>
          </div>
        </form>
      </div>
    </>

  );
};

export default CreateProduct;
