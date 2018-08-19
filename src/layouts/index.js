import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Masthead from '../components/Masthead'

import Navbar from '../components/Navbar/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Masthead />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
