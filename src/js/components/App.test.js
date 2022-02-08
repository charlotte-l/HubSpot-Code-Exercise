/**
 * @jest-environment jsdom
 */

import React from "react";
import App from "./App";
import { render, screen, cleanup } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
afterEach(cleanup);

it.todo("should render without crashing", () => {
  render(<App />);
  const libraryHeader = screen.getByTestId('library-header');
  const libraryContent = screen.getByTestId('library-content');
  expect(libraryHeader).toBeTruthy();
  expect(libraryContent).toBeTruthy();
});

it.todo("should not have basic accessibility issues", async () => {
  const { container } = render(<App />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it.todo("should render library items when data is loaded from a json API");
it.todo("should show an error state if library data is inaccessible");
it.todo("should show an empty state if no results are found");
it.todo("should be able to toggle on a media type");
it.todo("should show a dropdown menu when clicked");
it.todo("should show results for a single filter (genre)");
it.todo("should show results for multiple filters (genres)");
it.todo("should show results for a single filter (year)");
it.todo("should show results for multiple filters (years)");
it.todo("should additively filter when a year filter is added after a genre filter");
it.todo("should show results for a text search");
it.todo("should clear all filters when triggered");