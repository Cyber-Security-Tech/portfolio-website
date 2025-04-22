export default function Footer() {
    return (
      <footer className="w-full text-center py-8 text-sm text-gray-500 mt-20">
        © {new Date().getFullYear()} Nida Ilyas. Built with{' '}
        <span className="text-accent font-semibold">Next.js</span> &{' '}
        <span className="text-accent font-semibold">Tailwind CSS</span>.
      </footer>
    )
  }
  