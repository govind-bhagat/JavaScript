const name = "Govind"
for (let i = 0; i < 7; i++) {
    console.log(name);
}



//nested loop
for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}