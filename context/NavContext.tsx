'use client';
import { createContext, useContext, useState, ReactNode } from 'react';



interface Section {
  id: string;
  label: string;
  icon?: ReactNode;
}

interface NavInfo {
  path: string;
  sections: Section[];
}

interface NavContextType {
  navInfo: NavInfo;
  setNavInfo: (navInfo: NavInfo) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [navInfo, setNavInfo] = useState<NavInfo>({
    path: "/",
    sections: [],
  });
  return (
    <NavContext.Provider value={{ navInfo, setNavInfo }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error('useNav must be used within NavProvider');
  return context;
};