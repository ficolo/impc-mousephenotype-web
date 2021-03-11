import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { IInfoBoxProps, InfoBox } from "./InfoBox";
import { Badge } from "react-bootstrap";

export default {
  title: "Components/Metadata/InfoBox",
  component: InfoBox,
} as Meta;

const Template: Story<IInfoBoxProps> = (args) => (
  <div style={{ maxWidth: "600px" }}>
    <InfoBox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  facts: [
    {
      key: "Name",
      value: "Cib2",
    },
    {
      key: "MGI ID",
      value: <Badge variant="primary">Primary</Badge>,
    },
    {
      key: "Viability",
      value: <Badge variant="danger">lethal</Badge>,
    },
  ],
};
