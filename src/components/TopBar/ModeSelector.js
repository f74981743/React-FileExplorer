import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ModeSelector extends Component {
    constructor(props, context) {
        super(props, context);
    }
  
    toggleDropDownMenu() {
        const {displayModeMenu, actions} = this.props;
        
        if (displayModeMenu) {
            actions.showMenu(false);
        } else {
            actions.showMenu(true);
        }
    }
  
    render() {
        const {datas, pathBtns, actions, dataPerPage, displayModeMenu} = this.props;

        var dropDownMenuCls = classNames({
            'dropdown-menu': true,
            show: displayModeMenu === true
        });

        return (
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" onClick={this.toggleDropDownMenu.bind(this)} >
                    Display Mode
                    <span className="caret"></span>
                </button>
                <ul className={dropDownMenuCls}>
                    <li onClick={() => {actions.selectMode(0)}}><a href="#">Grid View</a></li>
                    <li onClick={() => {actions.selectMode(1)}}><a href="#">Icon View</a></li>
                </ul>
            </div>
        );
    }
}
