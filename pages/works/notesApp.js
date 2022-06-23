
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="notesApp">
        <Container>
        <Title>
            Notes App <Badge>2022-</Badge>
        </Title>
        <P>
            Notes app with filtering and pagination. #hooks
        </P>
        <List ml={4} my={4}>
            <ListItem>
            <Meta>Website</Meta>
            <Link href="https://zippy-seahorse-2ea66f.netlify.app/">
            https://zippy-seahorse-2ea66f.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
            <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
            </ListItem>
            <ListItem>
            <Meta>Stack</Meta>
            <span>React, Tailwind</span>
            </ListItem>
        </List>

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'