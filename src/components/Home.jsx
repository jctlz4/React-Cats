import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [facts, setFacts] = useState(null);

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then((res) => res.json())
      .then((data) => setFacts(data.all));
  }, []);

  console.log(facts);
  return (
    <div>
      <h1>Home Component</h1>
      {facts &&
        facts.map((fact, index) => {
          return <Card key={index} data={fact} />;
        })}
    </div>
  );
};

export default Home;
