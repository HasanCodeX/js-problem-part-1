function inchFeet(inch) {
    if (typeof inch !== 'number' || inch < 0) {
        return 'Please provide a valid positive number';
    }
    const feet = inch / 12;
    return feet;
}

console.log(inchFeet(75));

const shuvoHeight = inchFeet(75)