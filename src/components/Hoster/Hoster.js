import React from 'react'
import urlStore from '../../store/urlStore.js'

class Hoster extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: '',
      url: urlStore.getState().url,
      validUrl: urlStore.getState().validUrl
    };
  }

  handleChange(event) {
    this.setState({userInput: event.target.value});

    if (event.target.value.search('^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$') === 0) {
      this.setState(urlStore.dispatch({type: 'VALIDURL', url: event.target.value.replace('watch?v=', 'embed/')}));
    } else {
      urlStore.dispatch({type: 'INVALIDURL'});
    }
  }

  render() {

    if (urlStore.getState().validUrl) {
      return (
        <div>
          <iframe width="560" height="315" src={this.state.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      )
    } else {
      return (
        <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}/>
        </div>
      );
    }
  }
}

export default Hoster;