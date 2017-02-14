import React, { Component } from 'react';
import Links from '../components/Links';
import Layout from '../components/Layout';
import { thoughts } from '../data';

export default class Thoughts extends Component {
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
      <Layout url={url} title="jeojoe | Thoughts" subHeader="Thoughts : " filter={filter} changeFilter={this.changeFilter}>
        <div className="wrapper">
          <Links filter={filter} data={thoughts} />
        </div>
        <style jsx>{`
          .wrapper {
            padding: 50px 0;
          }
        `}</style>
      </Layout>
    );
  }
}
