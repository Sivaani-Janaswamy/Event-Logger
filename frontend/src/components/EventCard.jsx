import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useEventStore } from '../store/event.js';

const EventCard = ({ event }) => {
  const { deleteEvent, updateEvent } = useEventStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  // State for editing
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [venue, setVenue] = useState(event.venue);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);
  const [image, setImage] = useState(event.image);

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleDeleteEvent = async (id) => {
    const { success, message } = await deleteEvent(id);
    if (success) {
      console.log(message);
    } else {
      console.error(message);
    }
  };
  const handleSave = async () => {
    const { success, message } = await updateEvent(event._id, {
      title,
      description,
      venue,
      date,
      time,
      image,
    });
    if (success) {
      console.log(message);
      onClose();
    } else {
      console.error(message);
    }
  };

  return (
    <>
      <Box
        maxW="380px"
        borderWidth="1px"
        borderColor="yellow.300"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        display="flex"
        flexDirection="column"
      >
        <Box w="full" h="200px" overflow="hidden">
          <Image
            src={event.image}
            alt={event.title}
            w="full"
            h="full"
            objectFit="cover"
          />
        </Box>

        <VStack flex="1" p={6} align="stretch" spacing={4}>
          <Heading color="gray.800" as="h2" size="lg" noOfLines={2}>
            {event.title}
          </Heading>

          <Text color="gray.600" fontSize="md" noOfLines={4}>
            {event.description}
          </Text>

          <Box pt={2}>
            <Text fontWeight="bold" fontSize="xl" color="blue.600">
              {event.venue}
            </Text>
            <Text fontSize="md" color="gray.500">
              {formattedDate} at {event.time}
            </Text>
          </Box>
        </VStack>

        <HStack p={6} spacing={4}>
          <Button
            colorScheme="red"
            w="full"
            size="lg"
            leftIcon={<EditIcon />}
            onClick={onOpen} // open modal
          >
            Edit Event
          </Button>
          <Button
            variant="outline"
            colorScheme="red"
            w="full"
            size="lg"
            leftIcon={<DeleteIcon />}
            onClick={() => handleDeleteEvent(event._id)}
          >
            Delete
          </Button>
        </HStack>
      </Box>

      {/* Modal for editing */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                placeholder="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
             />
             <Input
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
             />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventCard;
