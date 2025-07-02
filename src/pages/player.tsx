import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";

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

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex max-w-[1100px] w-full flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">
              Módulo "Desvendando o Redux"
            </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white cursor-pointer hover:bg-violet-600 transition-colors">
            <MessageCircle className="size-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                src="https://www.youtube.com/watch?v=unfHrB2sGGM&t=24s&ab_channel=Rocketseat"
              />
            </div>
          </div>
          <aside className="max-w-80 w-full border-l border-zinc-800 bg-zinc-900">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 cursor-pointer">
                <span className="flex size-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </span>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="size-5 ml-auto text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                {aulas.map((aula) => (
                  <>
                    <button
                      id={aula.id}
                      className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300 cursor-pointer transition-colors"
                    >
                      <Video className="size-4 text-zinc-500" />
                      <span className="truncate">{aula.title}</span>
                      <span className="ml-auto font-mono text-xs text-zinc-500 trun">
                        {aula.duration}
                      </span>
                    </button>
                  </>
                ))}
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
