import { Link, useNavigate } from "react-router-dom";

const ProductShow: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="mx-4 myInfoCard catalog content">
            <div>
                    <img src="img/arrow-left.png" alt="Назад" className="my-2 myImgArrow cursor-pointer" onClick={e=>navigate(-1)}/>
                <div className="mb-3">
                    <div className="card-body text-center">
                        <div className="m-5">
                            <img src="img/Group 19.png" className="card-img-top w-50" alt="Изображение товара" />
                        </div>
                        <h3>Cheeseburger Wendy's Burger</h3>
                        <h3>Исполнитель</h3>
                        <h3>Номер телефона</h3>
                        <h3>Адрес</h3>
                        <h3>Цена</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi velit!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odit perspiciatis hic, obcaecati veritatis nostrum.
                        </p>
                        <a href="Rate_shop.html">
                            <button className="w-50 myButton rounded-4 myBlue text-white p-2"
                            onClick={e => navigate("/buy_page")}>Заказать</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShow;