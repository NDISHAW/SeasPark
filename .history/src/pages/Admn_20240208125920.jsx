import React, { useState, useEffect } from "react";
import axios from "axios";


const CareerForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ title, description });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating job opening:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Job Opening</button>
    </form>
  );
};

const CareerList = ({ careers, onDelete }) => {
  return (
    <ul>
      {careers.map((career) => (
        <li key={career.id}>
          <div>
            <h3>{career.title}</h3>
            <p>{career.description}</p>
          </div>
          <button onClick={() => onDelete(career.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const CareerApp = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/careers");
        setCareers(response.data);
      } catch (error) {
        console.error("Error fetching job openings:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddCareer = async (newCareer) => {
    try {
      const response = await axios.post("/api/careers", newCareer);
      setCareers([...careers, response.data]);
    } catch (error) {
      console.error("Error adding job opening:", error);
    }
  };

  const handleDeleteCareer = async (id) => {
    try {
      await axios.delete(`/api/careers/${id}`);
      setCareers(careers.filter((career) => career.id !== id));
    } catch (error) {
      console.error("Error deleting job opening:", error);
    }
  };

  return (
    <div>
      <h2>Job Openings</h2>
      <CareerForm onSubmit={handleAddCareer} />
      <CareerList careers={careers} onDelete={handleDeleteCareer} />
    </div>
  );
};
