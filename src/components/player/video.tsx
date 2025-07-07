import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson, useCurrentLessonIndex } from "../../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const handlePlayNext = () => {
    dispatch(next());
  };

  const { currentLesson } = useCurrentLesson()
  const { currentLessonIndex, currentModuleIndex } = useCurrentLessonIndex();

  const isFirstVideo = currentLessonIndex === 0 && currentModuleIndex === 0;

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={!isFirstVideo}
        onEnded={handlePlayNext}
        src={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}
