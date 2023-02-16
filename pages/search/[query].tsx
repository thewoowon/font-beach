import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

function QuerySearch() {
  const router = useRouter()
  const { query } = router.query

  return (
    <Layout title="FontBeach - Search" description="Welcome to the FontBeach!">
      <div>
        <h1>Search: {query}</h1>
      </div>
    </Layout>
  )
}

export default QuerySearch
