import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../pages/comments";
import { initializeStore } from "../store";

describe("Comments Page render without crashing", () => {
  const propsData = {
    comments: {
      results: [
        {
          id: 1
        },
        {
          id: 1
        }
      ]
    }
  };
  function renderApp(store = initializeStore(), props = propsData) {
    return render(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  }

  test("Comments Page render without crashing", async () => {
    renderApp();
    expect(screen.getByText("Comments Module")).toHaveTextContent("Comments");
  });
});
