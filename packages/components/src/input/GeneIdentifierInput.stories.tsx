import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  GeneIdentifiersInput,
  IGeneIdentifiersInputProps,
} from "./GeneIdentifierInput";

export default {
  title: "Components/Input/Gene Identifiers",
  component: GeneIdentifiersInput,
} as Meta;

const Template: Story<IGeneIdentifiersInputProps> = (args) => (
  <div style={{ maxWidth: "600px", backgroundColor: "#fff" }}>
    <GeneIdentifiersInput {...args} />
  </div>
);

const greeting = "Hi";

export const Default = Template.bind({});
Default.args = {
  identifiers: ["MGI:054684", "HGNC:548646"],
  onChange: (e: any) => {
    console.log(greeting, e);
  },
};
