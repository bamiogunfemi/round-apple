import { DashboardLayoutProps } from "../../types/types.interface";
import { Helmet } from "react-helmet";
import { Box, Stack } from "@chakra-ui/react";
import { SidebarNavigationBar } from "../../components";

export const HomeLayout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{`${title} - Mainstack`}</title>
      </Helmet>

      <Stack h={["100%"]} direction={["column-reverse", "row"]}>
        <Box w={["auto", "304px"]}>
          <SidebarNavigationBar userName="Ade Bami" />
        </Box>
        <Box flex="1" borderLeft={"1px solid #E5E8F0"} borderTop={"none"}>
          {children}
        </Box>
      </Stack>
    </>
  );
};
