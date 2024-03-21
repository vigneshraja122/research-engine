"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, SendHorizontal } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";

const LandingInput = () => {
  const [text, setText] = useState("");
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="w-[90%] md:w-[70%] md:h-14 h-24 border border-black rounded-lg  p-2 bg-white">
      <form method="GET" action={"/researchpad"} ref={formRef} className="w-full h-full flex md:flex-row flex-col items-center">
        <Input
          className="w-full md:w-[80%]"
          placeholder="Start your first message..."
          name="q"
          id="userInput"
          typeof="text"
          onChange={handleInputChange}
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
                document.querySelector<HTMLInputElement>(".file-input")?.click()
              }
              variant="link"
            >
              <Paperclip />
            </Button>
          </div>
          <Button
            className="bg-[#a65a03] hover:bg-[#784102]"
            type="submit"
            ref={buttonRef}
          >
            Start chat
            <SendHorizontal />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LandingInput;
