// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../utility/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const AboutStyling: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="🎨 Styling Guide" />
    <h2>How to start fresh</h2>
    <p>
      To throw away all my styles, simply delete all the .scss files except <code>styles.scss</code>, empty out <code>styles.scss</code> and you're set.
    </p>
    <hr/>
    <h2>Reasons to not start fresh</h2>
    <p>
      These stylesheets are made to simplify your life while maintaining your potential to customize everything.
    </p>
    <hr/>
    <h3>Auto-pallettes</h3>
    <div style={{width: '100%', height: '40px', marginBlockEnd: '10px'}} className={'ShowPalette'}>    </div>
    <div style={{width: '100%', height: '40px', marginBlockEnd: '10px'}} className={'ShowComplementPalette'}>    </div>
    <h4>Setting the base color</h4>
    <p>Your probably have some colour you want to use as your accent color. Simply set it as <code>$accent</code> in <code>colors.scss</code> and your palette will be built for you.</p>
    <h4>Generated Colours</h4>
    <p>The base colour automatically generates an <b>accent colour</b>, which is accessed as <code>$complement</code>. Both of these colours generate <i>palettes</i>, <code>$accent-palette</code> & <code>$complement-palette</code></p>
    <h4>Using a palette</h4>
    <p>To use the palette defined by your base color, you can use one of the getter functions for a colour, such as <code>base($accent-palette)</code> or  <code>darker($accent-palette)</code>. Available tones for a palette are <code className={'ShowPalette'}>lightest, lighter, light, base, dark, darker, darkest</code></p>
      <hr/>    <h3>Different files explained</h3>
    <ul>
      <li><code>animations.scss</code> defines keyframes and mixins for animated components</li>
      <li><code>colors.scss</code> defines all the color variables (including DARK THEME)</li>
      <li><code>colors-autotheme.scss</code> contains code for generating palettes</li>
      <li><code>cssreset.scss</code> a css reset so that the app looks the same across browsers</li>
      <li><code>fonts.scss</code> defines fonts for the app</li>
      <li><code>styles.scss</code> the star of the show, our custom styling goes here</li>
    </ul>
    <Link to="/" className={'Magic'}>Go back to the homepage</Link>
  </Layout>
)

export default AboutStyling
