import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PhenotypingDataPage } from "./PhenotypingDataPage";
import { Badge } from "react-bootstrap";

export default {
  title: "Pages/Phenotyping Data/Statistical Results Page",
  component: PhenotypingDataPage,
} as Meta;

const Template: Story = () => (
  <div style={{ maxWidth: "600px" }}>
    <PhenotypingDataPage />
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
