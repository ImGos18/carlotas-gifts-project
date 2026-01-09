import Item from "./Item";

const items = [
  {
    imgSrc:
      "https://cdnx.jumpseller.com/flores-en-linea/image/23121450/thumb/1438/1438?1651625005",
    description: "ramo girasoles y rosas",
    price: "30$",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCI3TcmWyuaV4qtwuP7XODJNps0c-iW8QrA&s",
    description: "ramo de rosas",
    price: "20$",
  },
  {
    imgSrc:
      "https://www.flordegalgo.cl/wp-content/uploads/2024/01/WhatsApp-Image-2023-12-16-at-6.37.44-PM.jpeg",
    description: "ramo flores amarillas",
    price: "10$",
  },
]; //variable provisional

export default function ItemListContainer() {
  return (
    <ul className="item-container">
      {items.map((item, i) => (
        <Item
          description={item.description}
          imgSrc={item.imgSrc}
          price={item.price}
          key={i}
        />
      ))}
    </ul>
  );
}
