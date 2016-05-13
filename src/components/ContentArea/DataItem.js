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
  
  componentDidUpdate () {
    this.loadImageToCanvas()
  }
  
  loadImageToCanvas() {
    const {data} = this.props;
    var URL = window.webkitURL || window.URL,
        canvas = React.findDOMNode(this.refs.canvas);
    if (data.type) {
        if (data.type.split('/')[0] === 'image') {
            var ctx = canvas.getContext("2d");
            var url = URL.createObjectURL(data);
            var img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 129, 129 * img.height / img.width);
            }
            img.src = url;
        }
    }
  }
  
  render() {
    let {data} = this.props,
        canvas,
        item;
    
    if (data.type || data.type === '') {
        if (data.type.split('/')[0] === 'image') {
            item = <canvas ref='canvas' />
        } else {
            item = <div className="file-icon file-icon-xl" data-type={data.type.split('/')[1]}></div>
        }
    } else {
        item = <div className="folder"></div>
    }
    
    return (
        <a href="#" className="dataItem" onDoubleClick={this.dbClick.bind(this)}>
            <div className="icon-container">
                {item}
            </div>
            <div className="caption">
                <span>{data.name}</span>
            </div>
        </a>
    );
  }
}
