import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AppStoreLink } from "./Navbar/AppStoreLink";
import HeroImage from "~/assets/images/hero-small.png";

export default function HeroSection() {
  return (
    <Box>
      <Flex
        p={{ base: 4 }}
        px={{ md: 10 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          mt={{ base: 6, md: 16 }}
          gap={{ base: 8, md: 12 }}>
          <Stack
            id="home"
            width={{ base: "sm", md: "md" }}
            gap={{ base: 4, md: 8 }}>
            <Text
              color={"primary"}
              fontSize={{ base: "medium", md: "md" }}
              fontWeight="semibold">
              All-in-One Payment Platform for Crypto and
              Beyond
            </Text>
            <Text
              width={{ md: "small" }}
              color={"primary"}
              fontSize={{ base: "xs", md: "19px" }}
              fontWeight={"normal"}>
              Pay bills, recharge mobile services, and
              manage your finances seamlessly—all within one
              platform that integrates multiple utilities
              for your convenience.
            </Text>
            <AppStoreLink />
          </Stack>
          <Image
            src={HeroImage}
            alt="iPhone 14 Pro Max"
          />
        </Stack>
      </Flex>
    </Box>
  );
}
