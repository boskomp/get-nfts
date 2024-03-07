const fetch = require("node-fetch");

const getNFT = (address, contractAddress, blockchain) =>
  new Promise((resolve, reject) => {
    fetch(
      "https://rpc.ankr.com/multichain/79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01/?ankr_getNFTsByOwner=",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "ankr_getNFTsByOwner",
          params: {
            walletAddress: address,
            filter: [{ [contractAddress]: [] }],
            blockchain: [`${blockchain}`],
          },
          id: 1,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const assets = res.result.assets;
        resolve(assets);
      })
      .catch((err) => reject(err));
  });

module.exports = getNFT;
