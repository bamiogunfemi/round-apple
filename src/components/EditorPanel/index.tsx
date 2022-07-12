import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Ballon from "../../assets/images/ballon.png";
import { FiPlusCircle } from "react-icons/fi";
import { BiPalette } from "react-icons/bi";
import {
  interests,
  socialLinks,
  userImage,
  userLink,
  userName,
} from "../../constants";

export const EditorPane = () => {
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Flex justify={"space-between"} direction="column" h={["100%", "95%"]}>
      <Box>
        <Stack direction="row" align="center">
          <Image
            boxSize="32px"
            objectFit="cover"
            src={userImage}
            alt="logo"
            borderRadius="full"
            marginRight={0}
          />
          <Stack
            marginInlineStart={0}
            direction="row"
            w={"100%"}
            justify="space-between">
            <Box>
              <Text fontSize={18} fontWeight={600}>
                Editor
              </Text>
              <Text fontSize={12}>{userLink}</Text>
            </Box>
            <Button
              width={90}
              color="white"
              backgroundColor="#FF5403"
              borderRadius={100}>
              Publish
            </Button>
          </Stack>
        </Stack>
        <Box
          backgroundImage={Ballon}
          backgroundAttachment="top"
          backgroundPosition="top"
          backgroundSize={["150%", "contain"]}
          backgroundRepeat={"no-repeat"}
          borderRadius={12}
          m={[0, 8]}
          marginTop={[8]}
          border={"1px solid #E5E8F0"}
          maxHeight={480}>
          <Box
            minHeight={300}
            m={[4, 8]}
            justifyContent={"center"}
            marginTop={90}
            background="white"
            borderRadius={12}
            h={"100%"}>
            <Stack p={6} direction={["column", "row"]} marginBottom={8}>
              <Image
                borderRadius="full"
                boxSize={["74px", "82px"]}
                objectFit="contain"
                src={userImage}
                alt="logo"
                marginLeft={[4, 0]}
              />

              <Box>
                <Text fontSize={24} fontWeight={600}>
                  {userName}
                </Text>
                <Text fontSize={14} lineHeight={5} marginTop={3.5}>
                  Personal Trainer 💪 Dancer 💃 Meditator. I love all animals 🐶
                  and donate a percentage of my income to marine life 🐠
                </Text>
                <Flex>
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
                <Flex>
                  {interests.map((interest) => (
                    <Flex
                      key={interest}
                      marginTop={6}
                      marginRight={3}
                      justifyContent={"center"}
                      alignItems="center"
                      borderRadius="6px"
                      padding={1.5}
                      paddingTop={2.5}
                      height={9}
                      backgroundColor="#E5E8F0">
                      <Text fontSize={14} lineHeight={22}>
                        {interest}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Stack>
            <Flex justifyContent={"center"} display={["none", "flex"]}>
              <Button
                fontSize={15}
                width={126}
                borderRadius={100}
                backgroundColor="white"
                border={"1px solid #E5E8F0"}>
                Edit Profile
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Flex justify={["end", "center"]} my={3}>
        <Button
          width={["48px", 180]}
          height={["48px", 14]}
          color="white"
          marginRight={[3, 0]}
          borderLeftRadius="28px"
          backgroundColor="#131316"
          borderLeftColor={"#1F2A35"}
          borderRightRadius={["28px", "0px"]}>
          <BiPalette color="white" />
          {!isLargerThan800 && <Text marginLeft={2.5}> Customize</Text>}
        </Button>
        <Button
          backgroundColor="#131316"
          width={["48px", 180]}
          height={["48px", 14]}
          color="white"
          borderLeftColor={"#1F2A35"}
          borderLeftRadius={["28px", "0px"]}
          borderLeftWidth={2}
          borderRightRadius="28px">
          <FiPlusCircle color="white" />
          {!isLargerThan800 && <Text marginLeft={2.5}>Add element</Text>}
        </Button>
      </Flex>
    </Flex>
  );
};
