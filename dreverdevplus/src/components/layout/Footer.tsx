export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-3 md:fixed bottom-0 left-0 text-sm text-subtext z-40">
        <a className="hover:text-subtext/80" href="https://storyset.com/work">Work illustrations by Storyset</a>
        <p className="text-default-600">Drever Dev | All rights reserved&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
