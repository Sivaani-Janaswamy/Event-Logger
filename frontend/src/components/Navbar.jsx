import { Container , Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"container.xl"} py={4} textAlign={"center"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
      <Text
        fontSize={{base: "22", sm: "28"}}
        fontWeight={"extrabold"}
        textTransform={"uppercase"}
        textAlign={"center"}
      >
        <Link to={"/"}>Event Logger</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
        <Button 
          colorScheme={"red"}
          size={"lg"}
          rightIcon={<AddIcon boxSize={3}></AddIcon>}
        >
          Create Event
        </Button>
       </Link>
       <Button onClick={toggleColorMode} size={"lg"} colorScheme={"red"}>
        {colorMode === "light" ? "Dark" : "Light"} Mode
       </Button>
    </HStack>
    </Flex>
  </Container>
 );
};

export default Navbar;