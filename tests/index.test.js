import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../pages/index";
import { initializeStore } from "../store";

describe("Home render without crashing", () => {
  function renderApp(store = initializeStore(), props = {}) {
    return render(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  }

  test("..", async () => {
    renderApp();
    expect(
      screen.getByText(
        "NextJS - React Redux Hooks - Social Media App by Bagas Satria"
      )
    ).toHaveTextContent("Bagas Satria");
  });
});
