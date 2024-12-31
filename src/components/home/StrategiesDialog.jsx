import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useState } from "react"

export default function StrategiesDialog({ isOpen, close }) {
  const [strategies, setStrategies] = useState([
    { id: 1, name: "Growth Strategy" },
    { id: 2, name: "Value Investment" },
    { id: 3, name: "Dividend Focus" },
    { id: 4, name: "Momentum Trading" },
  ])

  const handleAction = (action, strategyId) => {
    switch (action) {
      case 'view':
        console.log('Viewing strategy:', strategyId)
        break
      case 'modify':
        console.log('Modifying strategy:', strategyId)
        break
      case 'delete':
        setStrategies(strategies.filter(strategy => strategy.id !== strategyId))
        break
      default:
        break
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="w-[96%] rounded-xl h-[55vh] items-start md:min-h-[95vh] sm:max-w-[95%]">
    
       
      </DialogContent>
    </Dialog>
  )
} 