import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./Context.jsx";
import { ImageProvider } from "./ImageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </AppProvider>
  </StrictMode>
);
