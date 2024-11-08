import { useState } from "react";
import { Section, Container, Input, Button, Title, Form, FileInput } from "../components"

export default function Register() {
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
            key: "username",
            condition: (value: string) => (value.length >= 3 ? null : "El nombre debe tener al menos 3 caracteres"),
        },
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
        <Section id="register" minHeight="screen">
            <Container className="bg-white shadow-sm rounded-lg w-1/2 p-2">
                <Title title="Registro" subtitle="En esta sección puedes crear una nueva cuenta" />

                <Form onSubmit={handleSubmit} rules={rules} className="space-y-4">

                    <FileInput
                        label="Sube tu imagen"
                        id="file-upload"
                        onFileSelect={(file) => console.log("Archivo seleccionado:", file)}
                    />


                    <Input
                        id="user-register-username"
                        name="username"
                        label="Nombre"
                        placeholder="Nombre"
                        required
                    />

                    <Input
                        id="user-register-email"
                        name="email"
                        label="Correo electrónico"
                        placeholder="usuario@dominio.com"
                        type="email"
                        required
                    />

                    <Input
                        id="user-register-password"
                        name="password"
                        label="Contraseña"
                        placeholder="********"
                        type="password"
                        required
                    />

                    <Button type="submit" label="Registrarse" loading={loading} handle={() => { }} fullWidth />

                </Form>

            </Container>
        </Section>
    )
}
