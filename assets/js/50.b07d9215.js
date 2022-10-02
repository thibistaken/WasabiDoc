(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{326:function(e,s,a){"use strict";a.r(s);var t=a(10),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"address-reuse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address-reuse"}},[e._v("#")]),e._v(" Address Reuse")]),e._v(" "),s("p",[e._v("The first rule of Bitcoin privacy:")]),e._v(" "),s("blockquote",[s("p",[e._v("Never reuse addresses!")])]),e._v(" "),s("p",[e._v("The second rule of Bitcoin privacy:")]),e._v(" "),s("blockquote",[s("p",[e._v("NEVER reuse addresses!!")])]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#problem"}},[e._v("Problem")]),s("ul",[s("li",[s("a",{attrs:{href:"#easy-wallet-clustering"}},[e._v("Easy wallet clustering")])]),s("li",[s("a",{attrs:{href:"#publicly-advertised-addresses-donations"}},[e._v("Publicly advertised addresses (donations)")])]),s("li",[s("a",{attrs:{href:"#dusting"}},[e._v("Dusting")])]),s("li",[s("a",{attrs:{href:"#intentionally-malicious"}},[e._v("Intentionally malicious")])])])]),s("li",[s("a",{attrs:{href:"#wasabi-s-solution"}},[e._v("Wasabi's Solution")]),s("ul",[s("li",[s("a",{attrs:{href:"#remove-used-address-from-gui"}},[e._v("Remove used address from GUI")])])])])])]),s("p"),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),s("h3",{attrs:{id:"easy-wallet-clustering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#easy-wallet-clustering"}},[e._v("#")]),e._v(" Easy wallet clustering")]),e._v(" "),s("p",[e._v("If an address is used more than once, it means that the same private key can spend all its coins.\nIt is very easy to find all the UTXOs of an address, and thus to find out how many bitcoin the private key holds.")]),e._v(" "),s("p",[e._v("Further, in a transaction where one output has a reused address, then it is very likely that this output is the payment destination, and not the change.\nMost wallets automatically generate new change addresses for every transaction, but payment addresses are selected manually by the user.")]),e._v(" "),s("p",[e._v("Read more about the privacy concerns of address reuse in the "),s("a",{attrs:{href:"https://en.bitcoin.it/wiki/Address_reuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("separate entry"),s("OutboundLink")],1),e._v(" and the "),s("a",{attrs:{href:"https://en.bitcoin.it/Privacy#Address_reuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacy chapter"),s("OutboundLink")],1),e._v(" of the Bitcoin wiki.")]),e._v(" "),s("p",[e._v("There are different types of address reuse:")]),e._v(" "),s("h3",{attrs:{id:"publicly-advertised-addresses-donations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publicly-advertised-addresses-donations"}},[e._v("#")]),e._v(" Publicly advertised addresses (donations)")]),e._v(" "),s("p",[e._v("Here, a person publishes a single address to a public forum, like in the bio of a social media network or on a website, and anyone can send bitcoin to this address.")]),e._v(" "),s("h3",{attrs:{id:"dusting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dusting"}},[e._v("#")]),e._v(" Dusting")]),e._v(" "),s("p",[e._v("With a "),s("a",{attrs:{href:"https://en.bitcoin.it/Privacy#Forced_address_reuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("forced address reuse attack"),s("OutboundLink")],1),e._v(", an attacker sends a small amount of bitcoin to an already existing address.\nThe attacker hopes that this dust coin is consolidated with another coin, thus linking the two in a cluster.")]),e._v(" "),s("h3",{attrs:{id:"intentionally-malicious"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intentionally-malicious"}},[e._v("#")]),e._v(" Intentionally malicious")]),e._v(" "),s("p",[e._v("Since Wasabi is libre and open-source, anyone can modify a fork of Wasabi to make sure the same two addresses are recycled in every CoinJoin registration.\nThis is someone intentionally deanonymizing himself, and he might have quite dubious motives.")]),e._v(" "),s("h2",{attrs:{id:"wasabi-s-solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-s-solution"}},[e._v("#")]),e._v(" Wasabi's Solution")]),e._v(" "),s("h3",{attrs:{id:"remove-used-address-from-gui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-used-address-from-gui"}},[e._v("#")]),e._v(" Remove used address from GUI")]),e._v(" "),s("p",[e._v("Wasabi encourages the user to not reuse addresses.\nYou always get a new Bitcoin address whenever you generate one.\nPreviously generated addresses, which haven't received bitcoin yet, are displayed at "),s("code",[e._v("Unused Receive Addresses")]),e._v(".\nAn address is automatically removed from the "),s("code",[e._v("Unused Receive Addresses")]),e._v(" list once that address receives funds.")]),e._v(" "),s("p",[e._v("To protect against forced address reuse attack (Dusting), Wasabi has a modifiable "),s("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-dust-threshold"}},[e._v("dust limit")]),e._v(", where the wallet does not show coins below a certain threshold value.")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);