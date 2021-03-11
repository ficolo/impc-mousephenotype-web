import React, { FunctionComponent, useState } from "react";

export interface SearchFunc {
  (text: string): void;
}

export interface ISearchBoxProps {
  selectedSearchType: string;
  textValue?: string;
  geneCount: number;
  onSearch: SearchFunc;
}

export const SearchBox: FunctionComponent<ISearchBoxProps> = ({
  selectedSearchType,
  textValue,
  geneCount,
  onSearch,
}) => {
  const [searchType, setSearchType] = useState(selectedSearchType);
  const [value, setValue] = useState(textValue);

  return (
    <div className="portal-search pb-5 text-center">
      <div className="portal-search__tabs">
        <a
          data-type="gene"
          className={`portalTab ${searchType == "gene" ? "active" : ""}`}
          onClick={() => setSearchType("gene")}
        >
          Genes
        </a>
        <a
          data-type="phenotype"
          className={`portalTab right-shadow ${
            searchType == "phenotype" ? "active" : ""
          }`}
          onClick={() => setSearchType("phenotype")}
        >
          Phenotypes
        </a>
        <a
          data-type="static"
          className={`portalTab right-shadow ${
            searchType == "static" ? "active" : ""
          }`}
          onClick={() => setSearchType("static")}
        >
          Help, News, Blog
        </a>
      </div>
      <div className="portal-search__inputs">
        <div className="searchForm">
          <input
            className="portal-search__input"
            name="term"
            placeholder={`Search All ${geneCount} Knockout Data...`}
            type="text"
            title="Search IMPC Data"
            value={value}
            onChange={(event) =>
              setValue((event.target as HTMLInputElement).value)
            }
          />
          <input
            className="searchType"
            type="hidden"
            name="type"
            value={searchType}
          />
          <button onClick={() => onSearch(value ? value : "")}>
            {" "}
            <i className="fal fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
