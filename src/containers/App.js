import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Wrapper from '../components/Wrapper';
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
    render() {
        // we can use ES6's object destructuring to effectively 'unpack' our props

        return (
            <Wrapper {...this.props} />
        );
    }
}

App.propTypes = {
  datas: PropTypes.array.isRequired,
  entries: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pathBtns: PropTypes.array.isRequired,
  maskFlag: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageState: PropTypes.array.isRequired,
  dataPerPage: PropTypes.number.isRequired,
  displayMode: PropTypes.number.isRequired,
  displayModeMenu: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
    return {
        datas: state.datas.datas,
        entries: state.datas.entries,
        total: state.datas.entries.length,
        pathBtns: state.pathBtns,
        maskFlag: state.mask,
        currentPage: state.pagination.currentPage,
        pageState: state.pagination.pageState,
        dataPerPage: state.dataPerPage,
        displayMode: state.displayMode,
        displayModeMenu: state.displayModeMenu
    };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
