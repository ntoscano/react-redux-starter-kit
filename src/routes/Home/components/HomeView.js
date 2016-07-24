import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import Hoster from '../../../components/Hoster/Hoster.js'
import NoteTaker from '../../../components/NoteTaker/NoteTaker.js'
import store from '../../../store/store.js'

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Welcome!</h4>
        <Hoster store={store} />
        <NoteTaker store={store} />
        <img
          alt='This is a duck, because Redux!'
          className={classes.duck}
          src={DuckImage} />
      </div>
    )
  }
}

export default HomeView
