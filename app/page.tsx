"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { SendHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f0e9e1] min-h-screen space-y-8">
      <div className="w-full h-20 flex justify-center items-center">
        <span className="font-bold text-lg">Ask Junior</span>
      </div>
      <div className="w-full md:w-[70%] h-[50%] flex flex-col justify-center items-center space-y-8">
        <span className="font-serif text-5xl md:text-6xl">
          Welcome, vignesh
        </span>
        <div className="w-[90%] md:w-[70%] md:h-14 h-24 border border-black rounded-lg flex md:flex-row flex-col items-center p-2 bg-white">
          <Input
            className="w-full md:w-[80%]"
            placeholder="Start your first message..."
          ></Input>
          <div className="flex items-center justify-end w-full md:justify-end gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f0e9e1]">
              <input
                type="file"
                accept="application/pdf"
                style={{ display: "none" }}
                className="file-input"
              />
              <Button
                onClick={() =>
                  document
                    .querySelector<HTMLInputElement>(".file-input")
                    ?.click()
                }
                variant="link"
              >
                <Paperclip />
              </Button>
            </div>
            <Button className="bg-[#a65a03] hover:bg-[#784102]">
              Start chat
              <SendHorizontal />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
