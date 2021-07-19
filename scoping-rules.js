function fn1(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
fn1(true); // returns '10'
fn1(false); // returns 'undefined'
