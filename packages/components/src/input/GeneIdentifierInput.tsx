import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
//@ts-ignore
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import "./GeneIdentifierInput.css";

export interface IGeneIdentifiersInputProps {
  identifiers: Array<string>;
  onChange: Function;
}

export const GeneIdentifiersInput: FunctionComponent<IGeneIdentifiersInputProps> = ({
  identifiers,
  onChange,
}) => {
  const tagifyRef = useRef();
  const [tags, setTags] = useState(
    identifiers.sort((a, b) => (a > b ? 1 : -1))
  );
  const sortTags = useCallback((lastTagElm) => {
    // const tagElms = tagifyRef.current.getTagElms();
    // tagElms
    //   .sort((a, b) => (a.title > b.title ? -1 : 1))
    //   .forEach((element) => {
    //     if (element !== lastTagElm) element.classList.add("tagify--noAnim");
    //     element.parentNode.prepend(element);
    //   });
    //tagifyRef.current.updateValueByDOMTags();
  }, []);

  return (
    <Tags
      tagifyRef={tagifyRef}
      value={tags.join(",")}
      className="impc-tags"
      settings={{
        pattern: /(MGI|HGNC):\d+/,
      }}
      // onChange={() => {
      //   onChange(tagifyRef.current.value.map((t) => t.value));
      // }}
      // onAdd={(event) => {
      //   sortTags(event.detail.tag);
      // }}
    />
  );
};
