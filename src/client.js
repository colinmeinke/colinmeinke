import React from 'react'
import { render } from 'react-dom'

import configureStore from './common/store/configureStore'
import { loadFonts } from './common/helpers/fonts'

import Root from './common/components/Root'

const { hash, host, pathname, protocol, search } = window.location

const location = {
  host,
  protocol: protocol.replace(':', ''),
  url: pathname + search + hash
}

configureStore({ location }).then(store => {
  render(
    <Root store={store} />,
    document.querySelector('.app')
  )
}).catch(console.error.bind(console))

loadFonts()
