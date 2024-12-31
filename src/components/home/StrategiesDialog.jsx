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
      <section className="">
        <h2 className="text-2xl font-bold">List of Strategies</h2>
        <div className="border overflow-hidden rounded-xl  mt-4">
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] border-r">Sr No.</TableHead>
              <TableHead className="border-r">Name</TableHead>
              <TableHead className=" border-r">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {strategies.map((strategy) => (
              <TableRow key={strategy.id}>
                <TableCell className="font-medium border-r py-1">{strategy.id}</TableCell>
                <TableCell className="border-r py-1">{strategy.name}</TableCell>
                <TableCell className="text-right py-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="h-8 w-full p-0">
                        <MoreHorizontal className="h-4 w-4 " />

                        
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleAction('view', strategy.id)}
                      >
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction('modify', strategy.id)}
                      >
                        Modify
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction('delete', strategy.id)}
                        className="text-red-600"
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
        </section>
       
      </DialogContent>
    </Dialog>
  )
} 