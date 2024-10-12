import React, { useState } from 'react'
import { Bell, Menu, Layout, Users, Package, DollarSign, BarChart2, Settings, LogOut, Loader, Calendar, Briefcase } from 'lucide-react'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"
import AnimatedLogo from './components/AnimatedLogo'
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import Orders from './components/Orders'
import Machines from './components/Machines'
import Inventory from './components/Inventory'
import Scheduling from './components/Scheduling'
import Finances from './components/Finances'
import Analytics from './components/Analytics'
import Settings from './components/Settings'

// ... rest of the component remains the same