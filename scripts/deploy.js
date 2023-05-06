const hre = require("hardhat");

async function main() {
  const Auctionss = await hre.ethers.getContractFactory("Auctionss");
  const auction = await Auctionss.deploy("SohailAuction");

  await auction.deployed();

  console.log("Auction deployed to:", auction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
