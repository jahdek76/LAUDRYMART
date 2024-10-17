import React, { useState } from 'react'
import { Bell, Menu, X, Layout, Users, Package, DollarSign, BarChart2, Settings as SettingsIcon, LogOut, Loader, Calendar, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import AnimatedLogo from '@/components/AnimatedLogo'
import Dashboard from '@/components/Dashboard'
import Customers from '@/components/Customers'
import Orders from '@/components/Orders'
import Machines from '@/components/Machines'
import Inventory from '@/components/Inventory'
import Scheduling from '@/components/Scheduling'
import Finances from '@/components/Finances'
import Analytics from '@/components/Analytics'
import Settings from '@/components/Settings'

export default function LaundryManagementApp() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'customers':
        return <Customers />
      case 'orders':
        return <Orders />
      case 'machines':
        return <Machines />
      case 'inventory':
        return <Inventory />
      case 'scheduling':
        return <Scheduling />
      case 'finances':
        return <Finances />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  const NavContent = () => (
    <>
      <div className="mb-8">
        <AnimatedLogo />
      </div>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('dashboard')}>
          <Layout className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('customers')}>
          <Users className="mr-2 h-4 w-4" />
          Customers
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('orders')}>
          <Package className="mr-2 h-4 w-4" />
          Orders
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('machines')}>
          <Loader className="mr-2 h-4 w-4" />
          Machines
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('inventory')}>
          <Briefcase className="mr-2 h-4 w-4" />
          Inventory
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('scheduling')}>
          <Calendar className="mr-2 h-4 w-4" />
          Scheduling
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('finances')}>
          <DollarSign className="mr-2 h-4 w-4" />
          Finances
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('analytics')}>
          <BarChart2 className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentPage('settings')}>
          <SettingsIcon className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </>
  )

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white p-4 shadow-md">
        <NavContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open sidebar</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <NavContent />
                  </SheetContent>
                </Sheet>
                <div className="ml-4 md:ml-0">
                  <Input type="search" placeholder="Search..." className="w-full md:w-64" />
                </div>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">View notifications</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <SettingsIcon className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}