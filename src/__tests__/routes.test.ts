import supertest from "supertest";
import app from "../server";
import request from "supertest";


describe("GET /dummy", () => {
    it("should send back some data", async () => {
        const res = await supertest(app)
            .get('/dummy')

        expect(res.body.message).toBe('Hello')
    })
})
