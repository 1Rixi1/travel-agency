import "./newsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter__content">
      <h2>Подпишитесь, чтобы получать полезную информацию о путешествиях</h2>

      <div className="newsletter__input">
        <input type="email" placeholder="Введите свой эл. адрес" />
        <button className="newsletter__btn btn">Подписаться</button>
      </div>
      <p>
        Оставайтесь в курсе лучших предложений, новых направлений и полезных
        советов для вашего следующего приключения.
      </p>
    </div>
  );
};
