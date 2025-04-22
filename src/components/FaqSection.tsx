"use client";
import {
  Box,
  Text,
  Accordion,
  Collapsible,
  IconButton,
  Span,
} from "@chakra-ui/react";

import { LuPlus, LuMinus } from "react-icons/lu";

interface Faq {
  id: string;
  title: string;
  content: string;
}
const items: Faq[] = [
  {
    id: "Q1",
    title: "Q1: What services does Vino Wallet offer?",
    content:
      "Vino Wallet provides a multi-utility payment platform, peer-to-peer (P2P) cryptocurrency trading, direct crypto-to-fiat conversion, merchant KYC integration, and multi-currency card exchange services.",
  },
  {
    id: "Q2",
    title: "Q2: Is P2P cryptocurrency trading secure?",
    content:
      "Vino Wallet provides a multi-utility payment platform, peer-to-peer (P2P) cryptocurrency trading, direct crypto-to-fiat conversion, merchant KYC integration, and multi-currency card exchange services.",
  },
  {
    id: "Q3",
    title: "Q3: How do I start trading on Vino Wallet?",
    content:
      "Vino Wallet provides a multi-utility payment platform, peer-to-peer (P2P) cryptocurrency trading, direct crypto-to-fiat conversion, merchant KYC integration, and multi-currency card exchange services.",
  },
  {
    id: "Q4",
    title:
      "Q4: Are there any fees for using the crypto-to-fiat conversion service?",
    content:
      "Vino Wallet provides a multi-utility payment platform, peer-to-peer (P2P) cryptocurrency trading, direct crypto-to-fiat conversion, merchant KYC integration, and multi-currency card exchange services.",
  },
  {
    id: "Q5",
    title:
      "Q5: Is my personal information safe on Vino Wallet?",
    content:
      "Vino Wallet provides a multi-utility payment platform, peer-to-peer (P2P) cryptocurrency trading, direct crypto-to-fiat conversion, merchant KYC integration, and multi-currency card exchange services.",
  },
];

export default function FaqSection() {
  return (
    <Box mt={{ md: 32, base: "96" }}>
      <Box
        p={{ base: 4, md: 10 }}
        alignSelf={"center"}
        justifyItems={"center"}>
        <Text
          mb={{ base: 4, md: 8 }}
          fontSize={{ base: "sm", md: "43px" }}
          fontWeight={"semibold"}
          lineHeight={{ base: "33px" }}
          color={"primary"}>
          Frequently Asked Questions
        </Text>
        <Text
          color={"neutral"}
          fontSize={{ base: "11px", md: "sm" }}
          lineHeight={"16px"}
          textAlign={"center"}>
          If there's anything we haven't addressed, feel
          free to let us know at{" "}
          <Text
            as="span"
            color={"brand"}
            fontSize={{ base: "12px", md: "sm" }}>
            hello@vinowallet.com
          </Text>
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent={{
          base: "flex-start",
          md: "center",
        }}
        px={{ base: 4, md: 0 }}>
        <Accordion.Root
          collapsible
          defaultValue={["Q1"]}
          maxW="850px">
          {items.map((item, index) => (
            <Accordion.Item
              key={index}
              borderColor={"border.thin"}
              value={item.id}>
              <Accordion.ItemTrigger m={2}>
                <Span
                  flex="1"
                  lineHeight={"26px"}
                  color={"primary"}
                  fontWeight={"medium"}
                  fontSize={{
                    base: "12px",
                    md: "sm",
                  }}>
                  {item.title}
                </Span>
                <Accordion.ItemIndicator asChild>
                  <IconButton
                    color={"border.thin"}
                    variant={"ghost"}
                    bg={"transparent"}
                    size={"xs"}>
                    <Collapsible.Context>
                      {store =>
                        store.open ? (
                          <LuMinus />
                        ) : (
                          <LuPlus />
                        )
                      }
                    </Collapsible.Context>
                  </IconButton>
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody
                  p={2}
                  width={{ md: "65%" }}
                  lineHeight={"22px"}
                  fontSize={{
                    md: "14px",
                    base: "10px",
                  }}
                  color={"primary"}
                  fontWeight={"normal"}>
                  {item.content}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Box>
  );
}
