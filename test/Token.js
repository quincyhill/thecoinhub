const { expect } = require('chai')
const { ethers } = require('hardhat')

// `describe` is our mocha function and keeps thing organized for testing
describe('Token Contract', function () {
  // Now time to implment a full coverage test

  // The 4 functions mocha uses to hook into test runner
  // are `before`, `beforeEach`, `after`, `afterEach`
  let Token
  let customToken
  let owner
  let addr1
  let addr2
  let addrs

  // Common patters i sto declare some vars and assign them in the `before` and `beforeEach` callbacks.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory('Token')

    // bruh what is this syntax???? without it, it causes some typescript error???
    ;[owner, addr1, addr2, ...addrs] = await ethers.getSigners()

    customToken = await Token.deploy()
  })

  // One can nest `describe` calls to create subsections
  describe('Deployment', function () {
    // `it` is another Mocha function, this is the one used to define the tests.
    // it recieves the test name. and a callback function

    // If the callback function is async, Mocha will await it
    it('Should set the right owner', async function () {
      // Expect revieve a value and wraps it in an Assertion object.
      // These objects have alot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be equal
      // to our Signer's owner.
      expect(await customToken.owner()).to.equal(owner.address)
    })

    it('Should assign the total supply of tokens to the owner', async function () {
      const ownerBalance = await customToken.balanceOf(owner.address)
      expect(await customToken.totalSupply()).to.equal(ownerBalance)
    })
  })

  describe('Transactions', function () {
    it('Should transfer tokens between accounts', async function () {
      // Transfer 50 tokens from owner to addr1
      await customToken.transfer(addr1.address, 50)
      const addr1Balance = await customToken.balanceOf(addr1.address)
      expect(addr1Balance).to.equal(50)

      // Transfer 50 tokens from addr1 to addr2
      await customToken.connect(addr1).transfer(addr2.address, 50)
      const addr2Balance = await customToken.balanceOf(addr2.address)
      expect(addr2Balance).to.equal(50)
    })

    it('Should fail if sender doesn’t have enough tokens', async function () {
      const initialOwnerBalance = await customToken.balanceOf(owner.address)

      // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        customToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith('Not enough tokens')

      // Owner balance shouldn't have changed.
      expect(await customToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      )
    })

    it('Should update balances after transfers', async function () {
      // stuff
      const initialOwnerBalance = await customToken.balanceOf(owner.address)

      // Transfer 100 tokens from owner to addr1
      await customToken.transfer(addr1.address, 100)

      // Transfer another 50 tokens from owner to addr2
      await customToken.transfer(addr2.address, 50)

      // Check balances
      const finalOwnerBalance = await customToken.balanceOf(owner.address)
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150))

      const addr1Balance = await customToken.balanceOf(addr1.address)
      expect(addr1Balance).to.equal(100)

      const addr2Balance = await customToken.balanceOf(addr2.address)
      expect(addr2Balance).to.equal(50)
    })
  })
})
