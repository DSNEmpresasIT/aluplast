import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


const FormFooter = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [error, setError] = useState(false);
  const [user_email, setUser_Email] = useState();

  const handleEmailChange = (e) => {
    setUser_Email(e.target.value);
    setError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user_email || user_email.length < 1) {
      return setError(true)
    }
    setShowCaptcha(true);
  }

  const sendEmail = async(captchaValue) => {
    const params = {
      user_email,
      'g-recaptcha-response': captchaValue
    }

    await emailjs.send(
      keys.EMAILJS_SERVICE, 
      keys.FOOTER_EMAILJS_TEMPLATE, 
      params,
      keys.EMAILJS_PUBLIC_KEY, 
      'g-recaptcha-response'
    )
      .then(() => {
        alert('Mail enviado con éxito ✅')
        setUser_Email();
        setShowCaptcha(false)
      })
      .catch(() => alert('Ha ocurrido un error, intentelo mas tarde ⛔'), setShowCaptcha(false))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-footer">
        <input type="email" value={user_email} onChange={handleEmailChange} className="form__input" placeholder="email@email.com" />
        <button type="submit" className="au-btn au-btn--yellow au-btn--white au-btn--submit" disabled={showCaptcha}>Enviar</button>
        { showCaptcha && <ReCAPTCHA sitekey={keys.RECAPTCHA_KEY} onChange={sendEmail}/> }
      </form>
      { error && <span style={{ color: 'red' }}>Por favor introduzca un email válido.</span> }
    </>
  )
}

export default FormFooter;
