import Input from '@/components/Input';
import React, { useCallback, useState } from 'react';

const Auth = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    const togelScreen = useCallback(() => {
        setVariant((variant) => variant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed bg-center" >
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-16 p-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? "Sign in" : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(val: any) => setUsername(val.target.value)}
                                    value={username}
                                    id='username'
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(val: any) => setEmail(val.target.value)}
                                value={email}
                                id='email'
                                type="email"
                            />
                            <Input
                                label="Password"
                                onChange={(val: any) => setPassword(val.target.value)}
                                value={password}
                                id='password'
                            />
                        </div>

                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant == "login" ? 'Login' : 'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant == 'login' ? 'First time using Netflix?' : ' Already have an account?'}
                            <span onClick={togelScreen} className="text-white mt-1 hover:underlined cursor-pointer">
                                {variant == 'login' ? ' Create an account' : ' Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth