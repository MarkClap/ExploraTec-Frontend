import React, { useState } from 'react';
import { LoginForm } from '../components';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí irá la lógica de login cuando la implementes
        console.log('Form submitted:', { email, password });
    };

    return (
    <LoginForm
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
    />
    );
};

export default Login;