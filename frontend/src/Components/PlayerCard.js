import React, { useEffect, useState } from "react";

export const PlayerCard = () => {
  const URL = "http://localhost:3001/players";

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = async () => {
    try {
      const playersData = await fetch(URL);
      const data = await playersData.json();
      setPlayers(data);
      console.log(data);
    } catch (error) {
      console.log("ERRORRRRRR: ", error.message);
    }
  };

  return (
    <div>
      {players.map((item, i) => {
        return <p key={i}>{item.firstName}</p>;
      })}
      <form>
        <input></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
