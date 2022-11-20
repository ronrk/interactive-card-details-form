import React, { useState } from "react";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import Form from "./Components/Form/Form";

const App = () => {
  const [values, setValues] = useState({});

  const handleValuesChange = (name, value) => {
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="app-container">
      <CardsContainer {...values} />
      <Form handleChange={handleValuesChange} />
    </div>
  );
};

export default App;
