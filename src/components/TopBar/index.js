import React, { Component, PropTypes } from 'react';
import PathBtn from './PathBtn';
import ModeSelector from './ModeSelector';

export default class TopBar extends Component {
  constructor(props, context) {
    super(props, context);
  }
	
  render() {
    const {datas, pathBtns, actions, dataPerPage, displayModeMenu} = this.props;
    return (
		<div className="TopBar">
            <ul className="PathBtn">
                {
                    pathBtns.map((data, index) =>
                        <PathBtn actions={actions} data={data} pathBtns={pathBtns} dataPerPage={dataPerPage} key={index} index={index} />
                    )
                }
            </ul>
            <ModeSelector actions={actions} displayModeMenu={displayModeMenu} />
        </div>
    );
  }
}
