import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { Input } from "./styles";
import ReactGA from "react-ga";

const SelectBar = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Input
        type="input"
        placeholder="Find my class"
        onChange={(e) => setQuery(e.target.value)}
        onClick={() => {
          ReactGA.event({
            category: "Search",
            action: "Click",
          });
        }}
      />
      {query != ""
        ? options
            .filter((obj) =>
              obj.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((obj, index) => (
              <div key={index}>
                {index < 6 ? (
                  <ListItem
                    noGroupMe={obj.NoGroupMe}
                    key={index}
                    className={obj.name}
                    classLink={obj.link}
                  />
                ) : null}
              </div>
            ))
        : null}
      <br />
    </>
  );
};

export default SelectBar;

const options = [
  {
    name: "AAS 208 - Miller",
    link: "https://app.groupme.com/join_group/65166332/jv13Xs0G",
  },
  {
    name: "AAS 426 - Murray",
    link: "https://app.groupme.com/join_group/65166394/mBqB8gtC",
  },
  {
    name: "AAS 104 - Pearson",
    link: "https://app.groupme.com/join_group/65166428/cLMEy8W5",
  },
  {
    name: "AAS 458 - Ricco",
    link: "https://app.groupme.com/join_group/65166471/WClTbNyL",
  },
  {
    name: "ACC 301 - Oswald",
    link: "https://app.groupme.com/join_group/65166524/RMLINBAq",
  },
  {
    name: "ACC 301 - Kama",
    link: "https://app.groupme.com/join_group/65166526/OSwyKUEH",
  },
  {
    name: "ACC 301 - Drogt",
    link: "https://app.groupme.com/join_group/65166528/sfnzInYL",
  },
  {
    name: "ACC 301 - Williams",
    link: "https://app.groupme.com/join_group/65166530/8APHQrxf",
  },
  {
    name: "ACC 312 - Ball",
    link: "https://app.groupme.com/join_group/65166532/aiUhVgYj",
  },
  {
    name: "ACC 471 - Williams",
    link: "https://app.groupme.com/join_group/65166544/2cW96zFv",
  },
  {
    name: "AEROSP 200 - Halow",
    link: "https://app.groupme.com/join_group/65166600/pdHj6Qa0",
  },
  {
    name: "AEROSP 201 - Cutler",
    link: "https://app.groupme.com/join_group/65166604/V8TjOCGf",
  },
  {
    name: "AEROSP 205 - Washabaugh",
    link: "https://app.groupme.com/join_group/65166607/sgnCwfIJ",
  },
  {
    name: "AEROSP 215 - Sodano",
    link: "https://app.groupme.com/join_group/65166610/zuUaBjNd",
  },
  {
    name: "AEROSP 225 - Powell",
    link: "https://app.groupme.com/join_group/65166611/SaY1fQsZ",
  },
  {
    name: "AEROSP 315 - Friedmann",
    link: "https://app.groupme.com/join_group/65166614/KqGqbCgx",
  },
  {
    name: "AEROSP 325 - Fidkowski",
    link: "https://app.groupme.com/join_group/65166616/avWkmah3",
  },
  {
    name: "AEROSP 335 - Jorns",
    link: "https://app.groupme.com/join_group/65166620/dweYXP6m",
  },
  {
    name: "AEROSP 423 - Fidkowski",
    link: "https://app.groupme.com/join_group/65166628/agcHhu6B",
  },
  {
    name: "AEROSP 548 - Kolmanovsky",
    link: "https://app.groupme.com/join_group/65166667/eJ9IEm4U",
  },
  {
    name: "AES 218 - Harris",
    link: "https://app.groupme.com/join_group/65166685/GDPTJc3V",
  },
  {
    name: "AES 218 - Winkelseth",
    link: "https://app.groupme.com/join_group/65166688/wKjNdg1e",
  },
  {
    name: "AES 220 - Bodary",
    link: "https://app.groupme.com/join_group/65166690/fMauyP1B",
  },
  {
    name: "AES 241 - Bodary",
    link: "https://app.groupme.com/join_group/65166693/1B8Ex1xZ",
  },
  {
    name: "ALA 109 - Eickmeyer",
    link: "https://app.groupme.com/join_group/65166750/6QS87ZzJ",
  },
  {
    name: "ALA 170 - McKay, Curzan",
    link: "https://app.groupme.com/join_group/65166760/IpZptc6i",
  },
  {
    name: "ALA 240 - Jansen",
    link: "https://app.groupme.com/join_group/65166767/8nvceGjL",
  },
  {
    name: "ALA 240 - Pehlke | she/her",
    link: "https://app.groupme.com/join_group/65166769/NV7q5L3U",
  },
  {
    name: "ALA 264 - Finn",
    link: "https://app.groupme.com/join_group/65166773/cdlXbDgq",
  },
  {
    name: "ALA 270 - Ludwig",
    link: "https://app.groupme.com/join_group/65166779/64zEhLub",
  },
  {
    name: "ALA 370 - Finn",
    link: "https://app.groupme.com/join_group/65166809/OQY2hHx5",
  },
  {
    name: "ALA 122 - Hicks",
    link: "https://app.groupme.com/join_group/65166816/E8SPuXKW",
  },
  {
    name: "ALA 171 - Gurin",
    link: "https://app.groupme.com/join_group/65166822/LoE0ho0O",
  },
  {
    name: "ALA 220",
    link: "https://app.groupme.com/join_group/65166825/mBdPtkY2",
  },
  {
    name: "AMCULT 201 - Larson",
    link: "https://app.groupme.com/join_group/65166859/YRIYa52b",
  },
  {
    name: "AMCULT 212 - Calvo-Quiros",
    link: "https://app.groupme.com/join_group/65166872/WgEjiEBp",
  },
  {
    name: "AMCULT 214 - Stillman",
    link: "https://app.groupme.com/join_group/65166873/1jdgWpB0",
  },
  {
    name: "AMCULT 235 - Cable",
    link: "https://app.groupme.com/join_group/65166874/1JZygTlg",
  },
  {
    name: "AMCULT 240 - Dumes",
    link: "https://app.groupme.com/join_group/65166876/AsiyO1WK",
  },
  {
    name: "AMCULT 263 - Berrey",
    link: "https://app.groupme.com/join_group/65166880/UhlsYZST",
  },
  {
    name: "AMCULT 353 - Lawsin",
    link: "https://app.groupme.com/join_group/65166909/E6VaS2iE",
  },
  {
    name: "ANATOMY 303 - Sullivan, Alsup, Fox",
    link: "https://app.groupme.com/join_group/65166976/GPsri7pL",
  },
  {
    name: "ANATOMY 403 - Sullivan, Barnosky, Kingston, Orczykowski",
    link: "https://app.groupme.com/join_group/65166977/jeMKM6bb",
  },
  {
    name: "ANATOMY 541",
    link: "https://app.groupme.com/join_group/65166978/1sQBiYIO",
  },
  {
    name: "ANTHRARC 384 - Beckman",
    link: "https://app.groupme.com/join_group/65187543/bmhptO8V",
  },
  {
    name: "ANTHRARC 386 - Ventresca Miller",
    link: "https://app.groupme.com/join_group/65187547/6DoecwJb",
  },
  {
    name: "ANTHRBIO 201 - Rosenbaum",
    link: "https://app.groupme.com/join_group/65187557/3T3KF82c",
  },
  {
    name: "ANTHRBIO 364 - Devlin",
    link: "https://app.groupme.com/join_group/65187560/NlkIZKaJ",
  },
  {
    name: "ANTHRCUL 101 - Stuckey",
    link: "https://app.groupme.com/join_group/65187585/UAvsvQz2",
  },
  {
    name: "ANTHRCUL 101 - Chivens",
    link: "https://app.groupme.com/join_group/65187587/oXzBj07y",
  },
  {
    name: "ANTHRCUL 226 - Frye",
    link: "https://app.groupme.com/join_group/65187589/zi4vCf8z",
  },
  {
    name: "ANTHRCUL 252 - Dua",
    link: "https://app.groupme.com/join_group/65187593/xsA61j44",
  },
  {
    name: "ANTHRCUL 272 - Lempert",
    link: "https://app.groupme.com/join_group/65187595/bZuoKJGW",
  },
  {
    name: "ANTHRCUL 331 - Akin",
    link: "https://app.groupme.com/join_group/65187609/BRBVevc1",
  },
  {
    name: "ANTHRCUL 332 - Keane",
    link: "https://app.groupme.com/join_group/65187612/BQGeMDlD",
  },
  {
    name: "ANTHRCUL 344 - Peters-Golden",
    link: "https://app.groupme.com/join_group/65187648/FGAsk7K5",
  },
  {
    name: "ANTHRCUL 370 - Namboodiripad",
    link: "https://app.groupme.com/join_group/65187650/MIP0Mq1O",
  },
  {
    name: "ARABAM 330 - Stiffler",
    link: "https://app.groupme.com/join_group/65187713/F5CbCmKU",
  },
  {
    name: "ARABIC 102 - Beebani",
    link: "https://app.groupme.com/join_group/65187752/TH1XF3hU",
  },
  {
    name: "ARCH 215 - Zimmerman",
    link: "https://app.groupme.com/join_group/65187784/8w4fQnj4",
  },
  {
    name:
      "ARTDES 125 - Kumao, White, Manos, Brauer, White, Yang, Clegg, Frelinghuysen",
    link: "https://app.groupme.com/join_group/65187978/N1CrhLQq",
  },
  {
    name: "ARTDES 151 - Funkenstein",
    link: "https://app.groupme.com/join_group/65187982/t21oastC",
  },
  {
    name: "ARTDES 160 - Burgard",
    link: "https://app.groupme.com/join_group/65187985/cwOjy9ms",
  },
  {
    name: "ARTDES 275",
    link: "https://app.groupme.com/join_group/65188040/dtaE8f6k",
  },
  {
    name: "ASIAN 205 - Cassel",
    link: "https://app.groupme.com/join_group/65188181/bTbAP58I",
  },
  {
    name: "ASIAN 225 - Brick",
    link: "https://app.groupme.com/join_group/65188182/hVy78MD7",
  },
  {
    name: "ASIAN 230 - Lopez Jr",
    link: "https://app.groupme.com/join_group/65188185/XI8y240R",
  },
  {
    name: "ASIAN 231 - Ujeed, Lopez Jr",
    link: "https://app.groupme.com/join_group/65188190/gNzu6v42",
  },
  {
    name: "ASIAN 248 - de la Cruz",
    link: "https://app.groupme.com/join_group/65188195/3AGgl9Hk",
  },
  {
    name: "ASIAN 258 - Brown",
    link: "https://app.groupme.com/join_group/65188196/a3MT4vcG",
  },
  {
    name: "ASIAN 259 - Sinha",
    link: "https://app.groupme.com/join_group/65188199/ocKFobZS",
  },
  {
    name: "ASIAN 371 - Ahn",
    link: "https://app.groupme.com/join_group/65188249/g8y88WOa",
  },
  {
    name: "ASIAN 377 - Ryu",
    link: "https://app.groupme.com/join_group/65188252/eYvpsmay",
  },
  {
    name: "ASIAN 271 - Oh",
    link: "https://app.groupme.com/join_group/65188270/jEmxqRLB",
  },
  {
    name: "ASIAN 334 - Mandair",
    link: "https://app.groupme.com/join_group/65188280/exqmWbkJ",
  },
  {
    name: "ASIAN 338 - Ujeed",
    link: "https://app.groupme.com/join_group/65188283/Ud2WRjah",
  },
  {
    name: "ASIANLAN 136 - Jung",
    link: "https://app.groupme.com/join_group/65188341/hou6AdWp",
  },
  {
    name: "ASIANLAN 226 - Sakakibara",
    link: "https://app.groupme.com/join_group/65188345/mvNYrXB4",
  },
  {
    name: "ASIANLAN 102 - Li-Stevenson",
    link: "https://app.groupme.com/join_group/65188354/RTQWv7WL",
  },
  {
    name: "ASIANLAN 126 - Sogabe",
    link: "https://app.groupme.com/join_group/65188407/ZV8AAxnc",
  },
  {
    name: "ASIANLAN 202 - Zhong",
    link: "https://app.groupme.com/join_group/65188433/v1xJLbm4",
  },
  {
    name: "ASIANLAN 204 - Gu",
    link: "https://app.groupme.com/join_group/65188441/R0uzdR7O",
  },
  {
    name: "ASIANLAN 204 - Liu",
    link: "https://app.groupme.com/join_group/65188443/g7U7xJyQ",
  },
  {
    name: "ASIANLAN 302 - Liu",
    link: "https://app.groupme.com/join_group/65198668/E4a7BDDx",
  },
  {
    name: "ASIANLAN 304 - Levin",
    link: "https://app.groupme.com/join_group/65198678/TmfQZ32G",
  },
  {
    name: "ASIANPAM 214 - Stillman",
    link: "https://app.groupme.com/join_group/65199157/pCkM7reO",
  },
  {
    name: "ASTRO 101 - Bell, Lopresto",
    link: "https://app.groupme.com/join_group/65201154/jXovFQ0H",
  },
  {
    name: "ASTRO 102 - Corrales, Richstone",
    link: "https://app.groupme.com/join_group/65201165/4JIw0wpH",
  },
  {
    name: "ASTRO 105 - Oey",
    link: "https://app.groupme.com/join_group/65201180/BPMT25ai",
  },
  {
    name: "ASTRO 106 - Miller",
    link: "https://app.groupme.com/join_group/65201184/VwzKmmVv",
  },
  {
    name: "ASTRO 107 - Sharon",
    link: "https://app.groupme.com/join_group/65201192/7aXuNGjl",
  },
  {
    name: "ASTRO 115 - Monnier",
    link: "https://app.groupme.com/join_group/65201227/NpBvtsze",
  },
  {
    name: "ASTRO 401 - Rauscher",
    link: "https://app.groupme.com/join_group/65201296/vak4MLRQ",
  },
  {
    name: "ASTRO 220 - Reynolds",
    link: "https://app.groupme.com/join_group/65201331/qg613iGW",
  },
  {
    name: "BA 100 - Orhun",
    link: "https://app.groupme.com/join_group/65201597/1Nsnzav9",
  },
  {
    name: "BA 100 - Wooten",
    link: "https://app.groupme.com/join_group/65201607/wFaEYRjd",
  },
  {
    name: "BCOM 250 - Crawford",
    link: "https://app.groupme.com/join_group/65201910/No2wLQMz",
  },
  {
    name: "BCOM 250 - Schantz",
    link: "https://app.groupme.com/join_group/65201920/xh6h45fj",
  },
  {
    name: "BCOM 250 - Kotzian",
    link: "https://app.groupme.com/join_group/65201932/0zo0xNBI",
  },
  {
    name: "BCOM 250 - Morrow",
    link: "https://app.groupme.com/join_group/65201944/9jeZQDsW",
  },
  {
    name: "BCOM 250 - Hinesly",
    link: "https://app.groupme.com/join_group/65201953/CQEdagwI",
  },
  {
    name: "BCOM 250 - Galifianakis",
    link: "https://app.groupme.com/join_group/65201965/RLd9anW4",
  },
  {
    name: "BCOM 250 - Wisner",
    link: "https://app.groupme.com/join_group/65201972/m3TmC7cO",
  },
  {
    name: "BCOM 250 - Broucek",
    link: "https://app.groupme.com/join_group/65201984/SM89pON3",
  },
  {
    name: "BE 300 - Rhodes",
    link: "https://app.groupme.com/join_group/65202484/Ae1ccgzr",
  },
  {
    name: "BE 300 - Peralta",
    link: "https://app.groupme.com/join_group/65202496/eX5xGZD9",
  },
  {
    name: "BIOLCHEM 415 - Ninfa, Saper, Lamanna",
    link: "https://app.groupme.com/join_group/65202721/exVKunwN",
  },
  {
    name: "BIOLOGY 109 - Lehman",
    link: "https://app.groupme.com/join_group/65202829/IHQEQtxB",
  },
  {
    name: "BIOLOGY 112 - Carpenter",
    link: "https://app.groupme.com/join_group/65202841/gc5vgUlN",
  },
  {
    name: "BIOLOGY 121 - Klionsky",
    link: "https://app.groupme.com/join_group/65202860/c50ifL2L",
  },
  {
    name: "BIOLOGY 121 - Ameziane",
    link: "https://app.groupme.com/join_group/65202869/OVJIMBMA",
  },
  {
    name: "BIOLOGY 130 - Tibbetts",
    link: "https://app.groupme.com/join_group/65202878/cJSdHgFM",
  },
  {
    name: "BIOLOGY 171 - Kurdziel",
    link: "https://app.groupme.com/join_group/65202888/3JGCh683",
  },
  {
    name: "BIOLOGY 171 - Giffen",
    link: "https://app.groupme.com/join_group/65202901/ArkOZtTP",
  },
  {
    name: "BIO 172",
    link: "https://app.groupme.com/join_group/65202911/Q1jCWvSt",
  },
  {
    name: "BIOLOGY 173 - Ammerlaan",
    link: "https://app.groupme.com/join_group/65202927/C0QiuleP",
  },
  {
    name: "BIOLOGY 197 - Carpenter",
    link: "https://app.groupme.com/join_group/65202935/LoJhFIwy",
  },
  {
    name: "BIOLOGY 205 - Cadigan, Buttitta",
    link: "https://app.groupme.com/join_group/65202941/Sfm4oiMg",
  },
  {
    name: "BIOLOGY 207 - Huffnagle, Vecchiarelli",
    link: "https://app.groupme.com/join_group/65202953/FE7XMY7I",
  },
  {
    name: "BIOLOGY 222 - Hume, Kwon",
    link: "https://app.groupme.com/join_group/65203435/Rfx2uYbS",
  },
  {
    name: "BIOLOGY 225 - Xu, Casey, Haenfler",
    link: "https://app.groupme.com/join_group/65203443/qCJCQe8O",
  },
  {
    name: "BIOLOGY 256 - Eidietis",
    link: "https://app.groupme.com/join_group/65203454/zHtylAx2",
  },
  {
    name: "BIOLOGY 281 - Sanders",
    link: "https://app.groupme.com/join_group/65203469/cXzn6bXX",
  },
  {
    name: "BIOLOGY 305 - Wierzbicki, Green",
    link: "https://app.groupme.com/join_group/65203488/r16mtT63",
  },
  {
    name: "BIOLOGY 172",
    link: "https://app.groupme.com/join_group/65203514/WYPQYxAy",
  },
  {
    name: "BIOLOGY 305",
    link: "https://app.groupme.com/join_group/65203519/BMS9ML3C",
  },
  {
    name: "BIOLOGY 120 - Kondrashov",
    link: "https://app.groupme.com/join_group/65203546/6gohNnIv",
  },
  {
    name: "BIOMEDE 211 - Belmont",
    link: "https://app.groupme.com/join_group/65203555/Tk6MGHeO",
  },
  {
    name: "BIOMEDE 221 - Wrobel",
    link: "https://app.groupme.com/join_group/65203563/0zgd9V0g",
  },
  {
    name: "BIOMEDE 231 - Louttit",
    link: "https://app.groupme.com/join_group/65203571/H669iTwt",
  },
  {
    name: "BIOMEDE 241 - Chesney, Arnold",
    link: "https://app.groupme.com/join_group/65203586/9ZfIQh2A",
  },
  {
    name: "BIOMEDE 321 - Giessen",
    link: "https://app.groupme.com/join_group/65203599/4jJvRQwG",
  },
  {
    name: "BIOMEDE 350 - Wang, Louttit",
    link: "https://app.groupme.com/join_group/65203612/FJefz2WQ",
  },
  {
    name: "BIOMEDE 418 - Nagrath",
    link: "https://app.groupme.com/join_group/65203624/YDKCDqZZ",
  },
  {
    name: "BIOMEDE 442 - Xu",
    link: "https://app.groupme.com/join_group/65203635/kNBLFBDp",
  },
  {
    name: "BIOMEDE 499 - Chandrasekaran",
    link: "https://app.groupme.com/join_group/65204065/bDoABPP2",
  },
  {
    name: "BIOMEDE 458",
    link: "https://app.groupme.com/join_group/65204161/F2XAWLWO",
  },
  {
    name: "BIOPHYS 290 - Zochowski",
    link: "https://app.groupme.com/join_group/65204187/C1FBLXm1",
  },
  {
    name: "BIOPHYS 420 - Guerra",
    link: "https://app.groupme.com/join_group/65204218/mqiBhkui",
  },
  {
    name: "CEE 211 - Bernardini",
    link: "https://app.groupme.com/join_group/65204777/cH6kgiNb",
  },
  {
    name: "CEE 212 - Filipov",
    link: "https://app.groupme.com/join_group/65204787/spUFg8T2",
  },
  {
    name: "CEE 265 - MacVean",
    link: "https://app.groupme.com/join_group/65204790/qhXgJwos",
  },
  {
    name: "CEE 345 - Hryciw, Sulewski",
    link: "https://app.groupme.com/join_group/65204806/V49xWQKm",
  },
  {
    name: "CEE 375",
    link: "https://app.groupme.com/join_group/65204815/NXE7sQuI",
  },
  {
    name: "CEE 402 - Daigger",
    link: "https://app.groupme.com/join_group/65204829/Amq3UuP9",
  },
  {
    name: "CEE 465 - Love",
    link: "https://app.groupme.com/join_group/65204841/r7ArkP0f",
  },
  {
    name: "CEE 200 - Ioannou",
    link: "https://app.groupme.com/join_group/65205196/RSC3ncbj",
  },
  {
    name: "CEE 303",
    link: "https://app.groupme.com/join_group/65205215/ikNuT3n6",
  },
  {
    name: "CEE 325",
    link: "https://app.groupme.com/join_group/65205222/PoMn0bXl",
  },
  {
    name: "CEE 331",
    link: "https://app.groupme.com/join_group/65205234/bjL4rb1e",
  },
  {
    name: "CEE 366",
    link: "https://app.groupme.com/join_group/65205250/ua4YaNFK",
  },
  {
    name: "CEE 415",
    link: "https://app.groupme.com/join_group/65205260/0VCy4mKy",
  },
  {
    name: "CEE 450",
    link: "https://app.groupme.com/join_group/65205271/DgSoGN3g",
  },
  {
    name: "CHEM 105 - Flanner",
    link: "https://app.groupme.com/join_group/65206392/82ThLjUP",
  },
  {
    name: "CHEM 125",
    link: "https://app.groupme.com/join_group/65206409/m9NiSZsA",
  },
  {
    name: "CHEM 130",
    link: "https://app.groupme.com/join_group/65206451/QCPWEIcO",
  },
  {
    name: "CHEM 210 - Tuttle",
    link: "https://app.groupme.com/join_group/65206482/rxD0HWkr",
  },
  {
    name: "CHEM 210 - Wang",
    link: "https://app.groupme.com/join_group/65206491/nKWAq0KE",
  },
  {
    name: "CHEM 211 - Nolta",
    link: "https://app.groupme.com/join_group/65206503/4xfP9TRd",
  },
  {
    name: "CHEM 215 - Albright",
    link: "https://app.groupme.com/join_group/65206518/irZYL7vW",
  },
  {
    name: "CHEM 215 - Wolfe",
    link: "https://app.groupme.com/join_group/65206527/vHrmJjUL",
  },
  {
    name: "CHEM 216 - Kiernicki",
    link: "https://app.groupme.com/join_group/65206535/svMfPuEB",
  },
  {
    name: "CHEM 216 - Shultz",
    link: "https://app.groupme.com/join_group/65206547/XlYX8ijY",
  },
  {
    name: "CHEM 230 - Penner-Hahn",
    link: "https://app.groupme.com/join_group/65206558/tusTAgOf",
  },
  {
    name: "CHEM 230 - Gottfried",
    link: "https://app.groupme.com/join_group/65206568/XwZO0O4Z",
  },
  {
    name: "CHEM 245 - Chen",
    link: "https://app.groupme.com/join_group/65206584/YVLN0dKt",
  },
  {
    name: "CHEM 260 - Zgid",
    link: "https://app.groupme.com/join_group/65206694/vJVfMSXQ",
  },
  {
    name: "CHEM 260 - Maldonado",
    link: "https://app.groupme.com/join_group/65206705/KP9YpaS4",
  },
  {
    name: "CHEM 262 - Geva",
    link: "https://app.groupme.com/join_group/65206730/aArYPI1W",
  },
  {
    name: "CHEM 302 - Bartlett",
    link: "https://app.groupme.com/join_group/65206732/NcXNFuLf",
  },
  {
    name: "CHEM 351 - Nolta",
    link: "https://app.groupme.com/join_group/65206751/kX8iiMsl",
  },
  {
    name: "CHEM 352 - Walter",
    link: "https://app.groupme.com/join_group/65206760/lm7iqFQ6",
  },
  {
    name: "CHEM 420 - Nagorny",
    link: "https://app.groupme.com/join_group/65206792/CLmckvCd",
  },
  {
    name: "CHEM 451 - Koutmos",
    link: "https://app.groupme.com/join_group/65206810/dVZ15G6J",
  },
  {
    name: "CHEM 452 - Trievel",
    link: "https://app.groupme.com/join_group/65206819/xJeWLL7y",
  },
  {
    name: "CHEM 214 - Tuttle",
    link: "https://app.groupme.com/join_group/65207050/y3yB1l9d",
  },
  {
    name: "CLARCH 389 - Stone",
    link: "https://app.groupme.com/join_group/65207143/0gfBSRmU",
  },
  {
    name: "CLARCH 375 - Margomenou",
    link: "https://app.groupme.com/join_group/65207166/BljlQe9s",
  },
  {
    name: "CLCIV 217 - Fortson",
    link: "https://app.groupme.com/join_group/65207226/AemyGoiq",
  },
  {
    name: "CLCIV 250 - Janko",
    link: "https://app.groupme.com/join_group/65207233/ZZqyVjex",
  },
  {
    name: "CLCIV 350 - Leontis",
    link: "https://app.groupme.com/join_group/65207361/EkmWy5Km",
  },
  {
    name: "CLCIV 350 - Soto Marin",
    link: "https://app.groupme.com/join_group/65207368/QDSx0cHk",
  },
  {
    name: "CLCIV 350 - Schironi",
    link: "https://app.groupme.com/join_group/65207397/PpelXPaj",
  },
  {
    name: "CLCIV 375 - Potter",
    link: "https://app.groupme.com/join_group/65207399/U2sZYVTm",
  },
  {
    name: "CLCIV 385 - Ratte",
    link: "https://app.groupme.com/join_group/65207428/CKNh3jSO",
  },
  {
    name: "CLCIV 389 - Ahbel-Rappe",
    link: "https://app.groupme.com/join_group/65207436/XWJxONef",
  },
  {
    name: "CLCIV 121 - Wood",
    link: "https://app.groupme.com/join_group/65207444/6sCRrnEM",
  },
  {
    name: "CLCIV 120 - Soto Marin",
    link: "https://app.groupme.com/join_group/65207457/1KYKUbCJ",
  },
  {
    name: "CLCIV 253 - Das",
    link: "https://app.groupme.com/join_group/65207472/Erev0410",
  },
  {
    name: "CLIMATE 105 - Flanner",
    link: "https://app.groupme.com/join_group/65207494/B1SsXrF4",
  },
  {
    name: "CMPLXSYS 270 - Johnson",
    link: "https://app.groupme.com/join_group/65207796/PlaAt9q6",
  },
  {
    name: "COGSCI 200 - Sripada",
    link: "https://app.groupme.com/join_group/65207833/0o5gfTHo",
  },
  {
    name: "COGSCI 301 - Bollard",
    link: "https://app.groupme.com/join_group/65207849/WojGelOn",
  },
  {
    name: "COMM 101 - Douglas",
    link: "https://app.groupme.com/join_group/65207856/RslTD4Hg",
  },
  {
    name: "COMM 102 - Campbell",
    link: "https://app.groupme.com/join_group/65207868/X0lB7Eg8",
  },
  {
    name: "COMM 221 - Pasek",
    link: "https://app.groupme.com/join_group/65207879/ijWi7ucC",
  },
  {
    name: "COMM 251 - Draper",
    link: "https://app.groupme.com/join_group/65207885/ztLZ5mmK",
  },
  {
    name: "COMM 281 - Dal Cin",
    link: "https://app.groupme.com/join_group/65207891/unTW2cOZ",
  },
  {
    name: "COMM 290 - Moshin",
    link: "https://app.groupme.com/join_group/65207902/wbRTGteG",
  },
  {
    name: "COMM 306 - Moshin",
    link: "https://app.groupme.com/join_group/65207908/YHqMDBQt",
  },
  {
    name: "COMM 307 - Hasell",
    link: "https://app.groupme.com/join_group/65207920/xZ2oYwUK",
  },
  {
    name: "COMM 307 - Lu",
    link: "https://app.groupme.com/join_group/65207925/ofOJWcgu",
  },
  {
    name: "COMM 362 - Sandvig",
    link: "https://app.groupme.com/join_group/65207952/mZaaxblZ",
  },
  {
    name: "COMM 370 - Drogos",
    link: "https://app.groupme.com/join_group/65207956/FtjiZ06a",
  },
  {
    name: "COMM 380 - Hart",
    link: "https://app.groupme.com/join_group/65207964/aBjgrbjo",
  },
  {
    name: "COMM 159 - Collings",
    link: "https://app.groupme.com/join_group/65208010/J8wnhWGN",
  },
  {
    name: "COMM 439 - Avila Sanchez",
    link: "https://app.groupme.com/join_group/65208140/hgO3ngSK",
  },
  {
    name: "COMPLIT 122 - Gaudyn",
    link: "https://app.groupme.com/join_group/65210753/MUkmy2YB",
  },
  {
    name: "COMPLIT 122 - Ogden",
    link: "https://app.groupme.com/join_group/65211305/ao5vSx1o",
  },
  {
    name: "DANCE 348 - Wilson",
    link: "https://app.groupme.com/join_group/65211478/aYZH092f",
  },
  {
    name: "DANCE 496 - Beck",
    link: "https://app.groupme.com/join_group/65211501/XtJixc5f",
  },
  {
    name: "DANCE 572 - Chavasse",
    link: "https://app.groupme.com/join_group/65211519/y4OfcmfE",
  },
  {
    name: "DANCE 595 - Chavasse",
    link: "https://app.groupme.com/join_group/65211527/qHMi9zbk",
  },
  {
    name: "DATASCI 101",
    link: "https://app.groupme.com/join_group/65211793/izrsNXt4",
  },
  {
    name: "DIGITAL 258 - Cornfeld",
    link: "https://app.groupme.com/join_group/65211874/wrUNO8Vr",
  },
  {
    name: "DIGITAL 333 - Fishman",
    link: "https://app.groupme.com/join_group/65211878/viUdSrBV",
  },
  {
    name: "EARTH 100 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65211973/kYkrh2DC",
  },
  {
    name: "EARTH 104 - Robbins",
    link: "https://app.groupme.com/join_group/65211975/70TxNVkS",
  },
  {
    name: "EARTH 108 - Yarce",
    link: "https://app.groupme.com/join_group/65211986/Oznz1WvL",
  },
  {
    name: "EARTH 109 - Cruz Da Silva Castro",
    link: "https://app.groupme.com/join_group/65211988/wZulgUFI",
  },
  {
    name: "EARTH 110 - Alt",
    link: "https://app.groupme.com/join_group/65211994/l7Tv2b5r",
  },
  {
    name: "EARTH 113 - Gleason",
    link: "https://app.groupme.com/join_group/65212000/8MxJCe34",
  },
  {
    name: "EARTH 114 - Gleason",
    link: "https://app.groupme.com/join_group/65212002/JOHSlqS7",
  },
  {
    name: "EARTH 119 - Lohmann",
    link: "https://app.groupme.com/join_group/65212004/CN6JlUeG",
  },
  {
    name: "EARTH 120 - Gleason",
    link: "https://app.groupme.com/join_group/65212010/NEnujWNi",
  },
  {
    name: "EARTH 130 - Spica",
    link: "https://app.groupme.com/join_group/65212046/QuT5C9pC",
  },
  {
    name: "EARTH 172 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65212052/MqyTcBgt",
  },
  {
    name: "EARTH 205 - Ruff",
    link: "https://app.groupme.com/join_group/65212054/AErZx37C",
  },
  {
    name: "EARTH 219 - Demers",
    link: "https://app.groupme.com/join_group/65212057/J4zVf3Yk",
  },
  {
    name: "EARTH 222 - Arbic",
    link: "https://app.groupme.com/join_group/65212060/ZDR27S61",
  },
  {
    name: "EARTH 314 - Ritsema",
    link: "https://app.groupme.com/join_group/65212072/ECfu3p1b",
  },
  {
    name: "EARTH 331 - Passey",
    link: "https://app.groupme.com/join_group/65212079/qPVXWCPG",
  },
  {
    name: "EARTH 351 - van der Pluijm",
    link: "https://app.groupme.com/join_group/65212083/SFc3uW4a",
  },
  {
    name: "EARTH 380 - Simon",
    link: "https://app.groupme.com/join_group/65212084/cjgXFqof",
  },
  {
    name: "EAS 475 - Hall",
    link: "https://app.groupme.com/join_group/65212192/UPCbU3Kg",
  },
  {
    name: "ECON 101 - Zamzow",
    link: "https://app.groupme.com/join_group/65212336/WmYTkBvD",
  },
  {
    name: "ECON 101 - Dudley",
    link: "https://app.groupme.com/join_group/65212339/uOGOHqag",
  },
  {
    name: "ECON 101 - Caldwell Jr",
    link: "https://app.groupme.com/join_group/65212341/i2KTo9Rn",
  },
  {
    name: "ECON 102 - Cho",
    link: "https://app.groupme.com/join_group/65212343/QUW2nuOb",
  },
  {
    name: "ECON 102 - Dudek",
    link: "https://app.groupme.com/join_group/65212344/DEgSbTLs",
  },
  {
    name: "ECON 251 - Sedo",
    link: "https://app.groupme.com/join_group/65212346/2603LFWb",
  },
  {
    name: "ECON 251 - Asenova",
    link: "https://app.groupme.com/join_group/65212348/2HBysvMh",
  },
  {
    name: "ECON 310 - Dudek",
    link: "https://app.groupme.com/join_group/65212354/vVEBKsu3",
  },
  {
    name: "ECON 395 - Hasanbasri",
    link: "https://app.groupme.com/join_group/65212359/xPCGPlzH",
  },
  {
    name: "ECON 396 - Dudek",
    link: "https://app.groupme.com/join_group/65212362/OptB6GEL",
  },
  {
    name: "ECON 398 - Peralta",
    link: "https://app.groupme.com/join_group/65212365/3holKQUg",
  },
  {
    name: "ECON 401 - Proulx",
    link: "https://app.groupme.com/join_group/65212367/UYHtTz9u",
  },
  {
    name: "ECON 402 - House",
    link: "https://app.groupme.com/join_group/65212369/QIo1hjaO",
  },
  {
    name: "ECON 409 - Liu",
    link: "https://app.groupme.com/join_group/65212371/FEb9O6u7",
  },
  {
    name: "ECON 412 - Blanco",
    link: "https://app.groupme.com/join_group/65212374/BTpAv4oT",
  },
  {
    name: "ECON 429 - Bound",
    link: "https://app.groupme.com/join_group/65212378/XVXcKd5p",
  },
  {
    name: "ECON 432 - Brown",
    link: "https://app.groupme.com/join_group/65212381/JSw0Lovq",
  },
  {
    name: "ECON 435 - Ottonello",
    link: "https://app.groupme.com/join_group/65212383/A37B20UQ",
  },
  {
    name: "ECON 441 - Bartelme",
    link: "https://app.groupme.com/join_group/65212386/B6dJgCAg",
  },
  {
    name: "ECON 451 - Hasanbasri",
    link: "https://app.groupme.com/join_group/65212389/AtYNDsnI",
  },
  {
    name: "ECON 452 - Hagemann",
    link: "https://app.groupme.com/join_group/65212391/Keji2ymA",
  },
  {
    name: "ECON 466 - Rotella",
    link: "https://app.groupme.com/join_group/65212393/gCpMV68x",
  },
  {
    name: "ECON 490 - Ke",
    link: "https://app.groupme.com/join_group/65212416/OrwnzAPj",
  },
  {
    name: "ECON 491 - Rhode",
    link: "https://app.groupme.com/join_group/65212418/AztdiJq9",
  },
  {
    name: "ECON 492 - Adams",
    link: "https://app.groupme.com/join_group/65212422/hr0Jw6bk",
  },
  {
    name: "ECON 102",
    link: "https://app.groupme.com/join_group/65212431/F0xh7smI",
  },
  {
    name: "ECON 108 - Proulx",
    link: "https://app.groupme.com/join_group/65212434/orczgQPt",
  },
  {
    name: "EDUC 212 - Spath",
    link: "https://app.groupme.com/join_group/65212446/dGdacyES",
  },
  {
    name: "EDUC 250 - Miller",
    link: "https://app.groupme.com/join_group/65212447/C7exbUQf",
  },
  {
    name: "EDUC 333 - Fishman",
    link: "https://app.groupme.com/join_group/65212451/24HH7zb2",
  },
  {
    name: "EDUC 119 - Santone",
    link: "https://app.groupme.com/join_group/65212500/TNkSf4BZ",
  },
  {
    name: "EDUC 462",
    link: "https://app.groupme.com/join_group/65212621/p067CtnG",
  },
  {
    name: "EEB 390 - Winger",
    link: "https://app.groupme.com/join_group/65212627/0yFgVQrm",
  },
  {
    name: "EEB 391 - Rabosky",
    link: "https://app.groupme.com/join_group/65212629/CT6f2wie",
  },
  {
    name: "EECS 183",
    link: "https://app.groupme.com/join_group/65212653/wyCFZiPU",
  },
  {
    name: "EECS 200 - Pierce",
    link: "https://app.groupme.com/join_group/65212655/kkJOOiQA",
  },
  {
    name: "EECS 201 - Nguyen",
    link: "https://app.groupme.com/join_group/65212656/kG49Ik7X",
  },
  {
    name: "EECS 215 - Afshari",
    link: "https://app.groupme.com/join_group/65212671/vgbZfQPS",
  },
  {
    name: "EECS 215 - Zhang",
    link: "https://app.groupme.com/join_group/65212673/CDGBfrcZ",
  },
  {
    name: "EECS 216 - Lafortune, Wakefield",
    link: "https://app.groupme.com/join_group/65212675/4nn6JIOA",
  },
  {
    name: "EECS 230 - Norris",
    link: "https://app.groupme.com/join_group/65212679/mX6M9exA",
  },
  {
    name: "EECS 270 - Shin",
    link: "https://app.groupme.com/join_group/65212682/KCE59m22",
  },
  {
    name: "EECS 280",
    link: "https://groupme.com/join_group/64407946/mIbNeVw6",
  },
  {
    name: "EECS 301 - Stark",
    link: "https://app.groupme.com/join_group/65212707/fAChfLfi",
  },
  {
    name: "EECS 311 - Najafi",
    link: "https://app.groupme.com/join_group/65212708/1LpOwW7T",
  },
  {
    name: "EECS 312 - Kim",
    link: "https://app.groupme.com/join_group/65212710/dQwflQkm",
  },
  {
    name: "EECS 314 - Ganago",
    link: "https://app.groupme.com/join_group/65212712/Kywosxro",
  },
  {
    name: "EECS 320 - Peterson",
    link: "https://app.groupme.com/join_group/65212715/zuFO7Ns8",
  },
  {
    name: "EECS 351 - Arbabjolfaei",
    link: "https://app.groupme.com/join_group/65212722/l5l1Vcmo",
  },
  {
    name: "EECS 370 - W21",
    link: "https://groupme.com/join_group/64468885/QXhBq5VK",
  },
  {
    name: "EECS 373 - Sample",
    link: "https://app.groupme.com/join_group/65212725/Xd1r0knh",
  },
  {
    name: "EECS 388 - Genkin, Honeyman",
    link: "https://app.groupme.com/join_group/65212744/U3h2jHQC",
  },
  {
    name: "EECS 398 - Kamil",
    link: "https://app.groupme.com/join_group/65212748/dfDWv35j",
  },
  {
    name: "EECS 403",
    link: "https://app.groupme.com/join_group/65212752/UVQpnHM9",
  },
  {
    name: "EECS 425 - Yoon",
    link: "https://app.groupme.com/join_group/65212757/BnmzPyLC",
  },
  {
    name: "EECS 440 - Hamilton",
    link: "https://app.groupme.com/join_group/65212764/oL7fNn43",
  },
  {
    name: "EECS 441 - Soloway",
    link: "https://app.groupme.com/join_group/65212766/e1C3vf1o",
  },
  {
    name: "EECS 442 - Fouhey",
    link: "https://app.groupme.com/join_group/65212770/KMb4bX3v",
  },
  {
    name: "EECS 442 - Johnson",
    link: "https://app.groupme.com/join_group/65212772/O5BMXB8x",
  },
  {
    name: "EECS 445",
    link: "https://groupme.com/join_group/64528097/BfalcdrG",
  },
  {
    name: "EECS 452 - Revzen",
    link: "https://app.groupme.com/join_group/65212777/g0EEDaid",
  },
  {
    name: "EECS 460 - Meerkov",
    link: "https://app.groupme.com/join_group/65212779/RW98W6e7",
  },
  {
    name: "EECS 461 - Cook",
    link: "https://app.groupme.com/join_group/65212780/K71prBrl",
  },
  {
    name: "EECS 470 - Beaumont",
    link: "https://app.groupme.com/join_group/65212785/I4fAlx8u",
  },
  {
    name: "EECS 475 - Cheraghchi",
    link: "https://app.groupme.com/join_group/65212786/crbUOXcX",
  },
  {
    name: "EECS 476 - Vahedian",
    link: "https://app.groupme.com/join_group/65212787/kIi5nyv5",
  },
  {
    name: "EECS 477 - Saranurak",
    link: "https://app.groupme.com/join_group/65212790/2G9gsf7i",
  },
  {
    name: "EECS 481 - Leach",
    link: "https://app.groupme.com/join_group/65212792/uwWFE0d1",
  },
  {
    name: "EECS 482 - Kasikci, Kapritsos, Chen",
    link: "https://app.groupme.com/join_group/65212807/h1uCxfoo",
  },
  {
    name: "EECS 483",
    link: "https://app.groupme.com/join_group/65212809/unDLpEWn",
  },
  {
    name: "EECS 483 - Tang",
    link: "https://app.groupme.com/join_group/65212810/TcjFRSlN",
  },
  {
    name: "EECS 484 - Almomani",
    link: "https://app.groupme.com/join_group/65212812/9hY1ARXH",
  },
  {
    name: "EECS 485",
    link: "https://groupme.com/join_group/64490953/ylXEGxOu",
  },
  {
    name: "EECS 486 - Mihalcea",
    link: "https://app.groupme.com/join_group/65212817/16AJfGdT",
  },
  {
    name: "EECS 491 - Madhyastha",
    link: "https://app.groupme.com/join_group/65212821/t7OLtcQo",
  },
  {
    name: "EECS 492 - Chai",
    link: "https://app.groupme.com/join_group/65212823/wvq1phjU",
  },
  {
    name: "EECS 493",
    link: "https://app.groupme.com/join_group/65212824/oxH7zpmT",
  },
  {
    name: "EECS 496 - Chesney",
    link: "https://app.groupme.com/join_group/65212832/QL8MwRSi",
  },
  {
    name: "EECS 497 - Ringenberg",
    link: "https://app.groupme.com/join_group/65212834/bbf9fziN",
  },
  {
    name: "EECS 498 - Mower Provost",
    link: "https://app.groupme.com/join_group/65212842/R3h9wP02",
  },
  {
    name: "EECS 545 - Lee",
    link: "https://app.groupme.com/join_group/65212891/hCQsg5yx",
  },
  {
    name: "EECS 300",
    link: "https://app.groupme.com/join_group/65212961/FRFIGKXR",
  },
  {
    name: "ENGLISH 203 - Portnoy she/her, Van Zanen",
    link: "https://app.groupme.com/join_group/65213048/6aJpByeH",
  },
  {
    name: "ENGLISH 258 - Levinson, Fox, Robertson",
    link: "https://app.groupme.com/join_group/65213053/i6BJnCyM",
  },
  {
    name: "ENGLISH 267 - Trevor",
    link: "https://app.groupme.com/join_group/65213055/yFIO6wMD",
  },
  {
    name: "ENGLISH 290 - Chamberlin",
    link: "https://app.groupme.com/join_group/65213059/XLCQzecn",
  },
  {
    name: "ENGLISH 313 - Lyons",
    link: "https://app.groupme.com/join_group/65213070/XLP0oiTi",
  },
  {
    name: "ENGLISH 313 - Martin",
    link: "https://app.groupme.com/join_group/65213071/jScfLizT",
  },
  {
    name: "ENGLISH 313 - Schey",
    link: "https://app.groupme.com/join_group/65213076/Yeof4mMi",
  },
  {
    name: "ENGLISH 362 - Cawkwell",
    link: "https://app.groupme.com/join_group/65213116/w6PHsqKU",
  },
  {
    name: "ENGLISH 124 - Van Cleve",
    link: "https://app.groupme.com/join_group/65213130/eBKe0JkM",
  },
  {
    name: "ENGLISH 124 - Dorman",
    link: "https://app.groupme.com/join_group/65213132/qHspKLbq",
  },
  {
    name: "ENGLISH 124 - Godfrey",
    link: "https://app.groupme.com/join_group/65213134/QXyMeqSH",
  },
  {
    name: "ENGLISH 124 - Frasure",
    link: "https://app.groupme.com/join_group/65213139/45cxpHQ0",
  },
  {
    name: "ENGLISH 124 - Strout",
    link: "https://app.groupme.com/join_group/65213141/4X1k1lF0",
  },
  {
    name: "ENGLISH 124 - Wilson",
    link: "https://app.groupme.com/join_group/65213151/CblJvICp",
  },
  {
    name: "ENGLISH 125 - Ratering",
    link: "https://app.groupme.com/join_group/65213192/CPikvh5E",
  },
  {
    name: "ENGLISH 125 - Thum-OBrien",
    link: "https://app.groupme.com/join_group/65213197/dqz8BhCf",
  },
  {
    name: "ENGLISH 125 - Wall",
    link: "https://app.groupme.com/join_group/65213200/kCsOYfGi",
  },
  {
    name: "ENGLISH 125 - Christman",
    link: "https://app.groupme.com/join_group/65213202/3MOHHSJr",
  },
  {
    name: "ENGLISH 125 - Falomo",
    link: "https://app.groupme.com/join_group/65213243/yuHvqp5l",
  },
  {
    name: "ENGLISH 125 - Burch",
    link: "https://app.groupme.com/join_group/65213320/GxvoM9n9",
  },
  {
    name: "ENGLISH 125 - Moody",
    link: "https://app.groupme.com/join_group/65213325/D1f2p51w",
  },
  {
    name: "ENGLISH 125 - Carlson",
    link: "https://app.groupme.com/join_group/65213328/IViVTMdi",
  },
  {
    name: "ENGLISH 126 - Romaine",
    link: "https://app.groupme.com/join_group/65213383/t8uQ1jms",
  },
  {
    name: "ENGLISH 223 - Argy",
    link: "https://app.groupme.com/join_group/65213405/POdGYLDQ",
  },
  {
    name: "ENGLISH 225 - Schutz",
    link: "https://app.groupme.com/join_group/65213431/hlkhgWr4",
  },
  {
    name: "ENGLISH 225 - Taylor III",
    link: "https://app.groupme.com/join_group/65213437/I7cScw5D",
  },
  {
    name: "ENGLISH 230 - Tolle",
    link: "https://app.groupme.com/join_group/65213472/rMuAmx55",
  },
  {
    name: "ENGLISH 298 - Lyons",
    link: "https://app.groupme.com/join_group/65213482/gt1aIg3B",
  },
  {
    name: "ENGLISH 298 - Nair",
    link: "https://app.groupme.com/join_group/65213487/vIDvIIoB",
  },
  {
    name: "ENGLISH 315 - Murphy",
    link: "https://app.groupme.com/join_group/65213495/HH6EYob7",
  },
  {
    name: "ENGLISH 140 - Nichols",
    link: "https://app.groupme.com/join_group/65213528/ylD7j092",
  },
  {
    name: "ENGLISH 323 - ODowd",
    link: "https://app.groupme.com/join_group/65213566/8dmbRFrp",
  },
  {
    name: "ENGLISH 323 - Byers",
    link: "https://app.groupme.com/join_group/65213568/c4cB1f2f",
  },
  {
    name: "ENGLISH 325 - Khleif",
    link: "https://app.groupme.com/join_group/65213577/BrGx08Pl",
  },
  {
    name: "ENGLISH 340 - White",
    link: "https://app.groupme.com/join_group/65213597/dhuLEjew",
  },
  {
    name: "ENGLISH 423 - ODowd",
    link: "https://app.groupme.com/join_group/65213610/ZnTHwn6G",
  },
  {
    name: "ENGR 100 - Cotel, Sulewski",
    link: "https://app.groupme.com/join_group/65213675/g2pH5p4R",
  },
  {
    name: "ENGR 100 - Alfano, Lewis",
    link: "https://app.groupme.com/join_group/65213678/7Ky7guZY",
  },
  {
    name: "ENGR 100 - Goldsmith, Zahn",
    link: "https://app.groupme.com/join_group/65213679/D7i8p4yb",
  },
  {
    name: "ENGR 100 - Albayrak Guralp, Snyder",
    link: "https://app.groupme.com/join_group/65213681/9CYK6F4Z",
  },
  {
    name: "ENGR 100 - Ku, Zahn",
    link: "https://app.groupme.com/join_group/65213683/ylll6JRT",
  },
  {
    name: "ENGR 100 - Zhong, Bowden",
    link: "https://app.groupme.com/join_group/65213686/lvmPpaxd",
  },
  {
    name: "ENGR 100 - Bozer, Grimble",
    link: "https://app.groupme.com/join_group/65213692/kUsxnPUb",
  },
  {
    name: "ENGR 100 - Mondisa, Vigiletti",
    link: "https://app.groupme.com/join_group/65213695/K1lzRKHd",
  },
  {
    name: "ENGR 100 - De Roo, Hogg Jr",
    link: "https://app.groupme.com/join_group/65213696/vTcsCl2V",
  },
  {
    name: "ENGR 101 - Burdick",
    link: "https://app.groupme.com/join_group/65213703/T3xb25Yp",
  },
  {
    name: "ENGR 101 - Alford",
    link: "https://app.groupme.com/join_group/65213706/nv72a7wU",
  },
  {
    name: "ENGR 230 - Dailey, Mateju",
    link: "https://app.groupme.com/join_group/65213708/tklznTYk",
  },
  {
    name: "ENGR 230 - Armstrong-Ceron, Mateju",
    link: "https://app.groupme.com/join_group/65213712/oF5IgxaP",
  },
  {
    name: "ENTR 390 - Narayan",
    link: "https://app.groupme.com/join_group/65214281/MpJ3tjlZ",
  },
  {
    name: "ENTR 390 - Seidl",
    link: "https://app.groupme.com/join_group/65214284/WRgIuNEB",
  },
  {
    name: "ENTR 390 - Bailey",
    link: "https://app.groupme.com/join_group/65214296/QXbNshjz",
  },
  {
    name: "ENTR 408 - Fidler",
    link: "https://app.groupme.com/join_group/65214298/xrLh2Wx0",
  },
  {
    name: "ENTR 411 - White",
    link: "https://app.groupme.com/join_group/65214349/sfNnKsIm",
  },
  {
    name: "ENTR 413 - Dacko",
    link: "https://app.groupme.com/join_group/65214371/cZo8n3Hx",
  },
  {
    name: "ENTR 490 - Dacko",
    link: "https://app.groupme.com/join_group/65214387/DukiiGDy",
  },
  {
    name: "ENTR 407 - Bacyinski",
    link: "https://app.groupme.com/join_group/65214498/ryAaBflv",
  },
  {
    name: "ENVIRON 111 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65214520/d8X3Dly3",
  },
  {
    name: "ENVIRON 112 - Levin",
    link: "https://app.groupme.com/join_group/65214525/kXGQ8o7d",
  },
  {
    name: "ENVIRON 201 - Benedict",
    link: "https://app.groupme.com/join_group/65214611/aiYAnvCM",
  },
  {
    name: "ENVIRON 208 - Soderstrom",
    link: "https://app.groupme.com/join_group/65214615/kS4eI3NX",
  },
  {
    name: "ENVIRON 235 - Moore",
    link: "https://app.groupme.com/join_group/65214651/iKZ3h1bh",
  },
  {
    name: "ENVIRON 350 - DAnieri",
    link: "https://app.groupme.com/join_group/65214719/yFajMRGZ",
  },
  {
    name: "ENVIRON 361 - De Young",
    link: "https://app.groupme.com/join_group/65214724/G9FJkohh",
  },
  {
    name: "ENVIRON 376 - Bouma",
    link: "https://app.groupme.com/join_group/65214735/kUNZHlfy",
  },
  {
    name: "ENVIRON 390 - Murphy",
    link: "https://app.groupme.com/join_group/65214758/mQfJTr8S",
  },
  {
    name: "ENVIRON 453 - Benedict",
    link: "https://app.groupme.com/join_group/65214887/fQSTGxCk",
  },
  {
    name: "ENVIRON 462 - DAnieri",
    link: "https://app.groupme.com/join_group/65214902/1UjK3N8G",
  },
  {
    name: "ENVIRON 475 - Hall",
    link: "https://app.groupme.com/join_group/65214936/Q6ux1km5",
  },
  {
    name: "ES 212 - Price",
    link: "https://app.groupme.com/join_group/65215217/KjT3yAqt",
  },
  {
    name: "ES 250 - Menon",
    link: "https://app.groupme.com/join_group/65215235/rughe9Ym",
  },
  {
    name: "FIN 302 - Lei",
    link: "https://app.groupme.com/join_group/65221846/7JpaYSaa",
  },
  {
    name: "FIN 300 - Sandulescu",
    link: "https://app.groupme.com/join_group/65221860/LMaQJtWT",
  },
  {
    name: "FIN 300 - Rashidi Ranjbar",
    link: "https://app.groupme.com/join_group/65221873/zGyDmCSz",
  },
  {
    name: "FIN 300 - Miller",
    link: "https://app.groupme.com/join_group/65221888/6ezQQ1Ga",
  },
  {
    name: "FIN 300 - Hall",
    link: "https://app.groupme.com/join_group/65221902/WqYiEFpF",
  },
  {
    name: "FIN 300 - Nezafat",
    link: "https://app.groupme.com/join_group/65221913/EGA8YPqN",
  },
  {
    name: "FIN 408 - Nezafat",
    link: "https://app.groupme.com/join_group/65222031/3bDqY3HM",
  },
  {
    name: "FIN 480 - Hall",
    link: "https://app.groupme.com/join_group/65222140/aoMvz6u3",
  },
  {
    name: "FRENCH 101",
    link: "https://app.groupme.com/join_group/65222386/DdcA49h7",
  },
  {
    name: "FRENCH 102",
    link: "https://app.groupme.com/join_group/65222396/uqxLBuXu",
  },
  {
    name: "FRENCH 103",
    link: "https://app.groupme.com/join_group/65222409/8LuA9NZA",
  },
  {
    name: "FRENCH 231",
    link: "https://app.groupme.com/join_group/65222448/Sjz14ESC",
  },
  {
    name: "FRENCH 232",
    link: "https://app.groupme.com/join_group/65222461/HQj4qgXd",
  },
  {
    name: "FRENCH 232 - Foster",
    link: "https://app.groupme.com/join_group/65222477/BVGvlSNS",
  },
  {
    name: "FRENCH 274 - Gabaron",
    link: "https://app.groupme.com/join_group/65222562/WiSDV5ao",
  },
  {
    name: "FTVM 150 - Flinn",
    link: "https://app.groupme.com/join_group/65222850/A6vSBF28",
  },
  {
    name: "FTVM 290 - Marek",
    link: "https://app.groupme.com/join_group/65222946/xQ3DXi2R",
  },
  {
    name: "GERMAN 386 - Amrine",
    link: "https://app.groupme.com/join_group/65223615/AppdPBAk",
  },
  {
    name: "GERMAN 101",
    link: "https://app.groupme.com/join_group/65223622/0Xc5M2Yw",
  },
  {
    name: "GERMAN 102",
    link: "https://app.groupme.com/join_group/65223644/4EY8zsI9",
  },
  {
    name: "GERMAN 326 - Rodena-Krasan",
    link: "https://app.groupme.com/join_group/65223935/hmPM8lSc",
  },
  {
    name: "GERMAN 303 - Amrine",
    link: "https://app.groupme.com/join_group/65224354/9ZlMhzNG",
  },
  {
    name: "GERMAN 304 - Amrine",
    link: "https://app.groupme.com/join_group/65224400/bwh8H4PS",
  },
  {
    name: "HEBREW 102 - Hareven",
    link: "https://app.groupme.com/join_group/65224884/7824ysNB",
  },
  {
    name: "HEBREW 202 - Aronson",
    link: "https://app.groupme.com/join_group/65225083/dekruZqj",
  },
  {
    name: "HISTART 208 - Miller",
    link: "https://app.groupme.com/join_group/65225121/kb4h13WM",
  },
  {
    name: "HISTART 210 - Biro",
    link: "https://app.groupme.com/join_group/65225130/mzcqVLCy",
  },
  {
    name: "HISTART 215 - Zimmerman",
    link: "https://app.groupme.com/join_group/65225142/tr5XPQsm",
  },
  {
    name: "HISTART 272 - Ward",
    link: "https://app.groupme.com/join_group/65225191/Tou3QxCY",
  },
  {
    name: "HISTART 370 - Lay",
    link: "https://app.groupme.com/join_group/65225229/gbhlKoLo",
  },
  {
    name: "HISTART 392 - Carr",
    link: "https://app.groupme.com/join_group/65225250/eBJDqV7T",
  },
  {
    name: "HISTART 194 - Timmermann",
    link: "https://app.groupme.com/join_group/65225312/Q9uUR9tz",
  },
  {
    name: "HISTART 497 - Rozas-Krause",
    link: "https://app.groupme.com/join_group/65225524/sc3Nvu3y",
  },
  {
    name: "HISTORY 102 - Kivelson, Spector",
    link: "https://app.groupme.com/join_group/65225566/FJlrjVcL",
  },
  {
    name: "HISTORY 201 - Dewitt",
    link: "https://app.groupme.com/join_group/65225574/x0crURnX",
  },
  {
    name: "HISTORY 205 - Cassel",
    link: "https://app.groupme.com/join_group/65225586/dnD5cpzr",
  },
  {
    name: "HISTORY 211 - Fancy",
    link: "https://app.groupme.com/join_group/65225591/M8QPdgsY",
  },
  {
    name: "HISTORY 240 - Sinha",
    link: "https://app.groupme.com/join_group/65225806/L3Zpp55L",
  },
  {
    name: "HISTORY 244 - Lieberman",
    link: "https://app.groupme.com/join_group/65225816/r8gh2akK",
  },
  {
    name: "HISTORY 254 - Marwil",
    link: "https://app.groupme.com/join_group/65225841/387WaLct",
  },
  {
    name: "HISTORY 255 - Sinha",
    link: "https://app.groupme.com/join_group/65225851/709XXen7",
  },
  {
    name: "HISTORY 261 - Brick",
    link: "https://app.groupme.com/join_group/65225863/Sqcv7C1U",
  },
  {
    name: "HISTORY 262 - Berrey",
    link: "https://app.groupme.com/join_group/65225876/V2DXapSd",
  },
  {
    name: "HISTORY 265 - Cowles",
    link: "https://app.groupme.com/join_group/65225883/cb002MaF",
  },
  {
    name: "HISTORY 285 - Carson",
    link: "https://app.groupme.com/join_group/65225907/I3J2Z36Q",
  },
  {
    name: "HISTORY 287 - Mills",
    link: "https://app.groupme.com/join_group/65225912/CJbuU1QC",
  },
  {
    name: "HISTORY 319 - Folland",
    link: "https://app.groupme.com/join_group/65225970/4t4C41Dw",
  },
  {
    name: "HISTORY 328 - Suny",
    link: "https://app.groupme.com/join_group/65226031/nB8L3j8U",
  },
  {
    name: "HISTORY 328 - Sekeryan",
    link: "https://app.groupme.com/join_group/65226059/FUprTa18",
  },
  {
    name: "HISTORY 333 - Maiorova",
    link: "https://app.groupme.com/join_group/65226233/X79BcXpq",
  },
  {
    name: "HISTORY 358 - Moyer",
    link: "https://app.groupme.com/join_group/65226272/Lo2E6utc",
  },
  {
    name: "SPANISH 443 - Villalobos Ruminott",
    link: "https://app.groupme.com/join_group/65227175/T9V6VqKu",
  },
  {
    name: "SPANISH 473 - Verdesio",
    link: "https://app.groupme.com/join_group/65227205/5A5XD5oJ",
  },
  {
    name: "SPANISH 487 - Satterfield",
    link: "https://app.groupme.com/join_group/65227274/DtKADeDv",
  },
  {
    name: "SPANISH 488 - Williams",
    link: "https://app.groupme.com/join_group/65227289/zUA39fHd",
  },
  {
    name: "STATS 206",
    link: "https://app.groupme.com/join_group/65227297/l1Tbjamo",
  },
  {
    name: "STATS 250",
    link: "https://app.groupme.com/join_group/65227332/iozFZqWH",
  },
  {
    name: "STATS 306",
    link: "https://app.groupme.com/join_group/65227341/a6WVbz9V",
  },
  {
    name: "STATS 401",
    link: "https://app.groupme.com/join_group/65227352/RKMP3uV6",
  },
  {
    name: "STATS 406",
    link: "https://app.groupme.com/join_group/65227361/DWTarcG1",
  },
  {
    name: "STATS 412 - Fink",
    link: "https://app.groupme.com/join_group/65227367/vXAExSgm",
  },
  {
    name: "STATS 412 - Miller",
    link: "https://app.groupme.com/join_group/65227376/rKOiG3so",
  },
  {
    name: "STATS 413",
    link: "https://app.groupme.com/join_group/65227387/YJLuurrx",
  },
  {
    name: "STATS 415",
    link: "https://app.groupme.com/join_group/65227401/VUr5MZwt",
  },
  {
    name: "STATS 425 - Green",
    link: "https://app.groupme.com/join_group/65227535/0ggV6LA0",
  },
  {
    name: "STATS 425 - Li",
    link: "https://app.groupme.com/join_group/65227549/RllE7yWU",
  },
  {
    name: "STATS 425 - Rome",
    link: "https://app.groupme.com/join_group/65227556/GeSBPL4L",
  },
  {
    name: "STATS 426",
    link: "https://app.groupme.com/join_group/65227563/5gafZROD",
  },
  {
    name: "STATS 430",
    link: "https://app.groupme.com/join_group/65227576/eGpU3zJN",
  },
  {
    name: "STATS 449",
    link: "https://app.groupme.com/join_group/65227583/hs0vreRq",
  },
  {
    name: "STATS 480",
    link: "https://app.groupme.com/join_group/65227594/naqAmiFG",
  },
  {
    name: "STATS 485",
    link: "https://app.groupme.com/join_group/65227607/6e347uqH",
  },
  {
    name: "STRATEGY 290 - Chung",
    link: "https://app.groupme.com/join_group/65227618/tHiAT6s9",
  },
  {
    name: "STRATEGY 290 - Lee",
    link: "https://app.groupme.com/join_group/65227630/izb3AFtG",
  },
  {
    name: "STRATEGY 290 - Nagarajan",
    link: "https://app.groupme.com/join_group/65227634/N3qKU219",
  },
  {
    name: "STRATEGY 290 - Penner-Hahn",
    link: "https://app.groupme.com/join_group/65227643/zAmv5dYQ",
  },
  {
    name: "STRATEGY 290 - Sanz",
    link: "https://app.groupme.com/join_group/65227652/doA06vh9",
  },
  {
    name: "TCHNCLCM 300 - Drake",
    link: "https://app.groupme.com/join_group/65227684/luVvnPsX",
  },
  {
    name: "TCHNCLCM 300 - Montgomery",
    link: "https://app.groupme.com/join_group/65227723/RmDjJS76",
  },
  {
    name: "TCHNCLCM 300 - Pavlov",
    link: "https://app.groupme.com/join_group/65227734/heVjnbxu",
  },
  {
    name: "TCHNCLCM 300 - Snyder",
    link: "https://app.groupme.com/join_group/65227743/2s1TOlps",
  },
  {
    name: "TCHNCLCM 300 - Springsteen",
    link: "https://app.groupme.com/join_group/65227753/aRO4HSyw",
  },
  {
    name: "TCHNCLCM 497 - Sheffield",
    link: "https://app.groupme.com/join_group/65227957/cGss0y8f",
  },
  {
    name: "TCHNCLCM 497 - Vigiletti",
    link: "https://app.groupme.com/join_group/65227966/VG3w4xHo",
  },
  {
    name: "TO 300 - Melville",
    link: "https://app.groupme.com/join_group/65229885/gbi13RXK",
  },
  {
    name: "TO 300 - Pandiarajan",
    link: "https://app.groupme.com/join_group/65229903/8prveaEf",
  },
  {
    name: "TO 302 - Roy",
    link: "https://app.groupme.com/join_group/65229922/TCoNreCn",
  },
  {
    name: "TO 411 - Begen",
    link: "https://app.groupme.com/join_group/65229930/6iLV8i1G",
  },
  {
    name: "TO 411 - Etzion",
    link: "https://app.groupme.com/join_group/65229935/K5Vz5Zb7",
  },
  {
    name: "TO 412 - Etzion",
    link: "https://app.groupme.com/join_group/65229940/0fAgkxhe",
  },
  {
    name: "TO 414 - Kumar",
    link: "https://app.groupme.com/join_group/65229946/buHcQyRF",
  },
  {
    name: "TO 465 - Nelson",
    link: "https://app.groupme.com/join_group/65230111/7c4c1BQr",
  },
  {
    name: "UARTS 250",
    link: "https://app.groupme.com/join_group/65230144/x4NsyxZJ",
  },
  {
    name: "UC 151 - Joiner",
    link: "https://app.groupme.com/join_group/65230180/75F7nqAU",
  },
  {
    name: "UC 214 - Johnson",
    link: "https://app.groupme.com/join_group/65230203/aav82xTQ",
  },
  {
    name: "UC 280 - Ferrez",
    link: "https://app.groupme.com/join_group/65230226/mhoxmf3J",
  },
  {
    name: "URP 423 - Etienne",
    link: "https://app.groupme.com/join_group/65230453/Fk3lTDgL",
  },
  {
    name: "URP 425 - DAnieri",
    link: "https://app.groupme.com/join_group/65230463/H1XRSkBl",
  },
  {
    name: "WGS 220 - Gabriel",
    link: "https://app.groupme.com/join_group/65230632/9alSPZRN",
  },
  {
    name: "WGS 240 - Dumes",
    link: "https://app.groupme.com/join_group/65230664/bYKBNssJ",
  },
  {
    name: "WGS 270 - Peterson",
    link: "https://app.groupme.com/join_group/65230806/Klk76DNl",
  },
  {
    name: "WGS 330 - Mendoza",
    link: "https://app.groupme.com/join_group/65230880/H4SJKHgv",
  },
  {
    name: "WGS 343 - Karem Albrecht",
    link: "https://app.groupme.com/join_group/65230916/uZJFWHlw",
  },
  {
    name: "WGS 345 - Dhar",
    link: "https://app.groupme.com/join_group/65230950/V9m0aKWL",
  },
  {
    name: "WGS 351 - Welch",
    link: "https://app.groupme.com/join_group/65230969/kiFYB7MY",
  },
  {
    name: "WGS 370 - Jones",
    link: "https://app.groupme.com/join_group/65230988/Jj4BvVMT",
  },
  {
    name: "WGS 400 - Johnson, Harris",
    link: "https://app.groupme.com/join_group/65231019/MReTPmvC",
  },
  {
    name: "WRITING 220 - Hetzel",
    link: "https://app.groupme.com/join_group/65231261/GpRlCPjP",
  },
  {
    name: "ANTHRCUL 337 - Mueggler",
    link: "https://app.groupme.com/join_group/65238312/ce4QegX4",
  },
  {
    name: "ASIAN 261 - Rebull",
    link: "https://app.groupme.com/join_group/65238402/KcWyCVNb",
  },
  {
    name: "ECON 101 - Stevenson",
    link: "https://app.groupme.com/join_group/65238763/w9FrcABc",
  },
  {
    name: "ECON 485 - Cho",
    link: "https://app.groupme.com/join_group/65238774/rqTYV1KT",
  },
  {
    name: "EECS 203",
    link: "https://app.groupme.com/join_group/65238827/vOHYEbXS",
  },
  {
    name: "EECS 376",
    link: "https://groupme.com/join_group/64490720/CKvG5xju",
  },
  {
    name: "EECS 281",
    link: "https://app.groupme.com/join_group/65239222/9SxBEusz",
  },
  {
    name: "ENGLISH 140 - Najita",
    link: "https://app.groupme.com/join_group/65239382/GW98W0kK",
  },
  {
    name: "ENTR 409 - Fortino",
    link: "https://app.groupme.com/join_group/65239453/Dho7umea",
  },
  {
    name: "GERMAN 231",
    link: "https://app.groupme.com/join_group/65239607/hK7bjCON",
  },
  {
    name: "STATS 425 - Chan",
    link: "https://app.groupme.com/join_group/65239798/NZOWt3sG",
  },
  {
    name: "HONORS 230 - Adunbi",
    link: "https://app.groupme.com/join_group/65204908/ycJRY42i",
  },
  {
    name: "HONORS 231 - Mallette",
    link: "https://app.groupme.com/join_group/65204923/kY5inOnS",
  },
  {
    name: "HONORS 232 - McNeil",
    link: "https://app.groupme.com/join_group/65204931/tLrbakom",
  },
  {
    name: "HONORS 233 - Olsen",
    link: "https://app.groupme.com/join_group/65204943/QfjRIpqU",
  },
  {
    name: "IHS 340 - Huffnagle",
    link: "https://app.groupme.com/join_group/65204975/PyNMxHiA",
  },
  {
    name: "INTLSTD 101 - Tsai",
    link: "https://app.groupme.com/join_group/65205007/b9gLXkwf",
  },
  {
    name: "INTLSTD 301 - Stonington",
    link: "https://app.groupme.com/join_group/65205032/OkY0iqyr",
  },
  {
    name: "INTLSTD 385 - Nordaas",
    link: "https://app.groupme.com/join_group/65206111/g3BJsjBw",
  },
  {
    name: "IOE 201 - Mondisa",
    link: "https://app.groupme.com/join_group/65206520/leu9ejMf",
  },
  {
    name: "IOE 202 - Shi",
    link: "https://app.groupme.com/join_group/65206530/iB660PM6",
  },
  {
    name: "IOE 265 - Stirling",
    link: "https://app.groupme.com/join_group/65206545/QEw996Vu",
  },
  {
    name: "IOE 310 - Cohn",
    link: "https://app.groupme.com/join_group/65206556/Akl5qkyw",
  },
  {
    name: "IOE 316 - DeRoos",
    link: "https://app.groupme.com/join_group/65206565/7hRbLsK3",
  },
  {
    name: "IOE 333 - DSouza",
    link: "https://app.groupme.com/join_group/65206571/IpI0nhAY",
  },
  {
    name: "IOE 334",
    link: "https://app.groupme.com/join_group/65206581/orMd33Pe",
  },
  {
    name: "IOE 366 - Byon",
    link: "https://app.groupme.com/join_group/65206594/GE0BSXcI",
  },
  {
    name: "IOE 373 - Garcia-Guzman",
    link: "https://app.groupme.com/join_group/65206604/ApP6Nf7B",
  },
  {
    name: "IOE 430 - Liu",
    link: "https://app.groupme.com/join_group/65206731/em6b27Hm",
  },
  {
    name: "IOE 441 - Gusikhin",
    link: "https://app.groupme.com/join_group/65206761/6gHlSjTJ",
  },
  {
    name: "IOE 460 - Wu",
    link: "https://app.groupme.com/join_group/65206783/Cwa491U0",
  },
  {
    name: "IOE 465 - Yang",
    link: "https://app.groupme.com/join_group/65206800/qn4vCPoq",
  },
  {
    name: "IOE 466 - Jin",
    link: "https://app.groupme.com/join_group/65206811/um0No6sN",
  },
  {
    name: "IOE 474 - Garcia-Guzman",
    link: "https://app.groupme.com/join_group/65206820/ewqmw3ep",
  },
  {
    name: "IOE 481 - Van Oyen",
    link: "https://app.groupme.com/join_group/65206826/uL3gg5z5",
  },
  {
    name: "IOE 491 - Fattahi",
    link: "https://app.groupme.com/join_group/65206833/6uixNWTo",
  },
  {
    name: "IOE 491 - Levantrosser",
    link: "https://app.groupme.com/join_group/65206846/snCM79VO",
  },
  {
    name: "ISLAM 216 - Knysh",
    link: "https://app.groupme.com/join_group/65206857/sUd2oKjh",
  },
  {
    name: "ISLAM 315 - Bardenstein",
    link: "https://app.groupme.com/join_group/65206866/roSbj6d6",
  },
  {
    name: "ISLAM 320 - Cipa",
    link: "https://app.groupme.com/join_group/65206874/w5TEgE6q",
  },
  {
    name: "ISLAM 321 - Knysh",
    link: "https://app.groupme.com/join_group/65206887/0behjL4O",
  },
  {
    name: "ISLAM 325 - Mir",
    link: "https://app.groupme.com/join_group/65206900/k6ub71pn",
  },
  {
    name: "ISLAM 328 - Ali",
    link: "https://app.groupme.com/join_group/65206908/LXUf3Y9x",
  },
  {
    name: "ISLAM 390 - Crasnow",
    link: "https://app.groupme.com/join_group/65206922/5yT8rP6Y",
  },
  {
    name: "ISLAM 392",
    link: "https://app.groupme.com/join_group/65206932/yIshQoft",
  },
  {
    name: "ISLAM 392 - Crasnow",
    link: "https://app.groupme.com/join_group/65206938/uEDfsymx",
  },
  {
    name: "ISLAM 392 - Das",
    link: "https://app.groupme.com/join_group/65206950/SBZIYaSH",
  },
  {
    name: "ISLAM 430 - Le Gassick",
    link: "https://app.groupme.com/join_group/65206958/ia3E0saZ",
  },
  {
    name: "ISLAM 443 - Cole",
    link: "https://app.groupme.com/join_group/65206964/vYMbPbJr",
  },
  {
    name: "ISLAM 490 - Cross",
    link: "https://app.groupme.com/join_group/65206974/8IIyVYcm",
  },
  {
    name: "ITALIAN 101 - Mosciatti",
    link: "https://app.groupme.com/join_group/65207074/TQUDSDX3",
  },
  {
    name: "ITALIAN 101 - Salvatore",
    link: "https://app.groupme.com/join_group/65207082/5d73gDQP",
  },
  {
    name: "ITALIAN 102 - Audiberti",
    link: "https://app.groupme.com/join_group/65207092/o2n3HHG9",
  },
  {
    name: "ITALIAN 102 - Rodriguez Mojica",
    link: "https://app.groupme.com/join_group/65207100/GooRhsWo",
  },
  {
    name: "ITALIAN 231 - Lasker-Ferretti",
    link: "https://app.groupme.com/join_group/65207110/19k6hlIO",
  },
  {
    name: "ITALIAN 231 - Liu, Lasker-Ferretti",
    link: "https://app.groupme.com/join_group/65207119/cA2IAfJ2",
  },
  {
    name: "ITALIAN 232 - Garrido Baez, Lasker-Ferretti",
    link: "https://app.groupme.com/join_group/65207124/QTYwlr19",
  },
  {
    name: "ITALIAN 232 - Lasker-Ferretti",
    link: "https://app.groupme.com/join_group/65207136/Anpd71dz",
  },
  {
    name: "ITALIAN 232 - Mosciatti, Lasker-Ferretti",
    link: "https://app.groupme.com/join_group/65207148/hoPlsEIA",
  },
  {
    name: "ITALIAN 310 - Binetti",
    link: "https://app.groupme.com/join_group/65207803/nFrEfekw",
  },
  {
    name: "ITALIAN 313 - Squatriti",
    link: "https://app.groupme.com/join_group/65207812/8CuKpLom",
  },
  {
    name: "ITALIAN 314 - Gaggio",
    link: "https://app.groupme.com/join_group/65207817/FTi70w7p",
  },
  {
    name: "ITALIAN 316",
    link: "https://app.groupme.com/join_group/65207830/wQJsMaka",
  },
  {
    name: "ITALIAN 340 - Binetti",
    link: "https://app.groupme.com/join_group/65207835/Vk0HLh8u",
  },
  {
    name: "ITALIAN 374 - Ricco",
    link: "https://app.groupme.com/join_group/65207845/rhprdael",
  },
  {
    name: "ITALIAN 415 - Ricco",
    link: "https://app.groupme.com/join_group/65207854/xzYrjpCQ",
  },
  {
    name: "JAZZ 221 - Kirschenmann, Wood",
    link: "https://app.groupme.com/join_group/65207860/70QmsW7x",
  },
  {
    name: "JAZZ 450 - Travers",
    link: "https://app.groupme.com/join_group/65207871/QJQEeOin",
  },
  {
    name: "JAZZ 454",
    link: "https://app.groupme.com/join_group/65207882/bUSgbVYI",
  },
  {
    name: "JAZZ 454 - Okazaki",
    link: "https://app.groupme.com/join_group/65207888/tMUVSfQg",
  },
  {
    name: "JAZZ 454 - Sarath",
    link: "https://app.groupme.com/join_group/65207894/b9wfPvcz",
  },
  {
    name: "JAZZ 454 - Travers",
    link: "https://app.groupme.com/join_group/65207903/9JNcqcaG",
  },
  {
    name: "JAZZ 455",
    link: "https://app.groupme.com/join_group/65207910/olhfbpZ2",
  },
  {
    name: "JAZZ 455 - Travers",
    link: "https://app.groupme.com/join_group/65207918/yDL5VMfN",
  },
  {
    name: "JAZZ 462",
    link: "https://app.groupme.com/join_group/65207924/pXwTaZbg",
  },
  {
    name: "JAZZ 467",
    link: "https://app.groupme.com/join_group/65207933/s6CEPNs4",
  },
  {
    name: "JAZZ 472",
    link: "https://app.groupme.com/join_group/65207941/LBE2UgVT",
  },
  {
    name: "JAZZ 479 - Wilson",
    link: "https://app.groupme.com/join_group/65207949/3ftlAJd9",
  },
  {
    name: "JAZZ 480 - Lucas",
    link: "https://app.groupme.com/join_group/65207954/FpyKUD1W",
  },
  {
    name: "JUDAIC 102 - Luchina",
    link: "https://app.groupme.com/join_group/65207962/ohg5abxK",
  },
  {
    name: "JUDAIC 121 - Scott",
    link: "https://app.groupme.com/join_group/65207969/Z7u0cDtI",
  },
  {
    name: "JUDAIC 150 - Tsoffar",
    link: "https://app.groupme.com/join_group/65207978/HQemlmT1",
  },
  {
    name: "JUDAIC 202",
    link: "https://app.groupme.com/join_group/65207987/E5udLZLC",
  },
  {
    name: "JUDAIC 202 - Luchina",
    link: "https://app.groupme.com/join_group/65207995/HxZ65DSq",
  },
  {
    name: "JUDAIC 218",
    link: "https://app.groupme.com/join_group/65208097/pPc8eaZt",
  },
  {
    name: "JUDAIC 218 - Mordoch",
    link: "https://app.groupme.com/join_group/65208107/Zwoz8Cvv",
  },
  {
    name: "JUDAIC 218 - Roby",
    link: "https://app.groupme.com/join_group/65208117/ilRPXTqR",
  },
  {
    name: "JUDAIC 218 - Toman",
    link: "https://app.groupme.com/join_group/65208134/dOm1Wx5p",
  },
  {
    name: "JUDAIC 224 - Neis",
    link: "https://app.groupme.com/join_group/65208150/8PiiOMZ2",
  },
  {
    name: "JUDAIC 244 - Lieberman",
    link: "https://app.groupme.com/join_group/65208157/SPYCOJM2",
  },
  {
    name: "JUDAIC 253 - Mays",
    link: "https://app.groupme.com/join_group/65208163/DeMF0Fre",
  },
  {
    name: "JUDAIC 253 - Mays, Das , Chatterjee",
    link: "https://app.groupme.com/join_group/65208172/TVv48Swt",
  },
  {
    name: "JUDAIC 258 - Levinson, Fox, Robertson",
    link: "https://app.groupme.com/join_group/65208182/XqluedmO",
  },
  {
    name: "JUDAIC 260 - Neis",
    link: "https://app.groupme.com/join_group/65208187/Zmw67qFY",
  },
  {
    name: "JUDAIC 281 - Pinsker",
    link: "https://app.groupme.com/join_group/65208194/ciV8r2Z6",
  },
  {
    name: "JUDAIC 310 - Ginsburg",
    link: "https://app.groupme.com/join_group/65208203/jCHTKXnf",
  },
  {
    name: "JUDAIC 317 - Eubanks Segal",
    link: "https://app.groupme.com/join_group/65208212/IyQsbjNj",
  },
  {
    name: "JUDAIC 317 - Raz",
    link: "https://app.groupme.com/join_group/65208220/dxGWkmfc",
  },
  {
    name: "JUDAIC 318",
    link: "https://app.groupme.com/join_group/65208230/lW81a8FK",
  },
  {
    name: "JUDAIC 318 - Hussein",
    link: "https://app.groupme.com/join_group/65208241/Al72Up1l",
  },
  {
    name: "JUDAIC 318 - Luchina",
    link: "https://app.groupme.com/join_group/65208249/9U4jzPKX",
  },
  {
    name: "JUDAIC 318 - Spector, Thurman",
    link: "https://app.groupme.com/join_group/65208258/XpsSSky0",
  },
  {
    name: "JUDAIC 318 - Wollenberg",
    link: "https://app.groupme.com/join_group/65208267/cJv4wLfZ",
  },
  {
    name: "JUDAIC 340",
    link: "https://app.groupme.com/join_group/65208273/rl6rKDqn",
  },
  {
    name: "JUDAIC 340 - Roby",
    link: "https://app.groupme.com/join_group/65208279/4SLQB6fV",
  },
  {
    name: "JUDAIC 351 - Toebosch",
    link: "https://app.groupme.com/join_group/65208286/eYIkHSzt",
  },
  {
    name: "JUDAIC 388 - Veidlinger",
    link: "https://app.groupme.com/join_group/65208293/1ZabiRXy",
  },
  {
    name: "JUDAIC 389 - Levinson",
    link: "https://app.groupme.com/join_group/65208304/m9qfxMFy",
  },
  {
    name: "JUDAIC 417 - Boccaccini",
    link: "https://app.groupme.com/join_group/65208308/O0jPCFTX",
  },
  {
    name: "JUDAIC 417 - DeGrado",
    link: "https://app.groupme.com/join_group/65208320/zQ6Y3Qqa",
  },
  {
    name: "JUDAIC 417 - Ginsburg",
    link: "https://app.groupme.com/join_group/65208327/GuLDzGFM",
  },
  {
    name: "JUDAIC 432 - Luchina",
    link: "https://app.groupme.com/join_group/65208338/ahUxYu3i",
  },
  {
    name: "KINESLGY 302 - Barton",
    link: "https://app.groupme.com/join_group/65208465/EMjHkvaQ",
  },
  {
    name: "KINESLGY 302 - Donahue, Barton, Szymanski",
    link: "https://app.groupme.com/join_group/65208473/m7P4KC0u",
  },
  {
    name: "KINESLGY 302 - Gross, Hennessey, Barton",
    link: "https://app.groupme.com/join_group/65208480/3Zb7Zmag",
  },
  {
    name: "KINESLGY 302 - Kwak, Barton",
    link: "https://app.groupme.com/join_group/65208488/jRWQ0LLQ",
  },
  {
    name: "KINESLGY 302 - Robinson, Barton",
    link: "https://app.groupme.com/join_group/65208500/pAqMBVWQ",
  },
  {
    name: "KINESLGY 413",
    link: "https://app.groupme.com/join_group/65208511/qpF9ZdIS",
  },
  {
    name: "KINESLGY 413 - Mergos",
    link: "https://app.groupme.com/join_group/65208518/smdViqF1",
  },
  {
    name: "KINESLGY 413 - Umberger",
    link: "https://app.groupme.com/join_group/65208527/GnMKLYs1",
  },
  {
    name: "KINESLGY 422 - Vesia",
    link: "https://app.groupme.com/join_group/65208536/JeVsOGsJ",
  },
  {
    name: "KINESLGY 425 - Ulrich",
    link: "https://app.groupme.com/join_group/65208547/6FGCJTKS",
  },
  {
    name: "KINESLGY 429",
    link: "https://app.groupme.com/join_group/65208555/rEYMGORi",
  },
  {
    name: "KINESLGY 439",
    link: "https://app.groupme.com/join_group/65208563/WQBzxax8",
  },
  {
    name: "KINESLGY 442 - Haus",
    link: "https://app.groupme.com/join_group/65208572/rFs5ePic",
  },
  {
    name: "KINESLGY 443 - Ludlow",
    link: "https://app.groupme.com/join_group/65208577/GZCMKtX4",
  },
  {
    name: "KINESLGY 446 - Hasson",
    link: "https://app.groupme.com/join_group/65208587/uP3GcZac",
  },
  {
    name: "KINESLGY 449",
    link: "https://app.groupme.com/join_group/65208603/sULwwXxb",
  },
  {
    name: "KINESLGY 451 - Harris",
    link: "https://app.groupme.com/join_group/65209027/ea5kdLpD",
  },
  {
    name: "KINESLGY 452",
    link: "https://app.groupme.com/join_group/65209036/JU1C5u0z",
  },
  {
    name: "KRSTD 472 - Walsh",
    link: "https://app.groupme.com/join_group/65209055/PzkHGLba",
  },
  {
    name: "LACS 321 - Tsai",
    link: "https://app.groupme.com/join_group/65209063/XxAJUbCs",
  },
  {
    name: "LACS 446",
    link: "https://app.groupme.com/join_group/65209068/ZhGhi4E0",
  },
  {
    name: "LACS 462 - Langland",
    link: "https://app.groupme.com/join_group/65209075/8lf1v9kW",
  },
  {
    name: "LACS 464 - Langland",
    link: "https://app.groupme.com/join_group/65209090/mnbC7j9E",
  },
  {
    name: "LACS 466 - Langland",
    link: "https://app.groupme.com/join_group/65209097/H4u9eVkE",
  },
  {
    name: "LACS 472 - Carlos Rios",
    link: "https://app.groupme.com/join_group/65209108/xQDjeIEK",
  },
  {
    name: "LACS 474 - Carlos Rios",
    link: "https://app.groupme.com/join_group/65209116/4BgCjkLo",
  },
  {
    name: "LACS 476 - Carlos Rios",
    link: "https://app.groupme.com/join_group/65209123/nD0dPiXA",
  },
  {
    name: "LATIN 101 - Green",
    link: "https://app.groupme.com/join_group/65209142/RTg3iyeF",
  },
  {
    name: "LATIN 102 - Mastronardi",
    link: "https://app.groupme.com/join_group/65209148/1P3Re1cG",
  },
  {
    name: "LATIN 102 - Nash",
    link: "https://app.groupme.com/join_group/65209160/ZMO3YSIy",
  },
  {
    name: "LATIN 102 - Salehzai",
    link: "https://app.groupme.com/join_group/65209168/Wa62eMrB",
  },
  {
    name: "LATIN 231 - Soter",
    link: "https://app.groupme.com/join_group/65209172/PujdhksO",
  },
  {
    name: "LATIN 231 - Tohm",
    link: "https://app.groupme.com/join_group/65209177/TMXl5hsf",
  },
  {
    name: "LATIN 232 - Buchanan",
    link: "https://app.groupme.com/join_group/65209185/cVIU4YdP",
  },
  {
    name: "LATIN 232 - Caston",
    link: "https://app.groupme.com/join_group/65209189/M310S0Wv",
  },
  {
    name: "LATIN 232 - Mayo",
    link: "https://app.groupme.com/join_group/65209200/eVTPnqt7",
  },
  {
    name: "LATIN 233 - Markus",
    link: "https://app.groupme.com/join_group/65209206/sbTV0klP",
  },
  {
    name: "LATIN 294 - Soter",
    link: "https://app.groupme.com/join_group/65209215/IKlvmBZh",
  },
  {
    name: "LATIN 301 - Markus",
    link: "https://app.groupme.com/join_group/65209219/OodjlI8I",
  },
  {
    name: "LATINOAM 224 - Galvan-Santibanez",
    link: "https://app.groupme.com/join_group/65209312/872fb6OT",
  },
  {
    name: "LATINOAM 243 - Calvo-Quiros",
    link: "https://app.groupme.com/join_group/65209321/yrNHv8ek",
  },
  {
    name: "LATINOAM 310 - Sanchez-Snell",
    link: "https://app.groupme.com/join_group/65209328/hv54gUFo",
  },
  {
    name: "LATINOAM 311 - Anderson",
    link: "https://app.groupme.com/join_group/65209335/gc2EuUkf",
  },
  {
    name: "LATINOAM 311 - Beltran",
    link: "https://app.groupme.com/join_group/65209342/8i9sUUBD",
  },
  {
    name: "LATINOAM 405 - Ocampo",
    link: "https://app.groupme.com/join_group/65209351/A92B5zLE",
  },
  {
    name: "LING 102 - Abner",
    link: "https://app.groupme.com/join_group/65209359/7einxQgj",
  },
  {
    name: "LING 102 - Duanmu",
    link: "https://app.groupme.com/join_group/65209368/x7RXhmcG",
  },
  {
    name: "LING 102 - Meek",
    link: "https://app.groupme.com/join_group/65209371/OWtFok0o",
  },
  {
    name: "LING 111 - Keshet",
    link: "https://app.groupme.com/join_group/65209378/KILevuCi",
  },
  {
    name: "LING 114 - Levinson",
    link: "https://app.groupme.com/join_group/65209385/mvn612JI",
  },
  {
    name: "LING 192 - Baxter",
    link: "https://app.groupme.com/join_group/65209389/BpSIozXd",
  },
  {
    name: "LING 193 - McNulty",
    link: "https://app.groupme.com/join_group/65210784/haE3wD7K",
  },
  {
    name: "LING 209 - Baptista",
    link: "https://app.groupme.com/join_group/65210790/wWuPVREJ",
  },
  {
    name: "LING 272 - Lempert",
    link: "https://app.groupme.com/join_group/65210798/9Xl6xEt5",
  },
  {
    name: "LING 313 - Duanmu",
    link: "https://app.groupme.com/join_group/65210802/WDyKZtHq",
  },
  {
    name: "LING 315 - Abner",
    link: "https://app.groupme.com/join_group/65210805/VWyC8PSj",
  },
  {
    name: "LING 316 - Abney",
    link: "https://app.groupme.com/join_group/65210811/xGFdQVG1",
  },
  {
    name: "LING 347 - Levinson",
    link: "https://app.groupme.com/join_group/65210817/DXvuE1y2",
  },
  {
    name: "LING 351 - Guo",
    link: "https://app.groupme.com/join_group/65210820/VcBLlrVo",
  },
  {
    name: "LING 352 - Gardner-Neblett",
    link: "https://app.groupme.com/join_group/65210824/IAYA1fmy",
  },
  {
    name: "LING 368 - Baxter",
    link: "https://app.groupme.com/join_group/65210830/49OewIoq",
  },
  {
    name: "LING 370 - Namboodiripad",
    link: "https://app.groupme.com/join_group/65210836/grxiqv7Q",
  },
  {
    name: "LING 390 - Dyer",
    link: "https://app.groupme.com/join_group/65210839/aUYZZZNu",
  },
  {
    name: "LING 390 - Romano Gillette",
    link: "https://app.groupme.com/join_group/65210842/LL1YEFmk",
  },
  {
    name: "LING 394 - McNulty",
    link: "https://app.groupme.com/join_group/65210851/j3rbTXAm",
  },
  {
    name: "LING 408 - Toon",
    link: "https://app.groupme.com/join_group/65210856/6oRsAwHF",
  },
  {
    name: "LING 413 - Beddor",
    link: "https://app.groupme.com/join_group/65210862/rZSqY76Z",
  },
  {
    name: "LING 446",
    link: "https://app.groupme.com/join_group/65210865/vcVFFIGX",
  },
  {
    name: "LING 447 - Boland",
    link: "https://app.groupme.com/join_group/65210872/m19gXWaX",
  },
  {
    name: "LING 471 - Lempert",
    link: "https://app.groupme.com/join_group/65210877/CgMhGzs0",
  },
  {
    name: "LING 492 - Krivokapic",
    link: "https://app.groupme.com/join_group/65210881/gRJsTnLO",
  },
  {
    name: "LING 497 - Brennan",
    link: "https://app.groupme.com/join_group/65210886/OeldK4i7",
  },
  {
    name: "LING 497 - Thomason",
    link: "https://app.groupme.com/join_group/65210888/nlv5g1aU",
  },
  {
    name: "LSWA 140 - Tucker",
    link: "https://app.groupme.com/join_group/65210895/U5bGIjQB",
  },
  {
    name: "LSWA 228 - Beal",
    link: "https://app.groupme.com/join_group/65210899/5Y3JpF8J",
  },
  {
    name: "LSWA 230 - Beal",
    link: "https://app.groupme.com/join_group/65210907/913OLI7l",
  },
  {
    name: "LSWA 230 - Silver",
    link: "https://app.groupme.com/join_group/65210952/9ugykrPj",
  },
  {
    name: "LSWA 230 - Tell",
    link: "https://app.groupme.com/join_group/65210956/fPj8sg8f",
  },
  {
    name: "MATH 105",
    link: "https://app.groupme.com/join_group/65210960/r4oL9MEh",
  },
  {
    name: "MATH 105 - Lande",
    link: "https://app.groupme.com/join_group/65210964/6gGz7bXF",
  },
  {
    name: "MATH 115",
    link: "https://app.groupme.com/join_group/65210967/zrn4cLgr",
  },
  {
    name: "MATH 116",
    link: "https://app.groupme.com/join_group/65210983/EQlKsXmm",
  },
  {
    name: "MATH 117",
    link: "https://app.groupme.com/join_group/65210993/9iHvSU1y",
  },
  {
    name: "MATH 147 - Cao",
    link: "https://app.groupme.com/join_group/65210995/pzTP2BXn",
  },
  {
    name: "MATH 176 - Heffers",
    link: "https://app.groupme.com/join_group/65210999/t63XLc0o",
  },
  {
    name: "MATH 186 - Weiss",
    link: "https://app.groupme.com/join_group/65211006/1c5I5BR5",
  },
  {
    name: "MATH 214",
    link: "https://app.groupme.com/join_group/65211009/xvfZyPSv",
  },
  {
    name: "MATH 215",
    link: "https://app.groupme.com/join_group/65211030/HCZ3LBX8",
  },
  {
    name: "MATH 216",
    link: "https://app.groupme.com/join_group/65211089/rqZsq39L",
  },
  {
    name: "MATH 217",
    link: "https://app.groupme.com/join_group/65211107/hERMcuEz",
  },
  {
    name: "MATH 285 - Bellis",
    link: "https://app.groupme.com/join_group/65211118/9T9PGkdl",
  },
  {
    name: "MATH 286 - Bergman",
    link: "https://app.groupme.com/join_group/65211123/ikEJcPBA",
  },
  {
    name: "MATH 289 - Patel",
    link: "https://app.groupme.com/join_group/65211128/sqewoeiz",
  },
  {
    name: "MATH 296 - Koch",
    link: "https://app.groupme.com/join_group/65211132/KEqBwLid",
  },
  {
    name: "MATH 297 - Schneider",
    link: "https://app.groupme.com/join_group/65211139/yaC0lXZm",
  },
  {
    name: "MATH 310 - Dunworth",
    link: "https://app.groupme.com/join_group/65211142/WxvEwAxK",
  },
  {
    name: "MATH 316 - Grande Izquierdo",
    link: "https://app.groupme.com/join_group/65211149/VyYBQJsJ",
  },
  {
    name: "MATH 316 - Silverman",
    link: "https://app.groupme.com/join_group/65211154/fuOFF62G",
  },
  {
    name: "MATH 333",
    link: "https://app.groupme.com/join_group/65211159/WXlJO7f8",
  },
  {
    name: "MATH 351 - Page",
    link: "https://app.groupme.com/join_group/65211164/bO7ic3Ca",
  },
  {
    name: "MATH 354 - Bellis",
    link: "https://app.groupme.com/join_group/65211166/QHWAAn1u",
  },
  {
    name: "MATH 371 - Guo",
    link: "https://app.groupme.com/join_group/65211169/bYapWi1D",
  },
  {
    name: "MATH 371 - Strauss",
    link: "https://app.groupme.com/join_group/65211171/2eSPVMDv",
  },
  {
    name: "MATH 389 - Martone, Boland",
    link: "https://app.groupme.com/join_group/65211176/etC75QwW",
  },
  {
    name: "MATH 396",
    link: "https://app.groupme.com/join_group/65211179/dm6PFk2L",
  },
  {
    name: "MATH 396 - Hani",
    link: "https://app.groupme.com/join_group/65211180/nceSeXzJ",
  },
  {
    name: "MATH 404 - Viswanath",
    link: "https://app.groupme.com/join_group/65211182/URGHe5jG",
  },
  {
    name: "MATH 412 - Smolkin",
    link: "https://app.groupme.com/join_group/65211214/d8D0oWr6",
  },
  {
    name: "MATH 417 - Koziol",
    link: "https://app.groupme.com/join_group/65211221/EgMKM27P",
  },
  {
    name: "MATH 423 - Bernhardt",
    link: "https://app.groupme.com/join_group/65211233/kLsD3aiH",
  },
  {
    name: "MATH 423 - Deng",
    link: "https://app.groupme.com/join_group/65211234/peqrH2GR",
  },
  {
    name: "MATH 424 - Cao",
    link: "https://app.groupme.com/join_group/65211236/ane10C6d",
  },
  {
    name: "MATH 425 - Chan",
    link: "https://app.groupme.com/join_group/65211240/Ov732rmP",
  },
  {
    name: "MATH 425 - Fink",
    link: "https://app.groupme.com/join_group/65211244/24HwB45X",
  },
  {
    name: "MATH 425 - Green",
    link: "https://app.groupme.com/join_group/65211248/3Fe8KFMR",
  },
  {
    name: "MATH 425 - Rome",
    link: "https://app.groupme.com/join_group/65211255/YjveZ9zd",
  },
  {
    name: "MATH 451 - Borcea",
    link: "https://app.groupme.com/join_group/65211267/gizsmVEI",
  },
  {
    name: "MATH 451 - Patel",
    link: "https://app.groupme.com/join_group/65211271/eZq4Mtll",
  },
  {
    name: "MATH 465 - George",
    link: "https://app.groupme.com/join_group/65211285/6likd9sZ",
  },
  {
    name: "MATH 475 - Koziol",
    link: "https://app.groupme.com/join_group/65211334/ucYir8mx",
  },
  {
    name: "MATSCIE 220 - Wynarsky",
    link: "https://app.groupme.com/join_group/65211355/ts3abXZs",
  },
  {
    name: "MATSCIE 242",
    link: "https://app.groupme.com/join_group/65211359/4lXTLrJY",
  },
  {
    name: "MATSCIE 242 - Kioupakis",
    link: "https://app.groupme.com/join_group/65211361/cAxSGHSp",
  },
  {
    name: "MATSCIE 250 - Goldman",
    link: "https://app.groupme.com/join_group/65211364/wQVBIazc",
  },
  {
    name: "MCDB 306 - Spillane",
    link: "https://app.groupme.com/join_group/65211399/MtcbkgAe",
  },
  {
    name: "MCDB 310 - Winter 21",
    link: "https://groupme.com/join_group/64370708/epNV7uic",
  },
  {
    name: "MCDB 420 - Guerra",
    link: "https://app.groupme.com/join_group/65211462/Wi4znD30",
  },
  {
    name: "MCDB 422 - Clowney, Collins",
    link: "https://app.groupme.com/join_group/65211466/J8PFnQCK",
  },
  {
    name: "MCDB 429 - Archbold",
    link: "https://app.groupme.com/join_group/65211480/Of0zNfKI",
  },
  {
    name: "MCDB 452 - Wong",
    link: "https://app.groupme.com/join_group/65211491/TYdrjPpu",
  },
  {
    name: "MECHENG 211 - Estrada",
    link: "https://app.groupme.com/join_group/65211508/T1lknJJk",
  },
  {
    name: "MECHENG 211 - Lu",
    link: "https://app.groupme.com/join_group/65211512/wIaaNlfS",
  },
  {
    name: "MECHENG 235 - Bala Chandran",
    link: "https://app.groupme.com/join_group/65211517/fUFBkOb1",
  },
  {
    name: "MECHENG 235 - Violi",
    link: "https://app.groupme.com/join_group/65211520/M1Fx6l2u",
  },
  {
    name: "MECHENG 240 - Grosh",
    link: "https://app.groupme.com/join_group/65211525/uRdf6MXz",
  },
  {
    name: "MECHENG 240 - Tol",
    link: "https://app.groupme.com/join_group/65211533/kjjxGeAJ",
  },
  {
    name: "MECHENG 250 - Umbriac, Cooper",
    link: "https://app.groupme.com/join_group/65211536/erqqjU1b",
  },
  {
    name: "MECHENG 305 - Huan",
    link: "https://app.groupme.com/join_group/65211540/Gv1cjdiT",
  },
  {
    name: "MECHENG 320 - Dowling",
    link: "https://app.groupme.com/join_group/65211543/P54nTZNY",
  },
  {
    name: "MECHENG 336 - Liang",
    link: "https://app.groupme.com/join_group/65211588/oBTNCUKe",
  },
  {
    name: "MECHENG 350 - Umbriac, Brei",
    link: "https://app.groupme.com/join_group/65211590/FUcItv6D",
  },
  {
    name: "MECHENG 360 - Barton",
    link: "https://app.groupme.com/join_group/65211594/xHtdmS38",
  },
  {
    name: "MECHENG 360 - Fazeli",
    link: "https://app.groupme.com/join_group/65211598/nYbrYyb0",
  },
  {
    name: "MECHENG 382 - Fan",
    link: "https://app.groupme.com/join_group/65211602/0rLOtywH",
  },
  {
    name: "MECHENG 382 - Gavini",
    link: "https://app.groupme.com/join_group/65211605/R83MJ4br",
  },
  {
    name: "MECHENG 395 - Sick, Liang",
    link: "https://app.groupme.com/join_group/65211608/DQuaGM3b",
  },
  {
    name: "MECHENG 420 - Akhavan",
    link: "https://app.groupme.com/join_group/65211619/981z32iU",
  },
  {
    name: "MECHENG 433 - Kwabi",
    link: "https://app.groupme.com/join_group/65211623/zvWYHKqJ",
  },
  {
    name: "MECHENG 440 - Epureanu",
    link: "https://app.groupme.com/join_group/65211628/E3OdF8V3",
  },
  {
    name: "MECHENG 481 - Mazumder",
    link: "https://app.groupme.com/join_group/65211640/VTCHAlxw",
  },
  {
    name: "MECHENG 495 - Capecelatro, Hildinger, Royston",
    link: "https://app.groupme.com/join_group/65211641/DoxXzClA",
  },
  {
    name: "MICRBIOL 405",
    link: "https://app.groupme.com/join_group/65211768/Lhkijn1w",
  },
  {
    name: "MICRBIOL 415 - Spindler, Ono",
    link: "https://app.groupme.com/join_group/65211806/aqXDac9K",
  },
  {
    name: "MICRBIOL 440 - Moore",
    link: "https://app.groupme.com/join_group/65211809/68von2TW",
  },
  {
    name: "MIDEAST 284 - Lieberman",
    link: "https://app.groupme.com/join_group/65211822/S6p7RLQe",
  },
  {
    name: "MIDEAST 315 - Bardenstein",
    link: "https://app.groupme.com/join_group/65211853/81z5OhrE",
  },
  {
    name: "MKT 300 - Fong",
    link: "https://app.groupme.com/join_group/65211968/0gX425Nf",
  },
  {
    name: "MKT 302 - Castelo Branco",
    link: "https://app.groupme.com/join_group/65212006/vR5Asusj",
  },
  {
    name: "MKT 302 - Ku",
    link: "https://app.groupme.com/join_group/65212008/115Ag4uT",
  },
  {
    name: "MKT 302 - Shaw",
    link: "https://app.groupme.com/join_group/65212011/Px9Cq19P",
  },
  {
    name: "MKT 313 - Angell, Carter",
    link: "https://app.groupme.com/join_group/65212016/jpMGZJEE",
  },
  {
    name: "MKT 315 - Metzger",
    link: "https://app.groupme.com/join_group/65212018/jJ9O1PfR",
  },
  {
    name: "MKT 426 - Schwartz",
    link: "https://app.groupme.com/join_group/65212038/cJjDXPhN",
  },
  {
    name: "MOVESCI 110 - Bodary, Vesia, Gross",
    link: "https://app.groupme.com/join_group/65212096/xa4NcbB9",
  },
  {
    name: "MOVESCI 230 - Gross",
    link: "https://app.groupme.com/join_group/65212115/zuxF5Kqa",
  },
  {
    name: "MOVESCI 241 - Bodary",
    link: "https://app.groupme.com/join_group/65212118/UHp0KBIK",
  },
  {
    name: "MOVESCI 250 - Lepley",
    link: "https://app.groupme.com/join_group/65212120/ydhex2At",
  },
  {
    name: "MOVESCI 330 - Lipps",
    link: "https://app.groupme.com/join_group/65212123/rUZql2sM",
  },
  {
    name: "MOVESCI 340 - Ludlow",
    link: "https://app.groupme.com/join_group/65212125/VY5UlWX6",
  },
  {
    name: "MOVESCI 413 - Umberger",
    link: "https://app.groupme.com/join_group/65212137/Mp15QJKM",
  },
  {
    name: "MOVESCI 425 - Ulrich",
    link: "https://app.groupme.com/join_group/65212144/8zxA1eE7",
  },
  {
    name: "MUSICOL 123 - Garrett",
    link: "https://app.groupme.com/join_group/65212256/eWcO8pWO",
  },
  {
    name: "MUSICOL 346 - Bodiford",
    link: "https://app.groupme.com/join_group/65212296/uCgoWMC7",
  },
  {
    name: "MUSICOL 346 - Mengozzi",
    link: "https://app.groupme.com/join_group/65212299/lnkvYWGG",
  },
  {
    name: "MUSICOL 346 - Stein",
    link: "https://app.groupme.com/join_group/65212302/IF0eOlVV",
  },
  {
    name: "MUSPERF 300 - Thompson",
    link: "https://app.groupme.com/join_group/65214441/A4sPbToA",
  },
  {
    name: "NERS 201 - Field",
    link: "https://app.groupme.com/join_group/65214998/Pqpf2XAo",
  },
  {
    name: "NERS 250",
    link: "https://app.groupme.com/join_group/65215012/zBA59SNj",
  },
  {
    name: "NERS 250 - Allen",
    link: "https://app.groupme.com/join_group/65215020/w2XTSa4s",
  },
  {
    name: "NURS 194 - Charania, Doman",
    link: "https://app.groupme.com/join_group/65215085/9MT5S5pV",
  },
  {
    name: "NURS 210 - Petrosyan",
    link: "https://app.groupme.com/join_group/65215092/8G1PIgbB",
  },
  {
    name: "NURS 218 - Peitzmeier",
    link: "https://app.groupme.com/join_group/65215094/q9eSkMmr",
  },
  {
    name: "NURS 220 - Gabriel",
    link: "https://app.groupme.com/join_group/65215099/JOMF5Jd3",
  },
  {
    name: "ORGSTUDY 201 - Sweetman",
    link: "https://app.groupme.com/join_group/65215346/DUjeF3G8",
  },
  {
    name: "ORGSTUDY 204 - Levine",
    link: "https://app.groupme.com/join_group/65215354/gLMQRYsf",
  },
  {
    name: "ORGSTUDY 208 - Soderstrom",
    link: "https://app.groupme.com/join_group/65215362/QYd61o7D",
  },
  {
    name: "ORGSTUDY 445 - Fein",
    link: "https://app.groupme.com/join_group/65215386/y957bkWn",
  },
  {
    name: "PAT 100 - Camc",
    link: "https://app.groupme.com/join_group/65215520/YJ2E6w5Y",
  },
  {
    name: "PAT 100 - OModhrain, Ulintz",
    link: "https://app.groupme.com/join_group/65215568/ePh1M4KI",
  },
  {
    name: "PAT 102 - OModhrain, Ulintz",
    link: "https://app.groupme.com/join_group/65215589/sm83aN05",
  },
  {
    name: "PAT 204 - Camc",
    link: "https://app.groupme.com/join_group/65215647/bklRCI8t",
  },
  {
    name: "PAT 300 - Camc",
    link: "https://app.groupme.com/join_group/65215665/eKQfQsPs",
  },
  {
    name: "PAT 300 - OModhrain",
    link: "https://app.groupme.com/join_group/65215696/FmkT9ewV",
  },
  {
    name: "PAT 490 - Camc",
    link: "https://app.groupme.com/join_group/65215897/UnOP0QQf",
  },
  {
    name: "PAT 490 - OModhrain",
    link: "https://app.groupme.com/join_group/65215942/f3RoYqKS",
  },
  {
    name: "PHARMSCI 101 - Lee",
    link: "https://app.groupme.com/join_group/65216027/bPSk1xSM",
  },
  {
    name: "PHARMSCI 420 - Rosania",
    link: "https://app.groupme.com/join_group/65216055/EMCxWDYi",
  },
  {
    name: "PHIL 101 - Joyce",
    link: "https://app.groupme.com/join_group/65216178/Kko3M3wM",
  },
  {
    name: "PHIL 110 - Edmonds",
    link: "https://app.groupme.com/join_group/65216188/d2j13fk0",
  },
  {
    name: "PHIL 183 - Edmonds",
    link: "https://app.groupme.com/join_group/65216198/PjyYuCq8",
  },
  {
    name: "PHIL 230 - Lopez Jr",
    link: "https://app.groupme.com/join_group/65216213/yE99MvYT",
  },
  {
    name: "PHIL 289 - Harmon",
    link: "https://app.groupme.com/join_group/65216225/7GyhXYlo",
  },
  {
    name: "PHIL 298 - Fairchild",
    link: "https://app.groupme.com/join_group/65216234/U263vq6u",
  },
  {
    name: "PHIL 305 - Weatherson",
    link: "https://app.groupme.com/join_group/65216240/Sw3fOjnd",
  },
  {
    name: "PHIL 340 - Swanson",
    link: "https://app.groupme.com/join_group/65216245/zBNa1QrY",
  },
  {
    name: "PHIL 355 - Lowe",
    link: "https://app.groupme.com/join_group/65216258/93UA20ct",
  },
  {
    name: "PHIL 359 - Maitra",
    link: "https://app.groupme.com/join_group/65216272/jQ6ZsRXy",
  },
  {
    name: "PHIL 361 - Railton",
    link: "https://app.groupme.com/join_group/65216278/e9ckhEE8",
  },
  {
    name: "PHIL 416 - Fairchild",
    link: "https://app.groupme.com/join_group/65216336/Px1BFAjn",
  },
  {
    name: "PHIL 444 - Weatherson",
    link: "https://app.groupme.com/join_group/65216361/UXn7mNV7",
  },
  {
    name: "PHIL 446 - Maitra",
    link: "https://app.groupme.com/join_group/65216366/ya16daiA",
  },
  {
    name: "PHRMACOL 425 - Jutkiewicz, Courtney, OMalley, Hernandez-Casner",
    link: "https://app.groupme.com/join_group/65216388/0L15KMXv",
  },
  {
    name: "PHYSICS 116 - Spitz",
    link: "https://app.groupme.com/join_group/65216531/TNjXMX3w",
  },
  {
    name: "PHYSICS 135",
    link: "https://app.groupme.com/join_group/65216576/rUG5N0Zi",
  },
  {
    name: "PHYSICS 135 - Lau",
    link: "https://app.groupme.com/join_group/65216584/wRAAMvfQ",
  },
  {
    name: "PHYSICS 135 - Melnichuk",
    link: "https://app.groupme.com/join_group/65216589/VwJhwSWC",
  },
  {
    name: "PHYSICS 140",
    link: "https://app.groupme.com/join_group/65217465/zan08W0u",
  },
  {
    name: "PHYSICS 140 - Eckhause",
    link: "https://app.groupme.com/join_group/65217722/PLyuz5eK",
  },
  {
    name: "PHYSICS 140 - Evrard",
    link: "https://app.groupme.com/join_group/65217725/0BNjttTs",
  },
  {
    name: "PHYSICS 140 - Melnichuk",
    link: "https://app.groupme.com/join_group/65217734/imQngcLq",
  },
  {
    name: "PHYSICS 140 - Popov",
    link: "https://app.groupme.com/join_group/65217745/RXmHMupP",
  },
  {
    name: "PHYSICS 160 - Merlin",
    link: "https://app.groupme.com/join_group/65217934/SAK9MMMJ",
  },
  {
    name: "PHYSICS 235",
    link: "https://app.groupme.com/join_group/65217949/9bjZEpN4",
  },
  {
    name: "PHYSICS 235 - Chaney",
    link: "https://app.groupme.com/join_group/65217960/Ckrsaijo",
  },
  {
    name: "PHYSICS 235 - Meiners",
    link: "https://app.groupme.com/join_group/65217978/edFp9EBj",
  },
  {
    name: "PHYSICS 240 - Schwarz",
    link: "https://app.groupme.com/join_group/65217986/Jqvjn654",
  },
  {
    name: "PHYSICS 240 - Winn",
    link: "https://app.groupme.com/join_group/65217992/eqJiLv54",
  },
  {
    name: "PHYSICS 288 - Newman",
    link: "https://app.groupme.com/join_group/65218017/H1KuZAS6",
  },
  {
    name: "PHYSICS 290 - Zochowski",
    link: "https://app.groupme.com/join_group/65218027/VDYAF7EL",
  },
  {
    name: "PHYSICS 340 - Uher, Eckhause",
    link: "https://app.groupme.com/join_group/65218039/YSrPlVCj",
  },
  {
    name: "PHYSICS 351 - Deegan",
    link: "https://app.groupme.com/join_group/65218050/5pG11kNH",
  },
  {
    name: "PHYSICS 360 - Elvang",
    link: "https://app.groupme.com/join_group/65218056/WtzIpPR7",
  },
  {
    name: "PHYSICS 390 - Soares-Santos",
    link: "https://app.groupme.com/join_group/65218066/gIdSKuM1",
  },
  {
    name: "PHYSICS 391",
    link: "https://app.groupme.com/join_group/65218074/aEsrSw1j",
  },
  {
    name: "PHYSICS 401 - Zhu",
    link: "https://app.groupme.com/join_group/65218079/xtSYFdet",
  },
  {
    name: "PHYSICS 406 - Aidala",
    link: "https://app.groupme.com/join_group/65218098/eMdQJ2Uq",
  },
  {
    name: "PHYSICS 442",
    link: "https://app.groupme.com/join_group/65218149/q4JOPZ40",
  },
  {
    name: "PHYSIOL 404",
    link: "https://app.groupme.com/join_group/65218338/YItuDwZb",
  },
  {
    name: "POLISH 314",
    link: "https://app.groupme.com/join_group/65220648/s06mvHyB",
  },
  {
    name: "POLSCI 101 - LaVaque-Manty",
    link: "https://app.groupme.com/join_group/65220678/WP0LUj6e",
  },
  {
    name: "POLSCI 111 - Shipan",
    link: "https://app.groupme.com/join_group/65220687/jU4JVlkJ",
  },
  {
    name: "POLSCI 140 - Hicken",
    link: "https://app.groupme.com/join_group/65220697/9yL3Jvsy",
  },
  {
    name: "POLSCI 160 - Koremenos",
    link: "https://app.groupme.com/join_group/65220710/YjDym4K0",
  },
  {
    name: "POLSCI 190 - Hall",
    link: "https://app.groupme.com/join_group/65220728/GurNfY8X",
  },
  {
    name: "POLSCI 190 - Kinder",
    link: "https://app.groupme.com/join_group/65220740/MP3VVCcX",
  },
  {
    name: "POLSCI 190 - Ostfeld",
    link: "https://app.groupme.com/join_group/65220750/ToZuWmGJ",
  },
  {
    name: "POLSCI 320 - Lowande",
    link: "https://app.groupme.com/join_group/65220773/h8upFzPo",
  },
  {
    name: "POLSCI 324 - Hutchings",
    link: "https://app.groupme.com/join_group/65220787/VfQOb6WY",
  },
  {
    name: "POLSCI 340 - Tsebelis",
    link: "https://app.groupme.com/join_group/65220807/nEqkXgjL",
  },
  {
    name: "POLSCI 381 - LaVaque-Manty",
    link: "https://app.groupme.com/join_group/65220815/xfWplsYe",
  },
  {
    name: "POLSCI 386 - Markovits",
    link: "https://app.groupme.com/join_group/65220824/EqtG3zy6",
  },
  {
    name: "POLSCI 389 - Fong",
    link: "https://app.groupme.com/join_group/65220955/pY2vBsnr",
  },
  {
    name: "POLSCI 389 - Inglehart",
    link: "https://app.groupme.com/join_group/65220964/jdyLJb63",
  },
  {
    name: "POLSCI 389 - Morrow",
    link: "https://app.groupme.com/join_group/65220977/NPr48hFJ",
  },
  {
    name: "POLSCI 389 - Nordaas",
    link: "https://app.groupme.com/join_group/65220988/eXTgn93C",
  },
  {
    name: "POLSCI 389 - Peel",
    link: "https://app.groupme.com/join_group/65220998/RDCUDPYx",
  },
  {
    name: "POLSCI 389 - Rivers",
    link: "https://app.groupme.com/join_group/65221015/nc0Jxeir",
  },
  {
    name: "POLSCI 396 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65221036/aSr56nSq",
  },
  {
    name: "POLSCI 498 - Fariss",
    link: "https://app.groupme.com/join_group/65221270/3mASlKZm",
  },
  {
    name: "PORTUG 287 - Vieira Parrine SantAna",
    link: "https://app.groupme.com/join_group/65221450/rScuTkla",
  },
  {
    name: "PPE 300 - Lowe",
    link: "https://app.groupme.com/join_group/65221459/S5Z9vnLY",
  },
  {
    name: "PSYCH 111 - Buvinger",
    link: "https://app.groupme.com/join_group/65221476/zn4I2Tqe",
  },
  {
    name: "PSYCH 111 - Hoeffner",
    link: "https://app.groupme.com/join_group/65221487/FD78vXr5",
  },
  {
    name: "PSYCH 111 - Schreier",
    link: "https://app.groupme.com/join_group/65221497/ZZNXCFV7",
  },
  {
    name: "PSYCH 112 - Malley",
    link: "https://app.groupme.com/join_group/65221505/Lqb5qHbw",
  },
  {
    name: "PSYCH 211",
    link: "https://app.groupme.com/join_group/65221558/8PPUFJLY",
  },
  {
    name: "PSYCH 220 - Cummings",
    link: "https://app.groupme.com/join_group/65221589/OWrzBwzo",
  },
  {
    name: "PSYCH 223 - Fretz",
    link: "https://app.groupme.com/join_group/65221599/RRQBiiai",
  },
  {
    name: "PSYCH 230 - Rothschild",
    link: "https://app.groupme.com/join_group/65221616/p9kcjaDI",
  },
  {
    name: "PSYCH 240",
    link: "https://app.groupme.com/join_group/65221633/wQ5tvFrB",
  },
  {
    name: "PSYCH 242 - Baptista",
    link: "https://app.groupme.com/join_group/65221646/OIxklFtF",
  },
  {
    name: "PSYCH 250 - Ward",
    link: "https://app.groupme.com/join_group/65221656/Zve8WGZ4",
  },
  {
    name: "PSYCH 250 - Warneken",
    link: "https://app.groupme.com/join_group/65221665/UhNWiUVZ",
  },
  {
    name: "PSYCH 265 - Cowles",
    link: "https://app.groupme.com/join_group/65221676/xcd8n0ed",
  },
  {
    name: "PSYCH 270 - Lopez-Duran",
    link: "https://app.groupme.com/join_group/65221683/AFbTqMXf",
  },
  {
    name: "PSYCH 280 - Ackerman",
    link: "https://app.groupme.com/join_group/65221700/DXAy3uRM",
  },
  {
    name: "PSYCH 290 - Durkee",
    link: "https://app.groupme.com/join_group/65221711/DCMtW9Pa",
  },
  {
    name: "PSYCH 291",
    link: "https://app.groupme.com/join_group/65221718/osvlFRRf",
  },
  {
    name: "PSYCH 303 - Rabinowitz",
    link: "https://app.groupme.com/join_group/65221730/VdK0Rdi0",
  },
  {
    name: "PSYCH 312",
    link: "https://app.groupme.com/join_group/65221853/fUMiBKzJ",
  },
  {
    name: "PSYCH 337 - Beehner",
    link: "https://app.groupme.com/join_group/65222045/gBXKw2tG",
  },
  {
    name: "PSYCH 339",
    link: "https://app.groupme.com/join_group/65222055/9qOx4W0E",
  },
  {
    name: "PSYCH 340 - Brang",
    link: "https://app.groupme.com/join_group/65222065/Fudx8hWJ",
  },
  {
    name: "PSYCH 345 - Zahodne",
    link: "https://app.groupme.com/join_group/65222105/UtizzBQL",
  },
  {
    name: "PSYCH 347 - Snodgrass",
    link: "https://app.groupme.com/join_group/65222117/HTrDUk8N",
  },
  {
    name: "PSYCH 349 - Levinson",
    link: "https://app.groupme.com/join_group/65222132/8fqOeipk",
  },
  {
    name: "PSYCH 352 - Gardner-Neblett",
    link: "https://app.groupme.com/join_group/65222145/VSx1CjGN",
  },
  {
    name: "PSYCH 353 - Schreier",
    link: "https://app.groupme.com/join_group/65222153/i6bPFDg7",
  },
  {
    name: "PSYCH 355 - Perkins",
    link: "https://app.groupme.com/join_group/65222177/5q0wrgXE",
  },
  {
    name: "PSYCH 358 - Keating",
    link: "https://app.groupme.com/join_group/65222189/VKN6FI1q",
  },
  {
    name: "PSYCH 371",
    link: "https://app.groupme.com/join_group/65222221/VIyFwOJs",
  },
  {
    name: "PSYCH 373 - Olson",
    link: "https://app.groupme.com/join_group/65222231/oRJR9Nwu",
  },
  {
    name: "PSYCH 389 - Dunning",
    link: "https://app.groupme.com/join_group/65222255/3V6X3oA3",
  },
  {
    name: "PSYCH 393 - Rabinowitz",
    link: "https://app.groupme.com/join_group/65222274/ODo4mx2A",
  },
  {
    name: "PSYCH 395 - Kira",
    link: "https://app.groupme.com/join_group/65222284/h98VFXJ1",
  },
  {
    name: "PSYCH 401 - Malley",
    link: "https://app.groupme.com/join_group/65222476/uvt15mfP",
  },
  {
    name: "PSYCH 430 - Aragona",
    link: "https://app.groupme.com/join_group/65222615/jA5oWlCN",
  },
  {
    name: "PSYCH 430 - Cummings",
    link: "https://app.groupme.com/join_group/65222628/GYrSC1WV",
  },
  {
    name: "PSYCH 435 - Sarter",
    link: "https://app.groupme.com/join_group/65222644/AkveLO7S",
  },
  {
    name: "PSYCH 436 - Eban-Rothschild",
    link: "https://app.groupme.com/join_group/65222654/cCJSyirM",
  },
  {
    name: "PSYCH 440 - Perkins",
    link: "https://app.groupme.com/join_group/65222666/1ZOIQX5E",
  },
  {
    name: "PSYCH 445 - Boland",
    link: "https://app.groupme.com/join_group/65222682/rHOptcWy",
  },
  {
    name: "PSYCH 449 - Michal",
    link: "https://app.groupme.com/join_group/65222724/CM2w4bDr",
  },
  {
    name: "PSYCH 456 - Volling",
    link: "https://app.groupme.com/join_group/65222738/Gxw44CvU",
  },
  {
    name: "PSYCH 457 - Jodl",
    link: "https://app.groupme.com/join_group/65222873/FlWLazJN",
  },
  {
    name: "PSYCH 457 - Miller",
    link: "https://app.groupme.com/join_group/65222885/6vg95FZV",
  },
  {
    name: "PSYCH 475 - Graham-Bermann",
    link: "https://app.groupme.com/join_group/65222951/wSwZ2Ds1",
  },
  {
    name: "PSYCH 477 - Nagata",
    link: "https://app.groupme.com/join_group/65222958/bMEILGyo",
  },
  {
    name: "PUBHLTH 200 - Youatt",
    link: "https://app.groupme.com/join_group/65222970/ixhIHfTN",
  },
  {
    name: "PUBHLTH 310 - Anderson",
    link: "https://app.groupme.com/join_group/65223004/dvyvtcM0",
  },
  {
    name: "PUBHLTH 382 - Neblett",
    link: "https://app.groupme.com/join_group/65223024/kX4JxE6h",
  },
  {
    name: "PUBPOL 418 - Henry",
    link: "https://app.groupme.com/join_group/65223125/wWYxHC2A",
  },
  {
    name: "PUBPOL 423 - Hills II",
    link: "https://app.groupme.com/join_group/65223141/GUu3wOjC",
  },
  {
    name: "PUBPOL 456 - Hieftje",
    link: "https://app.groupme.com/join_group/65223166/mZ5iX7t4",
  },
  {
    name: "PUBPOL 467",
    link: "https://app.groupme.com/join_group/65223311/tmYqX3ON",
  },
  {
    name: "PUBPOL 474 - Green",
    link: "https://app.groupme.com/join_group/65223325/ddeSaxWr",
  },
  {
    name: "PUBPOL 474 - Henry",
    link: "https://app.groupme.com/join_group/65223330/wtMn36vc",
  },
  {
    name: "PUBPOL 474 - Kabo",
    link: "https://app.groupme.com/join_group/65223339/VbDlTiAH",
  },
  {
    name: "PUBPOL 475 - Bednar",
    link: "https://app.groupme.com/join_group/65223353/3jMNHcxL",
  },
  {
    name: "PUBPOL 475 - Levitsky",
    link: "https://app.groupme.com/join_group/65223391/2Am97RK3",
  },
  {
    name: "PUBPOL 495 - Morse",
    link: "https://app.groupme.com/join_group/65224257/1vKw1t2V",
  },
  {
    name: "PUBPOL 495 - Pilkauskas",
    link: "https://app.groupme.com/join_group/65225396/EhxxDWvS",
  },
  {
    name: "QMSS 201 - Whitaker",
    link: "https://app.groupme.com/join_group/65225403/eP6wQaJX",
  },
  {
    name: "RCHUMS 220 - Matthews",
    link: "https://app.groupme.com/join_group/65226503/ysSq8Jpm",
  },
  {
    name: "RCHUMS 334 - Maiorova",
    link: "https://app.groupme.com/join_group/65226860/I28dvash",
  },
  {
    name: "RCIDIV 351 - Burkam",
    link: "https://app.groupme.com/join_group/65227231/jf5warAa",
  },
  {
    name: "RCSSCI 350 - DAnieri",
    link: "https://app.groupme.com/join_group/65227688/F0c8z12J",
  },
  {
    name: "RELIGION 236 - Boccaccini",
    link: "https://app.groupme.com/join_group/65227961/jkvAr7BB",
  },
  {
    name: "RELIGION 248 - de la Cruz",
    link: "https://app.groupme.com/join_group/65227972/cyoZtBD8",
  },
  {
    name: "ROB 103",
    link: "https://app.groupme.com/join_group/65228060/UGubo7ku",
  },
  {
    name: "RUSSIAN 346 - Maiorova",
    link: "https://app.groupme.com/join_group/65228271/ffZKWIg7",
  },
  {
    name: "RUSSIAN 375 - Maiorova",
    link: "https://app.groupme.com/join_group/65228283/9mEuzed0",
  },
  {
    name: "SI 106 - Oney",
    link: "https://app.groupme.com/join_group/65228589/TMET12ss",
  },
  {
    name: "SI 110 - Wallace",
    link: "https://app.groupme.com/join_group/65228598/9oUOlkTH",
  },
  {
    name: "SI 206 - Ericson",
    link: "https://app.groupme.com/join_group/65228607/IAHwTpfl",
  },
  {
    name: "SI 330 - Li",
    link: "https://app.groupme.com/join_group/65228626/DF2v9zaA",
  },
  {
    name: "SI 334 - Cohn",
    link: "https://app.groupme.com/join_group/65228632/zBzDZMhe",
  },
  {
    name: "SI 339 - van Lent",
    link: "https://app.groupme.com/join_group/65228641/ckLFp96c",
  },
  {
    name: "SI 360 - Borland",
    link: "https://app.groupme.com/join_group/65228654/VpYG7U0s",
  },
  {
    name: "SI 364 - Severance",
    link: "https://app.groupme.com/join_group/65228661/u9DRYIQc",
  },
  {
    name: "SI 410 - Pasquetto",
    link: "https://app.groupme.com/join_group/65228682/jlyARWaa",
  },
  {
    name: "SI 422 - Marcu",
    link: "https://app.groupme.com/join_group/65228689/xAt8cHAp",
  },
  {
    name: "SI 430 - Naseem",
    link: "https://app.groupme.com/join_group/65228692/0N9640p0",
  },
  {
    name: "SI 485 - Jacobs",
    link: "https://app.groupme.com/join_group/65228717/8YLHDOFX",
  },
  {
    name: "SLAVIC 150 - Pasek",
    link: "https://app.groupme.com/join_group/65228865/NZ7c57ld",
  },
  {
    name: "SLAVIC 245 - Aleksic",
    link: "https://app.groupme.com/join_group/65228890/MIKrj98R",
  },
  {
    name: "SLAVIC 290 - Pasek",
    link: "https://app.groupme.com/join_group/65228917/5hWrv2K6",
  },
  {
    name: "SLAVIC 312",
    link: "https://app.groupme.com/join_group/65228927/kFWeoHh3",
  },
  {
    name: "SM 100 - Simpkins",
    link: "https://app.groupme.com/join_group/65228971/LBicLJ2t",
  },
  {
    name: "SM 101 - Basten",
    link: "https://app.groupme.com/join_group/65228987/MSqnxKdz",
  },
  {
    name: "SM 111 - Basten",
    link: "https://app.groupme.com/join_group/65229008/8qKz86Cc",
  },
  {
    name: "SM 203 - George",
    link: "https://app.groupme.com/join_group/65229022/W5ciJ2xg",
  },
  {
    name: "SM 238 - Szymanski",
    link: "https://app.groupme.com/join_group/65229376/8oI4cJ0t",
  },
  {
    name: "SM 241 - Fort",
    link: "https://app.groupme.com/join_group/65229390/3J5pWW7Q",
  },
  {
    name: "SM 249 - Park",
    link: "https://app.groupme.com/join_group/65229396/vV0kX2eR",
  },
  {
    name: "SOC 100 - Gaston",
    link: "https://app.groupme.com/join_group/65229743/iSJWrGr1",
  },
  {
    name: "SOC 100 - McGinn",
    link: "https://app.groupme.com/join_group/65229751/jkJPe6lB",
  },
  {
    name: "SOC 102 - Morenoff",
    link: "https://app.groupme.com/join_group/65229756/rGgsHLs9",
  },
  {
    name: "SOC 102 - Zelner",
    link: "https://app.groupme.com/join_group/65229768/9Co5K9Ur",
  },
  {
    name: "SOC 105 - Lacy",
    link: "https://app.groupme.com/join_group/65229776/BF808NmC",
  },
  {
    name: "SOC 105 - Ybarra",
    link: "https://app.groupme.com/join_group/65229784/YawPKgB1",
  },
  {
    name: "SOC 122 - Hicks",
    link: "https://app.groupme.com/join_group/65229796/Tl8DeA5b",
  },
  {
    name: "SOC 210 - Manduca",
    link: "https://app.groupme.com/join_group/65229804/i0F68L46",
  },
  {
    name: "SOC 210 - Zhou",
    link: "https://app.groupme.com/join_group/65229812/ctzXDada",
  },
  {
    name: "SOC 225 - Christensen",
    link: "https://app.groupme.com/join_group/65229826/FnqT9APA",
  },
  {
    name: "SOC 233 - Lacy",
    link: "https://app.groupme.com/join_group/65229839/MVR3Iya8",
  },
  {
    name: "SOC 242 - Sullivan",
    link: "https://app.groupme.com/join_group/65229848/D74alMBI",
  },
  {
    name: "SOC 270 - Peterson",
    link: "https://app.groupme.com/join_group/65229854/XSJLhSru",
  },
  {
    name: "SOC 285 - McGinn",
    link: "https://app.groupme.com/join_group/65229864/IJvxe4Fg",
  },
  {
    name: "SOC 295 - Levine",
    link: "https://app.groupme.com/join_group/65229881/NiQ9vt9H",
  },
  {
    name: "SOC 295 - Watkins-Hayes",
    link: "https://app.groupme.com/join_group/65229888/JLYKwRET",
  },
  {
    name: "SOC 300 - McGinn",
    link: "https://app.groupme.com/join_group/65229905/amnZmn5y",
  },
  {
    name: "SOC 302 - Kelley",
    link: "https://app.groupme.com/join_group/65229916/5GdsqYxx",
  },
  {
    name: "SOC 310 - Ybarra",
    link: "https://app.groupme.com/join_group/65230023/NSfUiMjK",
  },
  {
    name: "SOC 335 - Zelner",
    link: "https://app.groupme.com/join_group/65230241/JshYmoct",
  },
  {
    name: "SOC 344 - Martin",
    link: "https://app.groupme.com/join_group/65230250/D6fsAmLb",
  },
  {
    name: "SOC 368 - McGann",
    link: "https://app.groupme.com/join_group/65230267/9XAXQ8yg",
  },
  {
    name: "SOC 379 - Markovits",
    link: "https://app.groupme.com/join_group/65230286/pL3RLeRR",
  },
  {
    name: "SOC 447 - McGann",
    link: "https://app.groupme.com/join_group/65230328/j6S3yNhm",
  },
  {
    name: "SOC 495 - Kelley",
    link: "https://app.groupme.com/join_group/65230398/wkCEppyL",
  },
  {
    name: "SPACE 101 - Gilbert",
    link: "https://app.groupme.com/join_group/65230449/tYuGB1fA",
  },
  {
    name: "SPANISH 101",
    link: "https://app.groupme.com/join_group/65230645/zebDxxu3",
  },
  {
    name: "SPANISH 102",
    link: "https://app.groupme.com/join_group/65230655/aL6on6n8",
  },
  {
    name: "SPANISH 103",
    link: "https://app.groupme.com/join_group/65230668/Tbqijjzw",
  },
  {
    name: "SPANISH 231",
    link: "https://app.groupme.com/join_group/65230695/W8EkxC31",
  },
  {
    name: "SPANISH 232",
    link: "https://app.groupme.com/join_group/65230701/QOiUWabs",
  },
  {
    name: "SPANISH 232 - Calixto",
    link: "https://app.groupme.com/join_group/65230707/zBc3ewzA",
  },
  {
    name: "SPANISH 232 - McAlister",
    link: "https://app.groupme.com/join_group/65230713/VVQ6VYIm",
  },
  {
    name: "SPANISH 232 - Ramos Silgado",
    link: "https://app.groupme.com/join_group/65230717/w0zFXgJ5",
  },
  {
    name: "SPANISH 277",
    link: "https://app.groupme.com/join_group/65230723/WzaFdpWV",
  },
  {
    name: "SPANISH 278 - Galvan-Santibanez",
    link: "https://app.groupme.com/join_group/65230729/cXEGxHxC",
  },
  {
    name: "SPANISH 280 - Highfill",
    link: "https://app.groupme.com/join_group/65230769/770HUZts",
  },
  {
    name: "SPANISH 283 - Dorantes",
    link: "https://app.groupme.com/join_group/65230919/4HNsbsbv",
  },
  {
    name: "SPANISH 295 - Freire Hermida",
    link: "https://app.groupme.com/join_group/65231775/qu5WVo7p",
  },
  {
    name: "SPANISH 295 - Hansen, Freire Hermida",
    link: "https://app.groupme.com/join_group/65231784/mF7O4SHG",
  },
  {
    name: "SPANISH 298 - Roosevelt",
    link: "https://app.groupme.com/join_group/65231799/K3BvCsCH",
  },
  {
    name: "SPANISH 315 - Herrero-Olaizola",
    link: "https://app.groupme.com/join_group/65231808/wQtRkCRx",
  },
  {
    name: "SPANISH 332 - Fridman",
    link: "https://app.groupme.com/join_group/65231815/UiLFfJK9",
  },
  {
    name: "SPANISH 373 - Ruiz Mendoza",
    link: "https://app.groupme.com/join_group/65231861/97P1HgAk",
  },
  {
    name: "SPANISH 387 - Szpiech",
    link: "https://app.groupme.com/join_group/65231891/OaZ7Ykjo",
  },
  {
    name: "SPANISH 430 - Boalick",
    link: "https://app.groupme.com/join_group/65231929/LpOqVeRn",
  },
  {
    name: "LATIN 410 - Dufallo",
    link: "https://app.groupme.com/join_group/65239232/19FOB4Dy",
  },
  {
    name: "MATH 412 - Elduque",
    link: "https://app.groupme.com/join_group/65239375/SByfqzqd",
  },
  {
    name: "MATH 417 - Zou",
    link: "https://app.groupme.com/join_group/65239388/5KSRe4G0",
  },
  {
    name: "MATH 419 - Smythe",
    link: "https://app.groupme.com/join_group/65239398/rFgV7Zh6",
  },
  {
    name: "MECHENG 320 - Towne",
    link: "https://app.groupme.com/join_group/65239571/Gopxy4Ft",
  },
  {
    name: "MKT 300 - Huang",
    link: "https://app.groupme.com/join_group/65239630/JQaCjnRc",
  },
  {
    name: "PHRMACOL 425 - Jutkiewicz, Lee, Morales Rodriguez",
    link: "https://app.groupme.com/join_group/65240218/ciTGx8gE",
  },
  {
    name: "PHYSIOL 201 - Rust",
    link: "https://app.groupme.com/join_group/65240232/EQiyDiV5",
  },
  {
    name: "POLSCI 387 - Tsebelis",
    link: "https://app.groupme.com/join_group/65240307/FefmXqHj",
  },
  {
    name: "PSYCH 330 - Rosati",
    link: "https://app.groupme.com/join_group/65240342/B1JlHy0k",
  },
  {
    name: "SOC 305 - Steinmetz",
    link: "https://app.groupme.com/join_group/65240468/3U42GamY",
  },
  {
    name: "MATH 215 - Irmak",
    link: "https://app.groupme.com/join_group/65241701/lDNnc0Qj",
  },
];
