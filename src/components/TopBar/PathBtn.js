import React, { Component, PropTypes } from 'react';

export default class PathBtn extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  clickEvent() {
      const {data, actions, dataPerPage, pathBtns, index} = this.props;
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
            actions.clickPage(1, [1, 2, 3, 4, 5]);
            readEntries();
            var newPathBtns = pathBtns.slice(0, index + 1);
            actions.clickPathBtn(newPathBtns);
      }
  }
  
  render() {
    const {data} = this.props;
    return (
        <li onClick={this.clickEvent.bind(this)}>
            {data.name}
        </li>
    );
  }
}
