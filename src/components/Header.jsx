import { motion } from 'framer-motion';

export default function Header({ kicker, title, subtitle, cta }) {
  return (
    <section className="section header">
      <div className="container header__content">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="kicker">
          {kicker}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          {title}
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        {cta}
      </div>
    </section>
  );
}
