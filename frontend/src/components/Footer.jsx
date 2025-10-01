import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Input,
  Button,
  HStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

// Define the new color palette for the dark footer
const footerColors = {
  background: 'gray.900',      // A deep, soft black
  text: 'whiteAlpha.900',      // An off-white for main text
  linkHover: 'white',          // Brighter white for link hover
  border: 'gray.700',          // Subtle border color
  accent: 'red.500',           // The red accent from your app's buttons
};

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={footerColors.background}
      color={footerColors.text}
      borderTop="1px solid"
      borderColor={footerColors.border}
    >
      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 10, md: 8 }}
        >
          {/* Column 1: Logo */}
          <VStack alignItems={{ base: 'center', sm: 'flex-start' }}>
            <Heading
              fontFamily="sans-serif"
              fontWeight="bold"
              fontSize="2xl"
              letterSpacing="wider"
              textTransform="uppercase" // Match the uppercase style
            >
              Event Logger
            </Heading>
          </VStack>

          {/* Column 2: Navigation */}
          <VStack alignItems={{ base: 'center', sm: 'flex-start' }}>
            <Text fontWeight="bold" fontSize="lg">Navigation</Text>
            <Link href="#" _hover={{ color: footerColors.linkHover }}>
              Home
            </Link>
            <Link href="#" _hover={{ color: footerColors.linkHover }}>
              All Events
            </Link>
            <Link href="#" _hover={{ color: footerColors.linkHover }}>
              Create Event
            </Link>
          </VStack>

          {/* Column 3: Legal */}
          <VStack alignItems={{ base: 'center', sm: 'flex-start' }}>
            <Text fontWeight="bold" fontSize="lg">Legal</Text>
            <Link href="#" _hover={{ color: footerColors.linkHover }}>
              Privacy Policy
            </Link>
            <Link href="#" _hover={{ color: footerColors.linkHover }}>
              Terms of Service
            </Link>
          </VStack>

          {/* Column 4: Subscribe */}
          <VStack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Text fontWeight="bold" fontSize="lg">Subscribe</Text>
            <Text textAlign={{ base: 'center', sm: 'left' }}>
              Get the latest news and updates directly in your inbox.
            </Text>
            <HStack as="form" w="full" maxW="sm">
              <Input
                placeholder="Your email address"
                bg="gray.800"
                borderColor={footerColors.border}
                color="white"
                _placeholder={{ color: 'gray.500' }}
                borderRadius="md"
                _focus={{
                  borderColor: footerColors.accent,
                  boxShadow: `0 0 0 1px ${footerColors.accent}`,
                }}
              />
              <Button
                colorScheme="red"
                aria-label="Subscribe"
                type="submit"
                borderRadius="md"
                px="6"
                _hover={{ bg: useColorModeValue('red.600', 'red.400') }}
              >
                Sign Up
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;