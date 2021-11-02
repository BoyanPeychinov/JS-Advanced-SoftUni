function gcd(a, b) {
    while (b != 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a
}

gcd(15, 5)