import { recordOfDuplicateEmails as fn } from "./example";
import { TestCases, runTestCases } from "./utils";

describe("#" + fn.name, () => {
  test("returns correct record", () => {
    const testCases: TestCases<typeof fn> = [
      [
        [
          [
            {
              email: "a@a.com",
              contacts: ["b@b.com", "c@c.com"],
            },
            {
              email: "b@b.com",
              contacts: ["c@c.com"],
            },
            {
              email: "d@d.com",
              contacts: ["z@z.com"],
            }
          ],
        ],
        {
          "c@c.com": ["a@a.com", "b@b.com"],
        },
      ],
      [
        [
          [
            {
              email: "a@a.com",
              contacts: [],
            },
            {
              email: "b@b.com",
              contacts: [],
            },
          ],
        ],
        {},
      ],
      [
        [
          [
            {
              email: "x@y.z",
              contacts: ["a@a.com", "b@b.com"],
            },
          ],
        ],
        {},
      ],
    ];

    runTestCases(fn, testCases);
  });
});
