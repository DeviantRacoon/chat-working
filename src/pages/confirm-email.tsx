import { Section, Input, Button, Title, Form } from "../components"

export default function ConfirmEmail() {
  return (
    <Section id="confirm-email" minHeight="screen">
      <Form className="bg-white shadow-sm rounded-lg p-10" onSubmit={() => { }}>
        <Title title="Confirma tu correo" subtitle="Ingresa el código enviado a tu correo" />

        <Input
          id="user-confirm-email-code"
          name="user-confirm-email-code-input"
          label="Codigo de confirmación"
          placeholder="Ingresa el código de 6 dígitos"
          type="text"
          required
        />

        <Button label="Confirmar" handle={() => { }} fullWidth />

      </Form>
    </Section>
  )
}

