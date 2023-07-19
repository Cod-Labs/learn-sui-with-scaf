///
//
// To run, create a `.env` file in the main repository direcotry with the
// following variable:
//
// - SEED: the seed-phrase for the token manager account
// - SCHEMA: the key schema, either 'Ed25519Keypair', 'Secp256k1Keypair', or 'Secp256r1Keypair'
//

const {
    getAccount,
    showOwnership,
    buildAndPublishPackage,
    Network,
    getPackagesPathRelativeToDir,
} = require('@codlabs/scaf');

async function main() {
    // Setup a local network for this project only
    const net = Network.getNetwork();

    // comment out net.resetNetwork() to preserve the state of the network across runs
    net.resetNetwork();
    net.startNetwork();

    await net.waitUntilNetworkRuns();

    const deployerAccount = getAccount(process.env.SEED, process.env.SCHEMA);
    console.log('Account Address:', deployerAccount.address);

    /// Step 1: Publish the package
    const packagesDir = getPackagesPathRelativeToDir(__dirname);
    const publishedPackage = await buildAndPublishPackage(deployerAccount, 'lesson_1', packagesDir);
    console.log('> Package ID:', publishedPackage.packageId);

    /// Step 2: Show Object Ownership
    await showOwnership(deployerAccount.address);

    console.log(
        `> Explore transaction at: https://suiexplorer.com/address/${deployerAccount.address}?network=local`,
    );
    console.log('> Press Ctr+C to exit and stop the local Sui network');

    // Commented out so the Node process doesn't exit; allows inspecting the
    // network through the Sui explorer
    // net.stopNetwork();
}

main().catch((error) => console.error(error));
