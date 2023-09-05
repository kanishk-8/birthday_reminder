import React from "react";

function BirthdayList({ birthdays, removeBirthday }) {
  const yourBirthday = {
    name: "Abhishek choudhary",
    date: "2004-01-28",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/364525122_870467214502986_6484205720159841995_n.jpg?ccb=11-4&oh=01_AdRtVh_fUWQeJJ48MTpP2yoiKfcd1LhWmnH9BUHqrvmcOQ&oe=64F6AB2E&_nc_cat=100",
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
                <button onClick={() => removeBirthday(birthday.name)}>
                  Remove
                </button>
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="birthday">
            <div className="birthday-details">
              <img
                src={birthday.image}
                alt={`${birthday.name}'s Image`}
                style={{ width: "400px", height: "350px" }}
              />
              <div>
                <p>{birthday.name}</p>
                <p>{birthday.date}</p>
              </div>
              <button onClick={() => removeBirthday(birthday.name)}>
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
