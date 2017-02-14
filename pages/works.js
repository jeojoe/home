import React, { Component } from 'react';
import Links from '../components/Links';
import Layout from '../components/Layout';
import { works } from '../data';

export default class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }
  changeFilter = (filter) => {
    this.setState({ filter });
  }
  render() {
    const { url } = this.props;
    const { filter } = this.state;
    return (
      <Layout url={url} title="jeojoe | Works" subHeader="Works : " filter={filter} changeFilter={this.changeFilter}>
        <Links filter={filter} data={works} />
      </Layout>
    );
  }
}
