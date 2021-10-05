function Interface(props) {
  return (
    <>
      <div>
        {props.data.map((food) => (
          <div key={food.id} className="flex">
            <div className="box">
              <h2>{food.title}</h2>
              <h3>{food.category}</h3>
              <h4>{food.desc}</h4>
              <h5>price:{food.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Interface;
