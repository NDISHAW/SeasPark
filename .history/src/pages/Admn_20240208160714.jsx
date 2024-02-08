// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CareerForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [descriptionList, setDescriptionList] = useState([]);

//     const [rtitle, setRtitle] = useState("");
//     const [requirement, setRequirement] = useState("");
//     const [requirementList, setRequirementsList] = useState([]);

//   const handleAddDescription = () => {
//     setDescriptionList([...descriptionList, description]);
//     setDescription("");
//   };
//   const handleAddRequirement = () => {
//     setRequirementsList([...descriptionList, description]);
//     setRequirement("");
//   };  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSubmit({ title, descriptions: descriptionList });
//       setTitle("");
//       setDescription("");
//       setDescriptionList([]);
//     } catch (error) {
//       console.error("Error creating job opening:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//       />
//       <button type="button" onClick={handleAddDescription}>
//         Add Description
//       </button>
//       <ul>
//         {descriptionList.map((desc, index) => (
//           <li key={index}>{desc}</li>
//         ))}
//       </ul>

//       <input
//         type="text"
//         value={rtitle}
//         onChange={(e) => setRtitle(e.target.value)}
//         placeholder="title"
//         required
//       />
//       <textarea
//         value={requirement}
//         onChange={(e) => setRequirement(e.target.value)}
//         placeholder="requirement"
//       />
//       <button type="button" onClick={handleAddRequirement}>
//         Add Requirement
//       </button>
//       <ul>
//         {requirementList.map((desc, index) => (
//           <li key={index}>{desc}</li>
//         ))}
//       </ul>
//       <button type="submit">Add Job Opening</button>
//     </form>
//   );
// };

// const CareerList = ({ careers, onDelete }) => {
//   return (
//     <ul>
//       {careers.map((career) => (
//         <li key={career.id}>
//           <div>
//             <h3>{career.title}</h3>
//             <h3>{career.experience}</h3>
//             <h3>{career.location}</h3>
//             <h3>{career.address}</h3>
//             <h3>{career.location}</h3>
//             <p>Created at: {new Date(career.created_at).toLocaleString()}</p>
            
//             <ul>
//               {career.descriptions.map((desc, index) => (
//                 <li key={index}>{desc}</li>
//               ))}
//             </ul>
//             <ul>
//               {career.requirements.map((desc, index) => (
//                 <li key={index}>{desc}</li>
//               ))}
//             </ul>
//           </div>
//           <button onClick={() => onDelete(career.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Admn = () => {
//   const [careers, setCareers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/careers");
//         setCareers(response.data);
//       } catch (error) {
//         console.error("Error fetching job openings:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAddCareer = async (newCareer) => {
//     try {
//       const response = await axios.post("/api/careers", newCareer);
//       setCareers([...careers, response.data]);
//     } catch (error) {
//       console.error("Error adding job opening:", error);
//     }
//   };

//   const handleDeleteCareer = async (id) => {
//     try {
//       await axios.delete(`/api/careers/${id}`);
//       setCareers(careers.filter((career) => career.id !== id));
//     } catch (error) {
//       console.error("Error deleting job opening:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Job Openings</h2>
//       <CareerForm onSubmit={handleAddCareer} />
//       <CareerList careers={careers} onDelete={handleDeleteCareer} />
//     </div>
//   );
// };

// export default Admn;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CareerForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [descriptionList, setDescriptionList] = useState([]);
//   const [rtitle, setRtitle] = useState("");
//   const [requirement, setRequirement] = useState("");
//   const [requirementList, setRequirementList] = useState([]);

//   const handleAddDescription = () => {
//     setDescriptionList([...descriptionList, description]);
//     setDescription("");
//   };

//   const handleAddRequirement = () => {
//     setRequirementList([...requirementList, requirement]);
//     setRequirement("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSubmit({ title, descriptionList, requirementList });
//       setTitle("");
//       setDescription("");
//       setDescriptionList([]);
//       setRtitle("");
//       setRequirement("");
//       setRequirementList([]);
//     } catch (error) {
//       console.error("Error creating job opening:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//       />
//       <button type="button" onClick={handleAddDescription}>
//         Add Description
//       </button>
//       <ul>
//         {descriptionList.map((desc, index) => (
//           <li key={index}>{desc}</li>
//         ))}
//       </ul>

//       <input
//         type="text"
//         value={rtitle}
//         onChange={(e) => setRtitle(e.target.value)}
//         placeholder="title"
//         required
//       />
//       <textarea
//         value={requirement}
//         onChange={(e) => setRequirement(e.target.value)}
//         placeholder="requirement"
//       />
//       <button type="button" onClick={handleAddRequirement}>
//         Add Requirement
//       </button>
//       <ul>
//         {requirementList.map((desc, index) => (
//           <li key={index}>{desc}</li>
//         ))}
//       </ul>
//       <button type="submit">Add Job Opening</button>
//     </form>
//   );
// };

// const CareerList = ({ careers, onDelete }) => {
//   return (
//     <ul>
//       {careers.map((career) => (
//         <li key={career.id}>
//           <div>
//             <h3>{career.title}</h3>
//             <p>{career.description}</p>
//           </div>
//           <button onClick={() => onDelete(career.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Admn = () => {
//   const [careers, setCareers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/careers");
//         setCareers(response.data);
//       } catch (error) {
//         console.error("Error fetching job openings:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAddCareer = async (newCareer) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/careers",
//         newCareer
//       );
//       setCareers([...careers, response.data]);
//     } catch (error) {
//       console.error("Error adding job opening:", error);
//     }
//   };

//   const handleDeleteCareer = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/careers/${id}`);
//       setCareers(careers.filter((career) => career.id !== id));
//     } catch (error) {
//       console.error("Error deleting job opening:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Job Openings</h2>
//       <CareerForm onSubmit={handleAddCareer} />
//       <CareerList careers={careers} onDelete={handleDeleteCareer} />
//     </div>
//   );
// };
// export default Admn;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CareerForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState("");
//   const [address, setAddress] = useState("");
//   const [location, setLocation] = useState("");
//   const [experience, setExperience] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [descriptionList, setDescriptionList] = useState([]);

//   const handleAddDescription = () => {
//     setDescriptionList([...descriptionList, description]);
//     setDescription("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSubmit({ title, descriptions: descriptionList,address,location,experience,category });
//       setTitle("");
//       setAddress("");
//       setLocation("");
//       setExperience("");
//       setCategory("");
//       setDescription("");
//       setDescriptionList([]);
//     } catch (error) {
//       console.error("Error creating job opening:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         value={experience}
//         onChange={(e) => setExperience(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//       />
//       <button type="button" onClick={handleAddDescription}>
//         Add Description
//       </button>
//       <ul>
//         {descriptionList.map((desc, index) => (
//           <li key={index}>{desc}</li>
//         ))}
//       </ul>
//       <button type="submit">Add Job Opening</button>
//     </form>
//   );
// };

// const CareerList = ({ careers, onDelete }) => {
//   return (
//     <ul>
//       {careers.map((career) => (
//         <li key={career.id}>
//           <div>
//             <h3>{career.title}</h3>
//             <ul>
//               {career.descriptions &&
//                 career.descriptions.map((desc, index) => (
//                   <li key={index}>{desc}</li>
//                 ))}
//             </ul>
//           </div>
//           <button onClick={() => onDelete(career.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const CareerApp = () => {
//   const [careers, setCareers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/careers");
//         setCareers(response.data);
//       } catch (error) {
//         console.error("Error fetching job openings:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAddCareer = async (newCareer) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/careers", newCareer);
//       setCareers([...careers, response.data]);
//     } catch (error) {
//       console.error("Error adding job opening:", error);
//     }
//   };

//   const handleDeleteCareer = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/careers/${id}`);
//       setCareers(careers.filter((career) => career.id !== id));
//     } catch (error) {
//       console.error("Error deleting job opening:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Job Openings</h2>
//       <CareerForm onSubmit={handleAddCareer} />
//       <CareerList careers={careers} onDelete={handleDeleteCareer} />
//     </div>
//   );
// };

// export default CareerApp;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "../components";

const CareerForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionList, setDescriptionList] = useState([]);
  const [rtitle, setRtitle] = useState("");
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");

  const handleAddDescription = () => {
    setDescriptionList([...descriptionList, description]);
    setDescription("");
  };

  const handleAddRequirement = () => {
    setRequirementList([...requirementList, requirement]);
    setRequirement("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({
        title,
        descriptionList,
        requirementList,
        location,
        address,
        category,
        experience,
      });
      setTitle("");
      setDescription("");
      setDescriptionList([]);
      setRtitle("");
      setRequirement("");
      setRequirementList([]);
      setLocation("");
      setAddress("");
      setCategory("");
      setExperience("");
    } catch (error) {
      console.error("Error creating job opening:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row gx-20 form-style1">
      <div className="col-md-6 form-group">
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
        <List>
          {descriptionList.map((desc, index) => (
            <List.Item key={index}>
              <i className="fas fa-check-circle" />
              {desc}
            </List.Item>
          ))}
        </List>
      </div>
      <div className="col-md-6 form-group">
        <input
          type="text"
          value={rtitle}
          onChange={(e) => setRtitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Requirement"
        />
        <button type="button" onClick={handleAddRequirement}>
          Add Requirement
        </button>
        <div className="col-md-6 form-group">
        <ul>
          {requirementList.map((req, index) => (
            <List.Item key={index}>
              <i className="fas fa-check-circle" />
              {req}
            </List.Item>
          ))}
        </ul></div>
      </div>
<div className="col-md-6 form-group">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        required
      />

      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
      />

      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />

      <input
        type="text"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Experience"
        required
      />

      <button type="submit">Add Job Opening</button>
    </form>
  );
};

const CareerList = ({ careers, onDelete }) => {
  return (
    <ul >
      {careers.map((career) => (
        <List key={career.id}>
          <div>
            <h3>{career.title}</h3>
            <h3>{career.experience}</h3>
            <h3>{career.location}</h3>
            <h3>{career.address}</h3>
            <p>Created at: {new Date(career.created_at).toLocaleString()}</p>
            <p>
              <List>
                {career.descriptions.map((desc, index) => (
                  <List.Item key={index}>
                    <i className="fas fa-check-circle" />
                    {desc}
                  </List.Item>
                ))}
              </List>
              {/* <h3>{career.requirement.title}</h3> */}
              <List>
                {career.requirements.map((req, index) => (
                  <List.Item key={index}>
                    <i className="fas fa-check-circle" />
                    {req}
                  </List.Item>
                ))}
              </List>
            </p>
          </div>
          <button onClick={() => onDelete(career.id)}>Delete</button>
        </List>
      ))}
    </ul>
  );
};

const Admin = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/careers");
        setCareers(response.data);
      } catch (error) {
        console.error("Error fetching job openings:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddCareer = async (newCareer) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/careers",
        newCareer
      );
      setCareers([...careers, response.data]);
    } catch (error) {
      console.error("Error adding job opening:", error);
    }
  };

  const handleDeleteCareer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/careers/${id}`);
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

export default Admin;