import css from "./friend.module.css";

function Friend(props) {
  let friend = props.friendData;

  let button = friend.isFollow ?
  <button className={css.follow}>Отписка</button> :
  <button className={css.follow}>Подписаться</button>

  return (
    <div className={css.friend}>
      <div className={css.ava}>
        <img
          src={friend.src}
          alt={friend.alt}
          className={css.img}
        />
      </div>
      <div className={css.info}>
        <strong className={css.name}>{friend.name}</strong>
      </div>
      {button}
    </div>
  );
}

export default Friend;
