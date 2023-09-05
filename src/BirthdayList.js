import React from "react";

function BirthdayList({ birthdays, removeBirthday }) {
  const yourBirthday = {
    name: "kanishk",
    date: "2004-02-02",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU57z9aLTJXlXqOWMiyhEgIaOWkODdUZtEZA0TJ1qu4XAh58aA3dj6m593rxF7oLAGEqg&usqp=CAU",
  };
  const allBirthdays = [yourBirthday, ...birthdays];

  return (
    <div className="birthday-list">
      {allBirthdays.map((birthday, index) => {
        const birthDate = new Date(birthday.date);
        const today = new Date();

        if (
          birthDate.getDate() === today.getDate() &&
          birthDate.getMonth() === today.getMonth()
        ) {
          return (
            <div key={index} className="birthday">
              <div className="birthday-details">
                <img src={birthday.image} alt={`${birthday.name}'s Image`} />
                <div>
                  <p>{birthday.name}</p>
                  <p>{birthday.date}</p>
                  <p>Happy birthday! May God bless you!</p>
                </div>
                <button
                  class="btn btn-outline-danger"
                  onClick={() => removeBirthday(birthday.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="birthday">
            <div className="birthday-details media">
              <img
                src={birthday.image}
                alt={`${birthday.name}'s Image`}
                style={{ width: "400px", height: "350px" }}
              />
              <div>
                <p>{birthday.name}</p>
                <p>{birthday.date}</p>
              </div>
              <button
                class="btn btn-outline-danger "
                onClick={() => removeBirthday(birthday.name)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BirthdayList;
