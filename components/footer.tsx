import Link from "next/link"
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">DevNews</h3>
            <p className="text-muted-foreground text-sm">Dasturchilar uchun yangiliklar va ta'lim resurslari</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bo'limlar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/yangiliklar" className="text-muted-foreground hover:text-primary text-sm">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link href="/dasturlash-tillari" className="text-muted-foreground hover:text-primary text-sm">
                  Dasturlash Tillari
                </Link>
              </li>
              <li>
                <Link href="/boshlangich-dasturlash" className="text-muted-foreground hover:text-primary text-sm">
                  Boshlang'ich Dasturlash
                </Link>
              </li>
              <li>
                <Link href="/foydali-vositalar" className="text-muted-foreground hover:text-primary text-sm">
                  Foydali Vositalar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Jamiyat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/forum" className="text-muted-foreground hover:text-primary text-sm">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/vlog-maqolalar" className="text-muted-foreground hover:text-primary text-sm">
                  Vlog va Maqolalar
                </Link>
              </li>
              <li>
                <Link href="/aloqa" className="text-muted-foreground hover:text-primary text-sm">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktlar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@devnews.uz"
                  className="text-muted-foreground hover:text-primary text-sm flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@devnews.uz
                </a>
              </li>
              <li>
                <a
                  href="tel:+998901234567"
                  className="text-muted-foreground hover:text-primary text-sm flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Toshkent, IT Park
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} DevNews. Barcha huquqlar himoyalangan.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Maxfiylik siyosati
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

