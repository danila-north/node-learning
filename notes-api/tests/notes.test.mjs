import { test } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import app from "../app.mjs";

const KEY = process.env.API_KEY;

test("GET /notes без ключа -> 401", async () => {
  const res = await request(app).get("/notes");
  assert.equal(res.status, 401);
});

test("GET /notes с ключом -> 200 и массив", async () => {
  const res = await request(app).get("/notes").set("x-api-key", KEY);
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(res.body));
});

test("GET /notes/999 с ключом -> 404", async () => {
  const res = await request(app).get("/notes/999").set("x-api-key", KEY)
  assert.equal(res.status, 404);
})

test("POST /notes с ключом и пустым текстом -> 400", async () => {
    const res = await request(app).post("/notes").set("x-api-key", KEY).send({ text: "  "})
    assert.equal(res.status, 400)
})

test("PUT /notes/999 c ключом и нормальным текстом -> 404", async () => {
    const res = await request(app).put("/notes/999").set("x-api-key", KEY).send({ text: "что-то" })
    assert.equal(res.status, 404)
})

test("DELETE /notes/999 с ключом -> 404", async () => {
    const res = await request(app).delete("/notes/999").set("x-api-key", KEY)
    assert.equal(res.status, 404)
})

test("PUT /notes/2 с ключом и пустым текстом -> 400", async () => {
    const res = await request(app).put("/notes/2").set("x-api-key", KEY).send({ text: "  "})
    assert.equal(res.status, 400)
})