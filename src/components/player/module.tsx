import { ChevronDown } from "lucide-react";
import { Lesson } from "./lesson";

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

const aulas = [
  {
    id: "1",
    title: "Fundamentos do Redux",
    duration: "09:15",
  },
  {
    id: "2",
    title: "Redux Toolkit",
    duration: "12:30",
  },
  {
    id: "3",
    title: "Gerenciamento de Estado Global",
    duration: "15:45",
  },
];

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 cursor-pointer">
        <span className="flex size-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="size-5 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        {aulas.map((aula) => (
          <Lesson title={aula.title} duration={aula.duration} />
        ))}
      </nav>
    </div>
  );
}
