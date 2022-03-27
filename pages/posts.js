import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'


const Posts = () => (
    <Layout title="Posts">
        <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Popular Posts
        </Heading>
        <Section delay={0.1}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <Paragraph>
                    Coming soon ...
                </Paragraph>
            </SimpleGrid>
        </Section>

        </Container>
    </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'