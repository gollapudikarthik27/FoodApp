import { useEffect, useState } from "react";
import Shimmar from "./BodyComponents/Shimmer";
import RestroCard from "./BodyComponents/RestroCards";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [inputValue, setinputValue] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const Restroelement = await data.json();

    console.log(Restroelement);

    setlistofRestaurant(
      Restroelement?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurant(
      Restroelement?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering

  return listofRestaurant == 0 ? <Shimmar />: (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={inputValue}
            onChange={(k) => setinputValue(k.target.value)}
            
          />
          <button
            className="input-search"
            onClick={() => {
              const filterRestaurant = listofRestaurant.filter((reso) =>
                reso?.info?.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              setfilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurant.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.4
            );
            setfilteredRestaurant(filterList);
          }}
        >
          top Rated
        </button>
      </div>

      <div className="restro-container">
        {filteredRestaurant.map((restroArray) => (
          <RestroCard key={restroArray?.info?.id} resData={restroArray} />
        ))}
      </div>
    </div>
  );
};

export default Body;
