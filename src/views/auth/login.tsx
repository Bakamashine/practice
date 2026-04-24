import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, type IRegisterValidation } from "../../hooks/useAuth";
import ShowError from "../../components/showError";
import ILoginValidation from "../../interface/ILoginValidation";

export default function LoginView() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<ILoginValidation | null>(null);
    const { login } = useAuth();

    const submit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await login({
            phoneNumber: phone,
            password,
        });
        console.log("Result login: ", result);
        if (!("access_token" in result && result.access_token)) {
            setError(result as IRegisterValidation);
        }
        
    };

    return (
        <section className="d-flex justify-content-center registration content">
            <div className="text-center my-5">
                <h1 className="my-2">Добро пожаловать</h1>
                <h5 className="my-4">Еще нет аккаунта? <Link to="/register" className="myA">Создай его</Link></h5>
                <form method='post' onSubmit={submit}>
                    <input 
                        type="tel" 
                        placeholder="Ваш номер телефона" 
                        className="w-75 border-0 myGrey rounded my-1 p-1 mySize20"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required 
                    />
                    <ShowError errorKey="PhoneNumber" error={error} />
                    <input type="password" placeholder="Ваш пароль" className="w-75 border-0 myGrey rounded my-1 p-1 mySize20" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <ShowError errorKey="Password" error={error} />
                    <div>
                        <button type="submit" className="w-75 rounded-4 mySize20 myLightBlue text-white p-2 border-0 m-2">Войти</button>
                    </div>
                </form>
                <a href="NumberLogin.html" className="myA">Забыли пароль?</a>
            </div>
        </section>
    );
}