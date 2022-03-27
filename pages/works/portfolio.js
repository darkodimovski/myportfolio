
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="portfolio">
        <Container>
        <Title>
            Portfolio <Badge>2022-</Badge>
        </Title>
        <P>
            My Portfolio
        </P>
        <List ml={4} my={4}>
            <ListItem>
            <Meta>Website</Meta>
            <Link href="https://my-resume-five-psi.vercel.app/">
            https://my-resume-five-psi.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
            <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
            </ListItem>
            <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, HTML, Chakra.ui, React, Vercel</span>
            </ListItem>
        </List>

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'