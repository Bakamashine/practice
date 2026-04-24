import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, type IRegisterValidation } from "../../hooks/useAuth";
import ShowError from "../../components/showError";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IRegisterValidation | null>(null);
  const { register } = useAuth();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await register({
      fullName: name,
      phoneNumber: phone,
      password,
    });
    console.log("Result register: ", result);
    if (!("access_token" in result && result.access_token)) {
      setError(result as IRegisterValidation);
    }
  };

  return (
    <section className="d-flex justify-content-center registration content">
      <div className="text-center my-5">
        <h1 className="my-2">Привет! Создай аккаунт</h1>
        <h5 className="my-4">
          Уже есть аккаунт?{" "}
          <Link to={"/login"} className="myA">
            Войдите в него
          </Link>
        </h5>
        <form method='post' onSubmit={submit}>
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-75 border-0 myGrey rounded my-1 p-1 mySize20"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ShowError errorKey="FullName" error={error} />
        <input
          type="tel"
          placeholder="Ваш номер телефона"
            pattern="\+7\s?\(?[0-9]{3}\)?\s?[0-9]{3}-?[0-9]{2}-?[0-9]{2}"
          className="w-75 border-0 myGrey rounded my-1 p-1 mySize20"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        //   required
        />
        <ShowError errorKey="PhoneNumber" error={error} />
        <input
          type="password"
          placeholder="Ваш пароль"
          className="w-75 border-0 myGrey rounded my-1 p-1 mySize20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ShowError errorKey="Password" error={error} />
        <div>
          <button
            className="w-75 rounded-4 mySize20 myLightBlue text-white p-2 border-0 m-2"
          >
            Создать
          </button>
        </div>
        </form>
      </div>
    </section>
  );
}
