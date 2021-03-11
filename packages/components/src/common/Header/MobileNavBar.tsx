import React, { Fragment, FunctionComponent, useContext } from "react";
import ToggleMobileNavContext from "./ToggleMobileNav.context";
import { ISearchBoxProps, SearchBox } from "../SearchBox";
import { MenuItem } from "./MainNavBar";

export interface IMobileNavProps {
  menuItems: MenuItem[];
}

export const MobileNavBar: FunctionComponent<
  IMobileNavProps & ISearchBoxProps
> = ({ menuItems, selectedSearchType, textValue, geneCount, onSearch }) => {
  const { displayMobileNav, setDisplayMobileNav } = useContext(
    ToggleMobileNavContext
  );
  return (
    <div
      className={`mobile-nav collapse ${displayMobileNav ? "show" : ""}`}
      id="navbarToggleExternalContent"
      style={{ overflowY: "auto" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent "
        aria-controls="navbarToggleExternalContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
        onClick={() => setDisplayMobileNav(false)}
      >
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </button>
      <SearchBox
        {...{ selectedSearchType, textValue, geneCount, onSearch }}
      ></SearchBox>
      <div className="row">
        <div className="col-12">
          {menuItems.map((menuItem) => {
            return (
              <Fragment>
                <h3 className="mt-2">
                  <a className={menuItem.classes} href={menuItem.link}>
                    {menuItem.name}
                  </a>
                </h3>
                <div className="mobile-nav__sub-pages">
                  {menuItem.children?.map((childItem) => {
                    return (
                      <Fragment>
                        <p>
                          <a href={childItem.link}>{childItem.name}</a>
                        </p>
                        <div className="sub-pages">
                          {childItem.children?.map((grandChildItem) => {
                            return (
                              <p>
                                <a href={grandChildItem.link}>
                                  {grandChildItem.name}
                                </a>
                              </p>
                            );
                          })}
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
