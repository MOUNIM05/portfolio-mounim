export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="kicker">Portfolio</p>
          <p className="muted">Design + Code pour produits ambitieux.</p>
        </div>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hello@portfolio.com">Email</a>
        </div>
        <p className="muted">© 2026 - Build ready for Netlify / Vercel / Cloudflare Pages.</p>
      </div>
    </footer>
  );
}
