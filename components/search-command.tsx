"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Moon, Sun, Monitor } from "lucide-react"

export function SearchCommand() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Qidirish...</span>
        <span className="inline-flex lg:hidden">Qidirish...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Nimani qidiryapsiz?" />
        <CommandList>
          <CommandEmpty>Natija topilmadi.</CommandEmpty>
          <CommandGroup heading="Havolalar">
            <CommandItem onSelect={() => runCommand(() => router.push("/yangiliklar"))}>Yangiliklar</CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dasturlash-tillari"))}>
              Dasturlash tillari
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/boshlangich-dasturlash"))}>
              Boshlang'ich dasturlash
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/forum"))}>Forum</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tema">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" />
              Yorug'
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              Qorong'i
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Monitor className="mr-2 h-4 w-4" />
              Sistema
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

