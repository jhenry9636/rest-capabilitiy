import React, { Component } from 'react';
import Griddle from 'griddle-react';
import Panel from '../panel/panel.comp'
import VerbField from './verbField.comp'
import IconField from './iconField.comp'
import './index.css';


class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    
    var columnMetadata = [{
        "columnName": "verb",
        "order": 1,
        "locked": true,
        "visible": true,
        "customComponent": VerbField
      },
      {
        "columnName": "url",
        "order": 2,
        "locked": true,
        "visible": true
      },
      {
        "columnName": "category",
        "order": 3,
        "locked": true,
        "visible": true,
        "customComponent": IconField
      }];
    
    
    return (
        <Panel headerText="Rest Capabilities"
               headerCount={this.props.data.length}
               onAddClick={this.props.addClick}
                isCollapsed={this.props.isCollapsed}
                classNameText="sr-rest-capability">
          
          <Griddle results={this.props.data}
                   showSettings={false}
                   showTableHeading={false}
                   columnMetadata={columnMetadata}
                   useGriddleStyles={false} />
        </Panel>
    )
  }

}


export default App;