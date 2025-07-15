import ReactPlayer from "react-player";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../../zustand-store";

export function Video() {
  const { isLoading, currentLessonIndex, currentModuleIndex, next } = useStore()

  const { currentLesson } = useCurrentLesson()

  const isFirstVideo = currentLessonIndex === 0 && currentModuleIndex === 0;

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="size-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing={!isFirstVideo}
          onEnded={next}
          src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
