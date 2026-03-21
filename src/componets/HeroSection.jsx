const HeroSection = ({searchTerm}) => {

  
  return (
    <>
      {!searchTerm?.trim() &&  (<div className="relative h-[70vh] w-full">
        <img
          className="h-[30vw] w-full brightness-75"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg"
          alt="hero"
        />
      </div>)}
    </>
  );
};

export default HeroSection;
