import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'


import thumbnail from '../public/images/works/code.jpg'


const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id='chatapp' title='Scaledrone Chat App' thumbnail={thumbnail}>
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='todoapp' title='Todo App' thumbnail={thumbnail}>
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='cv' title='Curriculum Vitae' thumbnail={thumbnail}>
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='portfolio' title='my-portfolio' thumbnail={thumbnail}>
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='notesApp' title='Notes App' thumbnail={thumbnail}>
                </WorkGridItem>
            </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'