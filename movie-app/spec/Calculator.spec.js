describe('Calculator', function () {

    it('should add two numbers', function () {
        expect( add(1, 2) ).toBe(3);
    });

    it('should subract two numbers', function () {
        expect( subtract(4, 5) ).toBe(-1);
    });
});
