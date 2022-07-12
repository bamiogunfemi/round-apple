import { Box, Flex } from "@chakra-ui/react";
import { EditorPane } from "../../components/EditorPanel";
import { EditorPreview } from "../../components/EditorPanel/EditorPreview";
import { HomeLayout } from "../../layouts";

const Editor = () => {
  return (
    <HomeLayout title="Editor">
      <Flex h={["auto", "100%"]}>
        <Box
          flex="1"
          maxW={"1000px"}
          p={6}
          paddingBottom={[0, 6]}
          w={["100%", "auto"]}>
          <EditorPane />
        </Box>
        <Box
          w={["474px"]}
          display={["none", "block"]}
          bg="white"
          borderLeft={"1px solid #E5E8F0"}>
          <EditorPreview />
        </Box>
      </Flex>
    </HomeLayout>
  );
};
export default Editor;
