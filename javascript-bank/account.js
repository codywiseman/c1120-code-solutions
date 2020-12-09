/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (newDeposit.amount < 1 || isNaN(amount)) {
    return false;
  } else {
    this.transactions.push(newDeposit);
    return true;
  }
}

Account.prototype.withdraw = function(amount) {
  var newWithdraw = new Transaction('withdraw', amount);
  if (newWithdraw.amount < 1 || isNaN(amount)) {
    return false;
  } else {
    this.transactions.push(newWithdraw)
    return true;
  }
}


Account.prototype.getBalance = function() {
  if (this.transactions.length === 0) {
    return 0;
  }
  else {
    var balance = 0;
    for(var i = 0; i < this.transactions.length; i++) {
      if(this.transactions[i]['type'] === 'deposit') {
        balance += this.transactions[i]['amount'];
      } else if (this.transactions[i]['type'] === 'withdraw') {
        balance -= this.transactions[i]['amount'];
      }
    } return balance;
  }
}
