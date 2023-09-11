describe("user handler", () => {
    it("should do a thing", async () => {
        expect("something").toBe("something");
    });
});


// // DB is not being mocked
// describe("POST /user", function () {
//     it("responds with json", async () => {
//         const res = await request(app)
//             .post("/user")
//             .send({ username: "mohit3", password: "mohit3" })
//             .set("Accept", "application/json")

//         expect(res.headers["Content-Type"]).toMatch(/json/);
//         expect(res.status).toEqual(200);
//     });
// });