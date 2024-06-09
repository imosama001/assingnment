import React, { useState } from "react";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import FormRenderer from "./components/FormRenderer";

const App = () => {
  const [formData, setFormData] = useState([]);
  const fetchFormData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/formdata"); // Assuming your Node.js server is running on the same host
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch data");
    }
  };
  const { data, error, isLoading } = useQuery("formData", fetchFormData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h1>Dynamic Form</h1>
      <FormRenderer formData={data} />
    </Container>
  );
};

export default App;
