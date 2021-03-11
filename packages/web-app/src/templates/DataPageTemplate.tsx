import React, { useEffect, useState } from "react";
import { Header } from "@impc/components";
// import { MenuItem } from "@impc/components";

const sortChildren = (itemA: any, itemB: any) => {
  const itemASort = itemA.sort;
  const itemBSort = itemB.sort;
  if (
    itemASort !== undefined &&
    itemBSort !== undefined &&
    itemASort !== itemBSort
  ) {
    return itemASort - itemBSort;
  }
  if (itemASort === itemBSort) {
    return itemASort ? itemASort : -1;
  }
  return 0;
};

export const DataPageTemplate = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/jsonmenu/`).then((res) =>
      res.json().then((json: any[]) => {
        json.forEach((element) => {
          element.children?.sort(sortChildren);
        });
        setMenuItems(json);
      })
    );
  }, []);

  return <Header menuItems={menuItems} />;
};
