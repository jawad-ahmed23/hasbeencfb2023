import React from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  HStack,
  Container,
  useDisclosure,
  Link as CLink,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../..";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./Drawer";

export const navItems = [
  {
    id: 1,
    label: "Sign in",
    href: "#",
  },

  // {
  //   id: 5,
  //   label: "PHRON",
  //   href: "/phron",
  // },
  // {
  //   id: 5,
  //   label: "PHRON",
  //   href: "/#",
  // },
];

export default function Nav() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Box as="nav" py="3" pos="sticky" bgColor="secondary" top={0} zIndex="999">
      <Container maxW="1400px">
        <HStack justifyContent="space-between">
          <Logo />

          <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Box display={{ base: "flex", xl: "none" }} onClick={onOpen}>
            <CgMenuRightAlt size="30px" />
          </Box>

          <HStack spacing="30px" display={{ base: "none", xl: "flex" }}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                _hover={{
                  color: "primary",
                }}
                color="#fff"
                fontSize={{ "3000px": "lg" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
