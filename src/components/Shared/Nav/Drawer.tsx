import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Text,
  Link as CLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../Logo";
import { navItems } from ".";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function MobileDrawer(props: MobileDrawerProps) {
  const { isOpen, onClose, onOpen } = props;
  const router = useRouter();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#03020b">
          <DrawerCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
          <DrawerHeader p="5">
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <VStack w="full" align="start" spacing="5">
              {navItems.map((item) => (
                <Text
                  as={Link}
                  key={item.id}
                  href={item.href}
                  _hover={{
                    color: "primary",
                  }}
                  color="#fff"
                >
                  {item.label}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
