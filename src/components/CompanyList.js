import React from 'react';
import Company from './Company';

export default function CompanyList(props) {
  const listItems = props.companies.map((item, index) => {
    return (
      <li key={`company-list-item-${item.title}`} className="company-list__item">
        <Company {...item} />
      </li>
    )
  })
  
  return (
    <ul className="company-list">
        {listItems}
    </ul>
  )
}
