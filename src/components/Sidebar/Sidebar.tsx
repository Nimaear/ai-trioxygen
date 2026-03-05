import { Link } from '@tanstack/react-router'
import { ChevronDown, ChevronsUpDown, Compass, LayoutTemplate, MousePointerClick, Palette, PanelTop, Search, SlidersHorizontal, Type } from 'lucide-react'
import { ThemeToggle } from '@components/ThemeToggle/ThemeToggle'
import {
  brand,
  brandMark,
  brandMarkInner,
  brandName,
  navItem,
  navItemActive,
  navItemIcon,
  sectionLabel,
  sidebar,
  sidebarDivider,
  sidebarFooter,
} from './sidebar.css'

const DOCS = [
  { to: '/tokens', label: 'Tokens', icon: <Palette size={14} /> },
  { to: '/design', label: 'Design', icon: <Compass size={14} /> },
] as const

const COMPONENTS = [
  { to: '/button', label: 'Button', icon: <MousePointerClick size={14} /> },
  { to: '/input', label: 'Text Field', icon: <Type size={14} /> },
  { to: '/select', label: 'Select', icon: <ChevronsUpDown size={14} /> },
  { to: '/combobox', label: 'Combobox', icon: <Search size={14} /> },
  { to: '/card', label: 'Card', icon: <LayoutTemplate size={14} /> },
  { to: '/generic-content', label: 'Generic Content', icon: <SlidersHorizontal size={14} /> },
  { to: '/modal', label: 'Modal', icon: <PanelTop size={14} /> },
  { to: '/accordion', label: 'Accordion', icon: <ChevronDown size={14} /> },
] as const

export function Sidebar() {
  return (
    <aside className={sidebar}>
      {/* Brand */}
      <Link to="/" className={brand}>
        <span className={brandMark}>
          <span className={brandMarkInner} />
        </span>
        <span className={brandName}>Trioxygen</span>
      </Link>

      <div className={sidebarDivider} />

      {/* Documentation section */}
      <div className={sectionLabel}>Documentation</div>

      {DOCS.map(({ to, label, icon }) => (
        <Link
          key={to}
          to={to}
          className={navItem}
          activeProps={{ className: `${navItem} ${navItemActive}` }}
        >
          <span className={navItemIcon}>{icon}</span>
          {label}
        </Link>
      ))}

      <div className={sidebarDivider} />

      {/* Components section */}
      <div className={sectionLabel}>Components</div>

      {COMPONENTS.map(({ to, label, icon }) => (
        <Link
          key={to}
          to={to}
          className={navItem}
          activeProps={{ className: `${navItem} ${navItemActive}` }}
        >
          <span className={navItemIcon}>{icon}</span>
          {label}
        </Link>
      ))}

      <div className={sidebarFooter}>
        <ThemeToggle />
      </div>
    </aside>
  )
}
