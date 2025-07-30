import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowseProvider } from "./BrowseContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowseProvider>
      <App />
    </BrowseProvider>
  </StrictMode>
);
