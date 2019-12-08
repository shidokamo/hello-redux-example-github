import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route, Link, Switch } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <ul>
        <li><Link to="">Search</Link></li>
        <li><Link to="shidokamo">Me</Link></li>
      </ul>
      <Switch>
        <Route path="/:login/:name"
               component={RepoPage} />
        <Route path="/:login"
               component={UserPage} />
        <Route path="/" component={App} />
      </Switch>
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
