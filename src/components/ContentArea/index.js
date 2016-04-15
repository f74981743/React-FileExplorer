import React, { Component, PropTypes } from 'react';
import DataItem from './DataItem';

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
    const {datas, actions, dataPerPage} = this.props;
    return (
		<div className="ContentArea" onDragEnter={this.dragEnter} onDragOver={this.dragOver} onDragLeave={this.dragLeave} onDrop={this.dropEvent.bind(this)}>
            <table className="table table-hover">
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
                            <DataItem data={data} dataPerPage={dataPerPage} actions={actions} key={index} /> 
                        )
                    }
                </tbody>
            </table>
        </div>
    );
  }
}
