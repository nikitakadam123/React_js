import React from 'react'
import './topBrands.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from "react-slick";

const topBrandsList=[
    {
        id: 1,
        time:"35 min",
         cover:"https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp"
    },
    {
        id: 2,
        time:"40 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp"
        },
        {
            id: 3,
            time:"30 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/82b5b6321860545a160e790d99ec6da3_1629438503.png?output-format=webp"
            },
            {
                id: 4,
                time:"43 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp"
                },
                {
                    id: 5,
                    time:"21 min",
                    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png?output-format=webp"
                },
               {
                    id: 6,
                    time:"23 min",
                    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/05a2c24a8de3f8fe07fc46a07fdbba99_1611576819.png?output-format=webp"
                },
                {
                    id: 7,
                    time:"30 min",
                    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png?output-format=webp"
                },
               {
                    id: 8,
                    time:"43 min",
                    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
               },
                
               {
                     id: 9,
                     time:"56 min",
                     cover:"https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png?output-format=webp"
                },
                {
                    id: 10,
                    time:"27 min",
                    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179363.png?output-format=webp"
                 },
    
];
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return( 
  <div className='top-brands max-width'>
    <div className='collection-title'>Top brands for you</div>
    <Slider {...settings}>
    {topBrandsList.map((brand)=> {
        return <div>
            <div className='top-brands-cover'>
                <img src={brand.cover} className='top-brands-image' alt={brand.time}/>
        </div>
    </div>
    })}

    </Slider>
    </div>
  )
}

export default TopBrands
