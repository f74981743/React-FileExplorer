import React, { Component, PropTypes } from 'react';
import GridRow from './GridRow';
import DataItem from './DataItem';
import classNames from 'classnames';

export default class ContentArea extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  dragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
  }
  
  dragOver(e) {
      e.stopPropagation();
      e.preventDefault();
  }
  
  dragLeave(e) {
      e.stopPropagation();
      e.preventDefault();
  }
  
  dropEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      const {actions} = this.props;
    
    var length = e.dataTransfer.items.length,
        entryAry = [];
    actions.resetDatas();
    actions.resetPathBtn();
    for (var i = 0; i < length; i++) {
        entryAry.push(e.dataTransfer.items[i].webkitGetAsEntry());
        actions.readData(e.dataTransfer.items[i].webkitGetAsEntry());
    }
    actions.readEntries(entryAry);
  }
	
  render() {
    const {datas, actions, dataPerPage, displayMode} = this.props;
    console.log(displayMode);
    var gridCls = classNames({
            table: true,
            'table-hover': true,
            hide: displayMode === 1
        }),
        iconViewCls = classNames({
           row: true,
           hide: displayMode === 0
        });
    
    return (
		<div className="ContentArea container-fluid" onDragEnter={this.dragEnter} onDragOver={this.dragOver} onDragLeave={this.dragLeave} onDrop={this.dropEvent.bind(this)}>
            <table className={gridCls}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Last Modified Date</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data, index) => 
                            <GridRow data={data} dataPerPage={dataPerPage} actions={actions} key={index} /> 
                        )
                    }
                </tbody>
            </table>
            <div className={iconViewCls}>
                {
                    datas.map((data, index) =>
                        <DataItem data={data} dataPerPage={dataPerPage} actions={actions} key={index} />
                    )
                }
            </div>
            
        </div>
    );
  }
}
