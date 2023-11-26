import React from "react";
import "./Form.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [dest, setDest] = useState("");

  const [orderId, setOrderId] = useState(null);

  const params = useParams();

  console.log(params);

  useEffect(() => {
    if (params && params.id) {
      setOrderId(params.id);
      getOrderById(params.id);
    } else {
      setOrderId(null);
    }
  }, [params]);

  const getOrderById = async (orderId) => {
    try {
      const response = await axios.get("http://localhost:5000/api/order/" + orderId);
      const orderData = response.data;

      setName(orderData.name);
      setWeight(orderData.weight);
      setColor(orderData.color);
      setDest(orderData.dest);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      weight: weight,
      color: color,
      dest: dest,
    };
    console.log(data);
    try {
      let response;
      if (orderId) {
        response = await axios.put("http://localhost:5000/api/order/" + orderId,data);
      } else {
        response = await axios.post("http://localhost:5000/api/order", data);
      }
      alert(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h1>Shipping Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Weight</label>
        <input
          type="number"
          placeholder="Weight in kgs only"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <label>Enter the Color</label>
        <input
          type="color"
          className="color"
          placeholder="Enter the color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <label htmlFor="phone">Destination</label>
        <select
          className="test"
          id="dest"
          required
          value={dest}
          onChange={(e) => setDest(e.target.value)}
        >
          <option value="Country">Select Country</option>
          <option value="Sweden">Sweden(7.35 INR)</option>
          <option value="China">China(11.53 INR)</option>
          <option value="Brazil">Brazil(15.63 INR)</option>
          <option value="Australia">Australia(50.09 INR)</option>
        </select>
        <div className="divb">
        <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
