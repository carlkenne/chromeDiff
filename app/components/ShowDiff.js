import React, { Component, PropTypes } from 'react';
import style from './ShowDiff.css';
import diffPartHelper from '../services/diffPartHelper.js';

export default class ShowDiff extends Component {

  static propTypes = {
    snapshot: PropTypes.string.isRequired,
    baseline: PropTypes.string.isRequired,
    diff: PropTypes.array.isRequired
  };

  render() {
    let diffText = [];
    if(this.props.diff.length < 2){
      diffText[0] = (<span>no changes found</span>);
    } else {
      let diffText = this.props.diff.slice(0, 20).map((part, index) => {
        let style = diffPartHelper.getStyle(part);
        let value = diffPartHelper.getValue(part);
        
        return <span style={style}>{value}</span>
      });
    } 
  
    return (
      <section>
        <h2>Differences</h2>
        <p>
        {diffText}
        </p>
      </section>
    );
  }
}