import React, { useContext } from 'react' ;
import './Child3.css' ;
import Products from '../../../Products/Products';
import {Swiper , SwiperSlide} from 'swiper/react' 
import {Autoplay , Pagination ,Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { apicontext } from '../../../../context/ApiContext';
import { cartContext } from '../../../../context/cartcontext';

function Child3() {

  const {addToCart} = useContext(cartContext)

    const {allData} = useContext(apicontext); 
  
  return (
    <div className='container'>
    <Swiper
  className="row mt-5 "
  breakpoints={{
   640: {
     slidesPerView: 1,
     spaceBetween: 20,
   },
   768: {
     slidesPerView: 2,
     spaceBetween: 40,
   },
   1024: {
     slidesPerView: 4,
     spaceBetween: 50,
   },
 }}
  modules={[Autoplay , Pagination  ,Navigation]}
  autoplay ={{
   delay:'4000',
   disableOnInteraction : false
  }}
  pagination={{
   clickable : true , 
   dynamicBullets : true
  }} 
  navigation ={{
    prevEl : '.Featuerd .slide_to_left' , 
    nextEl : '.Featuerd .slide_to_right' ,
   }}
 >  
   { allData.slice(20,30).map((val , key)=>(
        <SwiperSlide key={key}>
          <Products addToCart={addToCart} val={val}  />
        </SwiperSlide>
        ))}
</Swiper>
</div>
  )
}

export default Child3
