import { test, expect } from "@playwright/test";

test("API Get Request", async ({ request }) => {
  const response = await request.get("https://fakestoreapi.com/users/11");
  expect(response.status()).toBe(200);
  const text = await response.text();
  //expect(text).toContain("johnd");
  console.log(await response.json());
});

test("API Post Request", async ({ request }) => {
  const response = await request.post("https://fakestoreapi.com/users", {
    data: {
      id: 0,
      username: "shyam",
      email: "shyam@gmail.com",
      password: "sh1234",
    },
  });

  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("shyam");
  console.log(await response.json());
});

test("API Put Request", async ({ request }) => {
  const response = await request.put("https://fakestoreapi.com/users/11", {
    data: {
      name: "Raghav",
    },
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Raghav");
  console.log(await response.json());
});

test("API Delete Request", async ({ request }) => {
  const response = await request.delete("https://fakestoreapi.com/users/11");
  expect(response.status()).toBe(200);
});
