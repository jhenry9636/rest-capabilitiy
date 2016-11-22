import React, { Component } from 'react';
import RestCapabilities from './components/rest-capability/restCapabilities.comp.js'
import Panel from './components/panel/panel.comp.js'
import './App.css';

class App extends Component {
  render() {

    let fakeData =  [{
      category: 'product',
      url: null,
      verb: null,
      children: [{
        category: 'product',
        url: '/sterling/v2/product/{id}',
        verb: 'PUT'
      },
        {
          category: 'product',
          url: '/sterling/v2/product/',
          verb: 'POST'
        },
        {
          category: 'product',
          url: '/sterling/v2/product/',
          verb: 'GET'
        }]
    },
      {
        category: 'order',
        url: null,
        verb: null,
        children: [{
          category: 'order',
          url: '/sterling/v2/order/{id}',
          verb: 'POST'
        },
          {
            category: 'order',
            url: '/sterling/v2/order/',
            verb: 'POST'
          },
          {
            category: 'order',
            url: '/sterling/v2/order/',
            verb: 'DELETE'
          }]
      },
      {
        category: 'orderItem',
        url: null,
        verb: null,
        children: [{
          category: 'orderItem',
          url: '/sterling/v2/orderItem/{id}',
          verb: 'GET'
        },
          {
            category: 'orderItem',
            url: '/sterling/v2/orderItem/',
            verb: 'POST'
          },
          {
            category: 'orderItem',
            url: '/sterling/v2/orderItem/',
            verb: 'PUT'
          }]
      }];

    function addItem() {
      alert('Item added')
    }

    return (
      <div className="App" style={{margin: 20}}>
        <RestCapabilities data={fakeData}
                        onAddClick={addItem}
                        isCollapsed={false}>

        </RestCapabilities>
      </div>
    );
  }
}

export default App;
