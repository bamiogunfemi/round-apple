import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { EditorPane } from "../../components/EditorPanel";
import { EditorPreview } from "../../components/EditorPanel/EditorPreview";
import { CustomizeMenu } from "../../components/Customize";
import { AppContext } from "../../context/AppContext";
import { HomeLayout } from "../../layouts";
const Editor = () => {
  const { showCustomize } = useContext(AppContext);

  return (
    <HomeLayout title="Editor">
      <Flex h={["auto", "100%"]}>
        <Box
          flex="1"
          maxW={"1000px"}
          p={6}
          paddingBottom={[0, 6]}
          w={["100%", "auto"]}>
          {showCustomize ? <CustomizeMenu /> : <EditorPane />}
        </Box>
        <Box
          w={["474px"]}
          display={["none", "block"]}
          borderLeft={"1px solid #E5E8F0"}>
          <EditorPreview />
        </Box>
      </Flex>
    </HomeLayout>
  );
};
export default Editor;
