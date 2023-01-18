import { getClass } from "./functions";

describe("getClass Function", () => {
  test("should return default", () => {
    //Start
    let mode: "light" | "dark" = "light";
    let normalClass: string = "highlight";

    //End
    let finalClass = "highlight";

    expect(getClass(mode, normalClass)).toEqual(finalClass);
  });
  test("should return dark-mode", () => {
    //Start
    let mode: "light" | "dark" = "dark";
    let normalClass: string = "highlight";

    //End
    let finalClass = "highlight dark-mode";

    expect(getClass(mode, normalClass)).toEqual(finalClass);
  });
});
