const AuctionHouse = artifacts.require("./AuctionHouse.sol");
const GeneratorRegistry = artifacts.require("./GeneratorRegistry.sol");
const SoulToken = artifacts.require("./SoulToken.sol");
const ArtPieceToken = artifacts.require("./ArtPieceToken.sol");

const Artonomous = artifacts.require("./Artonomous.sol");

module.exports = async function(deployer) {
  const soulToken = await SoulToken.deployed();
  const artPieceToken = await ArtPieceToken.deployed();
  const auctionHouse = await AuctionHouse.deployed();
  const generatorRegistry = await GeneratorRegistry.deployed();

  deployer.deploy(Artonomous, auctionHouse.address, generatorRegistry.address, artPieceToken.address, soulToken.address);
};
