import React, { FunctionComponent, useEffect, useState } from "react";
import { Header } from "../common/Header";
import { MenuItem } from "../common/Header/MainNavBar";

const sortChildren = (itemA: MenuItem, itemB: MenuItem) => {
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

export interface IDataPageTemplateProps {
  menuItems: MenuItem[];
}

export const DataPageTemplate: FunctionComponent<IDataPageTemplateProps> = ({
  menuItems,
}) => {
  // const [menuItems, setMenuItems] = useState<any[]>([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BASE_URL}/jsonmenu/`).then((res: any) =>
  //     res.json().then((json: MenuItem[]) => {
  //       json.forEach((element) => {
  //         element.children?.sort(sortChildren);
  //       });
  //       setMenuItems(json);
  //     })
  //   );
  // }, []);

  return (
    <div>
      <Header menuItems={menuItems} />
    </div>
  );
};
