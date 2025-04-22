

import {
  Box,
  Flex,
  Stack,
  Text,
  IconButton,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import UserAvater from "~/assets/images/avater.png";
import mobileApp from "~/assets/images/mobile.png";
import { AppStoreLink } from "./Navbar/AppStoreLink";

export default function Testimony() {
  return (
    <Box>
      <Flex
        p={{ base: 4, md: 10 }}
        mt={{ md: 20, base: 10 }}
        w="full">
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 12, md: "36" }}>
          <Stack gap={{ base: 3, md: 6 }}>
            <Text
              width={{ base: "180px", md: "170px" }}
              borderRadius={"full"}
              bg={"surface"}
              px={4}
              py={2}
              fontSize={{ base: "12px", md: "xs" }}
              color="brand"
              textAlign={{ md: "center" }}
              fontWeight="medium">
              Amazing Testimonials
            </Text>
            <Text
              fontSize={{ base: "small", md: "38px" }}
              fontWeight="semibold"
              lineHeight={{ base: "33px", md: "43px" }}
              color="primary">
              What they are saying about{" "}
              <Text
                as={"span"}
                color={"brand"}>
                Vino
              </Text>{" "}
              Wallet
            </Text>
            <Text
              fontWeight={"normal"}
              color={"neutral"}
              width={{ md: "320px" }}
              fontSize={{ base: "xs", md: "16px" }}>
              Choose Vino Wallet to start enjoying seamless
              crypto transactions.
            </Text>

            <Stack
              direction={"row"}
              display={{ base: "none", md: "flex" }}
              gap={4}>
              <IconButton
                variant={"ghost"}
                w={6}
                h={6}
                px={2}
                py={4}
                borderRadius={"12px"}
                borderColor={"primary.thin"}
                bg={"white"}
                color={"primary"}>
                <LuArrowLeft />
              </IconButton>
              <IconButton
                variant={"ghost"}
                w={6}
                h={6}
                py={4}
                px={2}
                borderRadius={"12px"}
                bg={"brand"}
                color={"white"}>
                <LuArrowRight />
              </IconButton>
            </Stack>
          </Stack>

          <Stack
            gap={{ base: 6, md: 2 }}
            mt={{ md: 14 }}>
            <Text
              alignSelf={{
                base: "center",
                md: "self-start",
              }}
              width={{ base: "50px", md: "70px" }}
              borderRadius={"16px"}
              borderColor={"primary.thin"}
              bg={"surface.neutral"}
              px={4}
              py={4}
              fontSize={{ base: "12px", md: "xs" }}
              color="primary"
              textAlign={"center"}
              fontWeight="medium">
              “
            </Text>

            <Text
              color={"primary"}
              fontSize={{ base: "xs", md: "sm" }}
              lineHeight={{ base: "26px", md: "33px" }}>
              Trading cryptocurrency with the P2P platform
              felt incredibly secure, and the fees are super
              low!
            </Text>
            <Stack
              direction="row"
              gap={2}>
              <Avatar.Root
                size={{ base: "xl", md: "2xl" }}
                variant={"outline"}
                borderColor={"background"}>
                <Avatar.Fallback name="Ebuka Adenuga" />
                <Avatar.Image src={UserAvater.src} />
              </Avatar.Root>
              <Stack mt={2}>
                <Text
                  color={"neutral"}
                  fontWeight={"normal"}
                  fontSize={{ md: "16px", base: "8px" }}>
                  Expert Crypto Trader
                </Text>
                <Text
                  color={"primary"}
                  fontSize={{ md: "sm", base: "12px" }}
                  fontWeight={"medium"}>
                  Ebuka Adenuga
                </Text>
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              display={{ base: "flex", md: "none" }}
              gap={4}
              alignSelf={"center"}>
              <IconButton
                variant={"ghost"}
                w={6}
                h={6}
                px={2}
                py={4}
                borderRadius={"12px"}
                borderColor={"primary.thin"}
                bg={"white"}
                color={"primary"}>
                <LuArrowLeft />
              </IconButton>
              <IconButton
                variant={"ghost"}
                w={6}
                h={6}
                py={4}
                px={2}
                borderRadius={"12px"}
                bg={"brand"}
                color={"white"}>
                <LuArrowRight />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Flex>

      <Box
        px={{ base: 4, md: 10 }}
        mt={{ base: 20, md: 28 }}
        position={"relative"}>
        <Flex
          position={"relative"}
          bg={"primary"}
          p={{ base: 4, md: 10 }}
          borderRadius={"xl"}
          height={{ base: "70vh", md: "55vh" }}>
          <Stack
            mt={6}
            gap={{ base: 8, md: 8 }}>
            <Badge
              cursor={"pointer"}
              color={"brand"}
              bg={"surface"}
              borderRadius={"full"}
              px={4}
              py={{ base: 2, md: 6 }}
              fontSize={{ base: "xs", md: "small" }}
              width={{ base: "160px", md: "210px" }}
              fontWeight={"medium"}>
              Download For Free
            </Badge>
            <Text
              textTransform={"capitalize"}
              fontWeight={"semibold"}
              width={{ md: "580px" }}
              fontSize={{ base: "sm", md: "43px" }}>
              get your{" "}
              <Text
                as="span"
                color={"brand"}>
                Vino
              </Text>{" "}
              Wallet mobile Application
            </Text>
            <AppStoreLink />
          </Stack>
        </Flex>
        <Box
          position={"absolute"}
          top={{ md: "-150px", base: "230px" }}
          right={{ base: "-6px", md: "150px" }}>
          <Image
            src={mobileApp}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}
