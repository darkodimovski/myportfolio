
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="chatapp">
        <Container>
        <Title>
            Chat App <Badge>2022-</Badge>
        </Title>
        <P>
            Real-time chat aplication
        </P>
        <List ml={4} my={4}>
            <ListItem>
            <Meta>Website</Meta>
            <Link href="https://serene-wiles-fe673e.netlify.app/">
            https://serene-wiles-fe673e.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
            <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
            </ListItem>
            <ListItem>
            <Meta>Stack</Meta>
            <span>React, Tailwind, Scaledrone API</span>
            </ListItem>
        </List>

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'