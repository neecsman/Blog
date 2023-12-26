import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

const Portal: React.FC<PortalProps> = ({ children, element }) => {
  const app = document.getElementsByClassName("app")[0];

  if (!app) {
    return createPortal(children, document.body);
  }

  if (!element) {
    return createPortal(children, app);
  }

  return createPortal(children, element);
};

export default Portal;
