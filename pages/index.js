import NextLink from 'next/link'
import { Container, Box, Heading, useColorModeValue, Link, Button, List, ListItem, Image } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
/* import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import Model from '../public/Model' */


const Home = () => {
    return (
        <Layout>
        <Container>  
    {/*   <Box h="300px">
                <Canvas colorManagament shadowMap camera={{ position: [-3, 2, 5], fov: 90 }}>
                    <Suspense fallback={null}>
                        <mesh scale={0.37} position={[-0.2, -1, 1]}>
                            <Model />
                        </mesh>
                        <Environment preset="park" />
                    </Suspense>
                    <OrbitControls enableZoom={false} />
                    <directionalLight 
                        intensity={0.5} 
                        castShadow 
                        shadow-mapSize-height={512} 
                        shadow-mapSize-width={512}
                        />
                </Canvas>
            </Box> */}
            <Box borderRadius="xl" bg={useColorModeValue('teal', 'whiteAlpha.200')} p={3} align="center" textColor="white" mb="6" mt="6">
                Hello, I&apos;m a front-end developer based in Croatia!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h4" variant="page-title">
                        Darko Dimovski
                    </Heading>
                    <p>Artist / Developer / Programmer</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 6, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image 
                    borderColor={useColorModeValue('gray', 'white')} 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/me.jpg" 
                    alt="Profile picture"
                    />

                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Darko is a freelance Frontend Developer based in Croatia with passion for building exceptional digital experiences. I&apos;m currently working for Printec Group as an Technical Team Leader. I have a knack for solving problems. When not online i like to play guitar, play videogames, watch movies and enjoy time with my family and friends.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('teal', 'orange')}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1986</BioYear>
                    Born in Mostar, BiH
                </BioSection>
                <BioSection>
                    <BioYear>2005</BioYear>
                    Finished  High School of Chemistry in Karlovac
                </BioSection>
                <BioSection>
                    <BioYear>2007</BioYear>
                    Started working in Printec Group as HelpDesk Technician
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Started working in Printec Group as CS dispatcher
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Started learning PHP and Laravel
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Started working in Printec Group as Technical Team Leader
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Finished front-end developer school at Algebra University
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                I ♥
                </Heading>
                <Paragraph>
                Art, {' '}
                    Music, {' '}
                <Link href="https://www.youtube.com/watch?v=TCKYkAgfHdI" target="_blank">
                    Playing Guitar
                </Link>,{' '}
                Coding, Riding Bike
                </Paragraph>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <List>
            <ListItem>
                <Link href="https://github.com/darkodimovski" target="_blank">
                    
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={ <FaGithub /> }
                    
                >
                    @darkodimovski
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.linkedin.com/in/darko-dimovski-08a2131b6/" target="_blank">
                    
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={ <FaLinkedin /> }
                    
                >
                    darko dimovski
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://github.com/darkodimovski" target="_blank">
                    
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={ <FaInstagram /> }
                    
                >
                    #its_darko
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.youtube.com/watch?v=a6wRYb5uO5Y" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={ <FaYoutube /> }
                    
                >
                    my youtube
                </Button>
                </Link>
            </ListItem>
        </List>
        </Section>
        </Container>
        </Layout>
    )
}

export default Home