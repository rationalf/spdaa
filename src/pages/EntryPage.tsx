import {useEntry} from "../hooks/entry";
import {_ensureUserNotLoggedIn} from "../components/LoginState";
import {Loading} from "../components/Loading";
import {CenterH, CenterW} from "../components/Center";
import {DefaultLayout} from "../components/DefaultLayout";
import {ElevatedButton} from "../components/ElevatedButton";
import {SecondaryTextGrey} from "../components/SecondaryText";
import {PrimaryTextGrey} from "../components/PrimaryText";
import {ContentWindow} from "../components/ContentWindow";
import {DefaultForm} from "../components/DefaultForm";
import {InputField} from "../components/InputField";
import {InkWellButton} from "../components/InkWellButton";

export const path = "/entry";

export function Page() {
    const {
        loading,
        isRegistered,
        email,
        password,
        setEmail,
        setPassword,
        toggleRegistration,
        enter,
    } = useEntry();

    const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        enter();
    };

    return _ensureUserNotLoggedIn({
        render: () => (
            <DefaultLayout loggedIn={false}>
                <CenterH>
                    {loading ? (
                        <Loading/>
                    ) : (
                        <ContentWindow w={522}>
                            <div className="w-[522px] h-[550px] px-20 flex flex-col items-center justify-center">
                                <div className="flex gap-[40px] pb-10">
                                    {isRegistered ? <PrimaryTextGrey> {"Авторизация"}</PrimaryTextGrey> :
                                        <InkWellButton onClick={toggleRegistration}
                                                       type="button"><SecondaryTextGrey>{"Авторизация"}</SecondaryTextGrey></InkWellButton>}

                                    {isRegistered ? <InkWellButton onClick={toggleRegistration} type="button">
                                            <SecondaryTextGrey>{"Регистрация"}</SecondaryTextGrey></InkWellButton>
                                        : <PrimaryTextGrey> {"Регистрация"}</PrimaryTextGrey>}

                                </div>
                                <DefaultForm onSubmit={handleAuth}>
                                    <InputField
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputField
                                        type="password"
                                        placeholder="Пароль"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <CenterW>
                                        <ElevatedButton type="submit" onClick={undefined}>
                                            {isRegistered ? "Войти" : "Зарегистрироваться"}
                                        </ElevatedButton>
                                    </CenterW>
                                </DefaultForm>
                            </div>
                        </ContentWindow>
                    )}
                </CenterH>
            </DefaultLayout>
        ),
    });
}
