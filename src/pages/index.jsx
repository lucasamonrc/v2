import { Flex, Text, Box, IconButton } from "@chakra-ui/react";
import { BiArrowToTop } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import Head from 'next/head';

import { Header } from "../component/Header";
import { Section } from "../component/Section";
import { Welcome } from "../component/Welcome";

export default function Home({ projects }) {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  });

  function checkScrollTop() {
    if (!scrollEnabled && window.pageYOffset > 400) {
      setScrollEnabled(true);   
    } else if (scrollEnabled && window.pageYOffset <= 400) {
      setScrollEnabled(false);   
    }
  }

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>lucasamonrc | Home</title>
      </Head>
      <Flex direction="column">
        <Header />

        <Box as="main" w="100%" my="12" maxW={780} mx="auto" px="6"> 
          <Welcome>
            Hello there 👋, and welcome to my website. The purpose of this page is to display the projects I have worked on. It is simple by design, and it was developed to support any device or browser.
          </Welcome>

          <Text
            fontSize={['2xl', '3xl']}
            fontWeight="bold"
            mx="auto"
            mb="6"
            textAlign="center"
          >
            💼 Projects
          </Text>

          {projects.map((project) => (
            <Section key={project.id} id={project.id} title={project.title} url={project.url}>
              {project.description}
            </Section>
          ))}
        </Box>

        <IconButton 
          position="fixed"
          size="sm"
          right={["4", "8"]}
          bottom={["4", "8"]}
          borderRadius="3xl"
          boxShadow="xl"
          variant="solid" 
          colorScheme="blue"
          aria-label="Back to top" 
          icon={<BiArrowToTop />}
          onClick={handleBackToTop}
          disabled={!scrollEnabled}
        />
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('https://api.github.com/users/lucasamonrc/repos');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const projects = data.map((project) => ({
    title: project.name,
    url: project.html_url,
    description: project.description,
    id: project.full_name,
    lastPush: project.pushed_at, 
  }));

  projects.sort((a, b) => {
    const dateA = new Date(a.lastPush).getTime();
    const dateB = new Date(b.lastPush).getTime();

    return dateB - dateA;
  });

  console.log(projects);

  return {
    props: { projects },
    revalidate: 3600,
  }
}
