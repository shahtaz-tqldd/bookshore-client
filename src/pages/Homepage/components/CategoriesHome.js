import React from 'react'
import book1 from '../../../assets/icons/book1.png'
import book2 from '../../../assets/icons/book2.png'
import book3 from '../../../assets/icons/book3.png'
import book5 from '../../../assets/icons/book5.png'
import book4 from '../../../assets/icons/book4.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from '../../Categories/components/CategoryCard'

const CategoriesHome = () => {
    const categories = [
        {
            "id": 1,
            "categoryName": "Novel",
            "detail": "Find this books of category in here",
            "img": book1
        },
        {
            "id": 2,
            "categoryName": "Poetry",
            "detail": "Find this books of category in here",
            "img": book2
        },
        {
            "id": 3,
            "categoryName": "Non Fiction",
            "detail": "Find this books of category in here",
            "img": book3
        },
        {
            "id": 4,
            "categoryName": "Academic",
            "detail": "Find this books of category in here",
            "img": book4
        },
        {
            "id": 5,
            "categoryName": "Research and Journal",
            "detail": "Find this books of category in here",
            "img": book5
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        initialSlide: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
        <h1 className='mt-16 mb-12 text-center text-5xl'>Categories</h1>
            <Slider {...settings}>
                {
                    categories.map(category => <CategoryCard key={category.id} details={category} />)
                }
            </Slider>
        </>
    )
}

export default CategoriesHome