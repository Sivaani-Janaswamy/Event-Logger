import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Text,
  Box, 
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEventStore } from '../store/event.js'; 

const CreatePage = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    venue: "",
    date: "",
    time: "",
    description: "",
    image: "",
  });
  const toast = useToast();
  const {createEvent} = useEventStore();
  const handleAddEvent = async() => {
    const {success,message} = await createEvent(newEvent);
    console.log("Success:",success,"Message:",message);
    if(success){
      toast({
        title: "Event Created",
        description: message,
        position: "top",
        duration: 3000,
        isClosable: true,
        render: () => (
        <Box color="white" p={3} bg="red.500" borderRadius="md">
        Event Created Successfully!
        </Box>),
      });
    }else{
      toast({
        title: "Error Creating Event",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Container maxW={"container.xl"} py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 16 }} // Increased gap for better separation
        align="center"
      >
        {/* --- REVISED LEFT SIDE (STYLED TO MATCH IMAGE) --- */}
        <VStack
          flex={1}
          spacing={4} // Sets the space between children (Heading, Text, Animation)
          alignItems={{ base: "center", md: "flex-start" }} // Aligns content to the left on desktop
          textAlign={{ base: "center", md: "left" }}
        >
          {/* 1. STYLED HEADING */}
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }} // Responsive font size
            fontWeight="bold" // Bolder font weight to match image
            color= {useColorModeValue("gray.800", "gray.200")} // Dark color, not red
            lineHeight="1.1" // Tighter line height
          >
            Log your Events Seamlessly
          </Heading>
          
          {/* 2. STYLED SUB-TEXT */}
          <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("gray.800", "gray.200")} maxW="lg">
            Log, track, and manage all your important events in one place. Never miss a detail again.
          </Text>

          {/* 3. SPACED ANIMATION */}
          <Box pt={6} w="full"> 
            <DotLottieReact
              src="https://lottie.host/b8480132-4b40-4d62-841e-987603187adc/kR8lEwk2EJ.lottie"
              loop
              autoplay
              style={{ maxWidth: "450px", width: "100%", margin: "0 auto", marginLeft: 0 }}
            />
          </Box>
        </VStack>
        {/* --- END OF REVISED LEFT SIDE --- */}

        {/* RIGHT SIDE - FORM (No changes here) */}
        <VStack spacing={6} flex={1} align="stretch" w="full">
          <Heading textAlign={{ base: "center", md: "left" }}>
            Create New Event
          </Heading>

          {/* ... all your FormControl and Input components remain the same ... */}
          <FormControl id="title" isRequired>
            <FormLabel>Event Title</FormLabel>
            <Input
              placeholder="Event Title"
              size="lg"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              borderColor="red.500"
              _focus={{ borderColor: "red.500", boxShadow: "none" }}
              _hover={{ borderColor: "red.500" }}
            />
          </FormControl>

          <FormControl id="venue" isRequired>
            <FormLabel>Event Venue</FormLabel>
            <Input
              placeholder="Event Venue"
              size="lg"
              value={newEvent.venue}
              onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
              borderColor="red.500"
              _focus={{ borderColor: "red.500", boxShadow: "none" }}
              _hover={{ borderColor: "red.500" }}
            />
          </FormControl>

          <FormControl id="date" isRequired>
            <FormLabel>Event Date</FormLabel>
            <Input
              type="date"
              size="lg"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              borderColor="red.500"
              _focus={{ borderColor: "red.500", boxShadow: "none" }}
              _hover={{ borderColor: "red.500" }}
            />
          </FormControl>

          <FormControl id="time" isRequired>
            <FormLabel>Event Time</FormLabel>
            <Input
              type="time"
              size="lg"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              borderColor="red.500"
              _focus={{ borderColor: "red.500", boxShadow: "none" }}
              _hover={{ borderColor: "red.500" }}
            />
          </FormControl>

          <FormControl id="description">
            <FormLabel>Event Description</FormLabel>
            <Textarea
              placeholder="Event Description"
              size="lg"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              borderColor="red.500"
              _focus={{ borderColor: "red.500", boxShadow: "none" }}
              _hover={{ borderColor: "red.500" }}
            />
          </FormControl>

          <FormControl id="image" isRequired>
            <FormLabel>Event Image URL</FormLabel>
            <Input
              placeholder="Event Image URL"
              size="lg"
              value={newEvent.image}
              onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
              borderColor="red.500"
              _focus={{ borderColor: "red.500", boxShadow: "none" }}
              _hover={{ borderColor: "red.500" }}
            />
          </FormControl>

          <Button onClick={handleAddEvent} colorScheme="red" size="lg" w="full">
            Create Event
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default CreatePage;