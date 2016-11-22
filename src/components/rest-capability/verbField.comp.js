import React, { Component } from 'react';
import Verb from '../verb/verb.comp.js';

class VerbField extends Component {
  render() {
    if (this.props.rowData.verb) {
      return <Verb action={this.props.rowData.verb} />
    }
    else {
      return <span className="sr-param-header">{this.props.rowData.category}</span>
    }
  }
};

export default VerbField;