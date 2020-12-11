var DappToken = artifacts.require("./contracts/DappToken.sol");

contract('DappToken', function(accounts){


it('sets the total supply upon deployement', function(){
	return DappToken.deployed().then(function(instance){
		tokenInstance = instance;
		return tokenInstance.totalSupply();
	}).then(function(totalSupply){
		assert.equal(totalSupply.toNumber(), 10000000, 'sets total supply to 1mil');
	});
});

})