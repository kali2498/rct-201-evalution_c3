import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

import { SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5px",
        backgroundColor: "#1a202c",
        color: "white",
      }}
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        paddingRight="40px"
        paddingLeft="40px"
      >
        <Box p="2">
          <Heading size="md">
            <Link href="/">Akash More</Link>{" "}
          </Heading>
        </Box>
        <br />
        <Button bg="transparent">
          <Link href="./project">Projects</Link>
        </Button>
        <Button bg="transparent">
          <Link href="/experience">Experience</Link>
        </Button>
        <Spacer />
        <ButtonGroup gap="10">
          <Link href="/" marginTop="10px">
            {" "}
            <SunIcon />
          </Link>
        
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;
