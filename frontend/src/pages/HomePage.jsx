
import React, { useEffect } from "react";
import { 
  useColorModeValue,
  Container,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { useEventStore } from "../store/event.js";

const HomePage = () => {
  const {fetchEvents,events} = useEventStore();
  useEffect(() => {
    fetchEvents();
  }, [ fetchEvents]);
  console.log("Events:",events);
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="center">
        <Text
          fontSize = {"30"}
          fontWeight = {"bold"}
          color = {useColorModeValue("gray.800", "gray.200")}
          textAlign = "center"
        >
          Current Events 
        </Text>
        <SimpleGrid 
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >
        </SimpleGrid>
        <Text fontSize = {"20"} color = {useColorModeValue("gray.800", "gray.200")} textAlign = "center">
          No events to display. Create a new event to get started! 
          <br />
          <Link to={"/create"}>
            <Text as="span" color={useColorModeValue("red.500", "red.300")} fontWeight="bold" ml={1} display="inline-flex" alignItems="center">
                    Create Event...
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage
