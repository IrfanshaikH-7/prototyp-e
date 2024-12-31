"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { dashboard_img } from '@/assets'
import { ArrowLeftIcon } from 'lucide-react'

// Define the form schema
const formSchema = z.object({
  account: z.string().min(1, { message: "Please select an account" }),
  quantity: z.number().min(1, { message: "Quantity must be greater than 0" }),
  tradingSL: z.boolean().default(false),
  tradingSLTimeframe: z.string().optional(),
  atrStoploss: z.boolean().default(false),
  atrValue1: z.number().optional(),
  atrValue2: z.number().optional(),
  targetPoints: z.boolean().default(false),
  targetValue: z.number().optional(),
  stopLossPoints: z.boolean().default(false),
  stopLossValue: z.number().optional(),
  customTradingWays: z.boolean().default(false),
})

const noSpinnerStyle = "rounded-3xl shadow-md appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"

export default function DashboardForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
      quantity: 100,
      tradingSL: false,
      tradingSLTimeframe: "",
      atrStoploss: false,
      atrValue1: undefined,
      atrValue2: undefined,
      targetPoints: false,
      targetValue: undefined,
      stopLossPoints: false,
      stopLossValue: undefined,
      customTradingWays: false,
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  const dummyAccounts = ["Account 1", "Account 2", "Account 3"]
  const timeFrames = ["1m", "5m", "15m", "1h", "4h", "1d"]
  const formStyle = "flex items-center gap-4 bg-neutral-100 rounded-2xl py-2 px-2 lg:px-4"
  const inputStyle = "w-60 max-w-60 mr-auto rounded-3xl"
  return (
    <main className='w-full lg:max-w-[90%] mx-auto mt-40'>
        <div className='flex justify-start items-start'>
            <h1 className='text-6xl font-bold pb-8'>Dashboard</h1>
        </div>

        <section className='flex flex-col lg:flex-row gap-4'>
            <div className='lg:flex-1 rounded-3xl h-40 lg:h-auto overflow-hidden'>
                <img src={dashboard_img} alt="img" className='w-full h-full object-cover' />
            </div>

        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex-1 py-2">
        {/* Account Selection */}
        <FormField
          control={form.control}
          name="account"
          render={({ field }) => (
            <FormItem className={formStyle}>
              <FormLabel className="w-full">Select your Prop Account</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-60 rounded-3xl shadow-md">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyAccounts.map((account) => (
                      <SelectItem key={account} value={account}>
                        {account}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quantity Input */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className={formStyle}>
              <FormLabel className="w-full">Quantity to be traded</FormLabel>
              <FormControl>
                <Input type="number" {...field} className={`${inputStyle} ${noSpinnerStyle} max-w-[136px]`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Trading SL */}
        <FormField
          control={form.control}
          name="tradingSL"
          render={({ field }) => (
            <FormItem className={formStyle}>
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="w-full">Trading SL on previous candle's</FormLabel>
              <FormField
                control={form.control}
                name="tradingSLTimeframe"
                render={({ field: timeField }) => (
                  <FormControl>
                    <Select 
                      onValueChange={timeField.onChange} 
                      value={timeField.value}
                      className={inputStyle}
                      disabled={!field.value}
                    >
                      <SelectTrigger className={`${inputStyle} shadow-md`}>
                        <SelectValue placeholder="Time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeFrames.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ATR Stoploss */}
        <FormField
          control={form.control}
          name="atrStoploss"
          render={({ field }) => (
            <FormItem className={formStyle}>
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="flex-1">ATR stoploss</FormLabel>
              <FormField
                control={form.control}
                name="atrValue1"
                render={({ field: atrField1 }) => (
                  <FormControl>
                    <Input 
                      type="number" 
                      className={`w-20 ${noSpinnerStyle}`} 
                      {...atrField1}
                      disabled={!field.value}
                    />
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="atrValue2"
                render={({ field: atrField2 }) => (
                  <FormControl>
                    <Input 
                      type="number" 
                      className={`w-20 ${noSpinnerStyle}`} 
                      {...atrField2}
                      disabled={!field.value}
                    />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Target in points */}
        <FormField
          control={form.control}
          name="targetPoints"
          render={({ field }) => (
            <FormItem className={formStyle}>
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="flex-1">Target in points</FormLabel>
              <FormField
                control={form.control}
                name="targetValue"
                render={({ field: targetField }) => (
                  <FormControl>
                    <Input 
                      type="number" 
                      className={`w-20 ${noSpinnerStyle}`} 
                      placeholder="10" 
                      {...targetField}
                      disabled={!field.value}
                    />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Stoploss in points */}
        <FormField
          control={form.control}
          name="stopLossPoints"
          render={({ field }) => (
            <FormItem className={`${formStyle} `}>
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="flex-1">Stoploss in points</FormLabel>
              <FormField
                control={form.control}
                name="stopLossValue"
                render={({ field: stopLossField }) => (
                  <FormControl>
                    <Input 
                      type="number" 
                      className={`w-20 ${noSpinnerStyle}`} 
                      placeholder="5" 
                      {...stopLossField}
                      disabled={!field.value}
                    />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Custom Trading Ways Checkbox */}
        <FormField
          control={form.control}
          name="customTradingWays"
          render={({ field }) => (
            <FormItem className="flex items-center ml-[18px] gap-2">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="cursor-pointer  checked:bg-green-500 checked:text-green-500"
                />
              </FormControl>
              <p className="text-sm text-gray-600">
                We can create your own ways of writing, click here to know more
                <ArrowLeftIcon className='w-4 h-4 inline-block ml-2' />
              </p>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className='flex items-center gap-4'>
        <Button type="submit" className="w-1/2 mx-auto bg-black hover:bg-black/70 hover:-rotate-1 hover:scale-105 transition-all duration-300 translate-y-1 py-6 rounded-3xl ">
          Submit
        </Button>
        <div className='h-1.5 w-full bg-black rounded-full mt-1'/>
        </div>
       
      </form>
    </Form>

        </section>


  
    
    </main>
  )
}