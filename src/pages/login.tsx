import { useState } from "react";

import { Button, Input, Title, Form, Section } from "../components";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/20/solid";

export default function Login() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (data: { [key: string]: any }) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log("Datos enviados:", data);
        }, 2000);
    };

    const rules = [
        {
            key: "email",
            condition: (value: string) => (value.includes("@") ? null : "Email inválido"),
        },
        {
            key: "password",
            condition: (value: string) => (value.length >= 6 ? null : "La contraseña debe tener al menos 6 caracteres"),
        },
    ];

    return (
        <Section id="login" minHeight="screen" paddingX="0">
            <Form
                onSubmit={handleSubmit}
                rules={rules}
                className="bg-white rounded-lg shadow-lg"
            >
                <Title
                    title="Bienvenido de nuevo"
                    subtitle="Inicia sesión para continuar"
                />

                <Input
                    id="login-email"
                    name="email"
                    label="Correo electrónico"
                    placeholder="usuario@dominio.com"
                    icon={UserCircleIcon}
                    type="email"
                    required
                />
                <Input
                    id="login-password"
                    name="password"
                    label="Contraseña"
                    placeholder="********"
                    icon={LockClosedIcon}
                    type="password"
                    required
                />
                <Button type="submit" label="Iniciar sesión" loading={loading} fullWidth />

                <p className="text-center text-sm text-gray-500">
                    ¿No tienes una cuenta?{" "}
                    <a href="#" className="text-indigo-500 hover:underline">
                        Regístrate aquí
                    </a>
                </p>
            </Form>
        </Section>
    );
}
