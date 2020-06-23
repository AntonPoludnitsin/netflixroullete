import React, { Component } from 'react';
import { Redirect } from 'react-router';

import HeaderSearchContainer from '../components/Header/HeaderSearchContainer';
import Sorting from '../components/Sorting/SortingContainer';
import EmptyContent from '../components/ResultBody/EmptyContent';

class MainPage extends Component {
  render() {
    const { title, films } = this.props;

    if (films.length !== 0) {
      return <Redirect from="/" to="/search" />;
    }

    return (
      <>
        <HeaderSearchContainer />
        <Sorting />
        <EmptyContent title={title} />
      </>
    );
  }
}

export default MainPage;
