import React from "react";
import { Box, Image as CImage, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Box maxW={{ base: "160px", md: "250px" }}>
      <Link href="/">
        <Text fontSize="30px" fontWeight={700}>
          🏈
        </Text>
      </Link>
    </Box>
  );
}
