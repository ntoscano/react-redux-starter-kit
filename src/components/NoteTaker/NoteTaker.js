import React from 'react'

class NoteTaker extends React.Component {

  constructor(props) {
    super(props);
    this.store = props.store;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userInput: '',
      storedNoted: this.store.getState().notes
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
    this.store.dispatch({type: 'ADDNOTE', note: this.state.userInput});
  }

  render() {

    if (this.store.getState().validUrl) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleChange}></textarea>
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