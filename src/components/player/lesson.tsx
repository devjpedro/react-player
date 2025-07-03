import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  onPlay: () => void
}

export function Lesson({ title, duration, onPlay }: LessonProps) {
  return (
    <button
      id={title}
      className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300 cursor-pointer transition-colors"
      onClick={onPlay}
    >
      <Video className="size-4 text-zinc-500" />
      <span className="truncate">{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500 trun">
        {duration}
      </span>
    </button>
  );
}
