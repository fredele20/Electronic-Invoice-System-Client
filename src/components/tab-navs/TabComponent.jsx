import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CreateProduct from './create-new';
import ListProducts from './list-products';
import { Manage, BodyDiv, SideNav, Content } from './styles';
import Transactions from './transactions/Transactions';


function TabComponent() {

  const [state, setState] = useState({
    tabIndex: 0,
    displayIcon: 0
  });

  const { tabIndex, displayIcon } = state;

  return (
    <div>
      <BodyDiv>

        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={tabIndex => setState({ ...state, tabIndex })}
        >

          <SideNav>

            <TabList className="tab-nav-contain">
                <Tab className={`item ${tabIndex === 0 ? "active" : null}`}>
                  Create New
                </Tab>
                <Tab className={`item ${tabIndex === 1 ? "active" : null}`}>
                  List Product
                </Tab>
                <Tab className={`item ${tabIndex === 2 ? "active" : null}`}>
                  Transactions
                </Tab>
            </TabList>
          </SideNav>

          <TabPanel className={tabIndex === 0 ? "tabIndex" : null}>
            <CreateProduct />
          </TabPanel>
          <TabPanel className={tabIndex === 1? "tabIndex": null}>
            <ListProducts />
          </TabPanel>
          <TabPanel className={tabIndex === 2? "tabIndex": null}>
            <Transactions />
          </TabPanel>

        </Tabs>

      </BodyDiv>
    </div>
  )
}

export default TabComponent