import { Text, Box, Link } from "@chakra-ui/react";
import NextLink from 'next/link';

export function Section({ id, title, href, children }) {
  return (
    <Box id={id} as="section" w="100%" mb="6" p="0"> 
      <NextLink href={href}>
        <Link
          fontSize={['lg', 'xl']}
          fontWeight="medium"
          color="blue.600"
          mx="auto"
          mb="4"
          textAlign="center"
        >
          {title}
        </Link>
      </NextLink>
      <Text fontSize={['sm', 'md']} color="gray.600" lineHeight="9">{children}</Text>
    </Box>
  );
}
