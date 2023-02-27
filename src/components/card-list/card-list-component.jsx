
import "./card-list-styles.css";
import Card from "./card/card";

const Cardlist = ({monsters}) => {

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}


export default Cardlist;

