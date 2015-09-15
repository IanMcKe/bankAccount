describe('BankAccount', function() {
    it("creates a new BankAccount with the given specifications", function() {
        var testBankAccount = new BankAccount("Julio", 100);
        expect(testBankAccount.userName).to.equal("Julio");
        expect(testBankAccount.balance).to.equal(100);
    });

    it("displays a warning if the balance is less than $25", function() {
        var testBankAccount = new BankAccount("Julio", 10);
        expect(testBankAccount.userName).to.equal("Julio");
        expect(testBankAccount.balance).to.equal("This account requires at least $25 deposited. Please make another account.");
    });

    it("displays a warning if the balance is less than 0", function() {
        var testBankAccount = new BankAccount("Julio", -1);
        expect(testBankAccount.userName).to.equal("Julio");
        expect(testBankAccount.balance).to.equal("You're in debt! Uh oh. Please make another account when you have money.");
    });

    it("adds amount deposited to the balance of the BankAccount", function() {
        var testBankAccount = new BankAccount("Julio", 100);
        testBankAccount.deposit(15)
        expect(testBankAccount.userName).to.equal("Julio");
        expect(testBankAccount.balance).to.equal(115);
    });
});
