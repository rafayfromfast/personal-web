import React from "react";
import { useMediaQuery } from "react-responsive";

export const Desktop: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : null;
};

export const UntilDesktop: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isUntilDesktop = useMediaQuery({ maxWidth: 1199 });
  return isUntilDesktop ? children : null;
};

export const Laptop: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  return isLaptop ? children : null;
};

export const UntilLaptop: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isUntilLaptop = useMediaQuery({ maxWidth: 991 });
  return isUntilLaptop ? children : null;
};
export const FromLaptop: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isFromLaptop = useMediaQuery({ minWidth: 992 });
  return isFromLaptop ? children : null;
};

export const Tablet: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

export const FromTablet: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isFromTablet = useMediaQuery({ minWidth: 768 });
  return isFromTablet ? children : null;
};

export const Mobile: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const MobileSmall: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isMobileSmall = useMediaQuery({ maxWidth: 575 });
  return isMobileSmall ? children : null;
};

export const Default: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
