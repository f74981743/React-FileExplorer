import React, { Component, PropTypes } from 'react';
import TopBar from './TopBar';
import ContentArea from './ContentArea';
import FooterBar from './FooterBar';
import classNames from 'classnames';
export default class Wrapper extends Component {
  constructor(props, context) {
    super(props, context);
  }
    
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { datas, total, pathBtns, actions, maskFlag, currentPage, dataPerPage, pageState, entries, displayMode, displayModeMenu } = this.props;

    var wrapperCls = classNames({
      'wrap': true,
      'loading-mask': maskFlag
    });
    return (
      <div className={wrapperCls}>
          <TopBar pathBtns={pathBtns} dataPerPage={dataPerPage} actions={actions} displayMode={displayMode} displayModeMenu={displayModeMenu} />
          <ContentArea actions={actions} dataPerPage={dataPerPage} datas={datas} displayMode={displayMode}/>
          <FooterBar datas={datas} actions={actions} currentPage={currentPage} dataPerPage={dataPerPage} pageState={pageState} total={total} entries={entries} />
      </div>
    );
  }
}
