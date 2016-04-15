import React, { Component, PropTypes } from 'react';
import { convertSizeUnit, convertTimestamp } from '../../utils';

export default class DataItem extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  dbClick() {
      const {data, actions, dataPerPage} = this.props;
      var entryAry = [];
      
      if (data.isDirectory) {
          actions.mask(true);
          var dirReader = data.createReader();
            var readEntries = function () {
                dirReader.readEntries(function (entries) {
                    if (entries.length) {
                        for (var i = 0; i < entries.length; i++) {
                            entryAry.push(entries[i]);
                        }     
                        readEntries();
                    } else {
                        actions.readEntries(entryAry);
                        var n = 0,
                            length = Math.min(dataPerPage, entryAry.length);
                        var addEntry = function() {
                            if (n < length) {
                                if (entryAry[n].isFile) {
                                    entryAry[n].file((file) => {
                                        actions.readData(file);
                                        n++;
                                        addEntry();
                                    });
                                } else {
                                    actions.readData(entryAry[n]);
                                    n++;
                                    addEntry();
                                }
                                
                            } else {
                                actions.mask(false);
                            }
                        };
                        addEntry();
                        
                    }
                });
            };
            actions.resetDatas();
            readEntries();
            actions.addPathBtn(data);
      }
  }
  
  render() {
    let {data} = this.props;
    
    return (
        <tr onDoubleClick={this.dbClick.bind(this)}>
            <td>
                {data.name}
            </td>
            <td>
                {(data.isDirectory) ? 'dir' : data.type}
            </td>
            <td>
                {(data.lastModified) ? convertTimestamp(data.lastModified) : '--'}
            </td>
            <td>
                {(data.size) ? convertSizeUnit(data.size) : '--'}
            </td>
        </tr>
    );
  }
}
