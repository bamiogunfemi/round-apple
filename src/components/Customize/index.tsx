import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CirclePicker, ColorResult } from "react-color";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { pickerColors } from "../../constants";
export const CustomizeMenu = () => {
  const { solidColor, setSolidColor, setShowCustomize } =
    useContext(AppContext);
  const accordionData = [
    {
      title: "Heading",
    },
    {
      title: "Body text",
    },
    {
      title: "Button",
      data: (
        <Box>
          <Text fontSize={12} marginBottom={3} color="#4D5155">
            Solid Colors
          </Text>
          <CirclePicker
            width="100%"
            colors={pickerColors}
            circleSize={41}
            color={solidColor}
            onChange={(color: ColorResult) => setSolidColor(color.hex)}
          />
        </Box>
      ),
    },
  ];
  return (
    <Box>
      <Stack direction="row" align="center">
        <AiOutlineArrowLeft
          cursor={"pointer"}
          onClick={() => setShowCustomize(false)}
        />
        <Stack
          marginInlineStart={0}
          direction="row"
          w={"100%"}
          alignItems="center"
          justify="space-between">
          <Text fontSize={18} fontWeight={600}>
            Edit Theme
          </Text>
          <Button
            width={90}
            color="white"
            backgroundColor="#FF5403"
            borderRadius={100}>
            Save
          </Button>
        </Stack>
      </Stack>
      <Text textAlign={"center"} marginTop={[4, 12]} marginBottom={[4, 6]}>
        Customize your font, button color, text color to your choice
      </Text>

      <Accordion allowToggle p={[2, 5]}>
        <AccordionItem
          border={"1px solid #E5E8F0"}
          borderRadius={2}
          marginBottom={[5]}>
          <AccordionButton height={16}>
            <Text flex="1" fontWeight={600} fontSize={16} textAlign="left">
              Dark Mode
            </Text>
            <ColorModeSwitcher justifySelf="flex-end" />
          </AccordionButton>
        </AccordionItem>
        {accordionData.map((item) => (
          <AccordionItem
            borderRadius={2}
            border={"1px solid #E5E8F0"}
            marginBottom={[5]}>
            <AccordionButton height={16}>
              <Text flex="1" fontWeight={600} fontSize={16} textAlign="left">
                {item.title}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{item?.data}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
