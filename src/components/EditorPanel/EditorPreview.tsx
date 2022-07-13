import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Ballon from "../../assets/images/ballon.png";
import { socialLinks, userImage } from "../../constants";
import { AppContext } from "../../context/AppContext";
import { ImArrowUpRight2 } from "react-icons/im";
export const EditorPreview = () => {
  const { solidColor, links } = useContext(AppContext);

  return (
    <Box padding={16}>
      <Box
        backgroundImage={Ballon}
        backgroundPosition="top"
        backgroundSize="120%, contain "
        backgroundRepeat={"no-repeat"}
        borderRadius={12}
        backgroundColor="#131316"
        marginBottom={0}
        border={"1px solid #E5E8F0"}
        height={600}>
        <Box
          minHeight={300}
          m={8}
          justifyContent={"center"}
          marginTop={90}
          borderRadius={12}>
          <Stack
            direction={["row", "column"]}
            justify={["center"]}
            marginBottom={8}>
            <Flex justifyContent={"center"}>
              <Image
                boxSize="82px"
                objectFit="contain"
                src={userImage}
                alt="logo"
                borderRadius="full"
                marginLeft={4}
              />
            </Flex>

            <Box color={"white"} textAlign="center" backgroundColor={"#131316"}>
              <Text fontSize={24} fontWeight={600}>
                Blessing Daniels
              </Text>
              <Text fontSize={14} lineHeight={5} marginTop={3.5}>
                Personal Trainer 💪 Dancer 💃 Meditator. I love all animals 🐶
                and donate a percentage of my income to marine life 🐠
              </Text>
              <Flex justifyContent={"center"}>
                {socialLinks.map(({ icon, link }) => (
                  <Flex
                    key={link}
                    marginTop={3.5}
                    marginRight={3}
                    justifyContent={"center"}
                    alignItems="center"
                    borderRadius="full"
                    width={9}
                    height={9}
                    backgroundColor={solidColor}>
                    {icon}
                  </Flex>
                ))}
              </Flex>
              <Flex
                justifyContent={"center"}
                flexDirection="column"
                marginTop={2.5}>
                {links.map(({ title, id, link }) => (
                  <a href="link" rel="noreferrer" target="_blank">
                    <Flex
                      key={id}
                      marginTop={3.5}
                      marginRight={3}
                      p={6}
                      justifyContent={"space-between"}
                      alignItems="center"
                      borderRadius="full"
                      width={"100%"}
                      height={9}
                      backgroundColor={solidColor}>
                      <Text
                        fontSize={"15px"}
                        fontWeight={600}
                        textTransform={"capitalize"}>
                        {" "}
                        {title}
                      </Text>
                      <ImArrowUpRight2 />
                    </Flex>
                  </a>
                ))}
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Button
        fontSize={15}
        width="100%"
        marginTop={8}
        color={"black"}
        marginBottom={3}
        borderRadius={100}
        backgroundColor="white"
        border={"1px solid #E5E8F0"}>
        Share Page Link
      </Button>
    </Box>
  );
};
