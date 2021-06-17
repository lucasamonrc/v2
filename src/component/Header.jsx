import { Flex, Text, Avatar, IconButton } from "@chakra-ui/react";
import { SiLinkedin } from 'react-icons/si';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={780}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="space-between"
    >
      <Avatar
        size="lg"
        name="Lucas Castro"
        boxShadow="lg"
        src="https://github.com/lucasamonrc.png"
      />

      <Text
        fontSize={['lg', 'xl']}
        fontWeight="bold"
        textAlign="center"
        w="64"
      >
        lucasamonrc
      </Text>

      <IconButton
        as="a"
        href="https://www.linkedin.com/in/lucasamonrc/"
        target="_blank"
        variant="link"
        aria-label="LinkedIn"
        fontSize={['xl', '2xl']}
        color="gray.900"
        _hover={{ color: "blue.600"}}
        icon={<SiLinkedin />}
      />
    </Flex>
  );
}
