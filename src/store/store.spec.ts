import { beforeEach, describe, expect, it } from "vitest";
import { useStore as store } from ".";

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
        {
          id: "w-DW4DhDfcw",
          title: "Estilização do Post",
          duration: "10:05",
        },
      ],
    },
    {
      id: 2,
      title: "Estrutura da aplicação",
      lessons: [
        {
          id: "gE48FQXRZ_o",
          title: "Componente: Comment",
          duration: "13:45",
        },
        { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
      ],
    },
  ],
};

const initialState = store.getState();

describe("zustand store", () => {
  beforeEach(() => {
    store.setState(initialState);
  });

  it("should be able to play", () => {
    const { play } = store.getState();

    play({
      lessonIndex: 1,
      moduleIndex: 2,
    });

    const { currentLessonIndex, currentModuleIndex } = store.getState();

    expect(currentModuleIndex).toEqual(2);
    expect(currentLessonIndex).toEqual(1);
  });

  it("should be able to play next video automatically", () => {
    store.setState({ course });

    const { next } = store.getState();

    next();

    const { currentLessonIndex, currentModuleIndex } = store.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    store.setState({ course });

    const { next } = store.getState();

    store.setState({
      currentLessonIndex: 1,
    });

    next();

    const { currentLessonIndex, currentModuleIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(0);
  });

  it("should not update the current module and lesson index if there is no next lesson available", () => {
    store.setState({ course });

    const { next } = store.getState();

    store.setState({
      currentLessonIndex: 1,
      currentModuleIndex: 1,
    });

    next();

    const { currentLessonIndex, currentModuleIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(1);
  });
});
