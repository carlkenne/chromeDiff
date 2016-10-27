import React, { Component, PropTypes } from 'react';
import style from './SetBaselineButton.css';

export default class SetBaselineButton extends Component {

  static propTypes = {
    fetchBaseline: PropTypes.func.isRequired,
    hasBaseline: PropTypes.bool.isRequired,
    baselineMeta: PropTypes.object.isRequired
  };

  setBaseline = () => {
    this.props.fetchBaseline();
  };

  componentDidMount = () => {
    console.log(this);
  }

  getButtonCaption = () => {
    return "Set baseline";
  }

  render() {
    return (
      <div>
        <button
          className={style.baselineButton}
          onClick={this.setBaseline}>
          Set baseline</button>
        
        { this.props.hasBaseline && 
          <span 
            className={style.baselineInfo}>
            set @ {this.props.baselineMeta.date.slice(0, 8)} -> {this.props.baselineMeta.href}
          </span>
        }
      </div>
    );
  }
}