import { Baby } from "lucide-react";

import { ChartAreaInteractive } from "@/components/chart-area-interactive"

import { ChartBarInteractive } from "@/components/chart-bar-interactive"

import { ChartRadialLabel } from "@/components/chart-radial-label"

import { CardDemo } from "@/components/CardDemo"

import { ScrollAreaDemo } from "@/components/ScrollAreaDemo"

import { ScrollArea } from "@/components/ui/scroll-area"

// import { ScrollAreaHorizontalDemo } from "@/components/ScrollAreaHorizontalDemo"



import { CalendarDemo } from "@/components/CalendarDemo"







export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg: col-span-2"> <ChartAreaInteractive /></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg: col-span-2"> <ChartBarInteractive /></div>
      <div className="bg-primary-foreground p-4 rounded-lg "> <ChartRadialLabel /> </div>
      <div className="bg-primary-foreground p-4 rounded-lg "> <CardDemo /></div>
      <div className="bg-primary-foreground p-4 rounded-lg "> <ScrollAreaDemo /> </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg: "><ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg: "> </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg: "><CalendarDemo /></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg: ">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg: ">Test</div>

    </div>




  );
}
