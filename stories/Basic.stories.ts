import Basic from "./Basic";

export default {
  component: Basic,
};

export const BasicStory = {
  args: {
    obj: {
      bool: true,
      text: "Hello, world!",
    },
    bool: true,
    num: 1,
    text: "text",
  },
};
