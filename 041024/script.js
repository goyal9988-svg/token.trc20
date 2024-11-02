const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
const tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io"
});

document.getElementById("mintButton").onclick = async () => {
    const account = tronWeb.defaultAddress.base58;
    const contract = await tronWeb.contract().at(CONTRACT_ADDRESS);
    await contract.mint(account, 1000).send({from: account});
    alert("Minted 1000 tokens to your account");
};

document.getElementById("balanceButton").onclick = async () => {
    const account = tronWeb.defaultAddress.base58;
    const contract = await tronWeb.contract().at(CONTRACT_ADDRESS);
    const balance = await contract.balanceOf(account).call();
    document.getElementById("balance").innerText = `Balance: ${balance}`;
};
