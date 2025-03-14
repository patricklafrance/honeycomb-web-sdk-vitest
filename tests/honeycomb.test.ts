import { registerHoneycombInstrumentation } from "@workleap/honeycomb";
import { expect, test } from "vitest";

test("honeycomb", () => {
    const result = registerHoneycombInstrumentation("toto", [/.+/g,]);

    expect(result).toBeDefined();
});
