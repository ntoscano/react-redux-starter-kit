import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import HomeView from '../routes/Home/components/HomeView.js'

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <HomeView />
      </Provider>
    )
  }
}

export default AppContainer
