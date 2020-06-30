import React, { Component } from 'react';
const { remote, ipcRenderer } = window.require('electron');

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const electronVersion = process.versions.electron;
    return <div>{remote.app.getVersion()}</div>;
  }

  componentDidMount() {
    console.log('123');
    // ipcRenderer.send('checkForUpdate');
    // console.log('456');

    // ipcRenderer.on('message', (event, text) => {
    //   console.log('index arguments', arguments, text);
    // });
  }
}
