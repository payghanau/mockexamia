
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Apply theme on component mount and when theme changes
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme === 'dark' ? 'dark' : 'light')
    
    // Also update body class for additional styling
    document.body.classList.toggle('dark', theme === 'dark')
    
    // Store theme preference in localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // For SSR, also check on first render
  useEffect(() => {
    // Check if a theme is already stored
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme === 'dark' ? 'dark' : 'light')
    } else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no stored theme but system prefers dark mode
      setTheme('dark')
    }
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
