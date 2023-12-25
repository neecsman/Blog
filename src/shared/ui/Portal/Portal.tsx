import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const app = document.body.getElementsByClassName("app")[0];

  if (app) {
    return createPortal(children, app);
  }

  return createPortal(children, document.body);
};

export default Portal;
