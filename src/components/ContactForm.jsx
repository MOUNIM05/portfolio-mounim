import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    window.location.href = `mailto:hello@portfolio.com?subject=Projet%20-%20${encodeURIComponent(
      form.name || 'Portfolio'
    )}&body=${encodeURIComponent(form.message)}%0A%0A${encodeURIComponent(form.email)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <p className="kicker">Contact</p>
          <h2>Parlons projet.</h2>
          <p className="lead">Basé à Casablanca, ouvert aux missions freelance/alternance.</p>
          <div className="contact__links">
            <a href="tel:+212626262455">+212 626 262 455</a>
            <a href="mailto:abdelmounimma2005@gmail.com">abdelmounimma2005@gmail.com</a>
            <a href="/cvmounim.pdf" download target="_blank" rel="noreferrer">CV (PDF)</a>
          </div>
        </div>
        <motion.form className="contact__form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <label>
            Nom
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary">Envoyer</button>
          {sent && <p className="muted">Merci ! Je reviens vers vous sous 24h.</p>}
        </motion.form>
      </div>
    </section>
  );
}
