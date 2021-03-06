import React, { FunctionComponent, useContext, useState } from "react";
import ToggleMobileNavContext from "./ToggleMobileNav.context";
import "./MainNavBar.css";

export interface MenuItem {
  name: string;
  link: string;
  id?: number;
  classes?: string;
  sort?: number;
  children?: MenuItem[];
}

export interface INavBarProps {
  menuItems: MenuItem[];
}

export const MainNavBar: FunctionComponent<INavBarProps> = ({ menuItems }) => {
  const [activeMenuId, setActiveMenu] = useState(-1);
  const { displayMobileNav, setDisplayMobileNav } = useContext(
    ToggleMobileNavContext
  );

  return (
    <div>
      <div className="header__nav">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <a
                href={process.env.REACT_APP_BASE_URL}
                className="header__logo-link active"
              >
                <img
                  className="header__logo"
                  src="https://dev.mousephenotype.org/wp-content/themes/impc/images/IMPC_logo.svg"
                  alt="International Mouse Phenotyping Consortium Office Logo"
                />
              </a>
            </div>
            <div className="col-6 col-md-9 text-right">
              <div className="d-none d-lg-block">
                <div className="menu-main-nav-container">
                  <ul id="menu-main-nav" className="menu">
                    {menuItems.map((menuItem) => {
                      return (
                        <li
                          key={`menu-item-${menuItem.id}`}
                          id={`menu-item-${menuItem.id}`}
                          className={`${
                            menuItem.classes
                          } menu-item menu-item-type-post_type menu-item-object-page menu-item-${
                            menuItem.id
                          } ${
                            menuItem.classes === "data"
                              ? "current-menu-item"
                              : ""
                          }`}
                          onMouseOver={() => setActiveMenu(menuItem.id || -1)}
                          onFocus={() => setActiveMenu(menuItem.id || -1)}
                          onMouseLeave={() => setActiveMenu(-1)}
                        >
                          <a href={menuItem.link}>{menuItem.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <button
                className="navbar-toggler d-inline d-lg-none collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent "
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setDisplayMobileNav(true)}
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuItems
        .filter((menuItem) => menuItem.children && menuItem.children.length > 0)
        .map((menuItem) => {
          const itemId = `${menuItem.classes?.split("-")[0]}-menu`;
          return (
            <div
              key={`subMenu-${menuItem.id}`}
              className={`${itemId} sub-menu d-none d-lg-block ${
                activeMenuId == menuItem.id ? "active" : "collapse"
              }`}
              id={itemId}
              style={{
                paddingTop: "0px",
                marginTop: "0px",
                paddingBottom: "0px",
                marginBottom: "0px",
              }}
              onMouseOver={() => setActiveMenu(menuItem.id || -1)}
              onFocus={() => setActiveMenu(menuItem.id || -1)}
              onMouseLeave={() => setActiveMenu(-1)}
            >
              <div className={`${itemId}__inside`}>
                <div className="container">
                  {menuItem.classes == "about-impc" ? (
                    <a key={menuItem.link} href={menuItem.link}>
                      {menuItem.name}
                    </a>
                  ) : null}
                  {menuItem.children?.some(
                    (item) => item.children && item.children?.length > 0
                  ) ? (
                    <div className="row justify-content-end">
                      {menuItem.children?.map((subMenuItem) => {
                        return (
                          <div
                            key={subMenuItem.link}
                            className="col col-auto text-left"
                          >
                            <a href={subMenuItem.link}>{subMenuItem.name}</a>
                            <div className="sub-pages">
                              {subMenuItem.children
                                ?.sort((a, b) => {
                                  if (a.name < b.name) {
                                    return -1;
                                  }
                                  if (a.name > b.name) {
                                    return 1;
                                  }
                                  return 0;
                                })
                                .map((subMenutItemChild) => {
                                  return (
                                    <p key={subMenutItemChild.link}>
                                      <a href={subMenutItemChild.link}>
                                        {subMenutItemChild.name}
                                      </a>
                                    </p>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    menuItem.children?.map((subMenuItem) => {
                      return (
                        <a key={subMenuItem.link} href={subMenuItem.link}>
                          {subMenuItem.name}
                        </a>
                      );
                    })
                  )}
                </div>
              </div>
              <div className={`${itemId}__drop`}></div>
            </div>
          );
        })}
    </div>
  );
};
