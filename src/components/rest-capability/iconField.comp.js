import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class IconField extends Component {
  render() {
    if (this.props.rowData.verb) {
      return (
        <div className="sr-capability-details">
          <FontAwesome name="info-circle"></FontAwesome>
          <FontAwesome name="trash"></FontAwesome>
        </div>
      )
    }
    else {
      return null
    }
  }
};

export default IconField;