import { Text, Box } from "@chakra-ui/react";

export function Welcome({ children }) {
  return (
    <Box id="welcome" as="section" w="100%" mb="16" p="0"> 
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        mx="auto"
        mb="4"
        textAlign="center"
      >
        ✨ About
      </Text>
      <Text fontSize={['md', 'lg']} color="gray.600" lineHeight="9">{children}</Text>
    </Box>
  );
}
