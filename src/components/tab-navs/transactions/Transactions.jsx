import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BoughtTransactions from './purchased';
import SoldTransactions from './sold';
import { BodyDiv } from './styles';


function Transactions() {

  const [state, setState] = useState({
    tabIndex: 0,
    displayIcon: 0
  });

  const { tabIndex, displayIcon } = state;

  return (
    <BodyDiv>
      <Tabs 
        className="tabs"
        selectedIndex={tabIndex}
        onSelect={tabIndex => setState({ ...state, tabIndex })}
      >
        <TabList className="tab-nav-contain">
          <Tab className={`item ${tabIndex === 0 ? "active" : null}`}>
            Purchased
          </Tab>
          <Tab className={`item ${tabIndex === 1 ? "active" : null}`}>
            Sold
          </Tab>
        </TabList>

        <TabPanel className={tabIndex === 0 ? "tabIndex" : null}>
          <BoughtTransactions />
        </TabPanel>

        <TabPanel className={tabIndex === 1 ? "tabIndex": null}>
          <SoldTransactions />
        </TabPanel>



      </Tabs>
    </BodyDiv>
  )
}

export default Transactions