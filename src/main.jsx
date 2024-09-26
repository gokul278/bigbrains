import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 300,
});

import global_en from "./assets/Translation/EN/global.json";
import global_de from "./assets/Translation/DE/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    de: {
      global: global_de,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
