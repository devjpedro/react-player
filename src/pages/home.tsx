import { Player } from "../components/player";
import { useAppSelector } from "../store";

export function HomePage() {
  const modules = useAppSelector((player) => player.player.course.modules);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex max-w-[1100px] w-full flex-col gap-6">
        <Player.Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Player.Video />
          </div>
          <aside className="max-w-80 absolute top-0 bottom-0 right-0 w-full border-l border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            {modules.map((module, index) => (
              <Player.Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
