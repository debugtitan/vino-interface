import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Checkmark from "~/assets/svg/check.svg";
import Bills from "~/assets/images/bills-recharge.png";
import P2P from "~/assets/images/p2p.png";
import Conversion from "~/assets/images/conversion.png";
import Merchants from "~/assets/images/agents.png";

interface Feature {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  direction: "left" | "right";
  checklist: string[];
}

const features: Feature[] = [
  {
    title: "Bills & Recharges",
    heading: "Effortless Payments & Mobile Recharges",
    description:
      "With Vino Wallet, paying bills and recharging your mobile services has never been easier. Our integrated platform allows you to make quick and secure payments using your cryptocurrency or fiat balances.",
    image: Bills,
    direction: "right",
    checklist: [
      "Instant bill payments",
      "Mobile recharge for multiple services",
      "Low transaction fees",
    ],
  },
  {
    title: "P2P Trading",
    heading: "Secure P2P Cryptocurrency Trading",
    description:
      "Trade cryptocurrency directly with other users on our platform in a secure, peer-to-peer environment. We prioritize user privacy and transaction security to make sure your assets are always safe.",
    image: P2P,
    direction: "left",
    checklist: [
      "User-to-user trading",
      "Privacy-focused transactions",
      "No intermediary involvement",
    ],
  },
  {
    title: "Crypto Conversion",
    heading: "Instant Crypto-to-Fiat Conversion",
    description:
      "Need to convert your cryptocurrency into fiat fast? Use our 'Express' service to instantly sell your crypto and have the funds deposited directly into your bank account, available within minutes.",
    image: Conversion,
    direction: "right",
    checklist: [
      "Instant local currency conversion",
      "Fast bank deposits",
      "Competitive exchange rates",
    ],
  },
  {
    title: "Verified Agents",
    heading: "Agent KYC for Secure Transactions",
    description:
      "Our mandatory KYC (Know Your Customer) process ensures that users engaging with agents are verified and compliant with global regulatory standards. This guarantees secure and trustworthy transactions across the platform.",
    image: Merchants,
    direction: "left",
    checklist: [
      "Mandatory KYC for all merchants",
      "Regulatory compliance",
      "Secure merchant interactions",
    ],
  },
];

export default function Features() {
  return (
    <Box>
      <Flex
        p={{ base: 4, md: 10 }}
        align={"center"}
        justify={"center"}
        mt={{ md: 20, base: 10 }}
        w="full"
        id="company">
        <Stack
          width={{ base: "sm", md: "small" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"16px"}>
          <Text
            color={"brand"}
            borderRadius={"full"}
            bg={"surface"}
            fontWeight={"medium"}
            fontSize={"xs"}
            py={2}
            px={16}>
            Key Features Overview
          </Text>
          <Text
            color={"primary"}
            fontSize={{ base: "18px", md: "33px" }}
            textAlign={"center"}
            width={{ md: "small" }}
            fontWeight={"semibold"}>
            The only app you’ll ever need for all your
            crypto needs.
          </Text>
        </Stack>
      </Flex>
      <Box>
        {features.map((feature, idx) => (
          <Flex
            key={idx}
            direction={{
              base: "column",
              md:
                feature.direction === "left"
                  ? "row"
                  : "row-reverse",
            }}
            align="center"
            gap={{ base: 6, md: 12 }}
            p={{ base: 4, md: 8 }}>
            <Box
              flex="1"
              w="full">
              <Image
                src={feature.image}
                alt={feature.title}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Stack
              flex="1"
              gap={3}>
              <Text
                width={{ base: "140px", md: "170px" }}
                borderRadius={"full"}
                bg={"surface"}
                px={4}
                py={2}
                fontSize={{ base: "12px", md: "xs" }}
                color="brand"
                textAlign={{ md: "center" }}
                fontWeight="medium">
                {feature.title}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "43px" }}
                fontWeight="semibold"
                color="primary">
                {feature.heading}
              </Text>
              <Text
                color="neutral"
                fontSize={{ md: "sm", base: "11px" }}
                fontWeight={"normal"}>
                {feature.description}
              </Text>
              <Stack
                gap={{ base: 2, md: 4 }}
                mt={3}>
                {feature.checklist.map((item, i) => (
                  <Flex
                    key={i}
                    align="center"
                    gap={2}>
                    <Image
                      src={Checkmark}
                      alt="checkmark"
                      width={16}
                      height={16}
                    />
                    <Text
                      color="primary"
                      fontWeight={"normal"}
                      fontSize={{ base: "10px", md: "xs" }}>
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
