import React, { Component, PropTypes } from 'react';
import Pagination from './Pagination';

export default class FooterBar extends Component {
  constructor(props, context) {
    super(props, context);
  }
	
  render() {
      
    const { datas, total, currentPage, dataPerPage, pageState, actions, entries } = this.props;
    return (
		<nav>
            <Pagination datas={datas} currentPage={currentPage} actions={actions} dataPerPage={dataPerPage} pageState={pageState} total={total} entries={entries} />
        </nav>
    );
  }
}
