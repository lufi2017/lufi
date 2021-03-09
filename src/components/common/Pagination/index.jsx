import React, {Component} from 'react';
import './index.less'

class Pagination extends Component {
  render() {
    return (
        <div className="Toolbar-root">
          <div className="Pagination-root">
            <div className="page-text hidden-xs">每页显示 10 条 共 <span> 35 </span> 条</div>
            <div className="gotopage hidden-xs">共 <span> 35 </span> 页 ， 到第<input type="text"/>页 <button>确定</button>
            </div>
            <div className="pagebox">
              <div className="page-prev"><i className="ti-angle-left"></i></div>
              <ul className="page">
                <li>1</li>
                <li>…</li>
                <li>35</li>
              </ul>
              <div className="page-next"><i className="ti-angle-right"></i></div>
            </div>
          </div>
        </div>
    );
  }
}

export default Pagination;