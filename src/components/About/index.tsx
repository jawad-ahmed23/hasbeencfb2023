import React from "react";
import { Climate_Crisis } from "next/font/google";
import { Box, VStack, Text, Stack, Container, Link } from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    link: "#",
  },
  {
    id: 2,
    label: "Twitter",
    link: "#",
  },
  {
    id: 3,
    label: "Instagram",
    link: "#",
  },
  {
    id: 4,
    label: "Linkedin",
    link: "#",
  },
];

export default function About() {
  return (
    <Box minH="100vh">
      <Container maxW="1160px" h="full">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
          spacing="10"
        >
          <Box w={{ base: "full", lg: "80%" }}>
            <Fade left>
              <Text
                fontSize={{ base: "25px", md: "64px" }}
                fontWeight={700}
                lineHeight="1.2"
              >
                Unleash your inner beast and dominate the NCAA football betting
                scene with our cutting-edge platform BlitzBets!
              </Text>
            </Fade>
          </Box>
          <VStack alignItems="flex-start" w={{ base: "full", lg: "20%" }}>
            {socialLinks.map((link, i) => (
              <Box
                key={link.id}
                w="full"
                borderBottom={
                  socialLinks.length - 1 !== i ? "1px solid #034072" : ""
                }
                py="4"
              >
                <Fade right>
                  <Text
                    as={Link}
                    _hover={{
                      color: "primary",
                    }}
                    color="#fff"
                  >
                    {link.label}
                  </Text>
                </Fade>
              </Box>
            ))}
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
