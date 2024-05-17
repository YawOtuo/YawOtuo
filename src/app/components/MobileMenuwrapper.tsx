"use client";
import React from "react";

import NavMobile from "./NavMobile";
import { useNavMobileMenuStore } from "./NavMobile/components/useNavMobileMenuStore";

type Props = {
  children: React.ReactNode;
};

const MobileMenuWrapper = ({ children }: Props) => {
  const navMobileMenu = useNavMobileMenuStore(
    (state) => state.navMobileMenuToggle
  );
  return (
    <>
      <NavMobile isOpen={navMobileMenu} layout />
      {children}
    </>
  );
};

export default MobileMenuWrapper;
