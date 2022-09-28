import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [category, setCategory] = useState([]);
  const [area, setArea] = useState([]);
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [filterCat, setFilterCat] = useState();
  const [filterArea, setFilterArea] = useState();
  const navigate = useNavigate();

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

    const getMeals = async () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const randomCharacter =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      const client = axios.create({
        baseURL: 'https://www.themealdb.com/api/json/v1/1',
      });
      let response = await client.get(`/search.php?s=${randomCharacter}`);
      setMeals(response.data.meals);
    };

    const getFiltersCat = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterCat}`
      );
      setCategories(res.data.meals);
    };

    const getFiltersArea = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filterArea}`
      );
      setAreas(res.data.meals);
    };

    getMeals();
    getFiltersCat();
    getFiltersArea();
    getCategory();
    getArea();
  }, [filterArea, filterCat, setArea, setCategory, setMeals]);

  useEffect(() => {
    if (areas === null && categories !== null && filterCat !== undefined) {
      navigate('/search', {
        state: { mealSearch: categories, meal: filterCat },
      });
    }

    if (areas !== null && categories === null && filterArea !== undefined) {
      navigate('/search', { state: { mealSearch: areas, meal: filterArea } });
    }
  }, [areas, categories, filterArea, filterCat, navigate]);

  return (
    <>
      <Header />
      <section className="mx-2 my-4">
        <div className="flex justify-between my-3">
          <h3 className="flex items-center font-semibold">All Meals</h3>
          <Link
            to="/meals"
            className="py-1 px-4 bg-primary text-[#97655a] rounded-xl hover:opacity-90"
          >
            View All
          </Link>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={3}
        >
          {meals.map((item) => {
            return (
              <SwiperSlide
                key={item.strMeal}
                className="p-2 flex justify-center items-center rounded-md w-fit text-sm  font-bold text-[#5e3a32] flex-col h-fit hover:opacity-90 cursor-pointer text-center"
              >
                <Link to={`/${item.idMeal}`}>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="rounded-full p-2"
                  />

                  {item.strMeal}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="mt-5 flex justify-between my-3">
          <h3 className=" flex items-center font-semibold">
            Find by Categories
          </h3>
          <Link
            to="/category"
            className="py-1 px-4 bg-primary text-[#97655a] rounded-xl hover:opacity-90"
          >
            View All
          </Link>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
        >
          {category.map((item) => {
            return (
              <SwiperSlide
                key={item.strCategory}
                onClick={(e) => setFilterCat(e.target.innerText)}
                className="p-4 flex justify-center hover:opacity-90 items-center rounded-md w-fit text-sm cursor-pointer bg-primary font-bold text-[#5e3a32]"
              >
                {item.strCategory}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="mt-5 flex justify-between my-3 relative">
          <h3 className="flex items-center font-semibold">Find by Areas</h3>
          <Link
            to="/area"
            className="py-1 px-4 bg-primary text-[#97655a] rounded-xl hover:opacity-90"
          >
            View All
          </Link>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
        >
          {area.map((item) => {
            return (
              <SwiperSlide
                key={item.strArea}
                onClick={(e) => setFilterArea(e.target.innerText)}
                className="p-4 cursor-pointer flex justify-center hover:opacity-90 items-center rounded-md w-fit text-sm bg-primary font-bold text-[#5e3a32]"
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
