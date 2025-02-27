import React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { Geist } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
