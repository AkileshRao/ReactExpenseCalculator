import React from 'react'
import FilterLink from '../containers/FilterLink'
import { FilterTypes } from '../redux/actions/index';

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={FilterTypes.ALL}>
            All
        </FilterLink>
        <FilterLink filter={FilterTypes.INCOME}>
            Income
        </FilterLink>
        <FilterLink filter={FilterTypes.EXPENSE}>
            Expense
        </FilterLink>
    </div>
)

export default Footer
