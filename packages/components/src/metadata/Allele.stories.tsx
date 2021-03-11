import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { IAlleleProps, Allele } from "./Allele";

export default {
  title: "Components/Metadata/Allele",
  component: Allele,
} as Meta;

const Template: Story<IAlleleProps> = (args) => (
  <div style={{ maxWidth: "600px" }}>
    <Allele geneSymbol={args.geneSymbol} alleleName={args.alleleName} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  geneSymbol: "Cib2",
  alleleName: "tb1(IMPC)hds",
};
