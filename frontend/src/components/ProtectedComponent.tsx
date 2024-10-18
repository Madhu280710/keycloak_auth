import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {
    children: ReactNode;  // ReactNode is the type for any valid React child (JSX, strings, etc.)
  }

const ProtectedComponent: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <div>You need to login to access this page.</div>;
  }

  return <>{children}</>;
};

export default ProtectedComponent;
