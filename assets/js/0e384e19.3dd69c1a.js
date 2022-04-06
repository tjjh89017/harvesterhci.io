"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[671],{3905:function(A,e,t){t.d(e,{Zo:function(){return B},kt:function(){return Q}});var r=t(7294);function g(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function E(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){g(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,r,g=function(A,e){if(null==A)return{};var t,r,g={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(g[t]=A[t]);return g}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(g[t]=A[t])}return g}var C=r.createContext({}),i=function(A){var e=r.useContext(C),t=e;return A&&(t="function"==typeof A?A(e):E(E({},e),A)),t},B=function(A){var e=i(A.components);return r.createElement(C.Provider,{value:e},A.children)},I={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(A,e){var t=A.components,g=A.mdxType,n=A.originalType,C=A.parentName,B=a(A,["components","mdxType","originalType","parentName"]),o=i(t),Q=g,l=o["".concat(C,".").concat(Q)]||o[Q]||I[Q]||n;return t?r.createElement(l,E(E({ref:e},B),{},{components:t})):r.createElement(l,E({ref:e},B))}));function Q(A,e){var t=arguments,g=e&&e.mdxType;if("string"==typeof A||g){var n=t.length,E=new Array(n);E[0]=o;var a={};for(var C in e)hasOwnProperty.call(e,C)&&(a[C]=e[C]);a.originalType=A,a.mdxType="string"==typeof A?A:g,E[1]=a;for(var i=2;i<n;i++)E[i]=t[i];return r.createElement.apply(null,E)}return r.createElement.apply(null,t)}o.displayName="MDXCreateElement"},9881:function(A,e,t){t.r(e),t.d(e,{assets:function(){return B},contentTitle:function(){return C},default:function(){return Q},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return I}});var r=t(7462),g=t(3366),n=(t(7294),t(3905)),E=["components"],a={sidebar_position:1,keywords:["Harvester","harvester","Rancher","rancher","what is Harverster","Harvester Introduction"]},C="Harvester Intro",i={unversionedId:"intro",id:"intro",title:"Harvester Intro",description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/intro",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/static/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["Harvester","harvester","Rancher","rancher","what is Harverster","Harvester Introduction"]},sidebar:"tutorialSidebar",next:{title:"ISO Installation",permalink:"/installation/iso-install"}},B={},I=[{value:"Overview",id:"overview",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Quick start",id:"quick-start",level:2}],o={toc:I};function Q(A){var e=A.components,a=(0,g.Z)(A,E);return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"harvester-intro"},"Harvester Intro"),(0,n.kt)("p",null,"Harvester is an open source ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"hyper-converged infrastructure")," (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"harvester-ui",src:t(3208).Z,width:"2550",height:"1303"})),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Harvester implements HCI on bare metal servers. Here are some notable features of the Harvester:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"VM lifecycle management including SSH-Key injection, Cloud-init and, graphic and serial port console"),(0,n.kt)("li",{parentName:"ol"},"VM live migration support"),(0,n.kt)("li",{parentName:"ol"},"Supporting VM backup and restore"),(0,n.kt)("li",{parentName:"ol"},"Distributed block storage"),(0,n.kt)("li",{parentName:"ol"},"Multiple NICs in the VM connecting to the management network or VLANs"),(0,n.kt)("li",{parentName:"ol"},"Virtual Machine and cloud-init templates"),(0,n.kt)("li",{parentName:"ol"},"Built-in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Rancher")," integration and the Harvester node driver"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/harvester/blob/master/docs/automatic-installation.md"},"PXE/iPXE boot support"))),(0,n.kt)("p",null,"The following diagram gives a high-level architecture of Harvester:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",src:t(4483).Z,width:"943",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"KubeVirt")," is a virtual machine management add-on for Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://k3os.io/"},"K3OS")," is a Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster.")),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"To get the Harvester server up and running the following minimum hardware is required:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Requirements"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware assisted virtualization required. 4 cores minimum, 16 cores or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8 GB minimum, 32 GB or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"120 GB minimum, 500 GB or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk(SSD/NVMe). Management nodes (first 3 nodes) must be ",(0,n.kt)("a",{parentName:"td",href:"https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd"},"fast enough for Etcd"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum, 10Gbps Ethernet recommended")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,n.kt)("h2",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,"You can use the ISO to install Harvester directly on the bare-metal server to form a Harvester cluster. Users can add one or many compute nodes to join the existing cluster."),(0,n.kt)("p",null,"To get the Harvester ISO, download it from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases.")),(0,n.kt)("p",null,"During the installation you can either choose to form a new cluster, or join the node to an existing cluster."),(0,n.kt)("p",null,"Note: This ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/97ADieBX6bE"},"video")," shows a quick overview of the ISO installation."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,n.kt)("inlineCode",{parentName:"li"},"Harvester Installer"),".\n",(0,n.kt)("img",{loading:"lazy",alt:"iso-install.png",src:t(6800).Z,width:"1225",height:"678"})),(0,n.kt)("li",{parentName:"ol"},"Choose the installation mode by either creating a new Harvester cluster, or by joining an existing one."),(0,n.kt)("li",{parentName:"ol"},"Choose the installation device that the Harvester will be formatted to."),(0,n.kt)("li",{parentName:"ol"},"Configure the hostname and select the network interface for the management network, the IP address can either be configured via DHCP or static method.\n",(0,n.kt)("img",{loading:"lazy",alt:"iso-installed.png",src:t(2621).Z,width:"890",height:"281"})),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster token"),". This token will be used for adding other nodes to the cluster."),(0,n.kt)("li",{parentName:"ol"},"Configure the login password of the host. The default ssh user is ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) you can choose to import SSH keys from a remote URL server. Your GitHub public keys can be used with ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/<username>.keys"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here, otherwise, leave this blank."),(0,n.kt)("li",{parentName:"ol"},"(Optional) If you need to customize the host with cloud-init config, enter the HTTP URL here."),(0,n.kt)("li",{parentName:"ol"},"Confirm the installation options and the Harvester will be installed to your host. The installation may take a few minutes to be complete."),(0,n.kt)("li",{parentName:"ol"},"Once the installation is complete it will restart the host and a console UI with management URL and status will be displayed. ",(0,n.kt)("small",null,"(You can Use F12 to switch between Harvester console and the Shell)")),(0,n.kt)("li",{parentName:"ol"},"The default URL of the web interface is ",(0,n.kt)("inlineCode",{parentName:"li"},"https://your-host-ip:30443"),".\n",(0,n.kt)("img",{loading:"lazy",alt:"iso-installed.png",src:t(7700).Z,width:"2248",height:"1688"})),(0,n.kt)("li",{parentName:"ol"},"User will be prompted to set the password for the default ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," user on the first-time login.\n",(0,n.kt)("img",{loading:"lazy",alt:"first-login.png",src:t(9640).Z,width:"1618",height:"924"}))))}Q.isMDXComponent=!0},4483:function(A,e,t){e.Z=t.p+"assets/images/architecture-cbe66e1a46863622438eac6a811162e7.svg"},9640:function(A,e,t){e.Z=t.p+"assets/images/first-log-in-b73ff63946b8151876fab25ef2760dfe.png"},3208:function(A,e,t){e.Z=t.p+"assets/images/harvester-ui-f12714620c952bfff5fc268c70749c9f.png"},6800:function(A,e,t){e.Z=t.p+"assets/images/iso-install-9e651f43c357cd7c1c88d15fb72e796a.png"},7700:function(A,e,t){e.Z=t.p+"assets/images/iso-installed-9738c7789df4a9338e7b4b4c16397079.png"},2621:function(A,e){e.Z="data:image/png;base64,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21a43MS/pif+fbmnPtADny6ROZDtt7eyeLb527uyPgECBAgQIEBgMIH0d7+Ln6/+ditVAr7RqzA+USw/nPED+on1rEGAAAECBAgQIECAwPUEJHofPvP4FcQ64Yu2D2/FcgQIECBAgAABAgQInFTAP6/whYOV2H0B3ZIECBAgQIAAAQIELiQg0bvQYXvUAwikA+zBFggQIECAAAECBE4v4Fc3T3/EHpAAAQIECBAgQIAAgasJSPSuduKelwABAgQIECBAgACB0wtI9E5/xB6QAAECBAgQIECAAIGrCUj0rnbinpcAAQIECBAgQIAAgdMLSPROf8QekAABAgQIECBAgACBqwlI9K524p6XAAECBAgQIECAAIHTC/jnFU5/xB7w2wI5529vwfoECBAgQIAAAQIXE/g1Pe/viz2zxyVAgAABAgQIECBAgMCpBfzq5qmP18MRIECAAAECBAgQIHBFAYneFU/dMxMgQIAAAQIECBAgcGoBid6pj9fDESBAgAABAgQIECBwRQGJ3hVP3TMTIECAAAECBAgQIHBqAYneqY/XwxEgQIAAAQIECBAgcEUBid4VT90zEyBAgAABAgQIECBwagGJ3qmP18MRIECAAAECBAgQIHBFAYneFU/dMxMgQIAAAQIECBAgcGoBid6pj9fDESBAgAABAgQIECBwRQGJ3hVP3TMTIECAAAECBAgQIHBqAYneqY/XwxEgQIAAAQIECBAgcEUBid4VT90zEyBAgAABAgQIECBwagGJ3qmP18MRIECAAAECBAgQIHBFAYneFU/dMxMgQIAAAQIECBAgcGqB/079dB6OwBcFcs5fXN3SBAgQIECAAIHzCqSUzvtwL3oyid6LIE1DYE3AH0RrMtoJECBAgAABAtsE/I/0fi+/utlvJZIAAQIECBAgQIAAAQJDCEj0hjgmmyRAgAABAgQIECBAgEC/gESv30okAQIECBAgQIAAAQIEhhCQ6A1xTDZJgAABAgQIECBAgACBfgGJXr+VSAIECBAgQIAAAQIECAwhINEb4phskgABAgQIECBAgAABAv0CEr1+K5EECBAgQIAAAQIECBAYQsC/ozfEMdnkaQTyaZ7EgzwjkJ4ZZAwBAgQIECBAYLuAb/S2mxlBgAABAgQIECBAgACBQwtc9hu9nPM/B5NSutXb9giK/qj33mO+3vFL8UttPeuXce26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Bfx+FKSfAAECBAgQIECAAAECBMYR8Kub45yVnRIgQIAAAQIECBAgQKBLQKLXxSSIAAECBAgQIECAAAEC4whI9MY5KzslQIAAAQIECBAgQIBAl4BEr4tJEAECBAgQIECAAAECBMYRkOiNc1Z2SoAAAQIECBAgQIAAgS4BiV4XkyACBAgQIECAAAECBAiMIyDRG+es7JQAAQIECBAgQIAAAQJdAhK9LiZBBAgQIECAAAECBAgQGEdAojfOWdkpAQIECBAgQIAAAQIEugQkel1MgggQIECAAAECBAgQIDCOgERvnLOyUwIECBAgQIAAAQIECHQJSPS6mAQRIECAAAECBAgQIEBgHAGJ3jhnZacECBAgQIAAAQIECBDoEpDodTEJIkCAAAECBAgQIECAwDgCEr1xzspOCRAgQIAAAQIECBAg0CUg0etiEkSAAAECBAgQIECAAIFxBCR645yVnRIgQIAAAQIECBAgQKBLQKLXxSSIAAECBAgQIECAAAEC4whI9MY5KzslQIAAAQIECBAgQIBAl4BEr4tJEAECBAgQIECAAAECBMYRkOiNc1Z2SoAAAQIECBAgQIAAgS4BiV4XkyACBAgQIECAAAECBAiMIyDRG+es7JQAAQIECBAgQIAAAQJdAhK9LiZBBAgQIECAAAECBAgQGEdAojfOWdkpAQIECBAgQIAAAQIEugQkel1MgggQIECAAAECBAgQIDCOgERvnLOyUwIECBAgQIAAAQIECHQJSPS6mAQRIECAAAECBAgQIEBgHAGJ3jhnZacECBAgQIAAAQIECBDoEpDodTEJIkCAAAECBAgQIECAwDgCEr1xzspOCRAgQIAAAQIECBAg0CUg0etiEkSAAAECBAgQIECAAIFxBCR645yVnRIgQIAAAQIECBAgQKBLQKLXxSSIAAECBAgQIECAAAEC4whI9MY5KzslQIAAAQIECBAgQIBAl4BEr4tJEAECBAgQIECAAAECBMYRkOiNc1Z2SoAAAQIECBAgQIAAgS4BiV4XkyACBAgQIECAAAECBAiMIyDRG+es7JQAAQIECBAgQIAAAQJdAhK9LiZBBAgQIECAAAECBAgQGEdAojfOWdkpAQIECBAgQIAAAQIEugQkel1MgggQIECAAAECBAgQIDCOgERvnLOyUwIECBAgQIAAAQIECHQJSPS6mAQRIECAAAECBAgQIEBgHAGJ3jhnZacECBAgQIAAAQIECBDoEpDodTEJIkCAAAECBAgQIECAwDgCEr1xzspOCRAgQIAAAQIECBAg0CUg0etiEkSAAAECBAgQIECAAIFxBCR645yVnRIgQIAAAQIECBAgQKBLQKLXxSSIAAECBAgQIECAAAEC4whI9MY5KzslQIAAAQIECBAgQIBAl4BEr4tJEAECBAgQIECAAAECBMYRkOiNc1Z2SoAAAQIECBAgQIAAgS4BiV4XkyACBAgQIECAAAECBAiMIyDRG+es7JQAAQIECBAgQIAAAQJdAhK9LiZBBAgQIECAAAECBAgQGEdAojfOWdkpAQIECBAgQIAAAQIEugQkel1MgggQIECAAAECBAgQIDCOgERvnLOyUwIECBAgQIAAAQIECHQJSPS6mAQRIECAAAECBAgQIEBgHAGJ3jhnZacECBAgQIAAAQIECBDoEpDodTEJIkCAAAECBAgQIECAwDgCEr1xzspOCRAgQIAAAQIECBAg0CUg0etiEkSAAAECBAgQIECAAIFxBCR645yVnRIgQIAAAQIECBAgQKBLQKLXxSSIAAECBAgQIECAAAEC4whI9MY5KzslQIAAAQIECBAgQIBAl4BEr4tJEAECBAgQIECAAAECBMYRkOiNc1Z2SoAAAQIECBAgQIAAgS4BiV4XkyACBAgQIECAAAECBAiMIyDRG+es7JQAAQIECBAgQIAAAQJdAhK9LiZBBAgQIECAAAECBAgQGEdAojfOWdkpAQIECBAgQIAAAQIEugT+P7RIrNEjcbrCAAAAAElFTkSuQmCC"}}]);