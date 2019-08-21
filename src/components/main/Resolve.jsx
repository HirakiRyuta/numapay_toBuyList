import React, { Component } from 'react';
import _ from 'lodash';

import Checkbox from '../parts/Checkbox';

class Resolve extends Component {
  componentDidMount() {
    this.props.readToBuyItems();
  }

  getToBuyItems = () => {
    const { toBuyItems } = this.props;

    return toBuyItems.map(toBuyItem => (
      <>
        <div>
          {toBuyItem.name}x{toBuyItem.count}
        </div>
        {toBuyItem.is_urgent && <span>緊急</span>}
        <Checkbox name={toBuyItem.request_id} onChange={this.handleChange} />
      </>
    ));
  };

  // mapで回してcheckedされてるアイテムだけを返すようにする
  handleSubmit = () => {
    let checkedItems = [];
  };

  handleChange = e => {
    const { id } = e.target.checked;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>{this.getToBuyItems()}</div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Resolve;
