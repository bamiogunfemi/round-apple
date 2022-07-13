import { ReactElement, ReactNode } from "react";

export type DashboardLayoutProps = {
  children: ReactNode;
  title?: string;
};
export interface NavigationSideBarItemProps {
  links?: {
    label: string;
    href: string;
    icon?: ReactElement;
  }[];
}
export interface SidebarNavigationBarProps {
  userName?: string;
}

export interface AppContextProps {
  showElement: boolean;
  setShowElement?: React.Dispatch<React.SetStateAction<boolean>> | any;
  solidColor: string;
  setSolidColor?: React.Dispatch<React.SetStateAction<string>> | any;
  showCustomize: boolean;
  setShowCustomize?: React.Dispatch<React.SetStateAction<boolean>> | any;
  links: LinkProps[];
  setLinks?: React.Dispatch<React.SetStateAction<LinkProps>> | any;
}
export interface LinkProps {
  title: string;
  link: string;
  id: string;
}
export type ChildrenProps = {
  children?: ReactNode;
};

export type CloseProps = {
  onClose: () => void;
};
export type ElementMenuProps = {
  onClose: () => void;
  isOpen: boolean;
};
