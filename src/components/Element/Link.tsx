import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GrDrag } from "react-icons/gr";
import { AppContext } from "../../context/AppContext";
import { v4 as uuid } from "uuid";
import { CloseProps, LinkProps } from "../../types/types.interface";
import { AiOutlineDelete } from "react-icons/ai";

const defaultLink = {
  link: "",
  title: "",
  id: uuid(),
};

export const Link = ({ onClose }: CloseProps) => {
  const { links, setLinks } = useContext(AppContext);
  const [newlink, setNewLinks] = useState([...links, defaultLink]);

  const handleSubmit = () => {
    setLinks([...links, ...newlink]);
    setNewLinks([defaultLink]);
    onClose();
  };

  const addInput = () => {
    setNewLinks((prev: LinkProps[]) => [...prev, defaultLink]);
  };

  const handleChange =
    (optionId: string, name: string) => (e: { target: { value: string } }) => {
      setNewLinks((prevValues: LinkProps[] | any) => {
        const index = prevValues.findIndex(
          (option: { id: string }) => option.id === optionId
        );
        const newValues = [...prevValues];
        let selectedValue = newValues[index];
        selectedValue[name] = e.target.value;
        return newValues;
      });
    };
  const removeInput = (id: string) => {
    setNewLinks(newlink.filter(({ id: itemId }) => id !== itemId));
  };

  return (
    <Flex direction={"column"} h={"100%"} justify="space-between">
      <Box h={"100%"}>
        {newlink?.map(({ id, link, title }, i) => (
          <Box
            key={id}
            marginBottom={3}
            border={"1px solid #E5E8F0"}
            borderRadius={10}
            p={4}
            alignItems="center">
            <Flex
              cursor="pointer"
              justify={"space-between"}
              alignItems="center"
              marginBottom={[5]}>
              <Flex alignItems="center">
                <GrDrag color="#4D5760" />

                <Text marginLeft={2} fontWeight={600} fontSize={16}>
                  Links
                </Text>
              </Flex>
              {i !== 0 && (
                <AiOutlineDelete
                  color="#4D5760"
                  onClick={() => removeInput(id)}
                />
              )}
            </Flex>
            <FormControl>
              <FormLabel htmlFor="username">Title</FormLabel>
              <Input
                name="title"
                onChange={handleChange(id, "title")}
                id={id}
                defaultValue={title}
              />
            </FormControl>
            <FormControl>
              <FormLabel marginTop={3} htmlFor="username">
                Link
              </FormLabel>
              <Input
                name="link"
                onChange={handleChange(id, "link")}
                id={id}
                defaultValue={link}
              />{" "}
            </FormControl>
          </Box>
        ))}
        {newlink.length < 3 && (
          <Button
            marginTop={3}
            fontSize={15}
            width={"100%"}
            borderRadius={100}
            onClick={addInput}
            color="black"
            backgroundColor="white"
            border={"1px solid #E5E8F0"}>
            Add links
          </Button>
        )}
      </Box>
      <Button
        marginTop={3}
        fontSize={15}
        width={"100%"}
        borderRadius={100}
        color="white"
        onClick={handleSubmit}
        backgroundColor="black"
        border={"1px solid #E5E8F0"}>
        Save
      </Button>
    </Flex>
  );
};
