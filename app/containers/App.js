import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import TakeSnapshotButton from '../components/TakeSnapshotButton';
import SetBaselineButton from '../components/SetBaselineButton';
import ShowDiff from '../components/ShowDiff';
import * as DiffActions from '../actions/diffs';
import style from './App.css';

@connect(
  state => ({
    diffs: state.diffs
  }),
  dispatch => ({
    actions: bindActionCreators(DiffActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    diffs: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { diffs, actions } = this.props;
    const showDiff = typeof diffs.diff !== 'undefined';

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <SetBaselineButton
          fetchBaseline={actions.fetchBaseline}
          hasBaseline={diffs.hasBaseline}
          baselineMeta={diffs.baselineMeta}
          />
        <TakeSnapshotButton
          fetchSnapshot={actions.fetchSnapshot}
          hasBaseline={diffs.hasBaseline}
          />
        {showDiff && 
          <ShowDiff
            snapshot={diffs.snapshot}
            baseline={diffs.baseline}
            diff={diffs.diff}
            />
        }
      </div>
    );
  }
}