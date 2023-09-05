import React from "react";

function BirthdayList({ birthdays, removeBirthday }) {
  const yourBirthday = {
    name: "salman khan",
    date: "1965-09-06",
    image:
      "https://pbs.twimg.com/profile_images/1562753790369218560/wtiHWrkG_400x400.jpg",
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
                <img
                  className="rounded "
                  src={birthday.image}
                  alt={`${birthday.name}'s Image`}
                />
                <div className="info">
                  <p>{birthday.name}</p>
                  <p>{birthday.date}</p>
                </div>
                <p className="happy">
                  Happy birthday {birthday.name}! May God bless you!
                </p>
                <button
                  class="btn btn-outline-danger btn-lg"
                  onClick={() => removeBirthday(birthday.name)}
                >
                  Remove
                </button>
                <br />
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="birthday">
            <div className="birthday-details media">
              <img
                className="rounded "
                src={birthday.image}
                alt={`${birthday.name}'s Image`}
                style={{ width: "400px", height: "350px" }}
              />
              <div className="info">
                <p>{birthday.name}</p>
                <p>{birthday.date}</p>
              </div>
              <button
                class="btn btn-outline-danger btn-lg "
                onClick={() => removeBirthday(birthday.name)}
              >
                Remove
              </button>
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BirthdayList;
