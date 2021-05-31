import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../pages/users/[slug]/posts";
import { initializeStore } from "../store";

describe("User Posts render without crashing", () => {
  function renderApp(
    store = initializeStore(),
    props = { userPosts: [], router: {}, userName: "Bagas" }
  ) {
    return render(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  }

  test("..", async () => {
    renderApp();
    expect(
      screen.getByText("NextJS React Redux Hooks | Bagas - Posts")
    ).toHaveTextContent("Posts");
  });
});
