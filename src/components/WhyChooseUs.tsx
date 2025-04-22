import {
  Box,
  Flex,
  Text,
  Stack,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import whyImage from "~/assets/images/section.png";

interface Step {
  number: string;
  title: string;
  description: string;
}
const steps: Step[] = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in minutes with an email and secure verification.",
  },
  {
    number: "02",
    title: "Add Crypto Funds",
    description:
      "Deposit your crypto assets into your Vino Wallet.",
  },
  {
    number: "03",
    title: "Trade or Convert",
    description:
      "Use our P2P or 'Express' services to trade or convert your crypto.",
  },
  {
    number: "04",
    title: "Withdraw or Pay",
    description:
      "Instantly withdraw funds or use them for bills and payments.",
  },
];

export default function WhyVino() {
  return (
    <Box>
      <Flex
        p={{ base: 4, md: 10 }}
        align={"center"}
        justify={"center"}
        mt={8}
        w="full">
        <Stack
          width={{ base: "sm", md: "small" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"24px"}>
          <Text
            color={"brand"}
            fontWeight={"medium"}
            fontSize={{ base: "sm", md: "small" }}>
            Why Choose Vino Wallet?
          </Text>
          <Text
            color={"primary"}
            fontSize={{ base: "xs", md: "18px" }}
            textAlign={"center"}
            width={{ md: "small" }}>
            "Vino Wallet is a versatile payment and
            cryptocurrency trading platform designed to meet
            your daily transaction needs. Whether it's
            paying bills, recharging your phone, trading
            crypto securely, or converting assets to PayPal
            dollars, we’ve got you covered."
          </Text>
        </Stack>
      </Flex>
      <Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          gap={{ base: 10, md: 4 }}
          p={{ base: 4, md: 10 }}
          alignItems={"center"}>
          <Box
            border={"1px"}
            borderColor={"primary.thin"}
            width={{ md: "53%" }}>
            <Image
              src={whyImage}
              alt="why vino wallet"
            />
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: 2, md: 4 }}
            width={{ md: "47%", base: "full" }}>
            {steps.map((step, index) => (
              <Box
                key={index}
                position={"relative"}
                p={{ base: 4 }}
                bg="white"
                borderRadius={{ base: "12px", md: "24px" }}
                boxShadow="sm"
                border={{ base: "0.71px", md: "1px" }}
                borderColor="primary.thin"
                height={{ md: "131px" }}
                overflow={"hidden"}>
                <Text
                  position="absolute"
                  top="12px"
                  left="16px"
                  fontSize={{ base: "32px", md: "48px" }}
                  fontWeight="bold"
                  color="surface"
                  zIndex={0}
                  lineHeight="1">
                  {step.number}
                </Text>
                <Stack
                  gap={1}
                  position="relative"
                  zIndex={1}>
                  <Text
                    mt={{ base: 3, md: 6 }}
                    fontSize={{ base: "12px", md: "18px" }}
                    fontWeight="semibold"
                    color="primary">
                    {step.title}
                  </Text>
                  <Text
                    fontSize={{ base: "10px", md: "16px" }}
                    color="neutral"
                    fontWeight="normal">
                    {step.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
}
