import './Contact.css'
import phone from '/assets/icons/phone.svg'
import email from '/assets/icons/email.svg'
import linkedin from '/assets/icons/linkedin.svg'
import Title from '../Title/Title'
import Box from '../Box/Box'

function Contact() {
  return (
    <section className="contact_container" id="contact">
      <Title title="Contact" />
      <p>
        Si mi perfil te interesa y deseas conocerme mejor, puedes contactarme
        por <span className="color">Teléfono</span>, enviarme un{' '}
        <span className="color">Correo Electrónico</span> o vía{' '}
        <span className="color">LinkedIn</span>.
      </p>
      <Box contact={true}>
        <div className="contact">
          <p>
            <img src={phone} alt="Phone Icon" /> +54 9 1128629042
          </p>
          <p>
            <img src={email} alt="Email Icon" /> sgabriel.dev@gmail.com
          </p>
          <p>
            <img src={linkedin} alt="LinkedIn Icon" /> Gabriel Sanchez
          </p>
        </div>
      </Box>
    </section>
  )
}

export default Contact
