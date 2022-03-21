import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../utility/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
