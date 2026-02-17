import { motion } from 'framer-motion';

export default function ContactForm() {
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
            <h3>Casablanca • Remote possible</h3>
            <p className="muted">Freelance · Alternance · Projets courts</p>
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
              <a className="contact__cta" href="mailto:abdelmounimma2005@gmail.com">
                abdelmounimma2005@gmail.com
              </a>
            </div>
            <div className="contact__channel">
              <p className="muted">Téléphone</p>
              <a href="tel:+212626262455" className="contact__pill">+212 626 262 455</a>
            </div>
            <div className="contact__channel">
              <p className="muted">Réseaux</p>
              <div className="contact__links">
                <a href="https://github.com/MOUNIM05" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/abdel-mounim-maani-721321302/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="/cvmounim.pdf" download target="_blank" rel="noreferrer">CV (PDF)</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.form
          className="contact__formbox"
          action="https://formsubmit.co/abdelmounimma2005@gmail.com"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          <input type="hidden" name="_subject" value="Nouvelle demande via portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://mounim-portfolio.netlify.app/#contact" />
          <h3>Demander un devis</h3>
          <label>
            Nom complet
            <input
              name="name"
              placeholder="Votre nom"
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Votre email"
              required
            />
          </label>
          <label>
            Sujet
            <input
              name="subject"
              placeholder="Ex: Site vitrine restaurant"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Parlez-moi de votre projet, délais, budget…"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </motion.form>
      </div>
    </section>
  );
}
