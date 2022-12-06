// get, set

class A {
    _name = 'no name';      // _를 쓰는 경우 내부에서만 씀, getter, setter를 쓰면 public하게 접근

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark';
console.log(a);
console.log(a.name);        // getter
console.log(a._name);       // setter

// readonly

class B {
    _name = 'no name';      // _를 쓰는 경우 내부에서만 씀, getter, setter를 쓰면 public하게 접근

    get name() {
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'Mark';
console.log(b);
