This is to help test the RPC URLs on the rollup instance machines

How to use it:

- `yarn run http:simple https://rpc-l2.<your_slug>.snapchain.dev`: simple RPC test (should work for both L1 and L2)
- `yarn run deploy:token <network>`: deploy token test. `<network>` is defined in hardhat.config.ts. it can be either `l1` or `l2`
