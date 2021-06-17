import { Text, Box, Link } from "@chakra-ui/react";
import NextLink from 'next/link';

export function Section({ id, title, url, children }) {
  return (
    <Box id={id} as="section" w="100%" mb="6" p="0"> 
      <Link
        as="a"
        fontSize={['lg', 'xl']}
        fontWeight="medium"
        color="blue.600"
        mx="auto"
        mb="4"
        textAlign="center"
        href={url}
      >
        {title}
      </Link>
      <Text fontSize={['sm', 'md']} color="gray.600" lineHeight="9">{children}</Text>
    </Box>
  );
}
