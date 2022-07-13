import {
  Box,
  DrawerCloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdLink, MdTextFields } from "react-icons/md";
import { Link } from "./Link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ElementMenuProps } from "../../types/types.interface";

export const ElementMenu = ({ isOpen, onClose }: ElementMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [header, setHeader] = useState<string>("Select block element");
  const elementsList = [
    {
      title: "Basic Blocks",
      subList: [
        {
          icon: <MdLink color="#4D5760" />,
          title: "Link",
          description: "Add multiple button links",
          onClick: () => setHeader("Add links"),
          component: <Link onClose={onClose} />,
        },
        {
          icon: <MdTextFields color="#4D5760" />,
          title: "Text",
          description: "Add contents, titles and paragraph texts.",
          onClick: () => setHeader("Add text"),
        },
      ],
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton marginTop={2} />
        <DrawerHeader display={"flex"} alignItems="center">
          {isOpen && (
            <AiOutlineArrowLeft
              onClick={() => {
                setHeader("Select block element");
                setOpen(false);
              }}
              style={{ marginRight: 5 }}
              cursor={"pointer"}
            />
          )}
          <Text fontSize={20}>{header}</Text>
        </DrawerHeader>
        <DrawerBody>
          <Box>
            {elementsList.map((element) => (
              <Box key={element.title}>
                {!open && (
                  <Text marginBottom={3} fontSize={14}>
                    {element.title}
                  </Text>
                )}

                {element.subList.map((elemetItem) =>
                  open ? (
                    elemetItem?.component
                  ) : (
                    <Flex
                      key={elemetItem.title}
                      onClick={() => {
                        setOpen(true);
                        elemetItem.onClick();
                      }}
                      border={"1px solid #E5E8F0"}
                      borderRadius={10}
                      alignItems="center"
                      p={4}
                      cursor="pointer"
                      marginBottom={[5]}>
                      {elemetItem.icon}
                      <Box marginLeft={6}>
                        <Text fontWeight={600} fontSize={16} marginBottom={2}>
                          {elemetItem.title}
                        </Text>
                        <Text fontSize={14}>{elemetItem.description} </Text>
                      </Box>
                    </Flex>
                  )
                )}
              </Box>
            ))}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
