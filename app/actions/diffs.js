import * as types from '../constants/ActionTypes';
import htmlSource from '../utils/GetHTMLService';
import * as jsDiff from 'diff';

export function takeSnapshot() {
  console.log("action: takeSnapshot");
  return { type: types.TAKE_SNAPSHOT };
}

export function receiveSnapshot(html) {
  console.log("action: receiveSnapshot");
  return { type: types.RECEIVE_SNAPSHOT, html };
}

export function fetchSnapshot() {
  return function (dispatch, getState) {
    dispatch(takeSnapshot())

    htmlSource.fetch((html) => {
      dispatch(receiveSnapshot(html.html));
      const state = getState();
      if(state.diffs.hasSnapshot) {
        const diff = jsDiff.diffChars(state.diffs.baseline.substring(0), state.diffs.snapshot.substring(0));
        console.log("diffchars done", diff);
        dispatch(doDiff(diff));
      }
    });
  }
}

export function doDiff(diff) {
  console.log("action: doDiff");
  return { type: types.DO_DIFF, diff };
}

export function setBaseline() {
  console.log("action: setBaseline");
  return { type: types.SET_BASELINE };
}

export function receiveBaseline(html, meta) {
  console.log("action: receiveBaseline");
  return { type: types.RECEIVE_BASELINE, html, meta };
}

export function fetchBaseline() {
  return function (dispatch) {
    dispatch(setBaseline());

    htmlSource.fetch((html) => {
      dispatch(receiveBaseline(html.html, { date: new Date().toTimeString(), href: html.href} ));
    });
  }
}