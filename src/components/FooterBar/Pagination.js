import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
	constructor(props, context) {
		super(props, context);
	}

	handleBtnClass(number, currentPage, totalPage) {
		let cls = '';
		if (currentPage == number) {
			cls += 'currentPage';
		}

		if (number > totalPage) {
			cls += ' hide';
		}

		return cls;
	}
    
	render() {
		const {currentPage, actions, datas, dataPerPage, pageState, total, entries} = this.props;
		let first,
			prev,
			index1,
			index2,
			index3,
			index4,
			index5,
			next,
			last;

		let page1 = pageState[0],
			page2 = pageState[1],
			page3 = pageState[2],
			page4 = pageState[3],
			page5 = pageState[4];

		let totalPage;

		if (total % dataPerPage === 0) {
			totalPage = Math.floor(total / dataPerPage);
		} else {
			totalPage = Math.floor(total / dataPerPage) + 1;
		}
        
        var readData = (start) => {
            var n = start,
                end = start + Math.min(dataPerPage, entries.length - start);
                actions.mask(true);
                var addEntry = () => {
                    if (n < end) {
                        if (entries[n].isFile) {
                            entries[n].file((file) => {
                                actions.readData(file);
                                n++;
                                addEntry();
                            });
                        } else {
                            actions.readData(entries[n]);
                            n++;
                            addEntry();
                        }
                        
                    } else {
                        actions.mask(false);
                    }
                };
                addEntry();
        };
        
        
		return (
			<div className="pagination">
				<ul className="pagination-ul">
					<li data-number="first" ref={(n) => {first = n}}
						onClick={() => {
								let tempState = [1, 2, 3, 4, 5];
                                
                                if (currentPage != 1) {
                                    actions.resetDatas();
                                    readData(0);
								    actions.clickPage(1, tempState);
                                }
                            }
						}
						className={(currentPage == 1) ? 'disabledBtn' : ''}
					></li>
					<li data-number="prev" ref={(n) => {prev = n}}
						onClick={() => {
								let tempState = pageState;
								if ((tempState[0] - 1 > 0) && (currentPage <= tempState[2])) {
									for (let i = 0; i < tempState.length; i++) {
										tempState[i]--;
									}
								}

								if (currentPage != 1) {
                                    actions.resetDatas();
                                    readData((currentPage - 2) * dataPerPage);
									actions.clickPage(currentPage - 1, tempState);
								}
							}
						}
						className={(currentPage == 1) ? 'disabledBtn' : ''}
					></li>
					<li data-number="1" ref={(n) => {index1 = n}}
						onClick={() => {
								let tempState = pageState,
									count = 2;
								if (page1 != 1) {
									if (tempState[0] - 2 < 1) {
										count = 1
									}
									for (let i = 0; i < tempState.length; i++) {
										tempState[i] -= count;
									}
								}
                                actions.resetDatas();
                                readData((page1 - 1) * dataPerPage);
								actions.clickPage(page1, tempState);
							}
						}
						className={this.handleBtnClass(page1, currentPage, totalPage)}
					>{page1}</li>
					<li data-number="2" ref={(n) => {index2 = n}}
						onClick={() => {
								let tempState = pageState;
								if (page2 != 2) {
									for (let i = 0; i < tempState.length; i++) {
										tempState[i]--;
									}
								}
                                actions.resetDatas();
                                readData((page2 - 1) * dataPerPage);
								actions.clickPage(page2, tempState);
							}
						}
						className={this.handleBtnClass(page2, currentPage, totalPage)}
					>{page2}</li>
					<li data-number="3" ref={(n) => {index3 = n}}
						onClick={() => {
								let tempState = pageState;
                                actions.resetDatas();
                                readData((page3 - 1) * dataPerPage);
								actions.clickPage(page3, tempState);
							}
						}
						className={this.handleBtnClass(page3, currentPage, totalPage)}
					>{page3}</li>
					<li data-number="4" ref={(n) => {index4 = n}}
						onClick={() => {
								let tempState = pageState;
								if (page4 != totalPage - 1) {
									for (let i = 0; i < tempState.length; i++) {
										tempState[i]++;
									}
								}
                                actions.resetDatas();
                                readData((page4 - 1) * dataPerPage);
								actions.clickPage(page4, tempState);
							}
						}
						className={this.handleBtnClass(page4, currentPage, totalPage)}
					>{page4}</li>
					<li data-number="5" ref={(n) => {index5 = n}}
						onClick={() => {
								let tempState = pageState,
									count = 2;
								if (page5 != totalPage) {
									if (tempState[4] + 2 > totalPage) {
										count = 1
									}
									for (let i = 0; i < tempState.length; i++) {
										tempState[i] += count;
									}
								}
                                actions.resetDatas();
                                readData((page5 - 1) * dataPerPage);
								actions.clickPage(page5, tempState);
							}
						}
						className={this.handleBtnClass(page5, currentPage, totalPage)}
						>{page5}</li>
					<li
						data-number="next" ref={(n) => {next = n}}
						onClick={() => {
								let tempState = pageState;
								if ((tempState[4] + 1 <= totalPage) && (currentPage >= tempState[2])) {
									for (let i = 0; i < tempState.length; i++) {
										tempState[i]++;
									}
								}

								if (currentPage !== totalPage && totalPage) {
                                    actions.resetDatas();
                                    readData(currentPage * dataPerPage);
									actions.clickPage(currentPage + 1, tempState);
								}

							}
						}
						className={(currentPage === totalPage && totalPage) ? 'disabledBtn' : ''}
					>
					</li>
					<li
						data-number="last" ref={(n) => {last = n}}
						onClick={() => {
								let tempState = pageState;
								tempState = [ totalPage - 4, totalPage - 3, totalPage - 2,totalPage - 1, totalPage];
                                
                                if (currentPage !== totalPage && totalPage) {
                                    actions.resetDatas();
                                    readData((totalPage - 1) * dataPerPage);
								    actions.clickPage(totalPage, tempState);
                                }
							}
						}
						className={(currentPage === totalPage && totalPage) ? 'disabledBtn' : ''}
					></li>
				</ul>
			</div>
		);
	}
}
