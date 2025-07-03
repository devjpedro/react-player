import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer disabled:cursor-default transition-colors data-[active=true]:text-emerald-400"
    >
      {isCurrent ? (
        <PlayCircle className="size-4 text-emerald-400" />
      ) : (
        <Video className="size-4 text-zinc-500" />
      )}
      <span className="truncate">{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500 trun">
        {duration}
      </span>
    </button>
  );
}
