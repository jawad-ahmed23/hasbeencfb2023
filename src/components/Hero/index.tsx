import React from "react";
import { Climate_Crisis } from "next/font/google";
import {
  Box,
  VStack,
  Text,
  Container,
  Button,
  Heading,
  Link
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

const climate_crisis = Climate_Crisis({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <Box h="90vh">
      <Container maxW="1160px" h="full">
        <VStack h="full" alignItems="center" justifyContent="center">
          <Fade top>
            <Heading
              style={climate_crisis.style}
              textAlign={"center"}
              as="h1"
              textTransform="uppercase"
              marginBottom={5}
              fontSize={{
                base: "35px",
                sm: "50px",
                md: "80px",
                lg: "100px",
                xl: "120px",
                "2xl": "130px",
              }}
              color="primary"
              wordBreak="break-all"
            >
              2023 has been pick em
            </Heading>
          </Fade>
          <Fade bottom>
            <Text fontSize="20px" mb="5" textAlign="center">

              Elevate your game day banter! Bet smart, play fierce – your friends, your rules. Let the touchdowns begin!

            </Text>
          </Fade>
          <Fade bottom>
            <Button
              variant="primary-outline"
              rounded="full"
              size={{ base: "md", md: "lg" }}
              as={Link}
              href="https://ncaa-bet-app.vercel.app/"
              target="_blank"
            >
              Bet Now
            </Button>
          </Fade>
        </VStack>
      </Container>
    </Box>
  );
}
