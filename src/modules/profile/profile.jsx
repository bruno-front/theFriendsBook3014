import css from "./profile.module.css";

function Profile() {
  return (
    <div className="Profile">
      <div className="view-head">Профиль</div>

      <div className={css.card}>
        <div className={css.ava}>
          <img
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FE42/production/_103609056_049596185-1.jpg"
            alt=""
            className={css.img}
          />
        </div>
        <div className={css.info}>
          <strong className={css.name}>Илона</strong>
        </div>
      </div>

    </div>
  );
}

export default Profile;
