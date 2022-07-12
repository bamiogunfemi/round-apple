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
