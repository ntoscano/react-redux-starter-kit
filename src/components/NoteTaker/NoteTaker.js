import React from 'react'

class NoteTaker extends React.Component {

  constructor(props) {
    super(props);
    this.store = props.store;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.state = {
      userInput: '',
      storedNotes: this.store.getState().notes,
      videoTime: "0:00"
    };
    this.store.subscribe(() => {
      console.log(this.store.getState());
      this.setState(this.state);
    });
  }

  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.store.dispatch({type: 'ADDNOTE', note: { note: this.state.userInput, time: this.state.videoTime}});
  }

  handleFocus(event){
    this.setState({videoTime: "123"});
  }

  render() {

    if (this.store.getState().validUrl) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea onFocus={this.handleFocus} onChange={this.handleChange}></textarea>
            <input placeholder={this.state.videoTime} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default NoteTaker;