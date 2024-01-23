import { CDN_URL } from "../Utils/Constants";


const RestroCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } =
    resData?.info;

  return (
    <div className="restrocard">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h6>{cuisines.join(",")}</h6>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestroCard;
