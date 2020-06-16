import React from 'react';
import { connect } from 'react-redux';

import HeaderSearch from './HeaderSearch';
import { setSearchBy } from '../../redux/reducer';

const HeaderSearchContainer = ({ searchBy, setSearchBy }) => (
  <HeaderSearch searchBy={searchBy} setSearchBy={setSearchBy} />
);

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
  };
};

export default connect(mapStateToProps, { setSearchBy })(HeaderSearchContainer);
