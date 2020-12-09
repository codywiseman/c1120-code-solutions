/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance < 1 || isNaN(balance)) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
}

Bank.prototype.getAccount = function(number) {
  var account = null;
  for(var i = 0; i < this.accounts.length; i++) {
    if(this.accounts[i].number === number) {
      account = this.accounts[i];
      return account;
    }
  } return account;
}

Bank.prototype.getTotalAssests = function() {
  var totalAssets = 0;
  for(var i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance()
  }
  return totalAssets;
}
