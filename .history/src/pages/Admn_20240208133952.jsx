import React, { useState, useEffect } from "react";
import axios from "axios";

const CareerForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionList, setDescriptionList] = useState([]);

  const handleAddDescription = () => {
    setDescriptionList([...descriptionList, description]);
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ title, descriptions: descriptionList });
      setTitle("");
      setDescription("");
      setDescriptionList([]);
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
      />
      <button type="button" onClick={handleAddDescription}>
        Add Description
      </button>
      <ul>
        {descriptionList.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
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
            <h3>{career.title}</h3>
            <p>Created at: {new Date(career.created_at).toLocaleString()}</p>
            <p>Created at: {new Date(career.created_at).toLocaleString()}</p>
            <ul>
              {career.descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <ul>
              {career.requirements.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => onDelete(career.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const Admn = () => {
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

export default Admn;
