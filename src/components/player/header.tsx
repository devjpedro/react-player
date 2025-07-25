import { MessageCircle } from "lucide-react";
import { useCurrentLesson, useStore } from "../../store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isLoading = useStore(state => state.isLoading)

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{isLoading ? "Buscando aula..." : currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          {isLoading ? "Aguarde enquanto buscamos os dados da aula" : `Módulo "${currentModule?.title}"`}
        </span>
      </div>

      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white cursor-pointer hover:bg-violet-600 transition-colors">
        <MessageCircle className="size-4" />
        Deixar feedback
      </button>
    </div>
  );
}
