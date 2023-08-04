"use client"

import { LeftSide } from "@/components/left-side"
import { RightSide } from "@/components/right-side"

const Page = ()=> {
  return(
     <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
       <LeftSide/>
       <RightSide/>
     </div>
  )
}

export default Page