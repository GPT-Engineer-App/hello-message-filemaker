import React, { useState } from "react";
import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    toast({
      title: "Message Sent",
      description: `You sent: ${inputValue}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Here you would typically handle the data, e.g., sending it back to a server or another system like FileMaker
  };

  return (
    <Box p={5}>
      <Text mb={4}>Enter a message to send:</Text>
      <Input placeholder="Type here..." value={inputValue} onChange={handleInputChange} mb={4} />
      <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={handleSubmit}>
        Send Message
      </Button>
    </Box>
  );
};

export default Index;
