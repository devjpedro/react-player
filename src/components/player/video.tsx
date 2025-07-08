import ReactPlayer from "react-player";
import { next, useCurrentLesson, useCurrentLessonIndex } from "../../store/slices/player";
import { useAppDispatch, useAppSelector } from "../../store";
import { Loader } from "lucide-react";

export function Video() {
  const dispatch = useAppDispatch();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  const handlePlayNext = () => {
    dispatch(next());
  };

  console.log({isCourseLoading})

  const { currentLesson } = useCurrentLesson()
  const { currentLessonIndex, currentModuleIndex } = useCurrentLessonIndex();

  const isFirstVideo = currentLessonIndex === 0 && currentModuleIndex === 0;

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="size-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing={!isFirstVideo}
          onEnded={handlePlayNext}
          src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
