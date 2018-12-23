import React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Flex, Box, Text } from 'rebass';
import { generateListItems } from '../../utils';
const ASC = 'ASC';
const DESC = 'DESC';
const SORT_OPTIONS = [ASC, DESC];

const SET_FILTER = 'selectorsExample/SET_FILTER';
const SET_SORT = 'selectorsExample/SET_SORT';

function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}

function setSort(sort) {
  return {
    type: SET_SORT,
    payload: sort,
  };
}

const initialState = {
  sort: ASC,
  filter: '',
  items: generateListItems(),
};

export const selectorsExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};
const selectSelectorsExampleDomain = state => state.selectorsExample;
const makeSelectFilter = createSelector(selectSelectorsExampleDomain, ({ filter }) => filter);
const makeSelectSort = createSelector(selectSelectorsExampleDomain, ({ sort }) => sort);
const makeSelectItems = createSelector(selectSelectorsExampleDomain, ({ items }) => items);

const makeSelectFilterAndSortedList = createSelector(
  makeSelectItems,
  makeSelectFilter,
  makeSelectSort,
  (items, filter, sort) =>
    items
      .filter(item => (filter ? item.text.toLowerCase().includes(filter.toLowerCase()) : true))
      .sort((a, b) => (sort === ASC ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))),
);

class Example5 extends React.PureComponent {
  render() {
    const { items, filter, sort, handleFilterChange, handleSortChange } = this.props;

    return (
      <Flex flexDirection="column" alignItems="center">
        <Flex>
          <Box mx={10}>
            <input value={filter} onChange={handleFilterChange} />
          </Box>
          <Box mx={10}>
            <select value={sort} onChange={handleSortChange}>
              {SORT_OPTIONS.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Box>
        </Flex>
        <Box mx={30}>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Text>{item.text}</Text>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    );
  }
}

Example5.title = 'Selectors example';

const mapStateToProps = createStructuredSelector({
  sort: makeSelectSort,
  filter: makeSelectFilter,
  items: makeSelectFilterAndSortedList,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: e => dispatch(setFilter(e.target.value)),
  handleSortChange: e => dispatch(setSort(e.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example5);
