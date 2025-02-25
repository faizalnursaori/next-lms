import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { geistSans } from "../src/app/layout";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      return <main className={geistSans.className}>{story()}</main>;
    },
  ],
};

export default preview;
