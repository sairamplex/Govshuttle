
const {ethers} = require("hardhat");


async function main() {
  
  const contractAddress = "0x648a5Aa0C4FbF2C1CF5a3B432c2766EeaF8E402d";

  const contract = await ethers.getContractAt("ProposalStore", contractAddress);

  const result = await contract.QueryProp(1);
  console.log("Result:", result.toString());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
