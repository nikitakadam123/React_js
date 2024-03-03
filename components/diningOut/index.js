import React from 'react'
import './diningOut.css'
import Collection from '../common/collection'
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';


const collectionList=[
  {
    id:'1',
    title:'trending this week',
    cover:'https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg',
    places:'12 places'
  },
  {
    id:'2',
    title:'Best of Pune',
    cover:'https://b.zmtcdn.com/data/pictures/1/6507461/61edba07dc4be7068fe715fe97c028b9_featured_v2.jpg',
    places:'10 places'
  },
  {
    id:'3',
    title:'Outdoor Seating',
    cover:'https://b.zmtcdn.com/data/pictures/0/6506550/7263e36422f32e58807acfd8c063dde9_featured_v2.jpg',
    places:'20 places'
  },
  {
    id:'4',
    title:'Best One',
    cover:'https://b.zmtcdn.com/data/pictures/2/11022/abebb666f6f59f80180046b22454768e_featured_v2.jpg',
    places:'12 places'
  },
  {
    id:'5',
    title:'Brilliant',
    cover:'https://b.zmtcdn.com/data/pictures/9/18998859/54b438235690388ce9fcd1e991dbbf94_featured_v2.jpg',
    places:'12 places'
  },
  {
    id:'6',
    title:'Kabab Places',
    cover:'https://b.zmtcdn.com/data/pictures/1/6507461/61edba07dc4be7068fe715fe97c028b9_featured_v2.jpg',
    places:'12 places'
  },
  {
    id:'7',
    title:'Best One',
    cover:'https://b.zmtcdn.com/data/pictures/8/20458668/081d2a98d0c59c1c7dc82976be0f74ac_featured_v2.jpg',
    places:'12 places'
  }


];

const diningFilters=[
  {
      id:1,
      icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
      title: 'Filters'
  },
  {
      id:2,
      title: 'Rating: 4.0+'
  },
  {
      id:3,
      title: 'Safe and Hygienic'
  },
  {
      id:4,
      title: 'Pure Veg'
  },
  {
      id:5,
      title: 'Delivery Time',
      icon: <i className='fi fi-rr-apps-sort absolute-center'></i>
  },
  {
      id:6,
      title: 'Great Offers',
       
  },
   
];
const DiningOut = () => {
  return (
    <div>
      <Collection list={(collectionList)}/>
      <div className='max-width'>
        <Filters filterList={diningFilters}/>
        
      </div>
     
       </div>
  )
}

export default DiningOut
