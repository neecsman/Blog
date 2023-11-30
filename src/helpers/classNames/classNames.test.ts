import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with mode", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [])
    ).toBe("someClass hovered scrollable");
  });

  test("with mode", () => {
    expect(
      classNames("someClass", { hovered: false, scrollable: true }, [])
    ).toBe("someClass scrollable");
  });

  test("with mode", () => {
    expect(
      classNames("someClass", { hovered: undefined, scrollable: true }, [])
    ).toBe("someClass scrollable");
  });

  test("with additional class", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered scrollable");
  });
});
