import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ sending: false, sent: false, error: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Demande de devis'
    )}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message || 'Votre message ici'}`
    )}`;
    window.location.href = mailto;
    setStatus({ sending: false, sent: true, error: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container contact contact--grid">
        <div className="contact__info">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="contact__intro"
          >
            <p className="kicker">Contact</p>
            <h2>Construisons quelque chose ensemble.</h2>
            <p className="lead">
              Basé à Casablanca. Disponible pour missions freelance, alternance ou projets ponctuels.
            </p>
          </motion.div>

          <motion.div
            className="contact__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <p className="kicker">Disponibilité</p>
            <h3>{profile.location} • Remote possible</h3>
            <p className="muted">{profile.availability}</p>
            <div className="contact__badges">
              <span className="tag">Front-end</span>
              <span className="tag">UI Design</span>
              <span className="tag">Prototypage</span>
            </div>
          </motion.div>

          <motion.div
            className="contact__channels"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="contact__channel">
              <p className="muted">Email</p>
              <a className="contact__cta" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="contact__channel">
              <p className="muted">Téléphone</p>
              <a href={`tel:${profile.phone}`} className="contact__pill">{profile.phone}</a>
            </div>
            <div className="contact__channel">
              <p className="muted">Réseaux</p>
              <div className="contact__links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={profile.cv} download target="_blank" rel="noopener noreferrer">CV (PDF)</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.form
          className="contact__formbox"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          <h3>Demander un devis</h3>
          <label>
            Nom complet
            <input
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Sujet
            <input
              name="subject"
              placeholder="Ex: Site vitrine restaurant"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Parlez-moi de votre projet, délais, budget…"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary" disabled={status.sending}>
            {status.sending ? 'Envoi...' : 'Envoyer'}
          </button>
          {status.sent && <p className="muted">Message envoyé ! Je reviens vers vous rapidement.</p>}
          {status.error && <p className="muted" style={{ color: '#f87171' }}>{status.error}</p>}
        </motion.form>
      </div>
    </section>
  );
}
