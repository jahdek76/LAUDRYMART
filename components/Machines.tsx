import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { machines } from '../sampleData'

export default function Machines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Machine Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Efficiency</TableHead>
              <TableHead>Last Maintenance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {machines.map((machine) => (
              <TableRow key={machine.id}>
                <TableCell>{machine.name}</TableCell>
                <TableCell>
                  <Badge variant={machine.status === 'Running' ? 'secondary' : 'default'}>
                    {machine.status}
                  </Badge>
                </TableCell>
                <TableCell>{machine.efficiency}%</TableCell>
                <TableCell>{machine.lastMaintenance.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}