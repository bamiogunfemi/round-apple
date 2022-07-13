import { NavigationSideBarItem } from "./DashboardNavItem";
import Logo from "../../assets/images/logo.svg";
import { Image, Stack } from "@chakra-ui/react";
import { RiWallet2Line } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { sidebarNavigationBarItems, userImage } from "../../constants";
import { NavLink } from "react-router-dom";
import styles from "./DashboardNav.module.css";
import { SidebarNavigationBarProps } from "../../types/types.interface";

export const SidebarNavigationBar = ({
  userName,
}: SidebarNavigationBarProps) => {
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      spacing={4}
      height={"90%"}
      justify="start"
      className="sidebar_container">
      <Box p={[4, 0]} borderTop={["1px solid #E5E8F0", "none"]}>
        <Image
          m={4}
          display={["none", "block"]}
          boxSize="60px"
          objectFit="cover"
          src={Logo}
          alt="logo"
          marginBottom={8}
        />
        <Flex
          flexDirection={["row", "column"]}
          justifyContent={["space-between", "start"]}>
          {sidebarNavigationBarItems
            ?.filter((_, idx) =>
              isLargerThan800
                ? idx > 0 && idx < 4
                : idx < sidebarNavigationBarItems.length
            )
            .map(
              (item: {
                id: string;
                title: string;
                href?: string;
                icon?: JSX.Element;
                links?: { label: string; href: string }[];
              }) => (
                <div key={item.id}>
                  {item.href ? (
                    <NavLink
                      to={item?.href ?? ""}
                      className={({ isActive }) =>
                        isActive ? styles["nav-link-selected"] : ""
                      }>
                      <Stack
                        px={[0, 5]}
                        direction={["column", "row"]}
                        justify="start"
                        w={["fit-content", "auto"]}
                        align={["center"]}
                        mb={isLargerThan800 ? 0 : item.icon ? 6 : 4}>
                        {item?.icon && (
                          <Box
                            w={["auto", "30px"]}
                            alignContent={"center"}
                            justifyContent={"center"}
                            marginTop={0.2}>
                            {item?.icon}
                          </Box>
                        )}
                        <Text
                          fontWeight={500}
                          textTransform={item.icon ? "capitalize" : "uppercase"}
                          fontSize={[12, item.icon ? 16 : 12]}
                          color="#4D5760">
                          {item.title}
                        </Text>
                      </Stack>
                    </NavLink>
                  ) : (
                    <Stack
                      direction={["column", "row"]}
                      justify="start"
                      px={[0, 5]}
                      w={["fit-content", "auto"]}
                      align={["center", "start"]}
                      mb={isLargerThan800 ? 0 : item.icon ? 6 : 4}>
                      {item?.icon && (
                        <Box
                          w={["auto", "30px"]}
                          alignContent={"center"}
                          justifyContent={"center"}
                          marginTop={0.2}>
                          {item?.icon}
                        </Box>
                      )}
                      <Text
                        fontWeight={500}
                        textTransform={item.icon ? "capitalize" : "uppercase"}
                        fontSize={[12, item.icon ? 16 : 12]}
                        color="#4D5760">
                        {item.title}
                      </Text>
                    </Stack>
                  )}

                  <Box as="ul" listStyleType={"none"}>
                    <NavigationSideBarItem links={item.links} />
                  </Box>
                </div>
              )
            )}

          {isLargerThan800 && (
            <>
              <Stack
                direction={["column", "row"]}
                justify="start"
                w={["fit-content", "auto"]}
                align={["center", "start"]}>
                <Box
                  w={["auto", "30px"]}
                  alignContent={"center"}
                  justifyContent={"center"}
                  marginTop={0.2}>
                  <RiWallet2Line />
                </Box>

                <Text fontWeight={500} fontSize={[12, 16]} color="#4D5760">
                  Balance
                </Text>
              </Stack>
              <Stack
                direction={["column", "row"]}
                justify="start"
                w={["fit-content", "auto"]}
                align={["center", "start"]}>
                <Box
                  w={["auto", "30px"]}
                  alignContent={"center"}
                  justifyContent={"center"}
                  marginTop={0.2}>
                  <MdMoreHoriz />
                </Box>

                <Text fontWeight={500} fontSize={[12, 16]} color="#4D5760">
                  More
                </Text>
              </Stack>
            </>
          )}
        </Flex>
      </Box>
      <Flex
        px={[0, 5]}
        alignItems={"center"}
        display={["none", "flex"]}
        justifyContent="space-between">
        <Flex alignItems={"center"}>
          <Image
            boxSize="32px"
            objectFit="contain"
            src={userImage}
            alt="logo"
            borderRadius="full"
            marginRight={2}
          />
          <Text fontSize={15} fontWeight="500" color="#4D5760">
            {userName}
          </Text>
        </Flex>
        <MdMoreHoriz />
      </Flex>
    </Stack>
  );
};
