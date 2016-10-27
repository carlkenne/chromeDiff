import React, { Component, PropTypes } from 'react';
import style from './TakeSnapshotButton.css';

export default class TakeSnapshotButton extends Component {

  static propTypes = {
    fetchSnapshot: PropTypes.func.isRequired,
    hasBaseline: PropTypes.bool.isRequired,
    baselineMeta: PropTypes.object.isRequired
  };

  takeSnapshot = () => {
    this.props.fetchSnapshot();
  };

  render() {
    const baselineMeta = this.props.baselineMeta;
    return (
        <button
          disabled={!this.props.hasBaseline}
          className={style.snapshotButton}
          onClick={this.takeSnapshot}>
          Diff with baseline</button>
    );
  }
}