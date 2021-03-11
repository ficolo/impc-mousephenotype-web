import React from "react";
import { FunctionComponent } from "react";

export interface Fact {
  key: string;
  value: any;
}

export interface IInfoBoxProps {
  facts: Array<Fact>;
}

export const InfoBox: FunctionComponent<IInfoBoxProps> = ({ facts }) => {
  return (
    <div>
      {facts.map((fact) => (
        <p>
          <span>
            <b>{fact.key}:</b>
          </span>
          <span>{fact.value}</span>
        </p>
      ))}
    </div>
  );
};
