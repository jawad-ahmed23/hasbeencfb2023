import React from "react";
import {
  Box,
  VStack,
  Text,
  Container,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function CallToAction() {
  const borderRadius = useBreakpointValue({ base: "10px", md: "40px" });
  return (
    <Box
      overflow="hidden"
      // minH={{ md: "100vh" }}
      pb={{ base: "50px", md: "150px" }}
    >
      <Container maxW="1160px">
        <Box mb="10">
          <Fade>
            <Image
              src="/ground-img.jpg"
              width={1160}
              height={600}
              alt="men playing football"
              style={{
                borderRadius: borderRadius,
                filter: "grayscale(1)",
              }}
            />
          </Fade>
        </Box>

        <Fade bottom>
          <VStack mb="5">
            <Button
              variant="primary"
              w="full"
              py={{ base: "8", md: "12" }}
              px="8"
              fontSize={{ base: "xl", md: "3xl" }}
              rounded="full"
              rightIcon={<SlArrowRight />}
            >
              <Text textAlign="left" w="full">
                Join Now
              </Text>
            </Button>
          </VStack>
        </Fade>
        <Fade bottom>
          <VStack>
            <Button
              variant="primary-outline"
              w="full"
              py={{ base: "8", md: "12" }}
              px="8"
              fontSize={{ base: "xl", md: "3xl" }}
              rounded="full"
              rightIcon={<SlArrowRight />}
            >
              <Text textAlign="left" w="full">
                Learn More
              </Text>
            </Button>
          </VStack>
        </Fade>
      </Container>
    </Box>
  );
}
