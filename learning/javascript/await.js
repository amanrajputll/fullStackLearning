function boilwater() {
  return new Promise((resolve) => {
    console.log("Water is boling.....");
    setTimeout(() => {
      resolve("boiled water is ready");
    }, 2000);
  });
}
function addMaggi() {
  return new Promise((resolve) => {
    console.log(" add maggie to water bolied....");
    setTimeout(() => {
      console.log("maggie add into bolied water");
      resolve("maggie added");
    }, 3000);
  });
}
function maggieready() {
  return new Promise((resolve) => {
    console.log(" maggie is ready");
    setTimeout(() => {
      console.log("maggie is cooked...");
      resolve("ready maggie");
    }, 2000);
  });
}

async function cookmaggie() {
  const step1 = await boilwater();
  console.log(step1);
  const step2 = await addMaggi();
  console.log(step2);
  const step3 = await maggieready();
  console.log(step3);
}
cookmaggie()