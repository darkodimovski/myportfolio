
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="chatapp">
        <Container>
        <Title>
            CV
        </Title>
        <P>
            Curriculum Vitae
        </P>
        <List ml={4} my={4}>
            <ListItem>
            <Meta>Download</Meta>
            <Link href="https://drive.google.com/file/d/1rupAhHmhn22BH5UgAJj-jKuwftvkbfs2/view?usp=sharing">
            https://drive.google.com/file/d/1rupAhHmhn22BH5UgAJj-jKuwftvkbfs2/view?usp=sharing <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
        </List>

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'