import { Player } from "../components/player";

export function HomePage() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex max-w-[1100px] w-full flex-col gap-6">
        <Player.Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Player.Video />
          </div>
          <aside className="max-w-80 absolute top-0 bottom-0 right-0 w-full border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            <Player.Module
              moduleIndex={0}
              title="Fundamentos do Redux"
              amountOfLessons={12}
            />
            <Player.Module
              moduleIndex={1}
              title="Fundamentos do Redux"
              amountOfLessons={12}
            />
            <Player.Module
              moduleIndex={2}
              title="Fundamentos do Redux"
              amountOfLessons={12}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
