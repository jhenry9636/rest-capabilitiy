import React, { Component } from 'react';
import './index.css';
import FontAwesome from 'react-fontawesome';

class Panel extends Component {


  constructor(props) {
    super(props);

    if(this.props.onAddClick) {
      this.onAddClick = this.props.onAddClick.bind(this);
    }
  }

  render() {
    let classNameText;
    let fontAwesomeName;

    if (this.props.isCollapsed) {
      classNameText = 'sr-panel collapsed';
      fontAwesomeName = 'caret-right'
    }
    else {
      classNameText = 'sr-panel';
      fontAwesomeName = 'caret-down'
    }


     return (
      <section className={classNameText + ' sr-rest-capability'}>
        <header className="cf">
            <h3>{this.props.headerText}</h3>
            <span className="sr-panel-count">{this.props.headerCount}</span>
          { this.props.onAddClick ?
              <a href="#" onClick={this.onAddClick}>Add</a> :  ''}
          <FontAwesome name={fontAwesomeName} className="sr-panel-indicator"/>
        </header>
        <div className="sr-panel-main">
          {this.props.children}
        </div>
      </section>
    )
  }


  }


  export default Panel;