import React, {
  Component
} from 'react';
import './Modal.css';




export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose(null);

    }
  }
  render() {
    return ( <
      div className = "Overlay"
      onClick = {
        () => {
          this.props.onClose(null)
        }
      } >
      <
      div className = "Modal" >
      <
      img src = {
        this.props.src
      }
      alt = "" / >
      <
      /div> < /
      div >
    );
  }
}