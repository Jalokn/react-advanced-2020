import React, { useState } from "react";
import { data } from "../../../data";
import { Link } from "react-router-dom";
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <Link key={person.id} className="item" to={`/person/${person.id}`}>
            <h4>{person.name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default People;
