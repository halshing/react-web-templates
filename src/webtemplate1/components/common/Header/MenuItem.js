import React, { useState } from "react";

// material ui
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";

const MenuItem = ({ title, menu: PopoutMenu }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="navmenu">
        <Button onClick={toggleMenu}>{title}</Button>
        {open && (
          <div className="popout">
            <PopoutMenu />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default MenuItem;
