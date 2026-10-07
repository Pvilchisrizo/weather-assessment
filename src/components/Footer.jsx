export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Paloma Vilchis Rizo</p>
    </footer>
  );
}
