/*

  for the given input:

  ```ts
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
    },
  ];
  ```

  expected output is:

  ```ts
  {
    "c@c.com": ["a@a.com", "b@b.com"],
  }
  ```
*/

type Input = { email: string; contacts: string[] }[];
type Output = { [email: string]: string[] };

export const recordOfDuplicateEmails = (data: Input): Output => {
  return {};
};
