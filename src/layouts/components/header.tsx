import { Link } from "react-router-dom";

export default function Header() {
    return (
            // <!-- шапка -->
  <section className="myColorHeader ">
    <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center">
        <div className="container-fluid ">
            {/* <!-- логотип упк --> */}
            <Link className="navbar-brand " to={"/"}>
                <img src="img/logo.png" alt="Логотип" className="myImg" />
            </Link>
            
            {/* <!-- поиск --> */}
            <div className="mySearh d-flex align-items-center justify-content-around flex-grow">
                <input className="form-control " type="search" placeholder="Поиск" aria-label="Поиск" />
                <div className="d-flex justify-content-end align-items-center">
                    <div className="">
                        {/* <!-- выпадающий список --> */}
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="img/Group 2.png" alt="Иконка группы" />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- иконки--> */}
                     <div className="myIcons">
                    <div className="d-flex me-3 myStyleTextLogo header-icons ">
                        <div className="mx-1 text-center">
                            <Link to="/comments">
                                <img src="/img/comment.png" alt="Иконка комментария" />
                            </Link>
                        </div>
                        <div className="mx-1 text-center">
                            {/* <!-- для не авторизированных <a href="Login.html"> --> */}
                            <Link to={"/profile"}>
                                <img src="img/user.png" alt="Иконка пользователя" />
                            </Link>
                        </div>
                        <div className="mx-1 text-center">
                            <Link to={"/like"}>
                                <img src="img/heart.png" alt="Иконка сердца" />
                            </Link>
                        </div>
                        <div className="mx-1 text-center">
                            <a href="college.html">
                                <img src="img/material-symbols_info-outline-rounded1.png" alt="Иконка сердца" />
                            </a>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    </nav>
</section>
    )
}