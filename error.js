setTimeout(() => {
  throw new Error("OOps");
}, 3000);

// TODO

process.on("uncaughtException", () => {
  //  node errors which no one is handling
});

process.on("unhandledRejection", () => {
  //  node async errors
});
