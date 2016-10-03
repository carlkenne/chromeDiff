import React, { Component, PropTypes } from 'react';
import htmlSource from '../utils/GetHTMLService';

export default class GetHTML extends Component {

  componentDidMount() {
    htmlSource.fetch();
  };

  render() {
    return (
      <div>
        getHTML
      </div>
    );
  }
}