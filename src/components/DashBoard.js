import React, { useState } from 'react'

//components
import NavBar from './NavBar'

//data
import {funData, productivityData, developmentData} from '../data/assets/dashData'


const dataObj = {
    recreation: funData,
    productivity: productivityData,
    development: developmentData

}

const DashItem = (props) => {
    const {id, name, category, img, description } = props.item
    return (
        <div style={{
            backgroundImage: `url(${img})`
        }} key={id}  className='dash-item'>

            <div className='dash-item-children'>

            <h3 className='dash-item-name'>{name}</h3>
            <p className='dash-item-category'>{category}</p>
            {/* <img src={img} className='dash-item-img' /> */}
            <p className='dash-item-description'>{description}</p>
            </div>


        </div>
    )
}

const DashList = (props) => {
    const {dash} = props;


   return  (<div className='dash-list'>
        {dash.map(item => {
            return (
                <DashItem item={item} />
            )
        })}
    </div>)
}

export default function DashBoard() {

    const [data, setData] = useState(funData)
    const [tab, setTab] = useState('overview')

    const changeTab = (e) => {
        setTab(e.target.name)
    }

    const renderFromTab = (dataToUse) => {
        if(tab === 'overview'){

        }
        else {
            return (<DashList dash={dataToUse} />)
        }
    }

  return (
    <div className='dashboard'>
    <NavBar />
    <div className='tab-wrap'>
    <button onClick={changeTab} name="overview">overview</button>
    <button onClick={changeTab} name="productivity">productivity</button>
    <button onClick={changeTab} name= 'development'>development</button>
    <button onClick={changeTab} name='recreation'>recreation</button>
    </div>
    {renderFromTab(dataObj[tab])}
    
    
    
    
    
    
    
    </div>
  )
}
