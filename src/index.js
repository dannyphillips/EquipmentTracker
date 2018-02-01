import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (node, props) => {
  ReactDOM.render(<App {...props} />, node);
}
if (window.ConstructionOS) {
  window.ConstructionOS.Applications.EquipmentTracker = {
    mount: mount
  };
}
else {
  ReactDOM.render(<App />, document.getElementById("app-mount"));
}
