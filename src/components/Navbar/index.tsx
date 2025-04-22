"use client";

import {
  Flex,
  Box,
  Text,
  Link,
  Stack,
  useDisclosure,
  IconButton,
  Collapsible,
} from "@chakra-ui/react";
import { LuX, LuMenu } from "react-icons/lu";

import { AppStoreLink } from "./AppStoreLink";

export default function NavBar() {
  const { open, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg="white"
        px={{ base: 4, md: 10 }}
        py={4}
        align="center"
        justify={"space-between"}>
        {/* Vino Logo */}
        <Flex
          justify={"start"}
          flex={1}>
          <Link
            gap={1}
            cursor={"checkbox"}
            href="/"
            outline={"none"}
            textDecoration={"none"}>
            <Text
              color="brand"
              fontWeight={800}
              fontSize={{ base: "small", md: "medium" }}>
              Vino
            </Text>
            <Text
              color="primary"
              fontWeight={800}
              fontSize={{ base: "small", md: "medium" }}>
              Wallet
            </Text>
          </Link>
        </Flex>

        {/* NavItems */}
        <Flex
          display={{ base: "none", md: "flex" }}
          flex={1}>
          <Stack
            direction={"row"}
            gap={6}>
            <Link
              color={"primary"}
              fontWeight={"medium"}
              fontSize={"sm"}
              outline={"none"}
              textDecoration={"none"}
              lineHeight={"27px"}
              href="#home">
              Home
            </Link>
            <Text
              color={"slategray"}
              fontWeight={"medium"}
              fontSize={"sm"}
              lineHeight={"27px"}>
              &sdot;
            </Text>
            <Link
              color={"primary"}
              fontWeight={"medium"}
              fontSize={"sm"}
              outline={"none"}
              textDecoration={"none"}
              href="#company"
              lineHeight={"27px"}>
              Company
            </Link>
          </Stack>
        </Flex>

        {/* App Store Link */}
        <Flex
          display={{ base: "none", md: "flex" }}
          justify={"flex-end"}>
          <AppStoreLink />
        </Flex>

        {/* Menu Toggle Mobile View */}
        <IconButton
          display={{ md: "none" }}
          onClick={onToggle}
          width={18}
          height={12}>
          {open ? (
            <LuX color="primary" />
          ) : (
            <LuMenu color="primary" />
          )}
        </IconButton>
      </Flex>
      {/* Mobile Menu Overlay */}

      <Collapsible.Root
        open={open}
        display={{ md: "none" }}>
        <Collapsible.Content>
          <Box
            bg={"white"}
            p={4}>
            <Stack
              direction={"column"}
              gap={6}>
              <Link
                color={"primary"}
                fontWeight={"medium"}
                fontSize={"sm"}
                outline={"none"}
                textDecoration={"none"}
                lineHeight={"27px"}
                href="#home"
                onClick={onToggle}>
                Home
              </Link>

              <Link
                color={"primary"}
                fontWeight={"medium"}
                fontSize={"sm"}
                outline={"none"}
                textDecoration={"none"}
                href="#company"
                lineHeight={"27px"}
                onClick={onToggle}>
                Company
              </Link>
              <AppStoreLink />
            </Stack>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}
