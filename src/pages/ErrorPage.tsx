import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box padding={5}>
      <NavBar />
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "Page not found!"
          : "An unexpected error occurred!"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
