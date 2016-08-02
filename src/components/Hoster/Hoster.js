import React from 'react'
import Youtube from 'react-youtube'

class Hoster extends Youtube {

  constructor(props) {
    super(props);
    this.store = props.store;
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: '',
      url: this.store.getState().url,
      validUrl: this.store.getState().validUrl
    };

  }

  handleChange(event) {
    this.setState({userInput: event.target.value});

    if (event.target.value.search('^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$') === 0) {
      this.setState(this.store.dispatch({
                            type: 'VALIDURL',
                            url: event.target.value.replace('https://www.youtube.com/watch?v=', '')
                          }));
    } else {
      this.store.dispatch({type: 'INVALIDURL'});
    }
  }

  render() {

    if (this.store.getState().validUrl) {
      return (
        <div>
          <Youtube  width="560"
                    height="315"
                    videoId={this.state.url}>
          </Youtube>
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