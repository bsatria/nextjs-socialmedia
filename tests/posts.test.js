import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../pages/posts";
import { initializeStore } from "../store";

describe("Posts Page render without crashing", () => {
  const propsData = {
    posts: {
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
    expect(screen.getByText("Posts Module")).toHaveTextContent("Posts");
  });
});
