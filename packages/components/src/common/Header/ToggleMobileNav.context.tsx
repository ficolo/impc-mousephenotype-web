import React from "react";

const ToggleMobileNavContext = React.createContext({
  displayMobileNav: false,
  setDisplayMobileNav: (_: boolean) => {},
});

export default ToggleMobileNavContext;
