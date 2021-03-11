import React from "react";
import { FunctionComponent } from "react";

export interface IAlleleProps {
  geneSymbol: string;
  alleleName: string;
}

export const Allele: FunctionComponent<IAlleleProps> = ({
  geneSymbol,
  alleleName,
}) => {
  return (
    <span>
      <b>{geneSymbol}</b>
      <sup>{alleleName}</sup>
    </span>
  );
};
