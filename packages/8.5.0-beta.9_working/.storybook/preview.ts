import type { Preview } from "@storybook/react";

const preview: Preview = {
  argTypesEnhancers: [
    // add custom controls
    (context) => ({
      ...context.argTypes,
      "obj.bool": {
        name: "obj.bool",
        control: { type: "boolean" },
        type: { name: "boolean" },
      },
      "obj.text": {
        name: "obj.text",
        control: { type: "text" },
        type: { name: "string" },
      },
    }),
  ],
  argsEnhancers: [
    // add initial values for the custom controls from initialArgs
    (context) => ({
      ...context.initialArgs,
      "obj.bool": context.initialArgs.obj?.bool,
      "obj.text": context.initialArgs.obj?.text,
    }),
  ],
  decorators: [
    // combine custom control values with the original args
    (storyFn, context) => {
      const args = { ...context.args };
      args.obj = {
        bool: args["obj.bool"],
        string: args["obj.text"],
      };
      delete args["obj.bool"];
      delete args["obj.text"];

      const initialArgs = { ...context.initialArgs };
      initialArgs.obj = {
        bool: initialArgs["obj.bool"],
        string: initialArgs["obj.text"],
      };
      delete initialArgs["obj.bool"];
      delete initialArgs["obj.text"];

      return storyFn({ ...context, args, initialArgs });
    },
  ],
};

export default preview;
