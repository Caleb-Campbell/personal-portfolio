import React, { useState } from 'react'

//components
import NavBar from './NavBar'

//data
import dashData from '../data/assets/dashData'


const DashItem = (props) => {
    const {id, name, category, link, img, description } = props.item
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

    const [data, setData] = useState(dashData)
    const [tab, setTab] = useState()

  return (
    <div className='dashboard'>
    <NavBar />

    <DashList dash={data} />
    
    
    
    
    
    
    </div>
  )
}
