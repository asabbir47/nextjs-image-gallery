"use client";

import React, { createContext, useState, useContext } from "react";

const DeviceContext = createContext<boolean>(false);

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  return <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>;
};
// Export the context
export const useDeviceContext = () => useContext(DeviceContext);
