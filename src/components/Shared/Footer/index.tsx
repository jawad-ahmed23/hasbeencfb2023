import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { PiTwitchLogoFill } from "react-icons/pi";

interface IFooterLinks {
  [key: string]: { id: number; label: string; href: string }[];
}

const footerLinks: IFooterLinks = {
  Company: [
    {
      id: 1,
      label: "About",
      href: "#",
    },
    {
      id: 2,
      label: "Team",
      href: "#",
    },
    {
      id: 3,
      label: "Careers",
      href: "#",
    },
  ],
  Support: [
    {
      id: 1,
      label: "FAQ",
      href: "#",
    },
    {
      id: 2,
      label: "Contact",
      href: "#",
    },
    {
      id: 3,
      label: "Terms",
      href: "#",
    },
  ],
  Community: [
    {
      id: 1,
      label: "Blog",
      href: "#",
    },
    {
      id: 2,
      label: "Forums",
      href: "#",
    },
    {
      id: 3,
      label: "Guid",
      href: "#",
    },
  ],
};

export default function Footer() {
  return (
    <Box as="footer" py="10" bg="secondary">
      <Container maxW="1400px">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap="10"
          pb="20"
        >
          {Object.keys(footerLinks).map((key: keyof IFooterLinks) => (
            <GridItem key={key}>
              <Text mb="3" fontWeight={700}>
                {key}
              </Text>
              <VStack align="start">
                {footerLinks[key].map((link) => (
                  <Box key={link.id}>
                    <Text
                      as={Link}
                      href={link.href}
                      key={link.id}
                      color="primary"
                      _hover={{
                        color: "#fff",
                        transition: "all .3s",
                      }}
                      transition="all .3s"
                    >
                      {link.label}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </GridItem>
          ))}
        </Grid>
        <VStack spacing="5" borderTop="1px solid #022440" pt="10">
          <HStack fontSize="30px" spacing="5" color="#c1c1c1">
            <Text
              as={Link}
              href="#"
              target="_blank"
              transition="all .3s"
              color="primary"
              _hover={{
                transition: "all .3s",
                color: "#fff",
              }}
              fontSize={{ "3000px": "35px" }}
            >
              <AiOutlineTwitter />
            </Text>
            <Text
              as={Link}
              href="#"
              target="_blank"
              transition="all .3s"
              color="primary"
              _hover={{
                transition: "all .3s",
                color: "#fff",
              }}
              fontSize={{ "3000px": "35px" }}
            >
              <AiFillInstagram />
            </Text>
            <Text
              as={Link}
              href="#"
              target="_blank"
              transition="all .3s"
              color="primary"
              _hover={{
                transition: "all .3s",
                color: "#fff",
              }}
              fontSize={{ "3000px": "35px" }}
            >
              <FaFacebook />
            </Text>
            <Text
              as={Link}
              href="#"
              target="_blank"
              transition="all .3s"
              color="primary"
              _hover={{
                transition: "all .3s",
                color: "#fff",
              }}
              fontSize={{ "3000px": "35px" }}
            >
              <PiTwitchLogoFill />
            </Text>
          </HStack>
          <Text color="primary">
            &copy; {new Date().getFullYear()} BitzBets, Inc
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
