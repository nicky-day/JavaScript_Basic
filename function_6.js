const hello1 = () => {
    console.log('hello1');
}

const hello2 = name => {
    console.log('hello2', name);
}

const hello3 = (name, age) => {
    console.log('hello3', name, age);
}

const hello4 = name => {
    return `hello4 ${name}`;
}

const hello5 = name => `hello5 ${name}`;