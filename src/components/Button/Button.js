import React, {
  Component
} from 'react';
import './Button.css';


export default class Button extends Component {



  render() {
    return ( <
      button type = "button"
      className = "Button"
      onClick = {
        this.props.onClick
      } > Load more < /button>
    );
  }
}