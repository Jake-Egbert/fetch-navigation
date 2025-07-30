import { useContext } from "react";
import { BrowseContext } from "../BrowseContext";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const { history, lastCategory } = useContext(BrowseContext);
  return (
    <div>
      <h1>Home</h1>
      {lastCategory && <p>Last Category Browsed: {lastCategory}</p>}
      <h3>Browsing History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <NavLink to={`/single/${item.route}/${item.id}`}>
              {item.name} ({item.route}/{item.id})
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
