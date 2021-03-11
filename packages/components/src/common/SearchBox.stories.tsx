import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ISearchBoxProps, SearchBox } from "./SearchBox";

export default {
  title: "Components/Common/SearchBox",
  component: SearchBox,
} as Meta;

const Template: Story<ISearchBoxProps> = (args) => (
  <div
    style={{
      maxWidth: "600px",
      color: "#fff",
      background: "#18191b",
    }}
    className="p-5"
  >
    <SearchBox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  selectedSearchType: "gene",
  textValue: "",
  geneCount: 7360,
  onSearch: (text) => console.log(text),
};
