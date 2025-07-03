import ReactPlayer from "react-player";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { next } from "../../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const handlePlayNext = () => {
    dispatch(next());
  };

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return currentLesson;
  });

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    return {
      currentLessonIndex,
      currentModuleIndex,
    };
  });

  const isFirstVideo = currentLessonIndex === 0 && currentModuleIndex === 0;

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={!isFirstVideo}
        onEnded={handlePlayNext}
        src={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  );
}
