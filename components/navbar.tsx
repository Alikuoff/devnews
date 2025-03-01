"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { SearchCommand } from "@/components/search-command"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { name: "Bosh sahifa", href: "/" },
    {
      name: "Dasturlash",
      children: [
        { name: "Dasturlash Tillari", href: "/dasturlash-tillari" },
        { name: "Boshlang'ich Dasturlash", href: "/boshlangich-dasturlash" },
      ],
    },
    { name: "Foydali Vositalar", href: "/foydali-vositalar" },
    { name: "Yangiliklar", href: "/yangiliklar" },
    { name: "Vlog va Maqolalar", href: "/vlog-maqolalar" },
    { name: "Forum", href: "/forum" },
    { name: "Aloqa", href: "/aloqa" },
  ]

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "glass shadow-sm" : "bg-background/50 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-muted bg-clip-text text-transparent">
                DevNews
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <SearchCommand />
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className="w-full">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <SearchCommand />
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 glass">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-foreground/70">{item.name}</div>
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

