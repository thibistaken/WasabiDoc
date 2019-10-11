(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{236:function(t,e,a){"use strict";a.r(e);var r=a(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"install-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-package","aria-hidden":"true"}},[t._v("#")]),t._v(" Install package")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#windows"}},[t._v("Windows")]),a("ul",[a("li",[a("a",{attrs:{href:"#manual-public-key-import"}},[t._v("Manual public key import")])])])]),a("li",[a("a",{attrs:{href:"#debian-and-ubuntu"}},[t._v("Debian and Ubuntu")])]),a("li",[a("a",{attrs:{href:"#other-linux"}},[t._v("Other Linux")])]),a("li",[a("a",{attrs:{href:"#osx"}},[t._v("OSX")])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("It is strongly recommended to "),a("strong",[t._v("VERIFY PGP SIGNATURES")]),t._v(" of the downloaded packages before installing Wasabi. This protects you against malicious phishing sites giving you back-doored Wallet software.\nDon't trust - Verify!")]),t._v(" "),a("p",[t._v("Download the packages either from the official "),a("a",{attrs:{href:"https://wasabiwallet.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WasabiWallet.io"),a("OutboundLink")],1),t._v(" clearnet website, or for your privacy's sake, from the official tor hidden service "),a("a",{attrs:{href:"http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"/DownloadAll.png",alt:""}})]),t._v(" "),a("p",[t._v("If you have personally verified zkSNACKs' PGP key and you are familiar with the "),a("a",{attrs:{href:"https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Of Trust"),a("OutboundLink")],1),t._v(", please consider also "),a("a",{attrs:{href:"https://www.gnupg.org/gph/en/manual/x334.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("signing it"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/tkaaC8yET1o/hqdefault.jpg)"},attrs:{"data-id":"tkaaC8yET1o"}},[a("iframe",{attrs:{title:"YouTube tkaaC8yET1o","data-src":"https://www.youtube-nocookie.com/embed/tkaaC8yET1o?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/D8U53PFEsVk/hqdefault.jpg)"},attrs:{"data-id":"D8U53PFEsVk"}},[a("iframe",{attrs:{title:"YouTube D8U53PFEsVk","data-src":"https://www.youtube-nocookie.com/embed/D8U53PFEsVk?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("If you have already imported zkSNACKs' public key, then jump to step 7.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.gnupg.org/download/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),a("OutboundLink")],1),t._v(" and install Gpg4win")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsGpgp4winSetup.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://wasabiwallet.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),a("OutboundLink")],1),t._v(" the latest Wasabi release, both the "),a("code",[t._v(".msi")]),t._v(" installer and the corresponding "),a("code",[t._v(".msi.asc")]),t._v(" signature file.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/DownloadWindows.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Double click on "),a("code",[t._v(".msi.asc")]),t._v(" file or right click "),a("code",[t._v("More GpgEX options / Verify")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsGUIVerify.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("You see that this is signed by the fingerprint "),a("code",[t._v("6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")]),t._v(", press "),a("code",[t._v("Search")]),t._v(" to look for the entire PGP public key.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsKleopatraSearchPGP.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("code",[t._v("Import")]),t._v(" the public key of zkSNACKs [zksnacks@gmail.com]. Who are they? The company behind Wasabi "),a("a",{attrs:{href:"https://zksnacks.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zkSNACKs Ltd."),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsKleopatraImportPGP.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Confirm to import zkSNACKs' public key by clicking "),a("code",[t._v("Yes")]),t._v(".\n[Next time you can skip previous steps because the public key is already imported.]")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsKleopatraPGPConfirm.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Select all and verify the fingerprint: "),a("code",[t._v("6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsKleopatraVerifyFingerprint.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("Press "),a("code",[t._v("Next")]),t._v(", "),a("code",[t._v("Next")]),t._v(", "),a("code",[t._v("Next")]),t._v(", until you have successfully validated that the package was signed properly.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsKleopatraValidSig.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("You can install Wasabi by double clicking the "),a("code",[t._v(".msi")]),t._v(" and following the GUI instructions.")])]),t._v(" "),a("p",[t._v("Wasabi will be installed to your "),a("code",[t._v("C:\\Program Files\\WasabiWallet\\")]),t._v(" folder.\nYou will also have an icon in your Start Menu and on your Desktop. After the first run, a working directory will be created: "),a("code",[t._v("%appdata%\\WalletWasabi\\")]),t._v(".\nAmong others, here is where your wallet files and your logs reside.")]),t._v(" "),a("h3",{attrs:{id:"manual-public-key-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-public-key-import","aria-hidden":"true"}},[t._v("#")]),t._v(" Manual public key import")]),t._v(" "),a("p",[t._v("If you get an error upon the import of zkSNACKs' PGP key, then you can manually import it.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Copy zkSNACKs' PGP public key from "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Create a TXT file "),a("code",[t._v("PGP.txt")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsImportPGPManualNewFile.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Open it and right click and paste.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsImportPGPManualText.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("Save the file and close.")])]),t._v(" "),a("li",[a("p",[t._v("Right click on "),a("code",[t._v("PGP.txt")]),t._v(".\nIn the context menu navigate to "),a("code",[t._v("More GpgEx options/Import keys")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsImportPGPManualImport.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Kleopatra pops up and zkSNACKs' key is imported.\nPress "),a("code",[t._v("OK")]),t._v(" and close Kleopatra.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallWindowsImportPGPManualKleopatra.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"debian-and-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian-and-ubuntu","aria-hidden":"true"}},[t._v("#")]),t._v(" Debian and Ubuntu")]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/DUc9A76rwX4/hqdefault.jpg)"},attrs:{"data-id":"DUc9A76rwX4"}},[a("iframe",{attrs:{title:"YouTube DUc9A76rwX4","data-src":"https://www.youtube-nocookie.com/embed/DUc9A76rwX4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("If you have already imported zkSNACKs' public key, then jump to step 2.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download zkSNACKs' PGP public key "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(", and then import it with "),a("code",[t._v("gpg --import PGP.txt")]),t._v(".\nVerify that the fingerprint is "),a("code",[t._v("6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")]),t._v(".\n[Next time you can skip previous steps because the public key is already imported.]")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://wasabiwallet.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),a("OutboundLink")],1),t._v(" the latest Wasabi release, both the "),a("code",[t._v(".deb")]),t._v(" package and the corresponding "),a("code",[t._v(".asc")]),t._v(" signature file.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/DownloadDeb.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("Verify the signature in the Download repository with "),a("code",[t._v("gpg --verify Wasabi-X.X.X.deb.asc")]),t._v(" [Change "),a("code",[t._v("X.X.X")]),t._v(" to version you downloaded.]\nIf the message returned says "),a("code",[t._v("Good signature from zkSNACKs")]),t._v(" and that it was signed with "),a("code",[t._v("Primary key fingerprint: 6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")]),t._v(", then the software was not tampered with since the developer signed it.")])]),t._v(" "),a("li",[a("p",[t._v("[GUI] Install by double clicking and follow the GUI Instruction. "),a("br"),t._v("\n[CLI] In the Download repository, run the command "),a("code",[t._v("sudo dpkg -i Wasabi-X.X.X.deb")]),t._v(". [Change "),a("code",[t._v("X.X.X")]),t._v(" to version you downloaded.]")])])]),t._v(" "),a("p",[t._v("After the first run, a working directory will be created: "),a("code",[t._v("~/.walletwasabi/")]),t._v(".\nAmong others, here is where your wallet files and your logs reside.")]),t._v(" "),a("h2",{attrs:{id:"other-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-linux","aria-hidden":"true"}},[t._v("#")]),t._v(" Other Linux")]),t._v(" "),a("p",[t._v("(Note that this video was created on OSX, but the steps are the same for Linux)")]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/qFbv_b-bju4/hqdefault.jpg)"},attrs:{"data-id":"qFbv_b-bju4"}},[a("iframe",{attrs:{title:"YouTube qFbv_b-bju4","data-src":"https://www.youtube-nocookie.com/embed/qFbv_b-bju4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/zPKpC9cRcZo/hqdefault.jpg)"},attrs:{"data-id":"zPKpC9cRcZo"}},[a("iframe",{attrs:{title:"YouTube zPKpC9cRcZo","data-src":"https://www.youtube-nocookie.com/embed/zPKpC9cRcZo?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("If you have already imported zkSNACKs' public key, then jump to step 2.")]),t._v(" "),a("ol",[a("li",[t._v("Download zkSNACKs' PGP public key "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(", and then import it with "),a("code",[t._v("gpg --import PGP.txt")]),t._v(".")])]),t._v(" "),a("p",[t._v("Verify that the fingerprint is "),a("code",[t._v("6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")]),t._v(".\n[Next time you can skip previous steps because the public key is already imported.]")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://wasabiwallet.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),a("OutboundLink")],1),t._v(" the latest Wasabi release, both the "),a("code",[t._v(".tar.gz")]),t._v(" archive and the corresponding "),a("code",[t._v(".asc")]),t._v(" signature file.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/DownloadTar.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("In the Download folder, run "),a("code",[t._v("gpg2 --verify Wasabi.X.X.X.tar.gz.asc")]),t._v(".\n[Change "),a("code",[t._v("X.X.X")]),t._v(" to version you downloaded.]\nIf the message returned says "),a("code",[t._v("Good signature from zkSNACKs")]),t._v(" and that it was signed with "),a("code",[t._v("Primary key fingerprint: 6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")]),t._v(", then the software was not tampered with since the developer signed it.")])]),t._v(" "),a("li",[a("p",[t._v("Extract the archive while keeping the file permissions: "),a("code",[t._v("tar -pxzf WasabiLinux-X.X.X.tar.gz")]),t._v(". [Change "),a("code",[t._v("X.X.X")]),t._v(" to version you downloaded.]")])]),t._v(" "),a("li",[a("p",[t._v("Run Wasabi by executing "),a("code",[t._v("./wassabee")]),t._v(".")])])]),t._v(" "),a("p",[t._v("After the first run, a working directory will be created: "),a("code",[t._v("~/.walletwasabi/")]),t._v(".\nAmong others, here is where your wallet files and your logs reside.")]),t._v(" "),a("h2",{attrs:{id:"osx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osx","aria-hidden":"true"}},[t._v("#")]),t._v(" OSX")]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/_Zmc54XYzBA/hqdefault.jpg)"},attrs:{"data-id":"_Zmc54XYzBA"}},[a("iframe",{attrs:{title:"YouTube _Zmc54XYzBA","data-src":"https://www.youtube-nocookie.com/embed/_Zmc54XYzBA?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/UZ9z5COXaG0/hqdefault.jpg)"},attrs:{"data-id":"UZ9z5COXaG0"}},[a("iframe",{attrs:{title:"YouTube UZ9z5COXaG0","data-src":"https://www.youtube-nocookie.com/embed/UZ9z5COXaG0?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("If you have already imported zkSNACKs' public key, then jump to step 4.")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://www.gnupg.org/download/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get GnuPG"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Copy "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("zkSNACKs' PGP public key"),a("OutboundLink")],1),t._v(" into a new "),a("code",[t._v("TextEdit")]),t._v(" document and saving it as "),a("code",[t._v("PGP.txt")]),t._v(".\nBefore saving, you need to go to "),a("code",[t._v("Format / Make Plain Text")]),t._v(" (otherwise TextEdit will not be able to save it as a .txt file).")])]),t._v(" "),a("li",[a("p",[t._v("Open Terminal and go to the folder in which you saved the "),a("code",[t._v("PGP.txt")]),t._v(" file and import the public key with "),a("code",[t._v("sudo gpg2 --import PGP.txt")]),t._v(".\nThis should return the output: "),a("code",[t._v('key 856348328949861E: public key "zkSNACKs <zksnacks@gmail.com>" imported')]),t._v(".\n[Next time you can skip previous steps because the public key is already imported.]")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://wasabiwallet.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),a("OutboundLink")],1),t._v(" the latest Wasabi release, both the "),a("code",[t._v(".dmg")]),t._v(" package and the corresponding "),a("code",[t._v(".asc")]),t._v(" signature file.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/DownloadMac.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("In the Download folder, run "),a("code",[t._v("sudo gpg2 --verify Wasabi-X.X.X.dmg.asc")]),t._v(".\n[Change "),a("code",[t._v("X.X.X")]),t._v(" to version you downloaded.]\nIf the message returned says "),a("code",[t._v("Good signature from zkSNACKs")]),t._v(" and that it was signed with "),a("code",[t._v("Primary key fingerprint: 6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E")]),t._v(", then the software was not tampered with since the developer signed it.")])]),t._v(" "),a("li",[a("p",[t._v("Double click "),a("code",[t._v(".dmg")]),t._v(" to open it.")])]),t._v(" "),a("li",[a("p",[t._v("Install Wasabi by dragging it into your "),a("code",[t._v("Applications")]),t._v(" folder.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallMacDragDrop.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("After opening Wasabi, you may encounter a security popup.\nYou can bypass it in multiple ways.\nOne way would be to keep the control key down while opening Wasabi.\nAnother way is to go to System Preferences / Security & Privacy, where you should find a message "),a("code",[t._v('"Wasabi Wallet" was blocked from opening because it is not from an identified developer')]),t._v(" and an "),a("code",[t._v("open anyway")]),t._v(" button.\nClick the button and confirm by entering your Mac user password.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/InstallMacConfirmOpen.png",alt:""}})])])}),[],!1,null,null,null);e.default=o.exports}}]);