import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { SendHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col  items-center bg-[#f0e9e1] h-screen">
      <div className="w-full h-20 flex justify-center items-center">
        <span className="font-bold text-lg">Ask Junior</span>
      </div>
      <div className="w-[70%] h-[50%] flex flex-col justify-center items-center space-y-8">
        <span className="font-serif text-6xl">Welcome,vignesh</span>
        <div className="w-[70%] h-14 border border-black rounded-lg flex items-center gap-4 p-2 bg-white">
          <Input className="w-[70%]" placeholder="Start your first message..."></Input>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f0e9e1]">
            <Paperclip />
          </button>
          <Button className="bg-[#a65a03] hover:bg-[#784102]">
            Start chat
            <SendHorizontal />
          </Button>
        </div>
      </div>
    </div>
  );
}
