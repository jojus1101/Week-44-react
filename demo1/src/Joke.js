import React, { useState, useEffect } from "react";

export default function State3() {
  const [jokeChuck, setJoke] = useState({ value: "" });
  const [getNorris, setChuckNorris] = useState(false);
  const [dadJoke, setDadJoke] = useState("");

  useEffect(() => {
    function fetchChuckNorris() {
      fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(d => {
          setJoke(d);
        })
        .catch(err => console.log("Ups" + err));
    }
    fetchChuckNorris();
  }, [getNorris]);

    useEffect(() => {
    const timer = setInterval(() => {
      function fetchDadjoke() {
        fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json"
          }
        })
          .then(res => res.json())
          .then(d => setDadJoke(d.joke));
      }
      fetchDadjoke();
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>State Exercise 3</p>
      <h3> Jokes</h3>
      <button onClick={() => setChuckNorris(!getNorris)}>
        Get Norris Joke
      </button>
      <br></br><i>Under 17 requires accompanying parent or adult guardian.</i>
      <p> Norris joke: {jokeChuck.value} </p>
      <h3>Dad joke</h3>
      <p>Dad joke: {dadJoke}</p>
    </div>
  );
}