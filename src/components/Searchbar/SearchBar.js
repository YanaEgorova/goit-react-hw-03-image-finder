import React, {
  Component
} from 'react';
import './SearchBar.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  };

  render() {
    return ( <
      header className = "Searchbar" >
      <
      form onSubmit = {
        this.handleSubmit
      }
      className = "SearchForm" >
      <
      button type = "submit"
      className = "SearchForm-button" >
      <
      span className = "SearchForm-button-label" > Search < /span>{' '} <
      /button>

      <
      input value = {
        this.state.inputValue
      }
      onChange = {
        this.handleChange
      }
      className = "SearchForm-input"
      type = "text"
      autoComplete = "off"
      autoFocus placeholder = "Search images and photos" /
      >
      <
      /form>{' '} <
      /header>
    );
  }
}