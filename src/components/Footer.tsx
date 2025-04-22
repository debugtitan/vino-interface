import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Span,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import Facebook from "~/assets/svg/facebook.svg";
import Instagram from "~/assets/svg/instagram.svg";
import Twitter from "~/assets/svg/x.svg";
import Youtube from "~/assets/svg/youtube.svg";
import LinkedIn from "~/assets/svg/linkedIn.svg";
import { AppStoreLink } from "./Navbar/AppStoreLink";

export default function Footer() {
  return (
    <Box bg={"primary"}>
      <Container position={"relative"}>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          gap={{ base: 8, md: 20 }}>
          <Stack
            mt={{ base: 8, md: 12 }}
            gap={{ base: 6, md: 12 }}
            p={{ base: 4, md: 8 }}>
            <Text
              fontWeight={"semibold"}
              fontSize={{ base: "small", md: "34px" }}>
              {" "}
              <Span color={"brand"}>Vino</Span> Wallet
            </Text>
            <Text fontSize={{ base: "xs", md: "16px" }}>
              Pay bills, recharge mobile services, and
              manage your finances seamlessly—all within one
              platform that integrates multiple utilities
              for your convenience.
            </Text>
            <Stack
              direction={"row"}
              gap={{ base: 8, md: 10 }}
              mb={{ base: 8, md: 10 }}>
              <Box>
                {" "}
                <Image
                  src={LinkedIn}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Box>
              <Box>
                {" "}
                <Image
                  src={Youtube}
                  alt="Youtube"
                  width={24}
                  height={24}
                />
              </Box>
              <Box>
                {" "}
                <Image
                  src={Instagram}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Box>
              <Box>
                {" "}
                <Image
                  src={Twitter}
                  alt="X"
                  width={24}
                  height={24}
                />
              </Box>
              <Box>
                {" "}
                <Image
                  src={Facebook}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Box>
            </Stack>
          </Stack>
          <Flex
            position={"relative"}
            bg={"primary"}
            p={{ base: 4, md: 10 }}>
            <Stack
              mt={{ base: 8, md: 4 }}
              gap={{ base: 8, md: 8 }}>
              <Badge
                cursor={"pointer"}
                color={"brand"}
                bg={"surface"}
                borderRadius={"full"}
                px={4}
                py={{ base: 2, md: 6 }}
                fontSize={{ base: "xs", md: "sm" }}
                width={{ base: "160px", md: "210px" }}
                fontWeight={"medium"}>
                Download For Free
              </Badge>
              <Text
                textTransform={"capitalize"}
                fontWeight={"semibold"}
                width={{ md: "580px" }}
                fontSize={{ base: "sm", md: "34px" }}>
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
        </Stack>
      </Container>
    </Box>
  );
}
