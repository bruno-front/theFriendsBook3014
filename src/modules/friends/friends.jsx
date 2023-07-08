import Friend from "../friend/friend";
import css from "./friends.module.css";

let friendsList = [
  {
    src: "https://ichef.bbci.co.uk/news/640/cpsprodpb/FE42/production/_103609056_049596185-1.jpg",
    alt: "alt 1",
    name: "Илона",
    isFollow: true
  },
  {
    src: "https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png",
    alt: "Мочалка",
    name: "Бобка Губ",
    isFollow: false
  },
  {
    src: "https://oper.ru/static/data/gallery/l1048750805.jpg",
    alt: "Чебуратор",
    name: "Чебуратор",
    isFollow: true
  },
  {
    src: "https://i0.wp.com/eroskosmos.org/wp-content/uploads/2014/02/16-Yoda-Empire-star-wars-e1392547687502.jpg",
    alt: "Йода",
    name: "Йода",
    isFollow: true
  },
];

let friendsHtml = [];

friendsList.forEach((friendsItem) => {
  friendsHtml.push(
    <li className={css.item}>
      <Friend
        friendData={friendsItem}
      />
    </li>
  );
});

function Friends() {
  return (
    <div className="Friends">
      <div className="view-head">Список друзей</div>
      <ul className={css.list}>{friendsHtml}</ul>
    </div>
  );
}

export default Friends;
