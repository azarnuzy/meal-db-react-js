import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [category, setCategory] = useState([]);
  const [area, setArea] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const resCategory = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      );
      setCategory(resCategory.data.meals);
    };

    const getArea = async () => {
      const resArea = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
      );
      setArea(resArea.data.meals);
    };

    getCategory();
    getArea();
  }, [setArea, setCategory]);

  return (
    <>
      <Header />
      <section className="mx-2 my-4">
        <div className="flex justify-between my-3">
          <h3 className="flex items-center font-semibold">
            Find by Categories
          </h3>
          <span className="py-1 px-4 bg-primary text-[#97655a] rounded-xl hover:opacity-90">
            View All
          </span>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
        >
          {category.map((item) => {
            return (
              <SwiperSlide
                key={item.strCategory}
                className="p-4 flex justify-center items-center rounded-md w-fit text-sm bg-primary font-bold text-[#5e3a32]"
              >
                {item.strCategory}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-between my-3 relative">
          <h3 className="flex items-center font-semibold">Find by Areas</h3>
          <span className="py-1 px-4 bg-primary text-[#97655a] rounded-xl hover:opacity-90">
            View All
          </span>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
        >
          {area.map((item) => {
            return (
              <SwiperSlide
                key={item.strArea}
                className="p-4 flex justify-center items-center rounded-md w-fit text-sm bg-primary font-bold text-[#5e3a32]"
              >
                {item.strArea}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
