import { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { BrowseContext } from "../BrowseContext";

export default function SinglePage() {
  const [singleRecord, setSingleRecord] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const history = useHistory();
  const { addToHistory } = useContext(BrowseContext);
  const { route, id } = params;

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.swapi.tech/api/${route}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleRecord(data.result.properties);
        addToHistory({
          route,
          id,
          name: data.result.properties.name,
        });
        setLoading(false);
      })
      .catch((err) => console.error("SWAPI Effect Error: ", err));
  }, [route, id]);

  return (
    <div>
      <button onClick={() => history.goBack()}>Go Back to Search</button>
      <button onClick={() => console.log(params)}>SinglePage Params</button>
      {loading && <p>Loading...</p>}
      {!loading && singleRecord && (
        <table>
          <tbody>
            {Object.entries(singleRecord).map(([key, value]) => (
              <tr key={key}>
                <td style={{ fontWeight: "bold", paddingRight: "10px" }}>
                  {key}:
                </td>
                <td>{String(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
