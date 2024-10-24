import React from "react";
import "./App.css";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import UpdateCounterSeprate from "./components/UpdateCounterSeprate";


function App() {
  const courses = [
    {
      id: 1,
      title: "JAVA",
      price: 2500,
    },
    {
      id: 2,
      title: "Python",
      price: 4000,
    },
    {
      id: 3,
      title: "HTML",
      price: 2500,
    },
    {
      id: 4,
      title: "Javascript",
      price: 4000,
    },
  ];

  const getListItem = courses.map((course) => (
    <li key={course.id}>
      {course.title} | {course.price}
    </li>
  ));

  const purchase = () => console.log("Course is purchased...");

  return (
    <>
      <Navbar />
      <div className="container">
        <h3>Guvi Course (Mapping)</h3>
        <ul>{getListItem}</ul>
        <button onClick={purchase}>Access Now</button>

        <hr />

        <Inventory
          size={150}
          person={{
            name: "Rohan",
            role: "Full stackDeveloper",
            age: 25,
          }}
        />
 <hr />

 <Counter />
 <hr />
 <UpdateCounterSeprate />






      </div>
     
    </>
  );
}

export default App;
