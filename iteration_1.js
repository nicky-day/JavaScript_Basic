for (let i = 0; i < 5; i++) {
    console.log("안녕하세요", i)
}

for (let i = 0, j = 5; i < 5; i++) {
    console.log("안녕하세요", i, j)
}

for (let i = 0, j = 2; i < 5; i++, j = j * j) {
    console.log("안녕하세요", i, j)
}

for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i > 2) {
        break;
    }
    console.log("안녕하세요", i);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i < 2) {
        continue;
    }
    console.log("안녕하세요", i);
}