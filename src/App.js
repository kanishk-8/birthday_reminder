import React, { useState, useEffect } from "react";
import "./App.css";
import BirthdayForm from "./BirthdayForm";
import BirthdayList from "./BirthdayList";

function App() {
  const [birthdays, setBirthdays] = useState([
    {
      name: "kanishk",
      date: "2004-02-02",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU57z9aLTJXlXqOWMiyhEgIaOWkODdUZtEZA0TJ1qu4XAh58aA3dj6m593rxF7oLAGEqg&usqp=CAU",
    },
    {
      name: "Narendra Modi",
      date: "1950-9-17",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QGcRXhpZgAASUkqAAgAAAACAA4BAgBdAQAAJgAAAJiCAgARAAAAgwEAAAAAAABTWURORVksIEFVU1RSQUxJQSAtIE1BWSAyNDogSW5kaWFuIFByaW1lIE1pbmlzdGVyIE5hcmVuZHJhIE1vZGkgc3BlYWtzIGF0IGEgam9pbnQgbmV3cyBjb25mZXJlbmNlIHdpdGggQXVzdHJhbGlhbiBQcmltZSBNaW5pc3RlciBBbnRob255IEFsYmFuZXNlIChSKSBhdCBBZG1pcmFsdHkgSG91c2Ugb24gTWF5IDI0LCAyMDIzIGluIFN5ZG5leSwgQXVzdHJhbGlhLiBNb2RpIGlzIHZpc2l0aW5nIEF1c3RyYWxpYSBvbiB0aGUgaGVlbHMgb2YgaGlzIGFuZCBBbGJhbmVzZSdzIHBhcnRpY2lwYXRpb24gaW4gdGhlIEc3IHN1bW1pdCBpbiBKYXBhbi4gKFBob3RvIGJ5IFNhZWVkIEtoYW4tUG9vbC9HZXR0eSBJbWFnZXMpMjAyMyBHZXR0eSBJbWFnZXP/7QGuUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAZIcAlAABFBvb2wcAngBXVNZRE5FWSwgQVVTVFJBTElBIC0gTUFZIDI0OiBJbmRpYW4gUHJpbWUgTWluaXN0ZXIgTmFyZW5kcmEgTW9kaSBzcGVha3MgYXQgYSBqb2ludCBuZXdzIGNvbmZlcmVuY2Ugd2l0aCBBdXN0cmFsaWFuIFByaW1lIE1pbmlzdGVyIEFudGhvbnkgQWxiYW5lc2UgKFIpIGF0IEFkbWlyYWx0eSBIb3VzZSBvbiBNYXkgMjQsIDIwMjMgaW4gU3lkbmV5LCBBdXN0cmFsaWEuIE1vZGkgaXMgdmlzaXRpbmcgQXVzdHJhbGlhIG9uIHRoZSBoZWVscyBvZiBoaXMgYW5kIEFsYmFuZXNlJ3MgcGFydGljaXBhdGlvbiBpbiB0aGUgRzcgc3VtbWl0IGluIEphcGFuLiAoUGhvdG8gYnkgU2FlZWQgS2hhbi1Qb29sL0dldHR5IEltYWdlcykcAnQAETIwMjMgR2V0dHkgSW1hZ2VzHAJuAAxHZXR0eSBJbWFnZXP/4QZzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyMyBHZXR0eSBJbWFnZXMiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEyNTc2NzIwNzEiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+UG9vbDwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+U1lETkVZLCBBVVNUUkFMSUEgLSBNQVkgMjQ6IEluZGlhbiBQcmltZSBNaW5pc3RlciBOYXJlbmRyYSBNb2RpIHNwZWFrcyBhdCBhIGpvaW50IG5ld3MgY29uZmVyZW5jZSB3aXRoIEF1c3RyYWxpYW4gUHJpbWUgTWluaXN0ZXIgQW50aG9ueSBBbGJhbmVzZSAoUikgYXQgQWRtaXJhbHR5IEhvdXNlIG9uIE1heSAyNCwgMjAyMyBpbiBTeWRuZXksIEF1c3RyYWxpYS4gTW9kaSBpcyB2aXNpdGluZyBBdXN0cmFsaWEgb24gdGhlIGhlZWxzIG9mIGhpcyBhbmQgQWxiYW5lc2UmYXBvcztzIHBhcnRpY2lwYXRpb24gaW4gdGhlIEc3IHN1bW1pdCBpbiBKYXBhbi4gKFBob3RvIGJ5IFNhZWVkIEtoYW4tUG9vbC9HZXR0eSBJbWFnZXMpPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvMTI1NzY3MjA3MT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/Pgr/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAT4BPgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEEBQYD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",
    },
    {
      name: "Amit shah",
      date: "1964-10-22",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);

  const addBirthday = (newBirthday) => {
    setBirthdays([...birthdays, newBirthday]);
  };

  const removeBirthday = (name) => {
    const updatedBirthdays = birthdays.filter(
      (birthday) => birthday.name !== name
    );
    setBirthdays(updatedBirthdays);
  };

  useEffect(() => {
    const storedBirthdays = JSON.parse(localStorage.getItem("birthdays"));
    if (storedBirthdays) {
      setBirthdays(storedBirthdays);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("birthdays", JSON.stringify(birthdays));
  }, [birthdays]);

  return (
    <div className="reminder-pannel">
      <h1 className="heading">Birthday Reminder</h1>
      <br />
      <BirthdayForm addBirthday={addBirthday} />

      <BirthdayList birthdays={birthdays} removeBirthday={removeBirthday} />
    </div>
  );
}

export default App;
