import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavigationSideBarItemProps } from "../../types/types.interface";

export const NavigationSideBarItem = ({
  links,
}: NavigationSideBarItemProps) => {
  return (
    <>
      {links?.map(({ label, href, icon }: any) => (
        <li key={label}>
          <Link to={href}>
            <Flex justify="start" px={[0, 5]} align="center" mb={icon ? 6 : 4}>
              <Box w="30px" marginTop={0.2}>
                {icon}
              </Box>
              <Text
                fontWeight={500}
                textTransform={icon ? "capitalize" : "uppercase"}
                fontSize={icon ? 16 : 12}
                color="#4D5760">
                {label}
              </Text>
            </Flex>
          </Link>
        </li>
      ))}
    </>
  );
};
