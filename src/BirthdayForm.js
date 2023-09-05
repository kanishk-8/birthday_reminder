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
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control"
          type="date"
          placeholder="date-of-birth"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="form-control"
          type="text"
          placeholder="image-url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button type="submit" class="btn btn-outline-light btn-block ">
          Add Birthday to list
        </button>
      </form>
    </div>
  );
}

export default BirthdayForm;
