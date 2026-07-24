import MainDisplay from "@/Componnet/HomeDisplay/MainDisplay";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
     <MainDisplay></MainDisplay>
    </div>
  );
}
