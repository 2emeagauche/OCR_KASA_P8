const Banner = ({imgsrc, title}) => {
  return (
    <div className="banner">
      <img src={imgsrc} alt="" />
      {
        title && <h1>{title}</h1>
      }
    </div>
  );
};

export default Banner;