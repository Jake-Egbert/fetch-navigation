import { useState, useEffect, useContext } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";

import { BrowseContext } from "../BrowseContext";

export default function SearchList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const history = useHistory();
  const { setLastCategory } = useContext(BrowseContext);
  const { route } = params;

  useEffect(() => {
    setLastCategory(route);
    setLoading(true);
    fetch(`https://www.swapi.tech/api/${route}/`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.results);
        setLoading(false);
      })
      .catch((err) => console.error("SWAPI Effect Error: ", err));
  }, [route]);

  return (
    <div>
      <button onClick={() => history.goBack()}>Go Back to Home</button>
      <button onClick={() => console.log(params)}>SearchList Params</button>
      <h1>{route[0].toUpperCase() + route.slice(1)}</h1>
      {loading && <p>Loading...</p>}
      {!loading &&
        records.map((record) => {
          return (
            <NavLink key={record.uid} to={`/single/${route}/${record.uid}`}>
              <p>{record.name}</p>
            </NavLink>
          );
        })}
    </div>
  );
}
