import React, { useEffect } from "react";
import {
  useColorModeValue,
  Container,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEventStore } from "../store/event.js";
import EventCard from "../components/EventCard.jsx";

const HomePage = () => {
  const { fetchEvents, events } = useEventStore();

  const headingColor = useColorModeValue("gray.800", "gray.200");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const linkColor = useColorModeValue("red.500", "red.300");

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="center">

        {events.length === 0 ? (
          <Text fontSize="lg" color={textColor} textAlign="center">
            No events to display. Create a new event to get started!
            <br />
            <Link to={"/create"}>
              <Text
                as="span"
                color={linkColor}
                fontWeight="bold"
                ml={1}
                display="inline-flex"
                alignItems="center"
              >
                Create Event...
              </Text>
            </Link>
          </Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
