import React, { FunctionComponent, useState } from "react";
import { INavBarProps, MainNavBar } from "./MainNavBar";
import { MobileNavBar } from "./MobileNavBar";
import ToggleMobileNavContext from "./ToggleMobileNav.context";
import { TopNavBar } from "./TopNavBar";

export const Header: FunctionComponent<INavBarProps> = ({ menuItems }) => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  return (
    <ToggleMobileNavContext.Provider
      value={{ displayMobileNav, setDisplayMobileNav }}
    >
      <div className="header">
        <TopNavBar />
        <MainNavBar menuItems={menuItems} />
        <MobileNavBar
          menuItems={menuItems}
          selectedSearchType="gene"
          geneCount={7360}
          onSearch={(_) => _}
        ></MobileNavBar>
      </div>
    </ToggleMobileNavContext.Provider>
  );
};
