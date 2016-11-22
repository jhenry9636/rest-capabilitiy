import React, { Component } from 'react';

let styles = {
  verb: {
    marginTop: '5px',
    marginBottom: '5px',
    marginRight: '25px',
    backgroundColor: '#fff',
    color: '#fff',
    padding: '5px 9px',
    borderRadius: '6px',
    outlineRadius: '7px',
    fontWeight: '800',
    fontSize: '12px',
    display: 'inline-block',
    width: '60px',
    textAlign: 'center'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Verb extends Component {
  render() {
    let verb = this.props.action.toUpperCase();

    switch(verb) {
      case 'GET':
        styles.verb.backgroundColor = '#2196f3'
        break;
      case 'PUT':
        styles.verb.backgroundColor = '#f78e00'
        break;
      case 'POST':
        styles.verb.backgroundColor = '#7e3ecc'
        break;
      case 'DELETE':
        styles.verb.backgroundColor = '#f31100'
        break;
    }

    return (
      <span style={styles.verb}>{verb}</span>
    );
  }
}

export default Verb;