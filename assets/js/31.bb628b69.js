(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{246:function(t,e,a){"use strict";a.r(e);var o=a(17),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cold-wasabi-hardware-wallet-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cold-wasabi-hardware-wallet-mode"}},[t._v("#")]),t._v(" Cold-Wasabi Hardware Wallet Mode")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#using-hardware-wallet-step-by-step"}},[t._v("Using hardware wallet step-by-step")])]),a("li",[a("a",{attrs:{href:"#what-is-cold-storage"}},[t._v("What is Cold Storage")])]),a("li",[a("a",{attrs:{href:"#hardware-wallet-with-wasabi"}},[t._v("Hardware Wallet with Wasabi")]),a("ul",[a("li",[a("a",{attrs:{href:"#connecting-via-usb"}},[t._v("Connecting via USB")])]),a("li",[a("a",{attrs:{href:"#connecting-coldcard-via-sd-card"}},[t._v("Connecting Coldcard via SD card")])])])]),a("li",[a("a",{attrs:{href:"#cold-wasabi-protocol"}},[t._v("Cold-Wasabi protocol")])]),a("li",[a("a",{attrs:{href:"#gui-tutorial"}},[t._v("GUI tutorial")]),a("ul",[a("li",[a("a",{attrs:{href:"#coinjoin-on-the-hot-wasabi"}},[t._v("CoinJoin on the hot Wasabi")])]),a("li",[a("a",{attrs:{href:"#setup-your-cold-wasabi"}},[t._v("Setup your cold Wasabi")])]),a("li",[a("a",{attrs:{href:"#send-bitcoins-from-hot-to-cold-wasabi"}},[t._v("Send bitcoins from hot to cold Wasabi")])]),a("li",[a("a",{attrs:{href:"#send-bitcoins-from-cold-wasabi"}},[t._v("Send bitcoins from cold Wasabi")])])])]),a("li",[a("a",{attrs:{href:"#daemon-tutorial"}},[t._v("Daemon tutorial")]),a("ul",[a("li",[a("a",{attrs:{href:"#mix-to-another-wallet"}},[t._v("Mix to Another Wallet")])])])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"using-hardware-wallet-step-by-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-hardware-wallet-step-by-step"}},[t._v("#")]),t._v(" Using hardware wallet step-by-step")]),t._v(" "),a("ol",[a("li",[t._v("Start your Wasabi Wallet and connect your hardware wallet with USB.\nAlternatively, you can import a Coldcard skeleton file via SD card.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("Hardware Wallet")]),t._v(" tab will open, and there you can search all connected hardware wallets.")]),t._v(" "),a("li",[t._v("Click "),a("code",[t._v("Load Wallet")]),t._v(", then you can "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("receive")]),t._v(" bitcoin to addresses controlled by the hardware wallet.")],1),t._v(" "),a("li",[t._v("You can "),a("RouterLink",{attrs:{to:"/using-wasabi/Send.html"}},[t._v("spend")]),t._v(" these coins in the "),a("code",[t._v("Send")]),t._v(" tab, though the hardware wallet must be connected via USB to confirm before signing the transaction.\nAlternatively, you can "),a("RouterLink",{attrs:{to:"/using-wasabi/ColdWasabi.html#connecting-coldcard-via-sd-card"}},[t._v("build a PSBT")]),t._v(", export this via SD card to your Coldcard wallet for signing, then import the final transaction to Wasabi for broadcasting.")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("No CoinJoin")]),t._v(" "),a("p",[t._v("Unfortunately, as of now you cannot "),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[t._v("CoinJoin")]),t._v(" with just the private keys on your hardware wallet.\nThe keys need to be on the internet connected computer to be able to CoinJoin.")],1)]),t._v(" "),a("h2",{attrs:{id:"what-is-cold-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-cold-storage"}},[t._v("#")]),t._v(" What is Cold Storage")]),t._v(" "),a("p",[t._v("Cold storage refers to keeping a reserve of bitcoin protected by private keys which are generated and stored completely offline.\nThis is an often-used security precaution, especially dealing with large amounts of bitcoin.\nBecause the private keys are not on a computer which is connected to the internet, many remote attack vectors are nullified.")]),t._v(" "),a("p",[t._v("Methods of cold storage include keeping private keys:")]),t._v(" "),a("ul",[a("li",[t._v("On a USB drive or other data storage medium")]),t._v(" "),a("li",[t._v("On a paper wallet")]),t._v(" "),a("li",[t._v("On a bearer item such as a physical bitcoin")]),t._v(" "),a("li",[t._v("On a hardware wallet")])]),t._v(" "),a("h2",{attrs:{id:"hardware-wallet-with-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet-with-wasabi"}},[t._v("#")]),t._v(" Hardware Wallet with Wasabi")]),t._v(" "),a("p",[t._v("You can use Wasabi Wallet with almost any hardware wallet out there, because Wasabi utilizes "),a("a",{attrs:{href:"https://github.com/bitcoin-core/hwi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core Hardware Wallet Interface [HWI]"),a("OutboundLink")],1),t._v(".\nThe setup is thoroughly tested for "),a("a",{attrs:{href:"https://trezor.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trezor model One and T"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://ledgerwallet.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ledger Nano S"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://coldcardwallet.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coldcard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"connecting-via-usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-via-usb"}},[t._v("#")]),t._v(" Connecting via USB")]),t._v(" "),a("h4",{attrs:{id:"import-the-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-the-wallet"}},[t._v("#")]),t._v(" Import the wallet")]),t._v(" "),a("p",[t._v("When Wasabi is running, the hardware wallet can be connected via USB to the same computer.\nWasabi should automatically detect the hardware, and open the "),a("code",[t._v("Hardware Wallet")]),t._v(" tab where you can load the wallet.\nThis wallet will be used as a watch-only wallet when the hardware wallet device is not connected.")]),t._v(" "),a("h4",{attrs:{id:"receiving-bitcoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-bitcoin"}},[t._v("#")]),t._v(" Receiving bitcoin")]),t._v(" "),a("p",[t._v("After the first time you loaded a new device, the public keys will be stored locally on the computer, and you can use Wasabi to "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("receive bitcoin")]),t._v(" to the hardware wallet without connecting it again.")],1),t._v(" "),a("h4",{attrs:{id:"sending-bitcoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-bitcoin"}},[t._v("#")]),t._v(" Sending bitcoin")]),t._v(" "),a("p",[t._v("Only when you want to "),a("RouterLink",{attrs:{to:"/using-wasabi/Send.html"}},[t._v("send bitcoin")]),t._v(" you need to connect the device over USB again.\nIn the "),a("code",[t._v("Send")]),t._v(" tab, select your coins, specify the destination address and the payment amount and the fee, then click the "),a("code",[t._v("Send Transaction")]),t._v(" button.\nThe private keys are not on the computer, thus the transaction is signed on the hardware wallet, after you confirm with a physical button click.\nThe final transaction is automatically broadcast over Tor with Wasabi Wallet.")],1),t._v(" "),a("h3",{attrs:{id:"connecting-coldcard-via-sd-card"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-coldcard-via-sd-card"}},[t._v("#")]),t._v(" Connecting Coldcard via SD card")]),t._v(" "),a("p",[t._v("You can use Wasabi Wallet together with Coldcard without ever connecting it via USB, further reducing possible attack vectors.\nFor more details see the "),a("a",{attrs:{href:"https://coldcardwallet.com/docs/microsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coldcard documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"import-the-skeleton-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-the-skeleton-wallet"}},[t._v("#")]),t._v(" Import the skeleton wallet")]),t._v(" "),a("p",[t._v("Power your Coldcard on a power bank or electricity socket, then unlock it with your pin.\nPut in a Micro SD card and go to "),a("code",[t._v("Advanced > MicroSD Card > Export Wallet > Wasabi Wallet")]),t._v(".\nThis will write the public keys, wallet fingerprint, derivation path and other metadata to a skeleton file "),a("code",[t._v("new-wallet.json")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Protect your public keys!")]),t._v(" "),a("p",[t._v("This file does not include your private keys, so an attacker cannot use it to spend your bitcoin.\nHowever, he can use it to derive a full transaction history, thus it is a potential privacy leak.")])]),t._v(" "),a("p",[t._v("Now plug in the SD card to your computer, and open Wasabi Wallet.\nGo to the "),a("code",[t._v("Hardware Wallet")]),t._v(" tab, and click the button "),a("code",[t._v("Import Coldcard")]),t._v(", browse to the SD card and select the "),a("code",[t._v("new-wallet.json")]),t._v(" file.\nWasabi will automatically import and modify this skeleton file and store it in your "),a("code",[t._v("Wallets")]),t._v(" and "),a("code",[t._v("WalletBackups")]),t._v(" folders.")]),t._v(" "),a("h4",{attrs:{id:"receiving-bitcoin-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-bitcoin-2"}},[t._v("#")]),t._v(" Receiving bitcoin")]),t._v(" "),a("p",[t._v("After the skeleton wallet is imported, you can open the wallet in the "),a("code",[t._v("Load Wallet")]),t._v(" tab without using your Coldcard.\nGenerate a "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("receiving address")]),t._v(" as usual.\nThe private key corresponding to this address is on the hardware wallet.")],1),t._v(" "),a("h4",{attrs:{id:"sending-bitcoin-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-bitcoin-2"}},[t._v("#")]),t._v(" Sending bitcoin")]),t._v(" "),a("p",[t._v("In the right-side Wallet explorer, click on "),a("code",[t._v("Advanced")]),t._v(" then "),a("code",[t._v("Build Transaction")]),t._v(".\nThis shows you a tab similar to the "),a("code",[t._v("Send")]),t._v(" tab.\nYou select coins, specify the destination address, payment amount and mining fee.\nThen you click the "),a("code",[t._v("Build Transaction")]),t._v(" button, and it will generate an unsigned Bitcoin transaction.\nClick on "),a("code",[t._v("Export Binary PSBT")]),t._v(", select the SD card and click "),a("code",[t._v("OK")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"/PSBTUnsigned.png",alt:""}})]),t._v(" "),a("p",[t._v("Unplug your SD card from the computer and put it into your Coldcard.\nThen, in the Coldcard main menu click on "),a("code",[t._v("Ready to Sign")]),t._v(".\nVerify the transaction details shown on the Coldcard, and approve the transaction for signing.\nAfter this, unplug the micro SD card from Coldcard and plug it into the computer.\nIn Wasabi, click on the top menu "),a("code",[t._v("Tools")]),t._v(" and then "),a("code",[t._v("Transaction Broadcaster")]),t._v(".\nIn this tab, select "),a("code",[t._v("Import Transaction")]),t._v(", lookup the SD card with the final signed transaction, and click "),a("code",[t._v("OK")]),t._v(".\nThen click "),a("code",[t._v("Broadcast Transaction")]),t._v(", and Wasabi will privately announce it to the Bitcoin network.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/PSBTBroadcast.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"cold-wasabi-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cold-wasabi-protocol"}},[t._v("#")]),t._v(" Cold-Wasabi protocol")]),t._v(" "),a("p",[t._v("This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.\nBecause you cannot do CoinJoin with the private keys on the hardware wallet, you will need to generate and load two different Wasabi Wallets.\nA 'Hot' (CoinJoin) and a 'Cold' (Storage) Wasabi Wallet instances will both be running side-by-side, label them accordingly so you don't mix them up.")]),t._v(" "),a("p",[t._v("There are two different ways of following the Cold-Wasabi Protocol, one using the GUI (Graphical User Interface) and one using the "),a("RouterLink",{attrs:{to:"/using-wasabi/Daemon.html"}},[t._v("daemon")]),t._v(".")],1),t._v(" "),a("p",[t._v("At the moment, only the latter allows to CoinJoin to a different wallet.")]),t._v(" "),a("h2",{attrs:{id:"gui-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-tutorial"}},[t._v("#")]),t._v(" GUI tutorial")]),t._v(" "),a("h3",{attrs:{id:"coinjoin-on-the-hot-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin-on-the-hot-wasabi"}},[t._v("#")]),t._v(" CoinJoin on the hot Wasabi")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("First")]),t._v(" "),a("p",[t._v("You should make your existing coins private.\nIt is useful to generate a complete new hot wallet for this, so as to keep the CoinJoin transaction history separate from other wallets.")])]),t._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/using-wasabi/WalletGeneration.html"}},[t._v("Generate a new Hot-Wasabi Wallet")]),t._v(".")],1),t._v(" "),a("li",[t._v("Open the "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("Receive")]),t._v(" tab to get a new address.")],1),t._v(" "),a("li",[t._v("From a pre-existing wallet, send bitcoin into this Hot-Wasabi Wallet.")]),t._v(" "),a("li",[t._v("In the "),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[t._v("CoinJoin")]),t._v(" tab, select the relevant coins, enqueue them, and wait for the CoinJoin to be done.\nRemix often to gain a high anonymity set.")],1)]),t._v(" "),a("h3",{attrs:{id:"setup-your-cold-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-your-cold-wasabi"}},[t._v("#")]),t._v(" Setup your cold Wasabi")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Second")]),t._v(" "),a("p",[t._v("In order to separate these new private coins, you should generate a fresh wallet on your hardware device.")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Generate and back up a new set of keys on your hardware wallet.")]),t._v(" "),a("li",[t._v("Load your hardware wallet device to Wasabi, either via USB or SD card.")]),t._v(" "),a("li",[t._v("Label and generate a receive address for the hardware wallet.\nFor the first setup you need to connect the hardware wallet to the computer that runs Wasabi, afterwards you can generate receive addresses without the device being connected.")]),t._v(" "),a("li",[t._v("Copy the receiving address from the cold-Wasabi.")])]),t._v(" "),a("h3",{attrs:{id:"send-bitcoins-from-hot-to-cold-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-bitcoins-from-hot-to-cold-wasabi"}},[t._v("#")]),t._v(" Send bitcoins from hot to cold Wasabi")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Third")]),t._v(" "),a("p",[t._v("In order to keep the mixed coins separate and without revealing that you own all of them, send the "),a("img",{staticClass:"shield",attrs:{src:"/ShieldCheckmark.png",alt:"checkmark"}}),t._v(" coins without consolidating them.\nWait some time in-between sending them, so that timing analysis becomes more difficult.")])]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Go to the hot-Wasabi "),a("code",[t._v("Send")]),t._v(" tab, and select the coins with high anonymity set.\nDo not consolidate your "),a("img",{staticClass:"shield",attrs:{src:"/ShieldCheckmark.png",alt:"checkmark"}}),t._v(" coins, but send them in small, time-staggered batches.")]),t._v(" "),a("li",[t._v("Paste the cold-Wasabi address.")]),t._v(" "),a("li",[t._v("Click the "),a("code",[t._v("MAX")]),t._v(" button to send the whole mixed coin.")])]),t._v(" "),a("h3",{attrs:{id:"send-bitcoins-from-cold-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-bitcoins-from-cold-wasabi"}},[t._v("#")]),t._v(" Send bitcoins from cold Wasabi")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Finally")]),t._v(" "),a("p",[t._v("You can at any time spend the bitcoin from the cold Wasabi.")])]),t._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[t._v("Connect your hardware wallet to the computer.")]),t._v(" "),a("li",[t._v("Load the cold Wasabi wallet.")]),t._v(" "),a("li",[t._v("Go to the "),a("code",[t._v("Send")]),t._v(", select the coins and destination, then sign the transaction with the hardware wallet.\nAlternatively go to the "),a("code",[t._v("Build Transaction")]),t._v(" tab and do the Coldcard SD card workflow.")])]),t._v(" "),a("h2",{attrs:{id:"daemon-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemon-tutorial"}},[t._v("#")]),t._v(" Daemon tutorial")]),t._v(" "),a("h3",{attrs:{id:"mix-to-another-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mix-to-another-wallet"}},[t._v("#")]),t._v(" Mix to Another Wallet")]),t._v(" "),a("p",[t._v("Use the "),a("RouterLink",{attrs:{to:"/using-wasabi/Daemon.html"}},[t._v("daemon")]),t._v(" and run "),a("code",[t._v("dotnet run -- mix --wallet:MyWallet1 --destination:MyWallet2")]),t._v(", where "),a("code",[t._v("MyWallet1")]),t._v(" is the name of your "),a("em",[t._v("hot")]),t._v(" Wasabi Wallet and "),a("code",[t._v("MyWallet2")]),t._v(" is your  "),a("em",[t._v("cold")]),t._v(" Wallet from Coldcard.")],1),t._v(" "),a("p",[t._v("The software stops when it finishes the mix or if you press "),a("code",[t._v("CTRL+C")]),t._v(" ("),a("code",[t._v("CMD+C")]),t._v(" on macOS) to stop it.")]),t._v(" "),a("p",[t._v("Wasabi coinjoins normally until your target anonymity set is reached (default 50).\nThis number can be changed by editing your "),a("code",[t._v("Wallet1.json")]),t._v(" file, located inside "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#where-can-i-find-the-wasabi-data-folder"}},[t._v("Wasabi data folder")]),t._v(".\nAfter that it starts registering outputs from the CoinJoin to your destination wallet, thus you are slowly and privately coinjoining your money to your cold wallet.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Success!")]),t._v(" "),a("p",[t._v("おめでとうございます!")]),t._v(" "),a("p",[t._v("You are now eating Cold Wasabi!")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The anonymity set is tied to the wallet that you used to CoinJoin, if you send a mixed coin to another Wasabi Wallet (in this case your hardware wallet), it will have an anonymity set 1 (red) because this wallet doesn't know that the coin was coinjoined.")]),t._v(" "),a("p",[t._v('You should use a meaningful label when you generate a receive address in your hardware wallet, e.g. "My hot Wasabi 100 anonset" (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).')])])])}),[],!1,null,null,null);e.default=i.exports}}]);