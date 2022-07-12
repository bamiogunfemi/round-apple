import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Ballon from "../../assets/images/ballon.png";
import { socialLinks, userImage } from "../../constants";

export const EditorPreview = () => {
  return (
    <Box padding={16}>
      <Box
        backgroundImage={Ballon}
        backgroundPosition="top"
        backgroundSize="120%, contain "
        backgroundRepeat={"no-repeat"}
        borderRadius={12}
        backgroundColor="black"
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

            <Box color={"white"} textAlign="center" backgroundColor="black">
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
                    backgroundColor="#1D1C2F">
                    {icon}
                  </Flex>
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
        marginBottom={3}
        borderRadius={100}
        backgroundColor="white"
        border={"1px solid #E5E8F0"}>
        Share Page Link
      </Button>
    </Box>
  );
};
