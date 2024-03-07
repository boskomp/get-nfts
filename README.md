## Installation

You can install this package via npm:

```
npm install get-nfts
```

## Usage

```
const getNFT = require('get-nfts');

(async () => {
    const address = ""; // Your address
    const contractAddress = ""; // Contract address
    const blockchain = ""; // Blockchain, example: polygon
    try {
      const check = await getNFT(address, contractAddress, blockchain);
      if (check.length < 1) {
        console.log(`You don't have NFT`);
      } else {
        console.log(check);
      }
    } catch (error) {
      console.log(error);
    }
})();
```
