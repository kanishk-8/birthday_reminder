import React, { useState } from "react";

function BirthdayForm({ addBirthday }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && image) {
      addBirthday({ name, date, image });
      setName("");
      setDate("");
      setImage("");
    }
  };

  return (
    <div className="birthday-form">
      <h2 style={{ fontweight: "bold" }}>Add a New Birthday</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Birthday</button>
      </form>
    </div>
  );
}

export default BirthdayForm;
