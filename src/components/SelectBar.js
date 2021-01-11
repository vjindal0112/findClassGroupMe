import React, { useState, onChange } from "react";
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
    name: "AAS 201 - Andre",
    link: "https://app.groupme.com/join_group/65166331/JzsrFWWN",
  },
  {
    name: "AAS 208 - Miller",
    link: "https://app.groupme.com/join_group/65166332/jv13Xs0G",
  },
  {
    name: "AAS 224 - Doris",
    link: "https://app.groupme.com/join_group/65166335/tLi42vjS",
  },
  {
    name: "AAS 232 - Poulson-Bryant",
    link: "https://app.groupme.com/join_group/65166337/3b0zodhz",
  },
  {
    name: "AAS 247 - Peterson",
    link: "https://app.groupme.com/join_group/65166341/MooeCaKV",
  },
  {
    name: "AAS 248 - Ellsworth",
    link: "https://app.groupme.com/join_group/65166344/taTYFF4t",
  },
  {
    name: "AAS 251 - Woods",
    link: "https://app.groupme.com/join_group/65166345/EUmWHTqR",
  },
  {
    name: "AAS 262 - Countryman",
    link: "https://app.groupme.com/join_group/65166349/yPAHIuUE",
  },
  {
    name: "AAS 303 - Mahan",
    link: "https://app.groupme.com/join_group/65166357/eV6lbwq1",
  },
  {
    name: "AAS 330 - Ward",
    link: "https://app.groupme.com/join_group/65166360/1aSmsaAl",
  },
  {
    name: "AAS 337 - Simmons",
    link: "https://app.groupme.com/join_group/65166363/qmKdFYTG",
  },
  {
    name: "AAS 338 - Levy-Hussen",
    link: "https://app.groupme.com/join_group/65166366/BzgQrfSm",
  },
  {
    name: "AAS 347 - Zelner",
    link: "https://app.groupme.com/join_group/65166368/2aOWzNVJ",
  },
  {
    name: "AAS 418 - Hutchings",
    link: "https://app.groupme.com/join_group/65166375/NIG06w7F",
  },
  {
    name: "AAS 460 - Stein",
    link: "https://app.groupme.com/join_group/65166377/mrBWPqu3",
  },
  {
    name: "AAS 116 - Mwipopo",
    link: "https://app.groupme.com/join_group/65166382/MCdjhzUY",
  },
  {
    name: "AAS 126",
    link: "https://app.groupme.com/join_group/65166383/04PbEPcI",
  },
  {
    name: "AAS 126 - Ayoola",
    link: "https://app.groupme.com/join_group/65166384/qTOUU59x",
  },
  {
    name: "AAS 226 - Ayoola",
    link: "https://app.groupme.com/join_group/65166389/SJiu4p5o",
  },
  {
    name: "AAS 316 - Mpesha",
    link: "https://app.groupme.com/join_group/65166391/t0yVDv0u",
  },
  {
    name: "AAS 426 - Murray",
    link: "https://app.groupme.com/join_group/65166394/mBqB8gtC",
  },
  {
    name: "AAS 516 - Mwipopo",
    link: "https://app.groupme.com/join_group/65166395/kQJWjIya",
  },
  {
    name: "AAS 518",
    link: "https://app.groupme.com/join_group/65166398/ADLO89Wi",
  },
  {
    name: "AAS 518 - Ayoola",
    link: "https://app.groupme.com/join_group/65166400/BaPS0WnV",
  },
  {
    name: "AAS 536 - Mpesha",
    link: "https://app.groupme.com/join_group/65166423/XGMQYIUm",
  },
  {
    name: "AAS 103 - Klein",
    link: "https://app.groupme.com/join_group/65166425/PS4h4TQz",
  },
  {
    name: "AAS 104 - Wells",
    link: "https://app.groupme.com/join_group/65166426/Oervx4me",
  },
  {
    name: "AAS 104 - Pearson",
    link: "https://app.groupme.com/join_group/65166428/cLMEy8W5",
  },
  {
    name: "AAS 202 - Boisseron",
    link: "https://app.groupme.com/join_group/65166431/aKs5UpaB",
  },
  {
    name: "AAS 206 - Ampene",
    link: "https://app.groupme.com/join_group/65166433/0o7SqaeC",
  },
  {
    name: "AAS 290 - Ellsworth",
    link: "https://app.groupme.com/join_group/65166434/JuF6SGmz",
  },
  {
    name: "AAS 290 - Opoku-Agyemang",
    link: "https://app.groupme.com/join_group/65166437/H6N9Ysqj",
  },
  {
    name: "AAS 317 - Sweeney",
    link: "https://app.groupme.com/join_group/65166438/8IRSfaES",
  },
  {
    name: "AAS 358 - Wilson",
    link: "https://app.groupme.com/join_group/65166439/3p7Q85dz",
  },
  {
    name: "AAS 358 - Jimenez",
    link: "https://app.groupme.com/join_group/65166443/oeuYBIpg",
  },
  {
    name: "AAS 358 - Jones",
    link: "https://app.groupme.com/join_group/65166446/L5bjgxVH",
  },
  {
    name: "AAS 358 - Roby",
    link: "https://app.groupme.com/join_group/65166447/SFnDBRr4",
  },
  {
    name: "AAS 358 - Mpesha",
    link: "https://app.groupme.com/join_group/65166449/7kL0yMw1",
  },
  {
    name: "AAS 358 - Strongman",
    link: "https://app.groupme.com/join_group/65166450/YtJKqkAx",
  },
  {
    name: "AAS 358 - Ampene",
    link: "https://app.groupme.com/join_group/65166453/GkNUAYJV",
  },
  {
    name: "AAS 358 - Klein",
    link: "https://app.groupme.com/join_group/65166455/IMooGRCS",
  },
  {
    name: "AAS 362 - Doris",
    link: "https://app.groupme.com/join_group/65166458/MPP0UTga",
  },
  {
    name: "AAS 394 - Poulson-Bryant",
    link: "https://app.groupme.com/join_group/65166460/e45Dspbm",
  },
  {
    name: "AAS 395 - Thurman",
    link: "https://app.groupme.com/join_group/65166461/tYkN1KkZ",
  },
  {
    name: "AAS 453 - Pitcher",
    link: "https://app.groupme.com/join_group/65166464/yedvfJyX",
  },
  {
    name: "AAS 458 - Jones",
    link: "https://app.groupme.com/join_group/65166466/hAUu1TuT",
  },
  {
    name: "AAS 458 - Davis",
    link: "https://app.groupme.com/join_group/65166468/WudbKNtx",
  },
  {
    name: "AAS 458 - Ricco",
    link: "https://app.groupme.com/join_group/65166471/WClTbNyL",
  },
  {
    name: "AAS 458 - Stein",
    link: "https://app.groupme.com/join_group/65166474/ki7mNHGg",
  },
  {
    name: "AAS 495 - Ashforth",
    link: "https://app.groupme.com/join_group/65166505/wED4aVvY",
  },
  {
    name: "AAS 495 - Ekotto",
    link: "https://app.groupme.com/join_group/65166507/eEDfx91F",
  },
  {
    name: "AAS 498 - Ward",
    link: "https://app.groupme.com/join_group/65166509/g3Oj0Olk",
  },
  {
    name: "AAS 498 - Thompson",
    link: "https://app.groupme.com/join_group/65166513/nt8qM14r",
  },
  {
    name: "AAS 558 - Santamarina",
    link: "https://app.groupme.com/join_group/65166516/reHn66Dn",
  },
  {
    name: "AAS 558",
    link: "https://app.groupme.com/join_group/65166518/sSoH3Ew6",
  },
  {
    name: "AAS 558 - Settles",
    link: "https://app.groupme.com/join_group/65166520/7sxbXHtN",
  },
  {
    name: "AAS 558 - Kelow-Bennett",
    link: "https://app.groupme.com/join_group/65166523/EXgHWPlO",
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
    name: "ACC 336 - Nezafat",
    link: "https://app.groupme.com/join_group/65166538/z74AmJWm",
  },
  {
    name: "ACC 338 - Dittmar",
    link: "https://app.groupme.com/join_group/65166540/8Rgn3zdE",
  },
  {
    name: "ACC 418 - Lehavy",
    link: "https://app.groupme.com/join_group/65166541/iSRWkTei",
  },
  {
    name: "ACC 471 - Williams",
    link: "https://app.groupme.com/join_group/65166544/2cW96zFv",
  },
  {
    name: "ACC 471",
    link: "https://app.groupme.com/join_group/65166550/Lz58bWxb",
  },
  {
    name: "ACC 533 - Miller",
    link: "https://app.groupme.com/join_group/65166554/k4JApTdQ",
  },
  {
    name: "ACC 551 - Nagar",
    link: "https://app.groupme.com/join_group/65166555/xjrnqmcA",
  },
  {
    name: "ACC 552 - Omartian",
    link: "https://app.groupme.com/join_group/65166556/wfEgmfmx",
  },
  {
    name: "ACC 558 - Oswald",
    link: "https://app.groupme.com/join_group/65166558/8dt99RGP",
  },
  {
    name: "ACC 564 - Ball",
    link: "https://app.groupme.com/join_group/65166561/tXog5j0W",
  },
  {
    name: "ACC 565 - Krolick",
    link: "https://app.groupme.com/join_group/65166566/OowzMJkv",
  },
  {
    name: "AERO 102 - Yau, Kober",
    link: "https://app.groupme.com/join_group/65166589/xQaBsSwh",
  },
  {
    name: "AERO 202 - Penry",
    link: "https://app.groupme.com/join_group/65166591/EpJiFYjD",
  },
  {
    name: "AERO 311 - Wilkinson",
    link: "https://app.groupme.com/join_group/65166593/6idbk5cj",
  },
  {
    name: "AERO 411 - Smith",
    link: "https://app.groupme.com/join_group/65166597/cbI3V1d3",
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
    name: "AEROSP 305 - Smith",
    link: "https://app.groupme.com/join_group/65166612/MGZPoRBe",
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
    name: "AEROSP 341 - Gorodetsky",
    link: "https://app.groupme.com/join_group/65166622/AjCfQo8n",
  },
  {
    name: "AEROSP 343 - Girard",
    link: "https://app.groupme.com/join_group/65166623/GknWM0YU",
  },
  {
    name: "AEROSP 405 - Smith",
    link: "https://app.groupme.com/join_group/65166626/bPSkf3Ms",
  },
  {
    name: "AEROSP 423 - Fidkowski",
    link: "https://app.groupme.com/join_group/65166628/agcHhu6B",
  },
  {
    name: "AEROSP 470 - Bernstein",
    link: "https://app.groupme.com/join_group/65166631/XWaGNSXG",
  },
  {
    name: "AEROSP 483 - Cutler",
    link: "https://app.groupme.com/join_group/65166633/NSQ0KQ5G",
  },
  {
    name: "AEROSP 495 - Gamba",
    link: "https://app.groupme.com/join_group/65166635/FNVBdYmR",
  },
  {
    name: "AEROSP 495 - Halow",
    link: "https://app.groupme.com/join_group/65166636/aBIWAldq",
  },
  {
    name: "AEROSP 495 - Washabaugh",
    link: "https://app.groupme.com/join_group/65166638/eDmGtUyF",
  },
  {
    name: "AEROSP 495 - Smith",
    link: "https://app.groupme.com/join_group/65166640/U4S8jHTY",
  },
  {
    name: "AEROSP 510 - Sundararaghavan",
    link: "https://app.groupme.com/join_group/65166643/2prUJCkE",
  },
  {
    name: "AEROSP 525 - Raman",
    link: "https://app.groupme.com/join_group/65166660/Jj5ttpnI",
  },
  {
    name: "AEROSP 532 - Gamba",
    link: "https://app.groupme.com/join_group/65166662/ynJjR45c",
  },
  {
    name: "AEROSP 533 - Driscoll",
    link: "https://app.groupme.com/join_group/65166664/eVwfR5ma",
  },
  {
    name: "AEROSP 543 - Cesnik",
    link: "https://app.groupme.com/join_group/65166666/PRt5RiPC",
  },
  {
    name: "AEROSP 548 - Kolmanovsky",
    link: "https://app.groupme.com/join_group/65166667/eJ9IEm4U",
  },
  {
    name: "AEROSP 550 - Ozay",
    link: "https://app.groupme.com/join_group/65166671/uQG0ajFv",
  },
  {
    name: "AEROSP 551 - Meerkov",
    link: "https://app.groupme.com/join_group/65166675/Ra957hzT",
  },
  {
    name: "AEROSP 552 - Jeannin",
    link: "https://app.groupme.com/join_group/65166676/sViApkqf",
  },
  {
    name: "AEROSP 583 - Renno",
    link: "https://app.groupme.com/join_group/65166677/ic3fvDhM",
  },
  {
    name: "AEROSP 588 - Martins",
    link: "https://app.groupme.com/join_group/65166678/xkl77JCn",
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
    name: "AES 240 - Chen",
    link: "https://app.groupme.com/join_group/65166692/S13yLS9H",
  },
  {
    name: "AES 241 - Bodary",
    link: "https://app.groupme.com/join_group/65166693/1B8Ex1xZ",
  },
  {
    name: "AES 313 - Miller",
    link: "https://app.groupme.com/join_group/65166695/3KZlfiA5",
  },
  {
    name: "AES 313 - George",
    link: "https://app.groupme.com/join_group/65166700/vTT1LcDO",
  },
  {
    name: "AES 315 - Stack",
    link: "https://app.groupme.com/join_group/65166703/d7r8Ns9q",
  },
  {
    name: "AES 332 - Kern",
    link: "https://app.groupme.com/join_group/65166708/qDVlxmVC",
  },
  {
    name: "AES 332",
    link: "https://app.groupme.com/join_group/65166712/2YFAaIfe",
  },
  {
    name: "AES 333 - Pollick",
    link: "https://app.groupme.com/join_group/65166715/kMT0VxL7",
  },
  {
    name: "AES 336 - Chen",
    link: "https://app.groupme.com/join_group/65166720/ApU1VlFF",
  },
  {
    name: "AES 425 - Ulrich",
    link: "https://app.groupme.com/join_group/65166722/YozGfhly",
  },
  {
    name: "AES 446 - Hasson",
    link: "https://app.groupme.com/join_group/65166741/mknISYah",
  },
  {
    name: "AES 451 - Harris",
    link: "https://app.groupme.com/join_group/65166742/PkX1XNjg",
  },
  {
    name: "AES 403",
    link: "https://app.groupme.com/join_group/65166744/CpelxVxr",
  },
  {
    name: "ALA 101 - Hoffman",
    link: "https://app.groupme.com/join_group/65166746/Gc5kfjmQ",
  },
  {
    name: "ALA 103 - Woods",
    link: "https://app.groupme.com/join_group/65166749/rRvqE7dV",
  },
  {
    name: "ALA 109 - Eickmeyer",
    link: "https://app.groupme.com/join_group/65166750/6QS87ZzJ",
  },
  {
    name: "ALA 115 - Bhaumik",
    link: "https://app.groupme.com/join_group/65166753/PcwIqCAL",
  },
  {
    name: "ALA 115 - Mank",
    link: "https://app.groupme.com/join_group/65166756/BK5nYs3D",
  },
  {
    name: "ALA 118 - Oney",
    link: "https://app.groupme.com/join_group/65166757/0h6JvCgk",
  },
  {
    name: "ALA 170 - Hicks",
    link: "https://app.groupme.com/join_group/65166759/lS3jLbY4",
  },
  {
    name: "ALA 170 - McKay, Curzan",
    link: "https://app.groupme.com/join_group/65166760/IpZptc6i",
  },
  {
    name: "ALA 211 - Peters",
    link: "https://app.groupme.com/join_group/65166761/cc1pHqqe",
  },
  {
    name: "ALA 212 - Wiseman",
    link: "https://app.groupme.com/join_group/65166763/nCGbl7M3",
  },
  {
    name: "ALA 223 - Fretz",
    link: "https://app.groupme.com/join_group/65166765/2lGDh91L",
  },
  {
    name: "ALA 240 - Jansen",
    link: "https://app.groupme.com/join_group/65166767/8nvceGjL",
  },
  {
    name: "ALA 240 - Christiaens",
    link: "https://app.groupme.com/join_group/65166768/mS8Ld32J",
  },
  {
    name: "ALA 240 - Pehlke | she/her",
    link: "https://app.groupme.com/join_group/65166769/NV7q5L3U",
  },
  {
    name: "ALA 256 - Ludwig",
    link: "https://app.groupme.com/join_group/65166771/0Z5eQiP8",
  },
  {
    name: "ALA 260 - Brissey , Andre",
    link: "https://app.groupme.com/join_group/65166772/i9V85mGS",
  },
  {
    name: "ALA 264 - Finn",
    link: "https://app.groupme.com/join_group/65166773/cdlXbDgq",
  },
  {
    name: "ALA 270 - Oehrli",
    link: "https://app.groupme.com/join_group/65166774/TQlLBEVY",
  },
  {
    name: "ALA 270 - Hicks",
    link: "https://app.groupme.com/join_group/65166776/uHbA3k9z",
  },
  {
    name: "ALA 270 - Marks",
    link: "https://app.groupme.com/join_group/65166778/gn2bjY6c",
  },
  {
    name: "ALA 270 - Ludwig",
    link: "https://app.groupme.com/join_group/65166779/64zEhLub",
  },
  {
    name: "ALA 270 - Modey",
    link: "https://app.groupme.com/join_group/65166793/3ndTjP3H",
  },
  {
    name: "ALA 270",
    link: "https://app.groupme.com/join_group/65166796/9zTN7qIm",
  },
  {
    name: "ALA 290 - Moshin",
    link: "https://app.groupme.com/join_group/65166798/XXyKHwCP",
  },
  {
    name: "ALA 301 - Gibelyou",
    link: "https://app.groupme.com/join_group/65166801/NmSCyANG",
  },
  {
    name: "ALA 315 - Gibelyou",
    link: "https://app.groupme.com/join_group/65166802/gqU3Zrk0",
  },
  {
    name: "ALA 350 - Gibelyou",
    link: "https://app.groupme.com/join_group/65166805/3y8qj83I",
  },
  {
    name: "ALA 361 - Mahalingam",
    link: "https://app.groupme.com/join_group/65166806/rU3YbMlj",
  },
  {
    name: "ALA 370 - Finn",
    link: "https://app.groupme.com/join_group/65166809/OQY2hHx5",
  },
  {
    name: "ALA 470 - Joque",
    link: "https://app.groupme.com/join_group/65166810/TAtRJGaC",
  },
  {
    name: "ALA 325 - Silbert",
    link: "https://app.groupme.com/join_group/65166812/jqC6cmrG",
  },
  {
    name: "ALA 108 - Turman",
    link: "https://app.groupme.com/join_group/65166813/Wv5b9l43",
  },
  {
    name: "ALA 122 - Hicks",
    link: "https://app.groupme.com/join_group/65166816/E8SPuXKW",
  },
  {
    name: "ALA 125 - Silbert",
    link: "https://app.groupme.com/join_group/65166818/6iM0sEt9",
  },
  {
    name: "ALA 171 - Gurin",
    link: "https://app.groupme.com/join_group/65166822/LoE0ho0O",
  },
  {
    name: "ALA 175 - Haque",
    link: "https://app.groupme.com/join_group/65166824/34YmcQlB",
  },
  {
    name: "ALA 220",
    link: "https://app.groupme.com/join_group/65166825/mBdPtkY2",
  },
  {
    name: "ALA 225 - Barron",
    link: "https://app.groupme.com/join_group/65166827/D54CfGw3",
  },
  {
    name: "ALA 228",
    link: "https://app.groupme.com/join_group/65166828/TUfu9AW1",
  },
  {
    name: "ALA 320 - Hwang",
    link: "https://app.groupme.com/join_group/65166830/LmJRHf7G",
  },
  {
    name: "ALA 320 - Schoem",
    link: "https://app.groupme.com/join_group/65166832/IDDyWPto",
  },
  {
    name: "ALA 321 - Hicks",
    link: "https://app.groupme.com/join_group/65166835/xqlsS5Sx",
  },
  {
    name: "ALA 321",
    link: "https://app.groupme.com/join_group/65166838/jnEIYL1j",
  },
  {
    name: "ALA 421 - Gurin",
    link: "https://app.groupme.com/join_group/65166839/JpDFYD5z",
  },
  {
    name: "ALA 429 - Kaplowitz",
    link: "https://app.groupme.com/join_group/65166842/qsHLKAlI",
  },
  {
    name: "ALA 472 - Gurin",
    link: "https://app.groupme.com/join_group/65166854/YKR5DeCA",
  },
  {
    name: "ALA 322",
    link: "https://app.groupme.com/join_group/65166856/Tao44vlL",
  },
  {
    name: "AMCULT 201 - Larson",
    link: "https://app.groupme.com/join_group/65166859/YRIYa52b",
  },
  {
    name: "AMCULT 202 - Bushner",
    link: "https://app.groupme.com/join_group/65166861/sqiGSCWb",
  },
  {
    name: "AMCULT 204 - Lee",
    link: "https://app.groupme.com/join_group/65166863/E5MgqC11",
  },
  {
    name: "AMCULT 204 - Roby",
    link: "https://app.groupme.com/join_group/65166866/d2OApZP4",
  },
  {
    name: "AMCULT 204 - Akiboh",
    link: "https://app.groupme.com/join_group/65166867/XcUja28Q",
  },
  {
    name: "AMCULT 204 - Witgen",
    link: "https://app.groupme.com/join_group/65166868/Jup9jz3d",
  },
  {
    name: "AMCULT 204 - Fitzgerald",
    link: "https://app.groupme.com/join_group/65166870/wMxPvHJY",
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
    name: "AMCULT 243 - Calvo-Quiros",
    link: "https://app.groupme.com/join_group/65166878/D2UoQ1Dl",
  },
  {
    name: "AMCULT 263 - Berrey",
    link: "https://app.groupme.com/join_group/65166880/UhlsYZST",
  },
  {
    name: "AMCULT 301 - Phruksachart",
    link: "https://app.groupme.com/join_group/65166884/LxFxchJS",
  },
  {
    name: "AMCULT 311 - Walker",
    link: "https://app.groupme.com/join_group/65166887/w5n97kSf",
  },
  {
    name: "AMCULT 311 - Anderson",
    link: "https://app.groupme.com/join_group/65166889/0gsSHo4W",
  },
  {
    name: "AMCULT 311 - Karem Albrecht",
    link: "https://app.groupme.com/join_group/65166892/npxNgZST",
  },
  {
    name: "AMCULT 311 - Lee",
    link: "https://app.groupme.com/join_group/65166894/bwQteXr8",
  },
  {
    name: "AMCULT 311 - Beltran",
    link: "https://app.groupme.com/join_group/65166895/4ZJy9sdx",
  },
  {
    name: "AMCULT 311 - Fajardo",
    link: "https://app.groupme.com/join_group/65166896/7xwgkZMX",
  },
  {
    name: "AMCULT 311 - Mattawa",
    link: "https://app.groupme.com/join_group/65166897/ROcLfyqZ",
  },
  {
    name: "AMCULT 325 - Najita",
    link: "https://app.groupme.com/join_group/65166905/UJQARKwV",
  },
  {
    name: "AMCULT 330 - Stiffler",
    link: "https://app.groupme.com/join_group/65166907/Hk366nu7",
  },
  {
    name: "AMCULT 353 - Lawsin",
    link: "https://app.groupme.com/join_group/65166909/E6VaS2iE",
  },
  {
    name: "AMCULT 358 - Ferrari",
    link: "https://app.groupme.com/join_group/65166912/m6xi1lxw",
  },
  {
    name: "AMCULT 358 - Granata",
    link: "https://app.groupme.com/join_group/65166914/rgyXCa6R",
  },
  {
    name: "AMCULT 358 - Bushner",
    link: "https://app.groupme.com/join_group/65166915/duRHSlgc",
  },
  {
    name: "AMCULT 358 - Griffiths",
    link: "https://app.groupme.com/join_group/65166916/1BDwSRsH",
  },
  {
    name: "AMCULT 363 - Lawsin",
    link: "https://app.groupme.com/join_group/65166919/vpYtU4f3",
  },
  {
    name: "AMCULT 375 - Jones",
    link: "https://app.groupme.com/join_group/65166920/jr2TRqjn",
  },
  {
    name: "AMCULT 223 - Pitawanakwat",
    link: "https://app.groupme.com/join_group/65166925/6s75fQTM",
  },
  {
    name: "AMCULT 224 - Galvan-Santibanez",
    link: "https://app.groupme.com/join_group/65166927/2Gkfaqz1",
  },
  {
    name: "AMCULT 311 - Gordon-Gurfinkel",
    link: "https://app.groupme.com/join_group/65166928/q1PEtxE7",
  },
  {
    name: "AMCULT 311",
    link: "https://app.groupme.com/join_group/65166929/S6NlAGT0",
  },
  {
    name: "AMCULT 323 - Pitawanakwat",
    link: "https://app.groupme.com/join_group/65166930/cz0WEvwz",
  },
  {
    name: "AMCULT 103 - Khalil",
    link: "https://app.groupme.com/join_group/65166931/j8EdDrwi",
  },
  {
    name: "AMCULT 103 - Najita",
    link: "https://app.groupme.com/join_group/65166932/tT0Fuzba",
  },
  {
    name: "AMCULT 103 - Yergeau",
    link: "https://app.groupme.com/join_group/65166933/QN1gmQlr",
  },
  {
    name: "AMCULT 103 - Aristarkhova",
    link: "https://app.groupme.com/join_group/65166936/k4xdcNzT",
  },
  {
    name: "AMCULT 234 - Brose",
    link: "https://app.groupme.com/join_group/65166937/Y5yWoRqq",
  },
  {
    name: "AMCULT 248 - Karem Albrecht",
    link: "https://app.groupme.com/join_group/65166938/Q7RDax03",
  },
  {
    name: "AMCULT 293 - Mendoza",
    link: "https://app.groupme.com/join_group/65166939/Ah4jAAjA",
  },
  {
    name: "AMCULT 300 - Croft",
    link: "https://app.groupme.com/join_group/65166942/Z7XoaqB9",
  },
  {
    name: "AMCULT 398 - Cole",
    link: "https://app.groupme.com/join_group/65166943/Zn5E11Iz",
  },
  {
    name: "AMCULT 405 - Phruksachart",
    link: "https://app.groupme.com/join_group/65166945/SyDxdEax",
  },
  {
    name: "AMCULT 405 - Ocampo",
    link: "https://app.groupme.com/join_group/65166946/jTrdZQr0",
  },
  {
    name: "AMCULT 405 - Jackson",
    link: "https://app.groupme.com/join_group/65166959/e080DwF2",
  },
  {
    name: "AMCULT 405 - Saluk",
    link: "https://app.groupme.com/join_group/65166960/ry6bxlwE",
  },
  {
    name: "AMCULT 411 - Hubbs",
    link: "https://app.groupme.com/join_group/65166962/yRXu82x7",
  },
  {
    name: "AMCULT 438 - Goldman",
    link: "https://app.groupme.com/join_group/65166963/IxvJmZzV",
  },
  {
    name: "AMCULT 498 - Kawar",
    link: "https://app.groupme.com/join_group/65166966/rfQpVcrx",
  },
  {
    name: "AMCULT 498 - Shin",
    link: "https://app.groupme.com/join_group/65166968/CkegkyUn",
  },
  {
    name: "AMCULT 498 - Stillman",
    link: "https://app.groupme.com/join_group/65166971/MSYRhxQ0",
  },
  {
    name: "AMCULT 504 - Pedraza",
    link: "https://app.groupme.com/join_group/65166973/R3MGMvl1",
  },
  {
    name: "AMCULT 321",
    link: "https://app.groupme.com/join_group/65166975/S6Fh2yWJ",
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
    name: "ANATOMY 510",
    link: "https://app.groupme.com/join_group/65166980/7tXw59jA",
  },
  {
    name: "ANTHRARC 381 - Richards",
    link: "https://app.groupme.com/join_group/65187539/b1VNYeC1",
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
    name: "ANTHRARC 492 - Wright",
    link: "https://app.groupme.com/join_group/65187552/QE2SRGVo",
  },
  {
    name: "ANTHRARC 582 - Ventresca Miller",
    link: "https://app.groupme.com/join_group/65187554/cqivSyD1",
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
    name: "ANTHRBIO 371 - MacLatchy",
    link: "https://app.groupme.com/join_group/65187563/OEknmeNK",
  },
  {
    name: "ANTHRBIO 469 - Devlin",
    link: "https://app.groupme.com/join_group/65187565/ePP6xNKv",
  },
  {
    name: "ANTHRBIO 469 - Feldblum",
    link: "https://app.groupme.com/join_group/65187567/9mH8jj1L",
  },
  {
    name: "ANTHRBIO 474 - Kingston",
    link: "https://app.groupme.com/join_group/65187571/NbcYFruj",
  },
  {
    name: "ANTHRBIO 478 - Rosenbaum",
    link: "https://app.groupme.com/join_group/65187575/LqczcoU9",
  },
  {
    name: "ANTHRBIO 570 - Marshall, Kingston",
    link: "https://app.groupme.com/join_group/65187578/8XzejcQk",
  },
  {
    name: "ANTHRBIO 571 - Beehner",
    link: "https://app.groupme.com/join_group/65187582/lEo9wj4g",
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
    name: "ANTHRCUL 298 - Lynch",
    link: "https://app.groupme.com/join_group/65187600/ua060o5T",
  },
  {
    name: "ANTHRCUL 320 - Frye",
    link: "https://app.groupme.com/join_group/65187606/Eua52tcl",
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
    name: "ANTHRCUL 553 - Behar",
    link: "https://app.groupme.com/join_group/65187653/bU1QzoPN",
  },
  {
    name: "ANTHRCUL 158 - Lemon",
    link: "https://app.groupme.com/join_group/65187657/LW02XllR",
  },
  {
    name: "ANTHRCUL 258 - Peters-Golden",
    link: "https://app.groupme.com/join_group/65187660/sjJy4NMQ",
  },
  {
    name: "ANTHRCUL 357 - Paredes",
    link: "https://app.groupme.com/join_group/65187663/9ldUzeG6",
  },
  {
    name: "ANTHRCUL 359 - Stuckey",
    link: "https://app.groupme.com/join_group/65187665/gab5Rrv3",
  },
  {
    name: "ANTHRCUL 458 - Behar",
    link: "https://app.groupme.com/join_group/65187669/B7FPNS4U",
  },
  {
    name: "ANTHRCUL 458 - Hsieh",
    link: "https://app.groupme.com/join_group/65187672/vFn39H6Y",
  },
  {
    name: "ANTHRCUL 471 - Lempert",
    link: "https://app.groupme.com/join_group/65187674/wYG56rVa",
  },
  {
    name: "ANTHRCUL 527 - Keane",
    link: "https://app.groupme.com/join_group/65187678/nJ67IHNO",
  },
  {
    name: "ANTHRCUL 554",
    link: "https://app.groupme.com/join_group/65187682/Y8bTz3nA",
  },
  {
    name: "ANTHRCUL 577 - Mannheim",
    link: "https://app.groupme.com/join_group/65187683/917QCH17",
  },
  {
    name: "APPPHYS 524 - Forrest",
    link: "https://app.groupme.com/join_group/65187686/4sEHf4kr",
  },
  {
    name: "APPPHYS 541 - Kira",
    link: "https://app.groupme.com/join_group/65187690/dTz1lVaM",
  },
  {
    name: "APPPHYS 551 - Galvanauskas",
    link: "https://app.groupme.com/join_group/65187695/xvp8jD3A",
  },
  {
    name: "APPPHYS 514 - Kurdak",
    link: "https://app.groupme.com/join_group/65187698/JHMYpliA",
  },
  {
    name: "APPPHYS 514 - Orr",
    link: "https://app.groupme.com/join_group/65187701/POmTWRMc",
  },
  {
    name: "ARABAM 235 - Cable",
    link: "https://app.groupme.com/join_group/65187705/PdDAI1rU",
  },
  {
    name: "ARABAM 311 - Karem Albrecht",
    link: "https://app.groupme.com/join_group/65187706/yRFXJoc4",
  },
  {
    name: "ARABAM 311 - Mattawa",
    link: "https://app.groupme.com/join_group/65187710/MfkLXfnH",
  },
  {
    name: "ARABAM 330 - Stiffler",
    link: "https://app.groupme.com/join_group/65187713/F5CbCmKU",
  },
  {
    name: "ARABAM 248 - Karem Albrecht",
    link: "https://app.groupme.com/join_group/65187715/x3s7vLJF",
  },
  {
    name: "ARABIC 508 - Alhawary",
    link: "https://app.groupme.com/join_group/65187746/tvxgPiEJ",
  },
  {
    name: "ARABIC 513 - Alhawary",
    link: "https://app.groupme.com/join_group/65187748/ga6CY250",
  },
  {
    name: "ARABIC 102",
    link: "https://app.groupme.com/join_group/65187750/uUK3D0uW",
  },
  {
    name: "ARABIC 102 - Beebani",
    link: "https://app.groupme.com/join_group/65187752/TH1XF3hU",
  },
  {
    name: "ARABIC 202",
    link: "https://app.groupme.com/join_group/65187755/6TdUw4sl",
  },
  {
    name: "ARABIC 202 - Mohamed",
    link: "https://app.groupme.com/join_group/65187757/gqcoyvD8",
  },
  {
    name: "ARABIC 202 - Alsayegh",
    link: "https://app.groupme.com/join_group/65187759/wwrzbtRz",
  },
  {
    name: "ARABIC 202 - Hannouchi, Mohamed",
    link: "https://app.groupme.com/join_group/65187762/S3t7buBg",
  },
  {
    name: "ARABIC 202 - Reading",
    link: "https://app.groupme.com/join_group/65187766/hQgRGwRQ",
  },
  {
    name: "ARABIC 402",
    link: "https://app.groupme.com/join_group/65187767/F5uwoqgq",
  },
  {
    name: "ARABIC 402 - Hannouchi",
    link: "https://app.groupme.com/join_group/65187771/xcbxoW8b",
  },
  {
    name: "ARABIC 504 - Alsayegh",
    link: "https://app.groupme.com/join_group/65187775/dbHDVnMW",
  },
  {
    name: "ARCH 211 - Fure",
    link: "https://app.groupme.com/join_group/65187777/HW5Smgc9",
  },
  {
    name: "ARCH 211 - Moran",
    link: "https://app.groupme.com/join_group/65187780/mUz2UPX5",
  },
  {
    name: "ARCH 215 - Zimmerman",
    link: "https://app.groupme.com/join_group/65187784/8w4fQnj4",
  },
  {
    name: "ARCH 323 - Herscher",
    link: "https://app.groupme.com/join_group/65187788/2MNPeNkM",
  },
  {
    name: "ARCH 324 - von Buelow",
    link: "https://app.groupme.com/join_group/65187791/cDXL2eIM",
  },
  {
    name: "ARCH 409 - Harris",
    link: "https://app.groupme.com/join_group/65187793/IMkGZuSa",
  },
  {
    name: "ARCH 409 - Ahlquist",
    link: "https://app.groupme.com/join_group/65187798/auRH1lnD",
  },
  {
    name: "ARCH 409 - Fishman",
    link: "https://app.groupme.com/join_group/65187801/hRRuRwQ0",
  },
  {
    name: "ARCH 421 - Meier",
    link: "https://app.groupme.com/join_group/65187805/ZuYaqrVd",
  },
  {
    name: "ARCH 423 - Etienne",
    link: "https://app.groupme.com/join_group/65187809/163p4qET",
  },
  {
    name: "ARCH 425 - Kim",
    link: "https://app.groupme.com/join_group/65187811/5rJcYBwK",
  },
  {
    name: "ARCH 425 - Junghans",
    link: "https://app.groupme.com/join_group/65187814/LzMT2orQ",
  },
  {
    name: "ARCH 466 - Unverzagt",
    link: "https://app.groupme.com/join_group/65187816/HP1P0PEv",
  },
  {
    name: "ARCH 505 - Junghans",
    link: "https://app.groupme.com/join_group/65187818/PhU8cB3K",
  },
  {
    name: "ARCH 507 - Graebner",
    link: "https://app.groupme.com/join_group/65187844/VI5eoTjy",
  },
  {
    name: "ARCH 517",
    link: "https://app.groupme.com/join_group/65187847/kLOQIUPu",
  },
  {
    name: "ARCH 517 - McCullough",
    link: "https://app.groupme.com/join_group/65187850/1GHkOmup",
  },
  {
    name: "ARCH 535 - Navvab",
    link: "https://app.groupme.com/join_group/65187853/nO46iart",
  },
  {
    name: "ARCH 544 - von Buelow",
    link: "https://app.groupme.com/join_group/65187856/Z1tZhRtH",
  },
  {
    name: "ARCH 545 - Navvab",
    link: "https://app.groupme.com/join_group/65187858/0mZpJGhS",
  },
  {
    name: "ARCH 572 - Brisson, Roddier",
    link: "https://app.groupme.com/join_group/65187862/jERxK5gt",
  },
  {
    name: "ARCH 583 - Hwang, McMorrough",
    link: "https://app.groupme.com/join_group/65187864/7pGRTZI5",
  },
  {
    name: "ARCH 585 - Kim",
    link: "https://app.groupme.com/join_group/65187869/TdCDBMsl",
  },
  {
    name: "ARCH 595 - Li",
    link: "https://app.groupme.com/join_group/65187871/CoOzhtpM",
  },
  {
    name: "ARCH 324",
    link: "https://app.groupme.com/join_group/65187874/Iu0scQiY",
  },
  {
    name: "ARCH 411 - Abrons",
    link: "https://app.groupme.com/join_group/65187877/EUXIw52X",
  },
  {
    name: "ARCH 503 - McMorrough",
    link: "https://app.groupme.com/join_group/65187880/LyQ85qri",
  },
  {
    name: "ARCH 506 - Groat",
    link: "https://app.groupme.com/join_group/65187883/PaWUmRT3",
  },
  {
    name: "ARCH 506 - Strickland",
    link: "https://app.groupme.com/join_group/65187885/4r7yBDeu",
  },
  {
    name: "ARCH 509 - Ahlquist",
    link: "https://app.groupme.com/join_group/65187888/PyEFx7dj",
  },
  {
    name: "ARCH 509 - Borum",
    link: "https://app.groupme.com/join_group/65187892/v2YgRMFw",
  },
  {
    name: "ARCH 509 - Rule",
    link: "https://app.groupme.com/join_group/65187895/o2oNGfED",
  },
  {
    name: "ARCH 509 - Abrons",
    link: "https://app.groupme.com/join_group/65187897/pZ3BvjNN",
  },
  {
    name: "ARCH 509 - Mitnick",
    link: "https://app.groupme.com/join_group/65187900/Anmn5qEf",
  },
  {
    name: "ARCH 509 - Velikov",
    link: "https://app.groupme.com/join_group/65187903/NR52fd6y",
  },
  {
    name: "ARCH 509 - Mcgee",
    link: "https://app.groupme.com/join_group/65187907/XTGGiZgK",
  },
  {
    name: "ARCH 509 - Rozas-Krause",
    link: "https://app.groupme.com/join_group/65187910/1UAXznoK",
  },
  {
    name: "ARCH 509 - Jazairy",
    link: "https://app.groupme.com/join_group/65187934/rOaBd0US",
  },
  {
    name: "ARCH 509 - Robinson",
    link: "https://app.groupme.com/join_group/65187937/x6clpfb8",
  },
  {
    name: "ARCH 509 - Kulper",
    link: "https://app.groupme.com/join_group/65187939/sNfjOIx5",
  },
  {
    name: "ARCH 509 - Newell",
    link: "https://app.groupme.com/join_group/65187941/cNlEIDox",
  },
  {
    name: "ARCH 531 - McCullough",
    link: "https://app.groupme.com/join_group/65187944/6G04r3s4",
  },
  {
    name: "ARCH 537 - Ng, Kennedy, Rule, Meier",
    link: "https://app.groupme.com/join_group/65187946/BPaZH76s",
  },
  {
    name: "ARCH 322",
    link: "https://app.groupme.com/join_group/65187950/dwwZ6jH1",
  },
  {
    name: "ARCH 326",
    link: "https://app.groupme.com/join_group/65187952/d2Ss4BXO",
  },
  {
    name: "ARCH 333",
    link: "https://app.groupme.com/join_group/65187956/OIHxmMPv",
  },
  {
    name: "ARCH 422",
    link: "https://app.groupme.com/join_group/65187960/cnkBmNm9",
  },
  {
    name: "ARCH 442",
    link: "https://app.groupme.com/join_group/65187963/HYgiHHgF",
  },
  {
    name: "ARCH 516",
    link: "https://app.groupme.com/join_group/65187966/AeFTBtgJ",
  },
  {
    name: "ARCH 562",
    link: "https://app.groupme.com/join_group/65187968/jyF50UJD",
  },
  {
    name: "ARCH 571",
    link: "https://app.groupme.com/join_group/65187971/u4HwO2uH",
  },
  {
    name: "ARMENIAN 102 - Pifer",
    link: "https://app.groupme.com/join_group/65187973/H9a8ZsEI",
  },
  {
    name: "ARMENIAN 202 - Pifer",
    link: "https://app.groupme.com/join_group/65187976/ePAJ4wFj",
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
    name: "ARTDES 129 - Shapiro",
    link: "https://app.groupme.com/join_group/65187988/7IkDDuYZ",
  },
  {
    name: "ARTDES 190 - Steichmann",
    link: "https://app.groupme.com/join_group/65187991/tCPHofPw",
  },
  {
    name: "ARTDES 191 - White",
    link: "https://app.groupme.com/join_group/65187994/zTkDlatm",
  },
  {
    name: "ARTDES 192 - Burns",
    link: "https://app.groupme.com/join_group/65187998/G8Gq3YaU",
  },
  {
    name: "ARTDES 193 - Yang",
    link: "https://app.groupme.com/join_group/65188002/9CK1AFf2",
  },
  {
    name: "ARTDES 399 - Hirsch",
    link: "https://app.groupme.com/join_group/65188033/1LU2D7V3",
  },
  {
    name: "ARTDES 398 - Tharp",
    link: "https://app.groupme.com/join_group/65188035/WlOruVxh",
  },
  {
    name: "ARTDES 270",
    link: "https://app.groupme.com/join_group/65188037/3RMNF38V",
  },
  {
    name: "ARTDES 275",
    link: "https://app.groupme.com/join_group/65188040/dtaE8f6k",
  },
  {
    name: "ARTDES 300",
    link: "https://app.groupme.com/join_group/65188044/AieuTTQm",
  },
  {
    name: "ARTDES 307",
    link: "https://app.groupme.com/join_group/65188046/h9R6LmDO",
  },
  {
    name: "ARTDES 310",
    link: "https://app.groupme.com/join_group/65188049/d0RtlOTF",
  },
  {
    name: "ARTDES 312",
    link: "https://app.groupme.com/join_group/65188053/B7bFQdDV",
  },
  {
    name: "ARTDES 345",
    link: "https://app.groupme.com/join_group/65188055/Pq8hiJZB",
  },
  {
    name: "ARTDES 349",
    link: "https://app.groupme.com/join_group/65188057/WmltKyRP",
  },
  {
    name: "ARTDES 355",
    link: "https://app.groupme.com/join_group/65188060/o5f9kTAn",
  },
  {
    name: "ARTDES 357",
    link: "https://app.groupme.com/join_group/65188063/0WoIuiAS",
  },
  {
    name: "ARTDES 371",
    link: "https://app.groupme.com/join_group/65188067/GRPad7cM",
  },
  {
    name: "ARTDES 373",
    link: "https://app.groupme.com/join_group/65188070/r15aOIqm",
  },
  {
    name: "ARTDES 391",
    link: "https://app.groupme.com/join_group/65188073/Vi7Rjrtj",
  },
  {
    name: "ARTDES 400",
    link: "https://app.groupme.com/join_group/65188075/OBAqnklV",
  },
  {
    name: "ARTDES 416",
    link: "https://app.groupme.com/join_group/65188077/7GIWsqht",
  },
  {
    name: "ARTDES 423",
    link: "https://app.groupme.com/join_group/65188081/tAHJ8Xd1",
  },
  {
    name: "ARTDES 427",
    link: "https://app.groupme.com/join_group/65188085/62nZUJPs",
  },
  {
    name: "ARTDES 430",
    link: "https://app.groupme.com/join_group/65188087/t5WfJoOG",
  },
  {
    name: "ARTDES 434",
    link: "https://app.groupme.com/join_group/65188089/QObki4tE",
  },
  {
    name: "ARTDES 489",
    link: "https://app.groupme.com/join_group/65188093/V39aPvns",
  },
  {
    name: "ARTDES 499",
    link: "https://app.groupme.com/join_group/65188096/cSX4copK",
  },
  {
    name: "ARTDES 516",
    link: "https://app.groupme.com/join_group/65188099/YjmD8diN",
  },
  {
    name: "ARTSADMN 406",
    link: "https://app.groupme.com/join_group/65188122/qsNVDHXn",
  },
  {
    name: "ARTSADMN 426 - Cuyler",
    link: "https://app.groupme.com/join_group/65188123/ml7o8K6a",
  },
  {
    name: "ARTSADMN 428 - Fischer",
    link: "https://app.groupme.com/join_group/65188127/4DAPnt4O",
  },
  {
    name: "ARTSADMN 431",
    link: "https://app.groupme.com/join_group/65188130/Rk14Wfk3",
  },
  {
    name: "ARTSADMN 431 - Landry",
    link: "https://app.groupme.com/join_group/65188131/gyei9m0y",
  },
  {
    name: "ARTSADMN 433 - LeBoeuf",
    link: "https://app.groupme.com/join_group/65188134/QjYFTwzc",
  },
  {
    name: "ARTSADMN 450 - Dworkin",
    link: "https://app.groupme.com/join_group/65188140/iAt3VdMG",
  },
  {
    name: "ARTSADMN 472 - Kuuskoski",
    link: "https://app.groupme.com/join_group/65188143/80Rsn7s3",
  },
  {
    name: "ARTSADMN 506 - Dworkin",
    link: "https://app.groupme.com/join_group/65188147/jWTRcFvu",
  },
  {
    name: "ARTSADMN 506",
    link: "https://app.groupme.com/join_group/65188150/vqwKj6lj",
  },
  {
    name: "ARTSADMN 526 - Cuyler",
    link: "https://app.groupme.com/join_group/65188155/3Kn5HRfF",
  },
  {
    name: "ARTSADMN 528 - Fischer",
    link: "https://app.groupme.com/join_group/65188157/MSTL9zb5",
  },
  {
    name: "ARTSADMN 531",
    link: "https://app.groupme.com/join_group/65188160/tNqknQI2",
  },
  {
    name: "ARTSADMN 531 - Landry",
    link: "https://app.groupme.com/join_group/65188163/VoIbmd8C",
  },
  {
    name: "ARTSADMN 533 - LeBoeuf",
    link: "https://app.groupme.com/join_group/65188167/EjhsZa8p",
  },
  {
    name: "ARTSADMN 550 - Dworkin",
    link: "https://app.groupme.com/join_group/65188170/zW4pRSid",
  },
  {
    name: "ARTSADMN 572 - Kuuskoski",
    link: "https://app.groupme.com/join_group/65188174/FY6Q0fLK",
  },
  {
    name: "ARTSADMN 385 - Cuyler",
    link: "https://app.groupme.com/join_group/65188178/DCjeA4YV",
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
    name: "ASIAN 273 - Oh",
    link: "https://app.groupme.com/join_group/65188226/4pPPbqsU",
  },
  {
    name: "ASIAN 280 - Lopez Jr",
    link: "https://app.groupme.com/join_group/65188229/7SAGMDxc",
  },
  {
    name: "ASIAN 324 - Mir",
    link: "https://app.groupme.com/join_group/65188232/UFFdrGR2",
  },
  {
    name: "ASIAN 328 - White",
    link: "https://app.groupme.com/join_group/65188235/tCvlfrzp",
  },
  {
    name: "ASIAN 362 - Rolston",
    link: "https://app.groupme.com/join_group/65188237/joIgrsxz",
  },
  {
    name: "ASIAN 364 - Rolston",
    link: "https://app.groupme.com/join_group/65188242/KzjHddti",
  },
  {
    name: "ASIAN 368 - Baxter",
    link: "https://app.groupme.com/join_group/65188245/qin1csCk",
  },
  {
    name: "ASIAN 369 - Rebull",
    link: "https://app.groupme.com/join_group/65188246/JWK1GliU",
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
    name: "ASIAN 380 - Vowell",
    link: "https://app.groupme.com/join_group/65188254/wE0CaFDz",
  },
  {
    name: "ASIAN 380 - Lahiri",
    link: "https://app.groupme.com/join_group/65188258/yfqA0RcS",
  },
  {
    name: "ASIAN 428 - Gallagher",
    link: "https://app.groupme.com/join_group/65188261/Vr9to0mQ",
  },
  {
    name: "ASIAN 232 - Brose",
    link: "https://app.groupme.com/join_group/65188264/D9oxFvdn",
  },
  {
    name: "ASIAN 252 - Auerback",
    link: "https://app.groupme.com/join_group/65188265/OiyV392h",
  },
  {
    name: "ASIAN 271 - Oh",
    link: "https://app.groupme.com/join_group/65188270/jEmxqRLB",
  },
  {
    name: "ASIAN 306 - Mandair",
    link: "https://app.groupme.com/join_group/65188273/PwyrPJak",
  },
  {
    name: "ASIAN 310 - Alexy",
    link: "https://app.groupme.com/join_group/65188275/aTsYYhvs",
  },
  {
    name: "ASIAN 327 - White",
    link: "https://app.groupme.com/join_group/65188277/sypfe0N2",
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
    name: "ASIAN 381 - Hill",
    link: "https://app.groupme.com/join_group/65188284/jiMBJsN1",
  },
  {
    name: "ASIAN 435 - Merrill",
    link: "https://app.groupme.com/join_group/65188287/58XkSExU",
  },
  {
    name: "ASIAN 480 - Jackson",
    link: "https://app.groupme.com/join_group/65188315/im08yg7w",
  },
  {
    name: "ASIAN 480 - Kile",
    link: "https://app.groupme.com/join_group/65188319/FBosxAE6",
  },
  {
    name: "ASIAN 480 - Phung",
    link: "https://app.groupme.com/join_group/65188321/ryQCtyQh",
  },
  {
    name: "ASIAN 483 - Auerback",
    link: "https://app.groupme.com/join_group/65188324/C5pbL15z",
  },
  {
    name: "ASIAN 500 - Lopez Jr",
    link: "https://app.groupme.com/join_group/65188327/xDT1MR0v",
  },
  {
    name: "ASIAN 503 - Alexy",
    link: "https://app.groupme.com/join_group/65188329/ZBhbndr8",
  },
  {
    name: "ASIAN 551 - Kile",
    link: "https://app.groupme.com/join_group/65188332/5PgRMJHo",
  },
  {
    name: "ASIAN 577 - Chanchani",
    link: "https://app.groupme.com/join_group/65188334/c9I4C4z0",
  },
  {
    name: "ASIAN 580 - Brick",
    link: "https://app.groupme.com/join_group/65188337/gF0UovGs",
  },
  {
    name: "ASIANLAN 126 - Schad",
    link: "https://app.groupme.com/join_group/65188339/yOfxHMab",
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
    name: "ASIANLAN 236 - Kim",
    link: "https://app.groupme.com/join_group/65188348/NAeNNmL2",
  },
  {
    name: "ASIANLAN 102 - Grande",
    link: "https://app.groupme.com/join_group/65188352/z0zTPrNU",
  },
  {
    name: "ASIANLAN 102 - Li-Stevenson",
    link: "https://app.groupme.com/join_group/65188354/RTQWv7WL",
  },
  {
    name: "ASIANLAN 104 - Gu",
    link: "https://app.groupme.com/join_group/65188357/qo38DtYh",
  },
  {
    name: "ASIANLAN 105 - Grande",
    link: "https://app.groupme.com/join_group/65188359/7fZACJ5j",
  },
  {
    name: "ASIANLAN 112 - Gonzaga",
    link: "https://app.groupme.com/join_group/65188361/gE3EFdEa",
  },
  {
    name: "ASIANLAN 116 - Gill",
    link: "https://app.groupme.com/join_group/65188365/csOXyI3j",
  },
  {
    name: "ASIANLAN 116 - Ali",
    link: "https://app.groupme.com/join_group/65188367/oEsjUdPx",
  },
  {
    name: "ASIANLAN 116 - Khan",
    link: "https://app.groupme.com/join_group/65188370/Xe5JwN27",
  },
  {
    name: "ASIANLAN 122",
    link: "https://app.groupme.com/join_group/65188372/S0apoW9f",
  },
  {
    name: "ASIANLAN 124 - Schad",
    link: "https://app.groupme.com/join_group/65188377/15zFS1nb",
  },
  {
    name: "ASIANLAN 126 - Yasuda",
    link: "https://app.groupme.com/join_group/65188380/2DGtW3A9",
  },
  {
    name: "ASIANLAN 126 - Hoffmeyer",
    link: "https://app.groupme.com/join_group/65188405/rnf2P6RD",
  },
  {
    name: "ASIANLAN 126 - Sogabe",
    link: "https://app.groupme.com/join_group/65188407/ZV8AAxnc",
  },
  {
    name: "ASIANLAN 126 - Yasuda, Schad",
    link: "https://app.groupme.com/join_group/65188410/FY7kS3N3",
  },
  {
    name: "ASIANLAN 136 - Oh",
    link: "https://app.groupme.com/join_group/65188412/DpNFJpKv",
  },
  {
    name: "ASIANLAN 136 - Kim",
    link: "https://app.groupme.com/join_group/65188414/3zbLclLi",
  },
  {
    name: "ASIANLAN 146 - Gill",
    link: "https://app.groupme.com/join_group/65188418/xYagfJL7",
  },
  {
    name: "ASIANLAN 156 - Mohan",
    link: "https://app.groupme.com/join_group/65188420/IIsVn1hj",
  },
  {
    name: "ASIANLAN 162 - Bunmee",
    link: "https://app.groupme.com/join_group/65188424/sdG5gy6u",
  },
  {
    name: "ASIANLAN 172 - Ali",
    link: "https://app.groupme.com/join_group/65188426/gHoQhZ19",
  },
  {
    name: "ASIANLAN 176 - Nguyen",
    link: "https://app.groupme.com/join_group/65188429/hr7o9R2P",
  },
  {
    name: "ASIANLAN 186 - Hoque",
    link: "https://app.groupme.com/join_group/65188431/0btGu3aj",
  },
  {
    name: "ASIANLAN 202 - Zhong",
    link: "https://app.groupme.com/join_group/65188433/v1xJLbm4",
  },
  {
    name: "ASIANLAN 202 - Levin",
    link: "https://app.groupme.com/join_group/65188436/MvD6WAia",
  },
  {
    name: "ASIANLAN 202 - Yu",
    link: "https://app.groupme.com/join_group/65188438/ug4rQRjH",
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
    name: "ASIANLAN 212 - Gonzaga",
    link: "https://app.groupme.com/join_group/65188446/ujX6pfHj",
  },
  {
    name: "ASIANLAN 216 - Ali",
    link: "https://app.groupme.com/join_group/65188448/iSBhffPg",
  },
  {
    name: "ASIANLAN 222",
    link: "https://app.groupme.com/join_group/65188451/h7hKmbs0",
  },
  {
    name: "ASIANLAN 226 - Sakakibara, Kondo",
    link: "https://app.groupme.com/join_group/65188454/4btI0vtm",
  },
  {
    name: "ASIANLAN 226 - Kondo",
    link: "https://app.groupme.com/join_group/65188456/CSdxK1GT",
  },
  {
    name: "ASIANLAN 226 - Hoffmeyer",
    link: "https://app.groupme.com/join_group/65188460/zUr0JUW9",
  },
  {
    name: "ASIANLAN 226",
    link: "https://app.groupme.com/join_group/65188461/5jsD1LrO",
  },
  {
    name: "ASIANLAN 226 - Oka",
    link: "https://app.groupme.com/join_group/65188462/Ldw1dduB",
  },
  {
    name: "ASIANLAN 229 - Okuno",
    link: "https://app.groupme.com/join_group/65198553/7qjiRLUy",
  },
  {
    name: "ASIANLAN 236 - Jung",
    link: "https://app.groupme.com/join_group/65198564/aMyyCNiw",
  },
  {
    name: "ASIANLAN 238 - Kim, Oh",
    link: "https://app.groupme.com/join_group/65198577/IGpGNm7x",
  },
  {
    name: "ASIANLAN 238 - Jung, Oh",
    link: "https://app.groupme.com/join_group/65198589/13m1wdNx",
  },
  {
    name: "ASIANLAN 246 - Gill",
    link: "https://app.groupme.com/join_group/65198601/SLUMMvgN",
  },
  {
    name: "ASIANLAN 256 - Mohan",
    link: "https://app.groupme.com/join_group/65198613/a1RDa6H0",
  },
  {
    name: "ASIANLAN 262 - Bunmee",
    link: "https://app.groupme.com/join_group/65198627/JLfB1DEa",
  },
  {
    name: "ASIANLAN 272 - Khan",
    link: "https://app.groupme.com/join_group/65198634/LwvDeLG4",
  },
  {
    name: "ASIANLAN 276 - Nguyen",
    link: "https://app.groupme.com/join_group/65198646/Jd4itogX",
  },
  {
    name: "ASIANLAN 286 - Hoque",
    link: "https://app.groupme.com/join_group/65198656/0N34uhuM",
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
    name: "ASIANLAN 306 - Liu",
    link: "https://app.groupme.com/join_group/65198686/KvyL7tsg",
  },
  {
    name: "ASIANLAN 326 - Sogabe",
    link: "https://app.groupme.com/join_group/65198697/UuWOO1xz",
  },
  {
    name: "ASIANLAN 326",
    link: "https://app.groupme.com/join_group/65198714/MLenL20J",
  },
  {
    name: "ASIANLAN 326 - Mochizuki",
    link: "https://app.groupme.com/join_group/65198718/bPLthVSS",
  },
  {
    name: "ASIANLAN 336 - Oh, Kim",
    link: "https://app.groupme.com/join_group/65198731/GSU3rV9Y",
  },
  {
    name: "ASIANLAN 402 - Li",
    link: "https://app.groupme.com/join_group/65198746/hoB19NyM",
  },
  {
    name: "ASIANLAN 406 - Yu",
    link: "https://app.groupme.com/join_group/65198757/pinhBxKM",
  },
  {
    name: "ASIANLAN 408 - Li",
    link: "https://app.groupme.com/join_group/65198772/F1qNhl9U",
  },
  {
    name: "ASIANLAN 409 - Li",
    link: "https://app.groupme.com/join_group/65198782/colUzsXU",
  },
  {
    name: "ASIANLAN 410 - Liu",
    link: "https://app.groupme.com/join_group/65198793/SyOF68t5",
  },
  {
    name: "ASIANLAN 412",
    link: "https://app.groupme.com/join_group/65198808/NZRNwulK",
  },
  {
    name: "ASIANLAN 412 - Gonzaga,",
    link: "https://app.groupme.com/join_group/65198817/1QaeVGkK",
  },
  {
    name: "ASIANLAN 418 - Ali",
    link: "https://app.groupme.com/join_group/65198829/5JihjW3W",
  },
  {
    name: "ASIANLAN 430 - Kondo",
    link: "https://app.groupme.com/join_group/65199029/cRLtnN0x",
  },
  {
    name: "ASIANLAN 441 - Mochizuki",
    link: "https://app.groupme.com/join_group/65199038/aP6sUOgK",
  },
  {
    name: "ASIANLAN 456 - Mohan",
    link: "https://app.groupme.com/join_group/65199050/f8rIrPhP",
  },
  {
    name: "ASIANLAN 462 - Bunmee",
    link: "https://app.groupme.com/join_group/65199063/v5axMtH3",
  },
  {
    name: "ASIANLAN 472 - Khan",
    link: "https://app.groupme.com/join_group/65199071/FWYpYmfP",
  },
  {
    name: "ASIANLAN 476 - Nguyen",
    link: "https://app.groupme.com/join_group/65199081/lSOa07Wy",
  },
  {
    name: "ASIANLAN 480",
    link: "https://app.groupme.com/join_group/65199096/yNgZ3Dfx",
  },
  {
    name: "ASIANLAN 486 - Hoque",
    link: "https://app.groupme.com/join_group/65199104/8Ou84vn6",
  },
  {
    name: "ASIANLAN 451 - Brick",
    link: "https://app.groupme.com/join_group/65199117/YH9wuBQf",
  },
  {
    name: "ASIANLAN 479 - Kim, Oh",
    link: "https://app.groupme.com/join_group/65199122/uVEVTmEF",
  },
  {
    name: "ASIANPAM 204 - Lee",
    link: "https://app.groupme.com/join_group/65199135/iE1ao61J",
  },
  {
    name: "ASIANPAM 204 - Akiboh",
    link: "https://app.groupme.com/join_group/65199148/02VxBMjj",
  },
  {
    name: "ASIANPAM 214 - Stillman",
    link: "https://app.groupme.com/join_group/65199157/pCkM7reO",
  },
  {
    name: "ASIANPAM 301 - Hwang, Wang, Aramaki",
    link: "https://app.groupme.com/join_group/65199171/BV9wT0Lf",
  },
  {
    name: "ASIANPAM 301 - Phruksachart",
    link: "https://app.groupme.com/join_group/65199183/5qsSx4N1",
  },
  {
    name: "ASIANPAM 311 - Lee",
    link: "https://app.groupme.com/join_group/65199199/W3PdKbE0",
  },
  {
    name: "ASIANPAM 311 - Fajardo",
    link: "https://app.groupme.com/join_group/65199210/T3fMxZaG",
  },
  {
    name: "ASIANPAM 325 - Najita",
    link: "https://app.groupme.com/join_group/65199226/chWSTMD0",
  },
  {
    name: "ASIANPAM 353 - Lawsin",
    link: "https://app.groupme.com/join_group/65199240/9PIaPAE4",
  },
  {
    name: "ASIANPAM 363 - Lawsin",
    link: "https://app.groupme.com/join_group/65201122/umvD2n1N",
  },
  {
    name: "ASIANPAM 103 - Najita",
    link: "https://app.groupme.com/join_group/65201133/JhHI7FSI",
  },
  {
    name: "ASIANPAM 498 - Shin",
    link: "https://app.groupme.com/join_group/65201144/tXv2Ulpj",
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
    name: "ASTRO 102 - Richstone, Corrales",
    link: "https://app.groupme.com/join_group/65201174/eAAvFQPL",
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
    name: "ASTRO 107 - Ruszkowski",
    link: "https://app.groupme.com/join_group/65201215/MR1T1xFk",
  },
  {
    name: "ASTRO 115 - Monnier",
    link: "https://app.groupme.com/join_group/65201227/NpBvtsze",
  },
  {
    name: "ASTRO 127 - Lopresto",
    link: "https://app.groupme.com/join_group/65201238/fg9bhFgS",
  },
  {
    name: "ASTRO 142 - Miller",
    link: "https://app.groupme.com/join_group/65201244/PqZTATWq",
  },
  {
    name: "ASTRO 183 - Landi",
    link: "https://app.groupme.com/join_group/65201253/SzKasCBA",
  },
  {
    name: "ASTRO 201 - Gultekin",
    link: "https://app.groupme.com/join_group/65201263/Gysim3iV",
  },
  {
    name: "ASTRO 206 - Valluri",
    link: "https://app.groupme.com/join_group/65201271/NCVZpNyK",
  },
  {
    name: "ASTRO 261 - Vitug",
    link: "https://app.groupme.com/join_group/65201282/WCzljJpy",
  },
  {
    name: "ASTRO 401 - Rauscher",
    link: "https://app.groupme.com/join_group/65201296/vak4MLRQ",
  },
  {
    name: "ASTRO 404 - Bregman",
    link: "https://app.groupme.com/join_group/65201303/nCymkPqV",
  },
  {
    name: "ASTRO 534 - Gnedin",
    link: "https://app.groupme.com/join_group/65201311/tU8kWE64",
  },
  {
    name: "ASTRO 535 - Hartmann",
    link: "https://app.groupme.com/join_group/65201321/QQnxvc1t",
  },
  {
    name: "ASTRO 220 - Reynolds",
    link: "https://app.groupme.com/join_group/65201331/qg613iGW",
  },
  {
    name: "ASTRO 429 - Meyer",
    link: "https://app.groupme.com/join_group/65201345/ZMNLtO74",
  },
  {
    name: "AT 205 - Lepley",
    link: "https://app.groupme.com/join_group/65201355/VHQeWXCg",
  },
  {
    name: "AT 215 - Czajka",
    link: "https://app.groupme.com/join_group/65201369/lEJxdgy9",
  },
  {
    name: "AT 218 - Harris",
    link: "https://app.groupme.com/join_group/65201383/EZw2XwRy",
  },
  {
    name: "AT 218 - Winkelseth",
    link: "https://app.groupme.com/join_group/65201394/5Ehise2e",
  },
  {
    name: "AT 405 - Lepley",
    link: "https://app.groupme.com/join_group/65201517/ZO9OCRml",
  },
  {
    name: "AT 420 - Czajka",
    link: "https://app.groupme.com/join_group/65201529/LfnODYZN",
  },
  {
    name: "AT 403",
    link: "https://app.groupme.com/join_group/65201539/GYK1RQII",
  },
  {
    name: "AUTO 533 - Kwabi",
    link: "https://app.groupme.com/join_group/65201543/0Up19W1W",
  },
  {
    name: "AUTO 563 - Bai",
    link: "https://app.groupme.com/join_group/65201565/l62zCZrX",
  },
  {
    name: "AUTO 566 - Peng",
    link: "https://app.groupme.com/join_group/65201577/99OW2AYy",
  },
  {
    name: "AUTO 599 - Hyde",
    link: "https://app.groupme.com/join_group/65201589/YEySEWaD",
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
    name: "BA 100 - Bishara",
    link: "https://app.groupme.com/join_group/65201616/4ZkcB8PB",
  },
  {
    name: "BA 225 - Shark",
    link: "https://app.groupme.com/join_group/65201626/JDEOZR8k",
  },
  {
    name: "BA 310 - Branch",
    link: "https://app.groupme.com/join_group/65201637/5t9meFbg",
  },
  {
    name: "BA 325 - Shark",
    link: "https://app.groupme.com/join_group/65201650/8LeMkB2i",
  },
  {
    name: "BA 425 - Tasoluk",
    link: "https://app.groupme.com/join_group/65201657/A6zXk6OJ",
  },
  {
    name: "BA 453 - Mueller",
    link: "https://app.groupme.com/join_group/65201669/nW3KsulQ",
  },
  {
    name: "BA 453",
    link: "https://app.groupme.com/join_group/65201681/2NrV01LD",
  },
  {
    name: "BA 499 - Grzeskowiak",
    link: "https://app.groupme.com/join_group/65201693/VdwEvtZE",
  },
  {
    name: "BA 523 - Butz",
    link: "https://app.groupme.com/join_group/65201703/HITuTVYb",
  },
  {
    name: "BA 525 - Shark",
    link: "https://app.groupme.com/join_group/65201714/XVeTiucl",
  },
  {
    name: "BA 534",
    link: "https://app.groupme.com/join_group/65201724/6ynzn8ef",
  },
  {
    name: "BA 534 - Spreitzer , Erwin",
    link: "https://app.groupme.com/join_group/65201735/vBXq2Syt",
  },
  {
    name: "BA 591",
    link: "https://app.groupme.com/join_group/65201743/6JhnkywA",
  },
  {
    name: "BA 101 - Wooten",
    link: "https://app.groupme.com/join_group/65201751/81GMAYy0",
  },
  {
    name: "BA 101 - Todd",
    link: "https://app.groupme.com/join_group/65201761/IMqsc9kQ",
  },
  {
    name: "BA 480 - Tasoluk, Lafontaine",
    link: "https://app.groupme.com/join_group/65201767/SKX3RnAt",
  },
  {
    name: "BA 455",
    link: "https://app.groupme.com/join_group/65201890/nTuVAhIQ",
  },
  {
    name: "BA 457",
    link: "https://app.groupme.com/join_group/65201904/3k5gx7Ji",
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
    name: "BCOM 250 - James",
    link: "https://app.groupme.com/join_group/65201990/SNmx4ISD",
  },
  {
    name: "BCOM 329 - Hinesly",
    link: "https://app.groupme.com/join_group/65202002/4oz5Cj4v",
  },
  {
    name: "BCOM 369 - Hinesly",
    link: "https://app.groupme.com/join_group/65202359/GayDXcU3",
  },
  {
    name: "BCOM 369 - Kotzian",
    link: "https://app.groupme.com/join_group/65202377/h7dp8wWQ",
  },
  {
    name: "BCOM 522 - Crawford",
    link: "https://app.groupme.com/join_group/65202389/QTEFhzCo",
  },
  {
    name: "BCOM 524 - Zimmerman",
    link: "https://app.groupme.com/join_group/65202402/vj40FNg0",
  },
  {
    name: "BCOM 561 - Kotzian",
    link: "https://app.groupme.com/join_group/65202420/BfwQ0gbx",
  },
  {
    name: "BCOM 594 - Young, Pawlik",
    link: "https://app.groupme.com/join_group/65202431/17LpgRO7",
  },
  {
    name: "BCOM 595 - Young, Pawlik",
    link: "https://app.groupme.com/join_group/65202436/C3h9w4UX",
  },
  {
    name: "BCS 132 - Rosic",
    link: "https://app.groupme.com/join_group/65202443/VYu18WDN",
  },
  {
    name: "BCS 232 - Rosic",
    link: "https://app.groupme.com/join_group/65202450/shZEgAce",
  },
  {
    name: "BCS 532 - Rosic",
    link: "https://app.groupme.com/join_group/65202465/dGDxe91T",
  },
  {
    name: "BCS 534 - Rosic",
    link: "https://app.groupme.com/join_group/65202471/TZqqPald",
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
    name: "BE 410 - Thapar",
    link: "https://app.groupme.com/join_group/65202502/azQ7LF5D",
  },
  {
    name: "BE 435 - Leider",
    link: "https://app.groupme.com/join_group/65202514/NcvupeXR",
  },
  {
    name: "BE 533 - Shwayder",
    link: "https://app.groupme.com/join_group/65202524/R5tI35dd",
  },
  {
    name: "BE 562 - Shwayder",
    link: "https://app.groupme.com/join_group/65202532/Bki4OyLw",
  },
  {
    name: "BE 580 - Shwayder",
    link: "https://app.groupme.com/join_group/65202537/hto2r5zf",
  },
  {
    name: "BE 591 - Sivadasan",
    link: "https://app.groupme.com/join_group/65202547/IxpNvV3f",
  },
  {
    name: "BIOINF 520",
    link: "https://app.groupme.com/join_group/65202558/m5X1xc44",
  },
  {
    name: "BIOINF 520 - Beard",
    link: "https://app.groupme.com/join_group/65202572/PBbSX2PC",
  },
  {
    name: "BIOINF 524 - Freddolino, Mitrea, Guest",
    link: "https://app.groupme.com/join_group/65202578/3wFjbls5",
  },
  {
    name: "BIOINF 529 - Mills, Boyle",
    link: "https://app.groupme.com/join_group/65202585/a6dnU5AA",
  },
  {
    name: "BIOINF 545 - Parker, Tsoi",
    link: "https://app.groupme.com/join_group/65202593/vXRr66r9",
  },
  {
    name: "BIOINF 547 - Rajapakse",
    link: "https://app.groupme.com/join_group/65202603/QWIhptKR",
  },
  {
    name: "BIOINF 580",
    link: "https://app.groupme.com/join_group/65202610/Yo9gqHDk",
  },
  {
    name: "BIOLCHEM 415 - Ninfa, Saper, Lamanna",
    link: "https://app.groupme.com/join_group/65202721/exVKunwN",
  },
  {
    name: "BIOLCHEM 451 - Koutmos",
    link: "https://app.groupme.com/join_group/65202727/JWQ5jvFP",
  },
  {
    name: "BIOLCHEM 452 - Trievel",
    link: "https://app.groupme.com/join_group/65202737/eSgMAxTZ",
  },
  {
    name: "BIOLCHEM 503 - Nichols",
    link: "https://app.groupme.com/join_group/65202748/GxfJv50H",
  },
  {
    name: "BIOLCHEM 515 - Ninfa, Saper, Lamanna",
    link: "https://app.groupme.com/join_group/65202755/lKK2Lrog",
  },
  {
    name: "BIOLCHEM 528 - Marsh",
    link: "https://app.groupme.com/join_group/65202765/sbTmXlcG",
  },
  {
    name: "BIOLCHEM 597 - Kwok, Saper, Cheng, Fleischhacker",
    link: "https://app.groupme.com/join_group/65202778/d5Bo5ODo",
  },
  {
    name: "BIOLCHEM 502 - Wang, Cierpicki, Nagorny, Grembecka",
    link: "https://app.groupme.com/join_group/65202788/uxE0ujMi",
  },
  {
    name: "BIOLCHEM 416",
    link: "https://app.groupme.com/join_group/65202801/fqGlleMY",
  },
  {
    name: "BIOLCHEM 516",
    link: "https://app.groupme.com/join_group/65202809/jvC3nmDd",
  },
  {
    name: "BIOLOGY 102 - Qiu",
    link: "https://app.groupme.com/join_group/65202817/Cgv1I9z8",
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
    name: "BIOLOGY 116 - Knowles",
    link: "https://app.groupme.com/join_group/65202845/uNzMkyCA",
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
    name: "BIOLOGY 230 - Umana, MacAlister",
    link: "https://app.groupme.com/join_group/65203446/Jtcs0AB2",
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
    name: "BIOLOGY 288 - Duda Jr",
    link: "https://app.groupme.com/join_group/65203479/iP23UQV6",
  },
  {
    name: "BIOLOGY 305 - Wierzbicki, Green",
    link: "https://app.groupme.com/join_group/65203488/r16mtT63",
  },
  {
    name: "BIOLOGY 526 - Bailey",
    link: "https://app.groupme.com/join_group/65203501/hqj1VWnu",
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
    name: "BIOLOGY 117 - Carpenter",
    link: "https://app.groupme.com/join_group/65203527/mQ6ioM0j",
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
    name: "BIOMEDE 332 - Deng",
    link: "https://app.groupme.com/join_group/65203607/Ld77cb4r",
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
    name: "BIOMEDE 450 - Schmedlen, Casper, Gosbee, Jensen",
    link: "https://app.groupme.com/join_group/65203648/gqA25dOq",
  },
  {
    name: "BIOMEDE 450 - Wrobel, Jensen, Casper",
    link: "https://app.groupme.com/join_group/65203658/ayBUaiYY",
  },
  {
    name: "BIOMEDE 452 - Schmedlen, Sheffield, Gosbee",
    link: "https://app.groupme.com/join_group/65203668/k40Fu6UV",
  },
  {
    name: "BIOMEDE 476 - Grotberg",
    link: "https://app.groupme.com/join_group/65203675/DKHq7pyR",
  },
  {
    name: "BIOMEDE 479 - Nordsletten",
    link: "https://app.groupme.com/join_group/65203685/fB4R9LgY",
  },
  {
    name: "BIOMEDE 499 - Chandrasekaran",
    link: "https://app.groupme.com/join_group/65204065/bDoABPP2",
  },
  {
    name: "BIOMEDE 500 - Baker, Arnold",
    link: "https://app.groupme.com/join_group/65204075/1dvxHpdM",
  },
  {
    name: "BIOMEDE 503 - Bruns",
    link: "https://app.groupme.com/join_group/65204085/Zo6fsJxz",
  },
  {
    name:
      "BIOMEDE 510 - Fowlkes, Swanson, Kripfgans, Xu, Goodsitt, Chan, Dewaraja, Lahiri",
    link: "https://app.groupme.com/join_group/65204096/JBq8yRAb",
  },
  {
    name: "BIOMEDE 534 - Martin",
    link: "https://app.groupme.com/join_group/65204106/IhbM0Sq6",
  },
  {
    name: "BIOMEDE 561 - Fan",
    link: "https://app.groupme.com/join_group/65204114/H3tZdsiB",
  },
  {
    name: "BIOMEDE 599 - Stegemann",
    link: "https://app.groupme.com/join_group/65204125/QiYp0VQ1",
  },
  {
    name: "BIOMEDE 599 - Weiland",
    link: "https://app.groupme.com/join_group/65204135/kODUmfLE",
  },
  {
    name: "BIOMEDE 599 - Aguilar",
    link: "https://app.groupme.com/join_group/65204145/yauZoRye",
  },
  {
    name: "BIOMEDE 599 - Putnam",
    link: "https://app.groupme.com/join_group/65204153/fEZk7owx",
  },
  {
    name: "BIOMEDE 458",
    link: "https://app.groupme.com/join_group/65204161/F2XAWLWO",
  },
  {
    name: "BIOMEDE 517",
    link: "https://app.groupme.com/join_group/65204175/26X4Ezm0",
  },
  {
    name: "BIOPHYS 290 - Zochowski",
    link: "https://app.groupme.com/join_group/65204187/C1FBLXm1",
  },
  {
    name: "BIOPHYS 401 - Frank",
    link: "https://app.groupme.com/join_group/65204194/YYMUCg1v",
  },
  {
    name: "BIOPHYS 417 - Yang",
    link: "https://app.groupme.com/join_group/65204203/HWDdMYkf",
  },
  {
    name: "BIOPHYS 420 - Guerra",
    link: "https://app.groupme.com/join_group/65204218/mqiBhkui",
  },
  {
    name: "BIOPHYS 430 - Ivanova",
    link: "https://app.groupme.com/join_group/65204228/TtDrBmPr",
  },
  {
    name: "BIOPHYS 116 - Swanson",
    link: "https://app.groupme.com/join_group/65204234/OFxwze26",
  },
  {
    name: "BIOPHYS 502 - Wang, Cierpicki, Nagorny, Grembecka",
    link: "https://app.groupme.com/join_group/65204248/u16uTf5q",
  },
  {
    name: "BIOPHYS 521 - Horowitz",
    link: "https://app.groupme.com/join_group/65204254/i0pQWo09",
  },
  {
    name: "BIOPHYS 450",
    link: "https://app.groupme.com/join_group/65204264/17DB5zbb",
  },
  {
    name: "BIOPHYS 550",
    link: "https://app.groupme.com/join_group/65204271/3bqHPXm5",
  },
  {
    name: "BIOSTAT 449",
    link: "https://app.groupme.com/join_group/65204280/AsuNm77x",
  },
  {
    name: "BIOSTAT 512 - Welch, Plegue",
    link: "https://app.groupme.com/join_group/65204289/TuzawSvS",
  },
  {
    name: "BIOSTAT 590 - Murray",
    link: "https://app.groupme.com/join_group/65204299/JtdlQDcH",
  },
  {
    name: "BIOSTAT 599 - Tsodikov",
    link: "https://app.groupme.com/join_group/65204306/Nn8Xm34R",
  },
  {
    name: "BL 306 - Rogala",
    link: "https://app.groupme.com/join_group/65204430/NhbhtzZw",
  },
  {
    name: "BL 404 - Schipani",
    link: "https://app.groupme.com/join_group/65204445/u0cMsf3u",
  },
  {
    name: "BL 407 - Kress",
    link: "https://app.groupme.com/join_group/65204454/IHmB179Q",
  },
  {
    name: "BL 411",
    link: "https://app.groupme.com/join_group/65204462/1InWWpmQ",
  },
  {
    name: "BL 411 - Schipani",
    link: "https://app.groupme.com/join_group/65204470/dBWjaiPE",
  },
  {
    name: "BL 413 - Rogala",
    link: "https://app.groupme.com/join_group/65204479/gRu1mgK2",
  },
  {
    name: "BL 482 - Schloff",
    link: "https://app.groupme.com/join_group/65204488/y4UCrYQb",
  },
  {
    name: "BL 504 - Schipani",
    link: "https://app.groupme.com/join_group/65204495/xwSGCcg2",
  },
  {
    name: "BL 513 - Rogala",
    link: "https://app.groupme.com/join_group/65204515/5L1EKFK5",
  },
  {
    name: "BL 516 - Schipani",
    link: "https://app.groupme.com/join_group/65204522/peaLNbr7",
  },
  {
    name: "BL 517 - Schipani",
    link: "https://app.groupme.com/join_group/65204527/N85MxpOs",
  },
  {
    name: "BL 517",
    link: "https://app.groupme.com/join_group/65204531/3KNwZV7q",
  },
  {
    name: "BL 555 - Hess",
    link: "https://app.groupme.com/join_group/65204540/tr9DSeXS",
  },
  {
    name: "BL 557 - Rogala",
    link: "https://app.groupme.com/join_group/65204548/UNPnzghk",
  },
  {
    name: "BL 557 - Hargrove",
    link: "https://app.groupme.com/join_group/65204558/HwZgjNLW",
  },
  {
    name: "BL 582 - Schloff",
    link: "https://app.groupme.com/join_group/65204562/6MUvVz13",
  },
  {
    name: "BL 488 - Bishara",
    link: "https://app.groupme.com/join_group/65204570/aRRlINvt",
  },
  {
    name: "BUSABRD 411",
    link: "https://app.groupme.com/join_group/65204582/la2tVpDD",
  },
  {
    name: "BUSABRD 411 - Schipani",
    link: "https://app.groupme.com/join_group/65204593/wWYXY8eL",
  },
  {
    name: "BUSABRD 425 - Tasoluk",
    link: "https://app.groupme.com/join_group/65204604/9EzVr26V",
  },
  {
    name: "BUSABRD 520 - Spreitzer",
    link: "https://app.groupme.com/join_group/65204609/MEPPB9we",
  },
  {
    name: "CANCBIO 554 - Canman",
    link: "https://app.groupme.com/join_group/65204621/P5FTuA82",
  },
  {
    name: "CATALAN 405 - Coll Ramirez",
    link: "https://app.groupme.com/join_group/65204631/1TqoWHnp",
  },
  {
    name: "CCS 580 - Gallagher",
    link: "https://app.groupme.com/join_group/65204639/8t1KSADE",
  },
  {
    name: "CDB 550 - Hortsch",
    link: "https://app.groupme.com/join_group/65204756/S0S5JXNJ",
  },
  {
    name: "CDB 581 - Allen",
    link: "https://app.groupme.com/join_group/65204766/u1ruezUW",
  },
  {
    name: "CDB 516",
    link: "https://app.groupme.com/join_group/65204771/h8tIDtsE",
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
    name: "CEE 307 - Semrau",
    link: "https://app.groupme.com/join_group/65204802/xdBnhE8A",
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
    name: "CEE 481 - Hayes",
    link: "https://app.groupme.com/join_group/65204853/PWhLl4YS",
  },
  {
    name: "CEE 501 - Adriaens",
    link: "https://app.groupme.com/join_group/65204863/hzpERkXt",
  },
  {
    name: "CEE 501 - Orosz",
    link: "https://app.groupme.com/join_group/65204873/0zPFOvKj",
  },
  {
    name: "CEE 513 - McCormick",
    link: "https://app.groupme.com/join_group/65204887/KctgRA8k",
  },
  {
    name: "CEE 515 - Wight",
    link: "https://app.groupme.com/join_group/65204899/JI4dDTCb",
  },
  {
    name: "CEE 520 - Ivanov",
    link: "https://app.groupme.com/join_group/65204917/5e9qQJjJ",
  },
  {
    name: "CEE 522 - MacVean",
    link: "https://app.groupme.com/join_group/65204926/786s6AOp",
  },
  {
    name: "CEE 526 - Bricker",
    link: "https://app.groupme.com/join_group/65204938/EPpGIniM",
  },
  {
    name: "CEE 530 - Menassa",
    link: "https://app.groupme.com/join_group/65204944/oUwiacDj",
  },
  {
    name: "CEE 543 - Garcia",
    link: "https://app.groupme.com/join_group/65204956/0iSaRow7",
  },
  {
    name: "CEE 554 - Masoud",
    link: "https://app.groupme.com/join_group/65204967/PpSmumEV",
  },
  {
    name: "CEE 559 - Yin",
    link: "https://app.groupme.com/join_group/65204981/PQ78OB7T",
  },
  {
    name: "CEE 563 - Clack",
    link: "https://app.groupme.com/join_group/65204990/nmjPozff",
  },
  {
    name: "CEE 564 - Lastoskie",
    link: "https://app.groupme.com/join_group/65205001/JEABtnB0",
  },
  {
    name: "CEE 571 - Ozay",
    link: "https://app.groupme.com/join_group/65205012/sDULRTGN",
  },
  {
    name: "CEE 580 - Olson",
    link: "https://app.groupme.com/join_group/65205134/uAqkO9jQ",
  },
  {
    name: "CEE 586 - Keoleian, Fetner, Calzavara",
    link: "https://app.groupme.com/join_group/65205140/apC3B2Oq",
  },
  {
    name: "CEE 592",
    link: "https://app.groupme.com/join_group/65205146/Q6rN7rqx",
  },
  {
    name: "CEE 531 - Kamat",
    link: "https://app.groupme.com/join_group/65205152/1DFYGpKA",
  },
  {
    name: "CEE 532 - Lee",
    link: "https://app.groupme.com/join_group/65205161/xD3WNSbB",
  },
  {
    name: "CEE 534 - Kamat",
    link: "https://app.groupme.com/join_group/65205172/u6asakba",
  },
  {
    name: "CEE 546 - Michalowski",
    link: "https://app.groupme.com/join_group/65205187/zqQaar2H",
  },
  {
    name: "CEE 200 - Ioannou",
    link: "https://app.groupme.com/join_group/65205196/RSC3ncbj",
  },
  {
    name: "CEE 501 - Masoud",
    link: "https://app.groupme.com/join_group/65205206/CNcG5DRX",
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
    name: "CEE 351",
    link: "https://app.groupme.com/join_group/65205240/47xhsB9h",
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
    name: "CEE 581",
    link: "https://app.groupme.com/join_group/65205282/GWSZ1mHI",
  },
  {
    name: "CELLO 450",
    link: "https://app.groupme.com/join_group/65205289/Tvs8tmzI",
  },
  {
    name: "CELLO 550",
    link: "https://app.groupme.com/join_group/65205293/gG7W4vEo",
  },
  {
    name: "CHAMBER 410",
    link: "https://app.groupme.com/join_group/65205300/tkAu5bII",
  },
  {
    name: "CHAMBER 470",
    link: "https://app.groupme.com/join_group/65205308/9hCn2xm9",
  },
  {
    name: "CHAMBER 510",
    link: "https://app.groupme.com/join_group/65205313/732UWHMC",
  },
  {
    name: "CHAMBER 570",
    link: "https://app.groupme.com/join_group/65205324/fzntUKAj",
  },
  {
    name: "CHE 330 - Gong",
    link: "https://app.groupme.com/join_group/65205337/dHv7lPQe",
  },
  {
    name: "CHE 341 - Burns",
    link: "https://app.groupme.com/join_group/65205346/9vFbso65",
  },
  {
    name: "CHE 360 - Hirshfield",
    link: "https://app.groupme.com/join_group/65205449/ryL4lCd4",
  },
  {
    name: "CHE 431 - Tadd",
    link: "https://app.groupme.com/join_group/65205455/qW6i5AI1",
  },
  {
    name: "CHE 485 - Lin",
    link: "https://app.groupme.com/join_group/65205479/LVABSLIo",
  },
  {
    name: "CHE 487",
    link: "https://app.groupme.com/join_group/65205483/dbWHMuY9",
  },
  {
    name: "CHE 487 - Tadd",
    link: "https://app.groupme.com/join_group/65205490/TjoW5w2O",
  },
  {
    name: "CHE 489 - Hirshfield",
    link: "https://app.groupme.com/join_group/65205503/NXF750Qr",
  },
  {
    name: "CHE 496 - Nagrath",
    link: "https://app.groupme.com/join_group/65206162/Is0cnQ73",
  },
  {
    name: "CHE 512 - Kim",
    link: "https://app.groupme.com/join_group/65206346/9EU6gP4Y",
  },
  {
    name: "CHE 519 - Wang",
    link: "https://app.groupme.com/join_group/65206357/EFyKItd9",
  },
  {
    name: "CHE 528 - Antoniewicz",
    link: "https://app.groupme.com/join_group/65206365/kqqTq7IX",
  },
  {
    name: "CHE 542 - Lenert",
    link: "https://app.groupme.com/join_group/65206371/sVLpu1rs",
  },
  {
    name: "CHE 559 - Laine",
    link: "https://app.groupme.com/join_group/65206381/780jiuFh",
  },
  {
    name: "CHEM 105 - Flanner",
    link: "https://app.groupme.com/join_group/65206392/82ThLjUP",
  },
  {
    name: "CHEM 108 - Spica",
    link: "https://app.groupme.com/join_group/65206395/Db62zEaZ",
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
    name: "CHEM 241 - Pratt",
    link: "https://app.groupme.com/join_group/65206572/xJM6ngV0",
  },
  {
    name: "CHEM 245 - Chen",
    link: "https://app.groupme.com/join_group/65206584/YVLN0dKt",
  },
  {
    name: "CHEM 246 - Bailey",
    link: "https://app.groupme.com/join_group/65206595/2A3HaSjD",
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
    name: "CHEM 261 - Zgid",
    link: "https://app.groupme.com/join_group/65206713/eMHu0E1C",
  },
  {
    name: "CHEM 261 - Maldonado",
    link: "https://app.groupme.com/join_group/65206722/esgZ1VUT",
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
    name: "CHEM 303 - Bridwell-Rabb",
    link: "https://app.groupme.com/join_group/65206742/ZOeeUi6i",
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
    name: "CHEM 353 - Walter",
    link: "https://app.groupme.com/join_group/65206773/UbCUYa1W",
  },
  {
    name: "CHEM 417 - Yang",
    link: "https://app.groupme.com/join_group/65206784/JeMCvwaY",
  },
  {
    name: "CHEM 420 - Nagorny",
    link: "https://app.groupme.com/join_group/65206792/CLmckvCd",
  },
  {
    name: "CHEM 447 - Ruotolo",
    link: "https://app.groupme.com/join_group/65206801/r8844QbB",
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
    name: "CHEM 463 - Biteen",
    link: "https://app.groupme.com/join_group/65206825/fCvnbVi1",
  },
  {
    name: "CHEM 483 - Kopelman",
    link: "https://app.groupme.com/join_group/65206832/TTMeFYEs",
  },
  {
    name: "CHEM 508 - Pecoraro",
    link: "https://app.groupme.com/join_group/65206844/E5uUVz9J",
  },
  {
    name: "CHEM 515 - Szymczak",
    link: "https://app.groupme.com/join_group/65206856/IezRgIRi",
  },
  {
    name: "CHEM 526 - Bailey",
    link: "https://app.groupme.com/join_group/65206865/nlFyyeXk",
  },
  {
    name: "CHEM 528 - Marsh",
    link: "https://app.groupme.com/join_group/65206873/aQasydP5",
  },
  {
    name: "CHEM 538 - Matzger",
    link: "https://app.groupme.com/join_group/65206886/TcYhF4BL",
  },
  {
    name: "CHEM 541 - Montgomery",
    link: "https://app.groupme.com/join_group/65206897/fjkedlGL",
  },
  {
    name: "CHEM 542 - Matzger",
    link: "https://app.groupme.com/join_group/65206906/QQfO4bVR",
  },
  {
    name: "CHEM 575 - Biteen",
    link: "https://app.groupme.com/join_group/65206919/chvnewsp",
  },
  {
    name: "CHEM 108",
    link: "https://app.groupme.com/join_group/65207026/mAcUJaP5",
  },
  {
    name: "CHEM 242 - Hakansson",
    link: "https://app.groupme.com/join_group/65207030/1vhi23XL",
  },
  {
    name: "CHEM 541",
    link: "https://app.groupme.com/join_group/65207039/rKa4166J",
  },
  {
    name: "CHEM 214 - Tuttle",
    link: "https://app.groupme.com/join_group/65207050/y3yB1l9d",
  },
  {
    name: "CHEM 502 - Wang, Cierpicki, Nagorny, Grembecka",
    link: "https://app.groupme.com/join_group/65207058/8u0lcUHV",
  },
  {
    name: "CHEM 521 - Horowitz",
    link: "https://app.groupme.com/join_group/65207065/SroKJHqx",
  },
  {
    name: "CHEM 597",
    link: "https://app.groupme.com/join_group/65207073/v69yt2K9",
  },
  {
    name: "CHEMBIO 512 - Iliff",
    link: "https://app.groupme.com/join_group/65207078/lEIphm07",
  },
  {
    name: "CHEMBIO 502 - Wang, Nagorny, Cierpicki, Grembecka",
    link: "https://app.groupme.com/join_group/65207087/C9zvXBtg",
  },
  {
    name: "CHEMBIO 599",
    link: "https://app.groupme.com/join_group/65207105/54aDu23s",
  },
  {
    name: "CLARCH 221 - Nevett",
    link: "https://app.groupme.com/join_group/65207115/NIYgt3rz",
  },
  {
    name: "CLARCH 327 - Eliav",
    link: "https://app.groupme.com/join_group/65207122/X7GUtB2V",
  },
  {
    name: "CLARCH 382 - Motta",
    link: "https://app.groupme.com/join_group/65207134/ztxaFpF2",
  },
  {
    name: "CLARCH 389 - Stone",
    link: "https://app.groupme.com/join_group/65207143/0gfBSRmU",
  },
  {
    name: "CLARCH 550 - Stone",
    link: "https://app.groupme.com/join_group/65207152/K2hScCKx",
  },
  {
    name: "CLARCH 375 - Margomenou",
    link: "https://app.groupme.com/join_group/65207166/BljlQe9s",
  },
  {
    name: "CLARCH 470 - Stone",
    link: "https://app.groupme.com/join_group/65207175/G1UmXBAJ",
  },
  {
    name: "CLARCH 480 - Motta",
    link: "https://app.groupme.com/join_group/65207184/508zK2sl",
  },
  {
    name: "CLARINET 111",
    link: "https://app.groupme.com/join_group/65207189/sMfVWyKF",
  },
  {
    name: "CLCIV 125 - Ratte",
    link: "https://app.groupme.com/join_group/65207196/2PT35rDy",
  },
  {
    name: "CLCIV 125 - Foster",
    link: "https://app.groupme.com/join_group/65207213/uO6smvQZ",
  },
  {
    name: "CLCIV 202 - Caston",
    link: "https://app.groupme.com/join_group/65207217/hLBjCee8",
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
    name: "CLCIV 288",
    link: "https://app.groupme.com/join_group/65207345/DNkpqPqY",
  },
  {
    name: "CLCIV 327 - Eliav",
    link: "https://app.groupme.com/join_group/65207353/hFO3U33i",
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
    name: "CLCIV 350 - Dufallo",
    link: "https://app.groupme.com/join_group/65207376/QUlV6tOZ",
  },
  {
    name: "CLCIV 350 - Forsdyke",
    link: "https://app.groupme.com/join_group/65207385/W1j3DomF",
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
    name: "CLCIV 382 - Motta",
    link: "https://app.groupme.com/join_group/65207422/NBK4zFbM",
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
    name: "CLCIV 367 - Caston",
    link: "https://app.groupme.com/join_group/65207449/QLTcHOHE",
  },
  {
    name: "CLCIV 120 - Soto Marin",
    link: "https://app.groupme.com/join_group/65207457/1KYKUbCJ",
  },
  {
    name: "CLCIV 120 - Soter",
    link: "https://app.groupme.com/join_group/65207464/s1b1HwB3",
  },
  {
    name: "CLCIV 253 - Das",
    link: "https://app.groupme.com/join_group/65207472/Erev0410",
  },
  {
    name: "CLCIV 470 - Das",
    link: "https://app.groupme.com/join_group/65207483/SZtbQ7lF",
  },
  {
    name: "CLIMATE 102 - Samson",
    link: "https://app.groupme.com/join_group/65207492/lo5ZkFtV",
  },
  {
    name: "CLIMATE 105 - Flanner",
    link: "https://app.groupme.com/join_group/65207494/B1SsXrF4",
  },
  {
    name: "CLIMATE 172 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65207504/zbJLgOed",
  },
  {
    name: "CLIMATE 321 - Li",
    link: "https://app.groupme.com/join_group/65207514/iZqx2vY1",
  },
  {
    name: "CLIMATE 350 - Huang",
    link: "https://app.groupme.com/join_group/65207521/2w5Y4qsy",
  },
  {
    name: "CLIMATE 405 - Ruf",
    link: "https://app.groupme.com/join_group/65207532/jvxVcUIW",
  },
  {
    name: "CLIMATE 414 - Marsik",
    link: "https://app.groupme.com/join_group/65207542/8nXjPvmj",
  },
  {
    name: "CLIMATE 423 - Liemohn",
    link: "https://app.groupme.com/join_group/65207548/Dz2UpJUZ",
  },
  {
    name: "CLIMATE 431 - Budhu",
    link: "https://app.groupme.com/join_group/65207557/XkrGXg4h",
  },
  {
    name: "CLIMATE 474 - Bassis",
    link: "https://app.groupme.com/join_group/65207673/t1cZDmSk",
  },
  {
    name: "CLIMATE 479 - Kort",
    link: "https://app.groupme.com/join_group/65207679/UwVuv7yd",
  },
  {
    name: "CLIMATE 480 - Rood",
    link: "https://app.groupme.com/join_group/65207691/79JF26cX",
  },
  {
    name: "CLIMATE 565 - Atreya",
    link: "https://app.groupme.com/join_group/65207698/f1p8nKrD",
  },
  {
    name: "CLIMATE 587 - Ulaby",
    link: "https://app.groupme.com/join_group/65207704/jxBMeo3n",
  },
  {
    name: "CLIMATE 592 - Rood",
    link: "https://app.groupme.com/join_group/65207710/JhMJM6Kt",
  },
  {
    name: "CLIMATE 501 - Slavin",
    link: "https://app.groupme.com/join_group/65207718/3PyRSkXV",
  },
  {
    name: "CLIMATE 501 - Moldwin",
    link: "https://app.groupme.com/join_group/65207723/ZIVOQlvo",
  },
  {
    name: "CLIMATE 280",
    link: "https://app.groupme.com/join_group/65207729/BXynAECp",
  },
  {
    name: "CLIMATE 381",
    link: "https://app.groupme.com/join_group/65207743/t2xnbWUZ",
  },
  {
    name: "CMPLXSYS 250 - Raimi",
    link: "https://app.groupme.com/join_group/65207757/MSI32mKc",
  },
  {
    name: "CMPLXSYS 270 - Johnson",
    link: "https://app.groupme.com/join_group/65207796/PlaAt9q6",
  },
  {
    name: "CMPLXSYS 425 - Zaman",
    link: "https://app.groupme.com/join_group/65207808/xSlqMSeR",
  },
  {
    name: "CMPLXSYS 510 - King",
    link: "https://app.groupme.com/join_group/65207816/PLKe7igP",
  },
  {
    name: "CMPLXSYS 530 - Eisenberg",
    link: "https://app.groupme.com/join_group/65207822/CP1Yb9zz",
  },
  {
    name: "COGSCI 200 - Sripada",
    link: "https://app.groupme.com/join_group/65207833/0o5gfTHo",
  },
  {
    name: "COGSCI 209 - Baptista",
    link: "https://app.groupme.com/join_group/65207841/VPNDkqgb",
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
    name: "COMM 307 - Glenn",
    link: "https://app.groupme.com/join_group/65207935/pJZUKMSu",
  },
  {
    name: "COMM 317 - Angell",
    link: "https://app.groupme.com/join_group/65207942/NHxYKZuP",
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
    name: "COMM 404 - Douglas",
    link: "https://app.groupme.com/join_group/65207971/BpCTaMBA",
  },
  {
    name: "COMM 404 - Pearson",
    link: "https://app.groupme.com/join_group/65207981/gGPnHyT6",
  },
  {
    name: "COMM 408 - Sparr",
    link: "https://app.groupme.com/join_group/65207989/LZNBwLGW",
  },
  {
    name: "COMM 417 - Hart",
    link: "https://app.groupme.com/join_group/65207997/UIumhnkz",
  },
  {
    name: "COMM 421 - Sparr",
    link: "https://app.groupme.com/join_group/65208002/5rfbmJGn",
  },
  {
    name: "COMM 159 - Collings",
    link: "https://app.groupme.com/join_group/65208010/J8wnhWGN",
  },
  {
    name: "COMM 432 - Collings",
    link: "https://app.groupme.com/join_group/65208124/buyUAOLb",
  },
  {
    name: "COMM 439 - Avila Sanchez",
    link: "https://app.groupme.com/join_group/65208140/hgO3ngSK",
  },
  {
    name: "COMM 452 - Van Den Bulck, Pearson",
    link: "https://app.groupme.com/join_group/65208153/Zzum8AyH",
  },
  {
    name: "COMM 461 - Ankerson",
    link: "https://app.groupme.com/join_group/65208984/oN2LE2nL",
  },
  {
    name: "COMM 468 - Weeks",
    link: "https://app.groupme.com/join_group/65209023/GO4qkUq2",
  },
  {
    name: "COMM 490 - Draper",
    link: "https://app.groupme.com/join_group/65209032/Q2N7kdYl",
  },
  {
    name: "COMM 490 - Griffin",
    link: "https://app.groupme.com/join_group/65209040/kZqxNpIr",
  },
  {
    name: "COMM 490 - Williams",
    link: "https://app.groupme.com/join_group/65209051/EcmcGQYc",
  },
  {
    name: "COMM 490 - Moshin",
    link: "https://app.groupme.com/join_group/65209060/720BjHxb",
  },
  {
    name: "COMM 492 - Van Den Bulck, Pearson",
    link: "https://app.groupme.com/join_group/65209065/1DdviP0u",
  },
  {
    name: "COMP 222 - Etezady",
    link: "https://app.groupme.com/join_group/65209072/CAn0UWW1",
  },
  {
    name: "COMP 422 - Sheng",
    link: "https://app.groupme.com/join_group/65209084/xi3rbXGQ",
  },
  {
    name: "COMP 550 - Etezady",
    link: "https://app.groupme.com/join_group/65209091/SVq50Lhc",
  },
  {
    name: "COMP 233 - Chambers",
    link: "https://app.groupme.com/join_group/65209103/vVbUhWTs",
  },
  {
    name: "COMP 433 - Chambers",
    link: "https://app.groupme.com/join_group/65209111/h6idVDZl",
  },
  {
    name: "COMP 416 - Santos",
    link: "https://app.groupme.com/join_group/65209120/PtO7WboU",
  },
  {
    name: "COMP 450 - Kuster",
    link: "https://app.groupme.com/join_group/65209126/KYelEhqY",
  },
  {
    name: "COMP 526 - Santos",
    link: "https://app.groupme.com/join_group/65209144/iCfMgW8q",
  },
  {
    name: "COMPLIT 322 - Stroebel",
    link: "https://app.groupme.com/join_group/65209155/7MWx5poB",
  },
  {
    name: "COMPLIT 122 - Gaudyn",
    link: "https://app.groupme.com/join_group/65210753/MUkmy2YB",
  },
  {
    name: "COMPLIT 122 - Kubic",
    link: "https://app.groupme.com/join_group/65211303/VSzvdZ2i",
  },
  {
    name: "COMPLIT 122 - Ogden",
    link: "https://app.groupme.com/join_group/65211305/ao5vSx1o",
  },
  {
    name: "COMPLIT 122 - Duarte Caetano",
    link: "https://app.groupme.com/join_group/65211308/0XUYPwR1",
  },
  {
    name: "COMPLIT 122 - Stanev",
    link: "https://app.groupme.com/join_group/65211310/OiFB7sWY",
  },
  {
    name: "COMPLIT 122 - Cooper",
    link: "https://app.groupme.com/join_group/65211313/rdCVRWlo",
  },
  {
    name: "COMPLIT 122 - Cvjeticanin",
    link: "https://app.groupme.com/join_group/65211317/PQfFEFOU",
  },
  {
    name: "COMPLIT 122 - Martin",
    link: "https://app.groupme.com/join_group/65211319/jiPdMtiF",
  },
  {
    name: "COMPLIT 222 - Aleksic",
    link: "https://app.groupme.com/join_group/65211324/jvcRvxUo",
  },
  {
    name: "COMPLIT 300 - Randall",
    link: "https://app.groupme.com/join_group/65211328/pXvldk1C",
  },
  {
    name: "COMPLIT 140 - Tsoffar",
    link: "https://app.groupme.com/join_group/65211333/wYxHABCR",
  },
  {
    name: "COMPLIT 140 - Macfarlane",
    link: "https://app.groupme.com/join_group/65211338/IR95fVvD",
  },
  {
    name: "COMPLIT 241 - Vorissis",
    link: "https://app.groupme.com/join_group/65211342/qRCCCP9t",
  },
  {
    name: "COMPLIT 260 - Ekotto",
    link: "https://app.groupme.com/join_group/65211346/WVbMYUP8",
  },
  {
    name: "COMPLIT 382 - Herwitz",
    link: "https://app.groupme.com/join_group/65211350/VocYVHvN",
  },
  {
    name: "COMPLIT 382 - Leontis",
    link: "https://app.groupme.com/join_group/65211354/8P84CFfa",
  },
  {
    name: "COMPLIT 422 - Sarlati",
    link: "https://app.groupme.com/join_group/65211358/6aZwlmhg",
  },
  {
    name: "COMPLIT 434 - Cross",
    link: "https://app.groupme.com/join_group/65211362/KvuB3W6N",
  },
  {
    name: "COMPLIT 438 - Herwitz",
    link: "https://app.groupme.com/join_group/65211367/bgOGIYRN",
  },
  {
    name: "COMPLIT 490 - Shammas",
    link: "https://app.groupme.com/join_group/65211371/NfthVUSg",
  },
  {
    name: "COMPLIT 490 - Dickinson",
    link: "https://app.groupme.com/join_group/65211376/jQywxUi4",
  },
  {
    name: "CONDUCT 315 - Frey",
    link: "https://app.groupme.com/join_group/65211379/4WsFPU0z",
  },
  {
    name: "CONDUCT 316 - Snyder",
    link: "https://app.groupme.com/join_group/65211385/IvNqH49S",
  },
  {
    name: "CONDUCT 316",
    link: "https://app.groupme.com/join_group/65211389/MgbKDDy8",
  },
  {
    name: "CONDUCT 316 - Kemper",
    link: "https://app.groupme.com/join_group/65211393/US77PeCp",
  },
  {
    name: "CONDUCT 501 - Kiesler",
    link: "https://app.groupme.com/join_group/65211398/FHPMwi9e",
  },
  {
    name: "CONDUCT 502 - Kiesler",
    link: "https://app.groupme.com/join_group/65211401/Tt2LBFPw",
  },
  {
    name: "CONDUCT 504 - Haithcock",
    link: "https://app.groupme.com/join_group/65211445/uTywEJp8",
  },
  {
    name: "CONDUCT 505",
    link: "https://app.groupme.com/join_group/65211449/mEN8duDu",
  },
  {
    name: "CONDUCT 506 - Rogers Jr",
    link: "https://app.groupme.com/join_group/65211452/Evpe8Nue",
  },
  {
    name: "CONDUCT 510 - Petty",
    link: "https://app.groupme.com/join_group/65211455/zjE0zhC1",
  },
  {
    name: "CONDUCT 416",
    link: "https://app.groupme.com/join_group/65211457/WJbBfhwW",
  },
  {
    name: "CONDUCT 455",
    link: "https://app.groupme.com/join_group/65211461/fhZLHpTP",
  },
  {
    name: "CSP 101 - Wickham",
    link: "https://app.groupme.com/join_group/65211463/TeuIy0bq",
  },
  {
    name: "CSP 105 - Naylor",
    link: "https://app.groupme.com/join_group/65211467/sNU48zK4",
  },
  {
    name: "CSP 100 - Winston",
    link: "https://app.groupme.com/join_group/65211470/FhaEtA1w",
  },
  {
    name: "DANCE 342 - Genne",
    link: "https://app.groupme.com/join_group/65211472/v6kmmTAX",
  },
  {
    name: "DANCE 347 - Kane",
    link: "https://app.groupme.com/join_group/65211475/P1rZSJ2Y",
  },
  {
    name: "DANCE 348 - Wilson",
    link: "https://app.groupme.com/join_group/65211478/aYZH092f",
  },
  {
    name: "DANCE 372 - Cole",
    link: "https://app.groupme.com/join_group/65211484/KTq6glne",
  },
  {
    name: "DANCE 442 - Brissey",
    link: "https://app.groupme.com/join_group/65211486/pqkWIgQ9",
  },
  {
    name: "DANCE 482 - Hopper",
    link: "https://app.groupme.com/join_group/65211489/1dKPF1td",
  },
  {
    name: "DANCE 482 - Beck",
    link: "https://app.groupme.com/join_group/65211495/R6Xd5u7Z",
  },
  {
    name: "DANCE 496 - Neslund",
    link: "https://app.groupme.com/join_group/65211498/RpSoEZdr",
  },
  {
    name: "DANCE 496 - Beck",
    link: "https://app.groupme.com/join_group/65211501/XtJixc5f",
  },
  {
    name: "DANCE 496 - Miao",
    link: "https://app.groupme.com/join_group/65211504/cQt2izyB",
  },
  {
    name: "DANCE 496 - Chavasse she-her-they",
    link: "https://app.groupme.com/join_group/65211507/M5J4J3DC",
  },
  {
    name: "DANCE 505 - Kane",
    link: "https://app.groupme.com/join_group/65211510/SYkSjwO0",
  },
  {
    name: "DANCE 542 - Brissey",
    link: "https://app.groupme.com/join_group/65211515/hxB5aZTk",
  },
  {
    name: "DANCE 572 - Chavasse",
    link: "https://app.groupme.com/join_group/65211519/y4OfcmfE",
  },
  {
    name: "DANCE 595 - Kane",
    link: "https://app.groupme.com/join_group/65211524/raDkSfZj",
  },
  {
    name: "DANCE 595 - Chavasse",
    link: "https://app.groupme.com/join_group/65211527/qHMi9zbk",
  },
  {
    name: "DANCE 595 - Brissey",
    link: "https://app.groupme.com/join_group/65211724/0tvJcwr2",
  },
  {
    name: "DANCE 302",
    link: "https://app.groupme.com/join_group/65211728/yETzi3Vv",
  },
  {
    name: "DANCE 304",
    link: "https://app.groupme.com/join_group/65211731/NdLaK3px",
  },
  {
    name: "DANCE 312",
    link: "https://app.groupme.com/join_group/65211734/zoktwAsX",
  },
  {
    name: "DANCE 314",
    link: "https://app.groupme.com/join_group/65211741/v5p63Slu",
  },
  {
    name: "DANCE 322",
    link: "https://app.groupme.com/join_group/65211744/AKM2FwD8",
  },
  {
    name: "DANCE 328",
    link: "https://app.groupme.com/join_group/65211749/1jBp1nYl",
  },
  {
    name: "DANCE 391",
    link: "https://app.groupme.com/join_group/65211752/VSwIWjmP",
  },
  {
    name: "DANCE 402",
    link: "https://app.groupme.com/join_group/65211755/gHlsf9os",
  },
  {
    name: "DANCE 404",
    link: "https://app.groupme.com/join_group/65211758/J3I5tRfP",
  },
  {
    name: "DANCE 414",
    link: "https://app.groupme.com/join_group/65211765/AlQo4xfD",
  },
  {
    name: "DANCE 422",
    link: "https://app.groupme.com/join_group/65211769/bXkrVfCY",
  },
  {
    name: "DANCE 428",
    link: "https://app.groupme.com/join_group/65211771/5iBqRrwH",
  },
  {
    name: "DANCE 494",
    link: "https://app.groupme.com/join_group/65211773/EQXYxp09",
  },
  {
    name: "DANCE 498",
    link: "https://app.groupme.com/join_group/65211776/Kq6av0Ra",
  },
  {
    name: "DANCE 511",
    link: "https://app.groupme.com/join_group/65211778/kwyH8Ps6",
  },
  {
    name: "DANCE 513",
    link: "https://app.groupme.com/join_group/65211782/yjSjlfmj",
  },
  {
    name: "DANCE 521",
    link: "https://app.groupme.com/join_group/65211783/WN3yMowi",
  },
  {
    name: "DANCE 532",
    link: "https://app.groupme.com/join_group/65211786/YVJLyiD0",
  },
  {
    name: "DANCE 538",
    link: "https://app.groupme.com/join_group/65211788/VnC8U9GM",
  },
  {
    name: "DATASCI 101",
    link: "https://app.groupme.com/join_group/65211793/izrsNXt4",
  },
  {
    name: "DATASCI 406",
    link: "https://app.groupme.com/join_group/65211795/MNiSDROc",
  },
  {
    name: "DATASCI 415",
    link: "https://app.groupme.com/join_group/65211797/QfE0j3U6",
  },
  {
    name: "DATASCI 485",
    link: "https://app.groupme.com/join_group/65211801/XpUBYGvp",
  },
  {
    name: "DATASCI 504 - Mesner",
    link: "https://app.groupme.com/join_group/65211835/YxHNkadh",
  },
  {
    name: "DATASCI 507",
    link: "https://app.groupme.com/join_group/65211839/u1Sjbffu",
  },
  {
    name: "DATASCI 509 - Thelen",
    link: "https://app.groupme.com/join_group/65211842/3soHMuHf",
  },
  {
    name: "DATASCI 531 - Ionides",
    link: "https://app.groupme.com/join_group/65211846/smo2PdOK",
  },
  {
    name: "DATASCI 551 - Nguyen",
    link: "https://app.groupme.com/join_group/65211849/7kuJMr3J",
  },
  {
    name: "DATASCI 306",
    link: "https://app.groupme.com/join_group/65211852/w446wVRQ",
  },
  {
    name: "DATASCI 413",
    link: "https://app.groupme.com/join_group/65211854/PI49ncQl",
  },
  {
    name: "DBLBASS 450",
    link: "https://app.groupme.com/join_group/65211858/yuN3HTqb",
  },
  {
    name: "DBLBASS 550",
    link: "https://app.groupme.com/join_group/65211863/f9mVAKRg",
  },
  {
    name: "DESCI 502 - Luntz",
    link: "https://app.groupme.com/join_group/65211866/fFFN3YyJ",
  },
  {
    name: "DIGITAL 202 - Bushner",
    link: "https://app.groupme.com/join_group/65211871/27xRRcbu",
  },
  {
    name: "DIGITAL 258 - Cornfeld",
    link: "https://app.groupme.com/join_group/65211874/wrUNO8Vr",
  },
  {
    name: "DIGITAL 285 - McGinn",
    link: "https://app.groupme.com/join_group/65211876/KbeMFuUt",
  },
  {
    name: "DIGITAL 333 - Fishman",
    link: "https://app.groupme.com/join_group/65211878/viUdSrBV",
  },
  {
    name: "DIGITAL 358 - Ferrari",
    link: "https://app.groupme.com/join_group/65211881/OFNZSrDl",
  },
  {
    name: "DIGITAL 358 - Granata",
    link: "https://app.groupme.com/join_group/65211883/4oG1oNEz",
  },
  {
    name: "DIGITAL 358 - Bushner",
    link: "https://app.groupme.com/join_group/65211885/VFVVnFdA",
  },
  {
    name: "DIGITAL 358 - Griffiths",
    link: "https://app.groupme.com/join_group/65211888/41jAaSaZ",
  },
  {
    name: "DIGITAL 367 - Murphy",
    link: "https://app.groupme.com/join_group/65211889/Zpq1AEIe",
  },
  {
    name: "DIGITAL 368 - Mihailova",
    link: "https://app.groupme.com/join_group/65211891/nj9FLk1m",
  },
  {
    name: "DIGITAL 394 - Granata",
    link: "https://app.groupme.com/join_group/65211892/9EkpIDvk",
  },
  {
    name: "DIGITAL 410 - Pasquetto",
    link: "https://app.groupme.com/join_group/65211893/5MZ5qLP6",
  },
  {
    name: "DIGITAL 158 - Yergeau",
    link: "https://app.groupme.com/join_group/65211894/Do5P9MBj",
  },
  {
    name: "DIGITAL 158 - Aristarkhova",
    link: "https://app.groupme.com/join_group/65211897/I94vcyhz",
  },
  {
    name: "DIGITAL 200 - Hetzel",
    link: "https://app.groupme.com/join_group/65211901/QvihHR1Q",
  },
  {
    name: "DIGITAL 200 - Cassel",
    link: "https://app.groupme.com/join_group/65211903/Flx0T5wf",
  },
  {
    name: "DIGITAL 200 - Babcock",
    link: "https://app.groupme.com/join_group/65211937/aWBamucr",
  },
  {
    name: "DIGITAL 201 - Karczynski",
    link: "https://app.groupme.com/join_group/65211939/c48IO9Ly",
  },
  {
    name: "DIGITAL 201 - Beal",
    link: "https://app.groupme.com/join_group/65211943/iPDAd5Mk",
  },
  {
    name: "DIGITAL 201 - Tell",
    link: "https://app.groupme.com/join_group/65211947/ksoSs30D",
  },
  {
    name: "DIGITAL 411 - Abrons",
    link: "https://app.groupme.com/join_group/65211950/Sj01qoHM",
  },
  {
    name: "DIGITAL 376",
    link: "https://app.groupme.com/join_group/65211953/czpA3Wwi",
  },
  {
    name: "DUTCH 112 - Vicca",
    link: "https://app.groupme.com/join_group/65211956/yLdQl6sH",
  },
  {
    name: "DUTCH 232 - Toebosch",
    link: "https://app.groupme.com/join_group/65211959/rPbsKkJN",
  },
  {
    name: "DUTCH 512 - Vicca",
    link: "https://app.groupme.com/join_group/65211965/R0SvCqeg",
  },
  {
    name: "DUTCH 532 - Toebosch",
    link: "https://app.groupme.com/join_group/65211967/LUjn8UaV",
  },
  {
    name: "DUTCH 351 - Toebosch",
    link: "https://app.groupme.com/join_group/65211970/L7hAx35v",
  },
  {
    name: "EARLYMUS 551 - Gascho",
    link: "https://app.groupme.com/join_group/65211972/luNGV7W6",
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
    name: "EARTH 106 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65211977/Prnv4OIQ",
  },
  {
    name: "EARTH 107 - Ruff",
    link: "https://app.groupme.com/join_group/65211981/kRrmif9A",
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
    name: "EARTH 110 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65211991/PfhYtEdN",
  },
  {
    name: "EARTH 110 - Alt",
    link: "https://app.groupme.com/join_group/65211994/l7Tv2b5r",
  },
  {
    name: "EARTH 111 - Li",
    link: "https://app.groupme.com/join_group/65211997/FpJKXnJk",
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
    name: "EARTH 119 - Yarce",
    link: "https://app.groupme.com/join_group/65212007/BGw8Lvnh",
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
    name: "EARTH 131 - Robbins",
    link: "https://app.groupme.com/join_group/65212049/9IjumpAQ",
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
    name: "EARTH 230 - Hetland",
    link: "https://app.groupme.com/join_group/65212063/0Uskcrtf",
  },
  {
    name: "EARTH 262 - Benedict",
    link: "https://app.groupme.com/join_group/65212066/r9kXNQVP",
  },
  {
    name: "EARTH 310 - Colacino",
    link: "https://app.groupme.com/join_group/65212070/3CwqcwGB",
  },
  {
    name: "EARTH 314 - Ritsema",
    link: "https://app.groupme.com/join_group/65212072/ECfu3p1b",
  },
  {
    name: "EARTH 321 - Li",
    link: "https://app.groupme.com/join_group/65212074/sDQ7nAcy",
  },
  {
    name: "EARTH 325 - Johnson",
    link: "https://app.groupme.com/join_group/65212076/kzUwglC4",
  },
  {
    name: "EARTH 331 - Passey",
    link: "https://app.groupme.com/join_group/65212079/qPVXWCPG",
  },
  {
    name: "EARTH 350 - Huang",
    link: "https://app.groupme.com/join_group/65212082/AaCO4ZhN",
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
    name: "EARTH 408 - Niemi",
    link: "https://app.groupme.com/join_group/65212085/YXWsEu1P",
  },
  {
    name: "EARTH 412 - Lange, Holder",
    link: "https://app.groupme.com/join_group/65212087/Ui2yu6f1",
  },
  {
    name: "EARTH 414 - Marsik",
    link: "https://app.groupme.com/join_group/65212088/jp5pi0Pc",
  },
  {
    name: "EARTH 427 - Becker",
    link: "https://app.groupme.com/join_group/65212092/YJ1Bz7Mc",
  },
  {
    name: "EARTH 432 - Smith",
    link: "https://app.groupme.com/join_group/65212094/c5cWSYNg",
  },
  {
    name: "EARTH 436 - Lohmann",
    link: "https://app.groupme.com/join_group/65212098/tnkpQPtQ",
  },
  {
    name: "EARTH 442 - Sheldon",
    link: "https://app.groupme.com/join_group/65212100/8Qo246r8",
  },
  {
    name: "EARTH 449 - Alt",
    link: "https://app.groupme.com/join_group/65212105/aEe2EfSC",
  },
  {
    name: "EARTH 451 - van der Pluijm",
    link: "https://app.groupme.com/join_group/65212108/igDGuuBl",
  },
  {
    name: "EARTH 474 - Bassis",
    link: "https://app.groupme.com/join_group/65212111/PdACtBw2",
  },
  {
    name: "EARTH 495 - Niemi",
    link: "https://app.groupme.com/join_group/65212139/4384do3u",
  },
  {
    name: "EARTH 517 - Clark",
    link: "https://app.groupme.com/join_group/65212143/LJLcx63d",
  },
  {
    name: "EARTH 520 - Cole",
    link: "https://app.groupme.com/join_group/65212145/dU6QqsKQ",
  },
  {
    name: "EARTH 596 - Passey",
    link: "https://app.groupme.com/join_group/65212149/48EmWIw1",
  },
  {
    name: "EARTH 130",
    link: "https://app.groupme.com/join_group/65212152/uQXGlhNF",
  },
  {
    name: "EARTH 142 - Zhang",
    link: "https://app.groupme.com/join_group/65212157/1VpHk9Er",
  },
  {
    name: "EARTH 151 - Robbins",
    link: "https://app.groupme.com/join_group/65212160/6xrlpuwD",
  },
  {
    name: "EARTH 151 - Hendy",
    link: "https://app.groupme.com/join_group/65212162/Zwz2Arr8",
  },
  {
    name: "EARTH 156 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65212165/LNIWRz5z",
  },
  {
    name: "EARTH 496 - Fisher",
    link: "https://app.groupme.com/join_group/65212167/GjHrIc1o",
  },
  {
    name: "EARTH 532 - Sheldon",
    link: "https://app.groupme.com/join_group/65212170/3xBeKwQB",
  },
  {
    name: "EARTH 534 - Ritsema",
    link: "https://app.groupme.com/join_group/65212171/FZRtmXmV",
  },
  {
    name: "EARTH 535 - Holder",
    link: "https://app.groupme.com/join_group/65212173/janvCCyj",
  },
  {
    name: "EARTH 536 - Friedman",
    link: "https://app.groupme.com/join_group/65212175/t1ozlLG1",
  },
  {
    name: "EARTH 323",
    link: "https://app.groupme.com/join_group/65212177/0E8RRYeY",
  },
  {
    name: "EARTH 523",
    link: "https://app.groupme.com/join_group/65212180/TwBU9J7h",
  },
  {
    name: "EARTH 581",
    link: "https://app.groupme.com/join_group/65212185/7FBMuWwi",
  },
  {
    name: "EAS 451 - Harris",
    link: "https://app.groupme.com/join_group/65212189/9bZluEri",
  },
  {
    name: "EAS 475 - Hall",
    link: "https://app.groupme.com/join_group/65212192/UPCbU3Kg",
  },
  {
    name: "EAS 476 - Zak, Allgeier",
    link: "https://app.groupme.com/join_group/65212194/F2onPbUT",
  },
  {
    name: "EAS 480 - Rood",
    link: "https://app.groupme.com/join_group/65212197/zEpnL47S",
  },
  {
    name: "EAS 503 - Jones",
    link: "https://app.groupme.com/join_group/65212201/TzxieHmG",
  },
  {
    name: "EAS 507 - Alofs, Miljanic",
    link: "https://app.groupme.com/join_group/65212203/BzP1ZO0Z",
  },
  {
    name: "EAS 510 - Bartlett",
    link: "https://app.groupme.com/join_group/65212206/3XDzT5h4",
  },
  {
    name: "EAS 517 - Weeks, Dias",
    link: "https://app.groupme.com/join_group/65212209/bz5OWGvN",
  },
  {
    name: "EAS 518 - Foufopoulos",
    link: "https://app.groupme.com/join_group/65212212/u0JMNwol",
  },
  {
    name: "EAS 538 - Ibanez",
    link: "https://app.groupme.com/join_group/65212214/jp0ekSpk",
  },
  {
    name: "EAS 541 - Bergen",
    link: "https://app.groupme.com/join_group/65212250/aSsKI0cY",
  },
  {
    name: "EAS 545 - Currie",
    link: "https://app.groupme.com/join_group/65212254/fZZ3Ppt5",
  },
  {
    name: "EAS 557 - Keoleian, Fetner, Calzavara",
    link: "https://app.groupme.com/join_group/65212257/Vele6rXp",
  },
  {
    name: "EAS 558 - Hughes, Lazaroff",
    link: "https://app.groupme.com/join_group/65212260/w1pfw8Vs",
  },
  {
    name: "EAS 559 - Fischer, Russo",
    link: "https://app.groupme.com/join_group/65212262/qAuhWit4",
  },
  {
    name: "EAS 561 - De Young",
    link: "https://app.groupme.com/join_group/65212263/jC1RfBgu",
  },
  {
    name: "EAS 563",
    link: "https://app.groupme.com/join_group/65212265/wlKZMz0G",
  },
  {
    name: "EAS 565 - Princen",
    link: "https://app.groupme.com/join_group/65212266/DVRW22DR",
  },
  {
    name: "EAS 573 - Xu",
    link: "https://app.groupme.com/join_group/65212269/n9gl2pnr",
  },
  {
    name: "EAS 575 - Stolper, Ren",
    link: "https://app.groupme.com/join_group/65212270/fBa3CG9o",
  },
  {
    name: "EAS 588 - Wang",
    link: "https://app.groupme.com/join_group/65212272/d5pTXc8H",
  },
  {
    name: "EAS 592 - Norton",
    link: "https://app.groupme.com/join_group/65212275/PtZDmFAA",
  },
  {
    name: "EAS 550 - Xu",
    link: "https://app.groupme.com/join_group/65212276/MJrSqIup",
  },
  {
    name: "EAS 595",
    link: "https://app.groupme.com/join_group/65212278/XNvwlVlA",
  },
  {
    name: "EAS 501 - Jones",
    link: "https://app.groupme.com/join_group/65212280/iMdiPPFY",
  },
  {
    name: "EAS 501 - Whyte, De Jong",
    link: "https://app.groupme.com/join_group/65212282/q4lGjROz",
  },
  {
    name: "EAS 501 - Gronewold",
    link: "https://app.groupme.com/join_group/65212285/94bfb3sV",
  },
  {
    name: "EAS 501 - Du Russel",
    link: "https://app.groupme.com/join_group/65212288/eqLW2Vcx",
  },
  {
    name: "EAS 501",
    link: "https://app.groupme.com/join_group/65212292/DZws8BQT",
  },
  {
    name: "EAS 501 - Vaishnav",
    link: "https://app.groupme.com/join_group/65212295/7jQ0TWPY",
  },
  {
    name: "EAS 501 - Nassauer",
    link: "https://app.groupme.com/join_group/65212297/etqiOq0t",
  },
  {
    name: "EAS 501 - Adlerstein-Gonzalez",
    link: "https://app.groupme.com/join_group/65212300/JK0lKZ6i",
  },
  {
    name: "EAS 501 - Jagger, Lazaroff",
    link: "https://app.groupme.com/join_group/65212304/BJ8ek84V",
  },
  {
    name: "EAS 409",
    link: "https://app.groupme.com/join_group/65212307/Lss6N9ez",
  },
  {
    name: "EAS 531",
    link: "https://app.groupme.com/join_group/65212309/80EnIe0T",
  },
  {
    name: "EAS 590",
    link: "https://app.groupme.com/join_group/65212313/tSP0esmO",
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
    name: "ECON 258 - Hasanbasri",
    link: "https://app.groupme.com/join_group/65212350/IV8bvJYi",
  },
  {
    name: "ECON 259 - Wan",
    link: "https://app.groupme.com/join_group/65212351/95SYPjOW",
  },
  {
    name: "ECON 310 - Dudek",
    link: "https://app.groupme.com/join_group/65212354/vVEBKsu3",
  },
  {
    name: "ECON 325 - Stevenson",
    link: "https://app.groupme.com/join_group/65212356/1SNGBsBe",
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
    name: "ECON 421 - McCall",
    link: "https://app.groupme.com/join_group/65212376/dv1lKFXN",
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
    name: "ECON 490 - Craig",
    link: "https://app.groupme.com/join_group/65212415/UU1frfux",
  },
  {
    name: "ECON 490 - Ke",
    link: "https://app.groupme.com/join_group/65212416/OrwnzAPj",
  },
  {
    name: "ECON 490 - Mueller-Smith",
    link: "https://app.groupme.com/join_group/65212417/hWAgVqiX",
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
    name: "ECON 502 - Laitner",
    link: "https://app.groupme.com/join_group/65212425/PY2wNPYZ",
  },
  {
    name: "ECON 504 - Asenova",
    link: "https://app.groupme.com/join_group/65212427/0lWpyGel",
  },
  {
    name: "ECON 101",
    link: "https://app.groupme.com/join_group/65212429/TvbDLUsM",
  },
  {
    name: "ECON 102",
    link: "https://app.groupme.com/join_group/65212431/F0xh7smI",
  },
  {
    name: "ECON 401",
    link: "https://app.groupme.com/join_group/65212433/hv2T6az7",
  },
  {
    name: "ECON 108 - Proulx",
    link: "https://app.groupme.com/join_group/65212434/orczgQPt",
  },
  {
    name: "ECON 208 - Dudley",
    link: "https://app.groupme.com/join_group/65212436/wFNEOCZG",
  },
  {
    name: "ECON 495 - Slemrod",
    link: "https://app.groupme.com/join_group/65212438/YHPHkQ3P",
  },
  {
    name: "ECON 495 - Reynoso",
    link: "https://app.groupme.com/join_group/65212440/QfhvM3eg",
  },
  {
    name: "ECON 497 - Dominguez",
    link: "https://app.groupme.com/join_group/65212442/lT0hdcY6",
  },
  {
    name: "EDCURINS 455 - Garcia-Amaya",
    link: "https://app.groupme.com/join_group/65212444/ORBYP9RY",
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
    name: "EDUC 392",
    link: "https://app.groupme.com/join_group/65212454/NzehZJAD",
  },
  {
    name: "EDUC 414 - Robertson",
    link: "https://app.groupme.com/join_group/65212457/RCElivkb",
  },
  {
    name: "EDUC 415 - Ball",
    link: "https://app.groupme.com/join_group/65212459/yvJs1ngz",
  },
  {
    name: "EDUC 443",
    link: "https://app.groupme.com/join_group/65212461/MurSgXLS",
  },
  {
    name: "EDUC 443 - Fortini",
    link: "https://app.groupme.com/join_group/65212463/YfvtmhTk",
  },
  {
    name: "EDUC 444 - Keren-Kolb",
    link: "https://app.groupme.com/join_group/65212466/HsHo6fpR",
  },
  {
    name: "EDUC 445 - Mies",
    link: "https://app.groupme.com/join_group/65212467/kWpMM3wG",
  },
  {
    name: "EDUC 446 - Kolb",
    link: "https://app.groupme.com/join_group/65212482/QitJdLbc",
  },
  {
    name: "EDUC 446",
    link: "https://app.groupme.com/join_group/65212483/NshBh2wz",
  },
  {
    name: "EDUC 528 - Davis",
    link: "https://app.groupme.com/join_group/65212485/CMZTIiny",
  },
  {
    name: "EDUC 547 - Beilein, Merritt",
    link: "https://app.groupme.com/join_group/65212487/sFUwNsbc",
  },
  {
    name: "EDUC 547 - Gold",
    link: "https://app.groupme.com/join_group/65212489/2Wzoh69D",
  },
  {
    name: "EDUC 547 - Miller",
    link: "https://app.groupme.com/join_group/65212491/bWZrDcBQ",
  },
  {
    name: "EDUC 583 - Keren-Kolb, Upton, Pasque",
    link: "https://app.groupme.com/join_group/65212494/rtx6ecm1",
  },
  {
    name: "EDUC 118 - Goldin",
    link: "https://app.groupme.com/join_group/65212498/zZmG3DOX",
  },
  {
    name: "EDUC 119 - Santone",
    link: "https://app.groupme.com/join_group/65212500/TNkSf4BZ",
  },
  {
    name: "EDUC 220 - Betts",
    link: "https://app.groupme.com/join_group/65212504/nXGMIxfl",
  },
  {
    name: "EDUC 275 - Kovacs",
    link: "https://app.groupme.com/join_group/65212506/lem4LJZk",
  },
  {
    name: "EDUC 391 - Eggleston",
    link: "https://app.groupme.com/join_group/65212508/vNL63J7I",
  },
  {
    name: "EDUC 391 - Kilday",
    link: "https://app.groupme.com/join_group/65212511/EPrKFoTd",
  },
  {
    name: "EDUC 391 - Ebright",
    link: "https://app.groupme.com/join_group/65212512/LUEEb4Ov",
  },
  {
    name: "EDUC 403 - Atkins",
    link: "https://app.groupme.com/join_group/65212514/OYwKkCuL",
  },
  {
    name: "EDUC 431 - Monte-Sano",
    link: "https://app.groupme.com/join_group/65212517/1dmgULwU",
  },
  {
    name: "EDUC 303 - Bruder",
    link: "https://app.groupme.com/join_group/65212519/LOdWOSm4",
  },
  {
    name: "EDUC 303 - Kennison",
    link: "https://app.groupme.com/join_group/65212520/PdfqlNjW",
  },
  {
    name: "EDUC 303 - Blunk",
    link: "https://app.groupme.com/join_group/65212522/0nHN6FkK",
  },
  {
    name: "EDUC 303 - Stull",
    link: "https://app.groupme.com/join_group/65212524/KetjWaWr",
  },
  {
    name: "EDUC 303 - Fortini",
    link: "https://app.groupme.com/join_group/65212525/2Eh5VDye",
  },
  {
    name: "EDUC 304 - Kingsland",
    link: "https://app.groupme.com/join_group/65212527/yfzJaMKQ",
  },
  {
    name: "EDUC 304",
    link: "https://app.groupme.com/join_group/65212529/6H5izWjn",
  },
  {
    name: "EDUC 304 - Margolis",
    link: "https://app.groupme.com/join_group/65212532/9uxRf075",
  },
  {
    name: "EDUC 304 - Davis",
    link: "https://app.groupme.com/join_group/65212534/ZN5GNeQV",
  },
  {
    name: "EDUC 304 - Learman",
    link: "https://app.groupme.com/join_group/65212536/XxUjKDUl",
  },
  {
    name: "EDUC 304 - Carduner",
    link: "https://app.groupme.com/join_group/65212549/Wla3M9e6",
  },
  {
    name: "EDUC 304 - Crowley",
    link: "https://app.groupme.com/join_group/65212551/cEhWk0Jy",
  },
  {
    name: "EDUC 304 - Hoops",
    link: "https://app.groupme.com/join_group/65212553/NJNXLKYh",
  },
  {
    name: "EDUC 304 - McDermott",
    link: "https://app.groupme.com/join_group/65212554/2tpg3Uxm",
  },
  {
    name: "EDUC 365 - Zemper",
    link: "https://app.groupme.com/join_group/65212556/lw9IO9sR",
  },
  {
    name: "EDUC 390 - Romano Gillette",
    link: "https://app.groupme.com/join_group/65212558/j5Nz4DGl",
  },
  {
    name: "EDUC 404 - Epperson",
    link: "https://app.groupme.com/join_group/65212561/JCioyO9r",
  },
  {
    name: "EDUC 471 - Davis III",
    link: "https://app.groupme.com/join_group/65212563/GC3mRQ7p",
  },
  {
    name: "EDUC 480 - Moje",
    link: "https://app.groupme.com/join_group/65212565/LEjHf3RZ",
  },
  {
    name: "EDUC 490 - Atkins",
    link: "https://app.groupme.com/join_group/65212567/cY2nALyF",
  },
  {
    name: "EDUC 490",
    link: "https://app.groupme.com/join_group/65212568/8emYCZ8y",
  },
  {
    name: "EDUC 490 - Rivas-Drake",
    link: "https://app.groupme.com/join_group/65212571/r8dWIh53",
  },
  {
    name: "EDUC 490 - Epperson",
    link: "https://app.groupme.com/join_group/65212573/B9EuzjDR",
  },
  {
    name: "EDUC 504 - Pasque, Stanzler",
    link: "https://app.groupme.com/join_group/65212575/7KIeclE0",
  },
  {
    name: "EDUC 504 - Stanzler, Pasque",
    link: "https://app.groupme.com/join_group/65212576/JCVTwGU5",
  },
  {
    name: "EDUC 510 - Santone",
    link: "https://app.groupme.com/join_group/65212578/rHgIl45Y",
  },
  {
    name: "EDUC 510 - Robertson",
    link: "https://app.groupme.com/join_group/65212581/lkgSNUcB",
  },
  {
    name: "EDUC 526 - Schleppegrell",
    link: "https://app.groupme.com/join_group/65212584/0QsVGG4y",
  },
  {
    name: "EDUC 540 - Sherman",
    link: "https://app.groupme.com/join_group/65212585/05v7N3v3",
  },
  {
    name: "EDUC 542 - Seng",
    link: "https://app.groupme.com/join_group/65212587/4j0uoSQh",
  },
  {
    name: "EDUC 551 - Oberman",
    link: "https://app.groupme.com/join_group/65212589/iI2IKeyH",
  },
  {
    name: "EDUC 555 - Helber",
    link: "https://app.groupme.com/join_group/65212591/LsnRQcZ2",
  },
  {
    name: "EDUC 570 - Peurach",
    link: "https://app.groupme.com/join_group/65212593/Zk8pT5up",
  },
  {
    name: "EDUC 571 - Coolican",
    link: "https://app.groupme.com/join_group/65212595/6MSIItZs",
  },
  {
    name: "EDUC 571 - Hearn",
    link: "https://app.groupme.com/join_group/65212597/MNryGvnH",
  },
  {
    name: "EDUC 580 - Kuppers",
    link: "https://app.groupme.com/join_group/65212610/P4GBTscy",
  },
  {
    name: "EDUC 591 - Herrenkohl",
    link: "https://app.groupme.com/join_group/65212612/qwbLgfFZ",
  },
  {
    name: "EDUC 301",
    link: "https://app.groupme.com/join_group/65212614/saDOqKsL",
  },
  {
    name: "EDUC 302",
    link: "https://app.groupme.com/join_group/65212616/C0GayZf9",
  },
  {
    name: "EDUC 307",
    link: "https://app.groupme.com/join_group/65212618/DIsIPdLG",
  },
  {
    name: "EDUC 330",
    link: "https://app.groupme.com/join_group/65212620/mqMjDHEf",
  },
  {
    name: "EDUC 462",
    link: "https://app.groupme.com/join_group/65212621/p067CtnG",
  },
  {
    name: "EDUC 463",
    link: "https://app.groupme.com/join_group/65212625/7SjTh41r",
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
    name: "EEB 401 - Badgley",
    link: "https://app.groupme.com/join_group/65212630/rkKz9bwy",
  },
  {
    name: "EEB 413 - Kondrashov",
    link: "https://app.groupme.com/join_group/65212632/5ANZIJ14",
  },
  {
    name: "EEB 451 - Harris",
    link: "https://app.groupme.com/join_group/65212634/7eeaGuwY",
  },
  {
    name: "EEB 476 - Zak, Allgeier",
    link: "https://app.groupme.com/join_group/65212636/e1mqQN7q",
  },
  {
    name: "EEB 494 - Kurdziel",
    link: "https://app.groupme.com/join_group/65212637/iUZ0MpgO",
  },
  {
    name: "EEB 516 - Rabosky",
    link: "https://app.groupme.com/join_group/65212639/96oiIVYd",
  },
  {
    name: "EEB 410 - Rabosky, Kondrashov",
    link: "https://app.groupme.com/join_group/65212641/phFusAxe",
  },
  {
    name: "EEB 499 - Jakob",
    link: "https://app.groupme.com/join_group/65212643/LnxMvfhi",
  },
  {
    name: "EEB 523 - DuBay",
    link: "https://app.groupme.com/join_group/65212644/2tBgNqh6",
  },
  {
    name: "EEB 372",
    link: "https://app.groupme.com/join_group/65212646/Dfpy3zqt",
  },
  {
    name: "EEB 450",
    link: "https://app.groupme.com/join_group/65212648/1rPliFnm",
  },
  {
    name: "EEB 487",
    link: "https://app.groupme.com/join_group/65212649/F9SQOGCE",
  },
  {
    name: "EEB 491",
    link: "https://app.groupme.com/join_group/65212651/RwbgCwgY",
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
    name: "EECS 250 - Dyer Jr",
    link: "https://app.groupme.com/join_group/65212680/OMOpAIqZ",
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
    name: "EECS 330 - Willingale",
    link: "https://app.groupme.com/join_group/65212717/0QMKBvl5",
  },
  {
    name: "EECS 334 - Willingale, Guo",
    link: "https://app.groupme.com/join_group/65212719/tMnDM2Vd",
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
    name: "EECS 402 - Morgan",
    link: "https://app.groupme.com/join_group/65212750/b3CuYXHU",
  },
  {
    name: "EECS 403",
    link: "https://app.groupme.com/join_group/65212752/UVQpnHM9",
  },
  {
    name: "EECS 410 - Islam",
    link: "https://app.groupme.com/join_group/65212753/ieDKISKM",
  },
  {
    name: "EECS 419 - Hofmann",
    link: "https://app.groupme.com/join_group/65212755/k2eToAAN",
  },
  {
    name: "EECS 425 - Yoon",
    link: "https://app.groupme.com/join_group/65212757/BnmzPyLC",
  },
  {
    name: "EECS 427 - Zhang",
    link: "https://app.groupme.com/join_group/65212758/yayGRq3u",
  },
  {
    name: "EECS 430 - Budhu",
    link: "https://app.groupme.com/join_group/65212760/yM7e3Zhl",
  },
  {
    name: "EECS 438 - Galvanauskas",
    link: "https://app.groupme.com/join_group/65212762/AkFFMCV8",
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
    name: "EECS 441 - Jamin",
    link: "https://app.groupme.com/join_group/65212768/hsYDoUeF",
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
    name: "EECS 467 - Jenkins",
    link: "https://app.groupme.com/join_group/65212783/kYHEFLSm",
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
    name: "EECS 490 - Omar",
    link: "https://app.groupme.com/join_group/65212819/tOsH1vzN",
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
    name: "EECS 494 - Yarger",
    link: "https://app.groupme.com/join_group/65212828/ks4eCmcI",
  },
  {
    name: "EECS 495 - Chesney",
    link: "https://app.groupme.com/join_group/65212831/RBI07zME",
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
    name: "EECS 498 - Kuipers",
    link: "https://app.groupme.com/join_group/65212836/14FQpRsE",
  },
  {
    name: "EECS 498 - Kasikci, Chen, Kapritsos",
    link: "https://app.groupme.com/join_group/65212837/iLq4eEm2",
  },
  {
    name: "EECS 498 - Wang",
    link: "https://app.groupme.com/join_group/65212840/N78yWvf1",
  },
  {
    name: "EECS 498 - Mower Provost",
    link: "https://app.groupme.com/join_group/65212842/R3h9wP02",
  },
  {
    name: "EECS 498 - Jagadish, Gryak",
    link: "https://app.groupme.com/join_group/65212844/LsTq84BX",
  },
  {
    name: "EECS 498 - Fessler",
    link: "https://app.groupme.com/join_group/65212845/yD6eHhpB",
  },
  {
    name: "EECS 501 - Pradhan",
    link: "https://app.groupme.com/join_group/65212847/aKMwwhD7",
  },
  {
    name: "EECS 502 - Subramanian",
    link: "https://app.groupme.com/join_group/65212849/zfx8KaQ8",
  },
  {
    name: "EECS 503 - Tsang",
    link: "https://app.groupme.com/join_group/65212851/CbidUeHZ",
  },
  {
    name: "EECS 507 - Dick",
    link: "https://app.groupme.com/join_group/65212852/3PJjQTAQ",
  },
  {
    name: "EECS 517 - Kushner",
    link: "https://app.groupme.com/join_group/65212868/POLGgpYs",
  },
  {
    name: "EECS 518 - Zou",
    link: "https://app.groupme.com/join_group/65212870/dFp17Gdp",
  },
  {
    name: "EECS 522 - Wentzloff",
    link: "https://app.groupme.com/join_group/65212872/fp1I1krX",
  },
  {
    name: "EECS 524 - Forrest",
    link: "https://app.groupme.com/join_group/65212874/wQPKfBze",
  },
  {
    name: "EECS 525 - Mortazawi",
    link: "https://app.groupme.com/join_group/65212876/avYcfbtp",
  },
  {
    name: "EECS 526 - Lee",
    link: "https://app.groupme.com/join_group/65212877/HS38HEEe",
  },
  {
    name: "EECS 528 - Kanicki",
    link: "https://app.groupme.com/join_group/65212879/XStWhwJq",
  },
  {
    name: "EECS 531 - Grbic",
    link: "https://app.groupme.com/join_group/65212882/XfMMpqdj",
  },
  {
    name: "EECS 532 - Ulaby",
    link: "https://app.groupme.com/join_group/65212884/nqSyQPQP",
  },
  {
    name: "EECS 533 - Sarabandi",
    link: "https://app.groupme.com/join_group/65212885/ZOeQYhqh",
  },
  {
    name: "EECS 534 - Hiskens",
    link: "https://app.groupme.com/join_group/65212887/eHUnZeUR",
  },
  {
    name: "EECS 539 - Galvanauskas",
    link: "https://app.groupme.com/join_group/65212889/CPcd7mxJ",
  },
  {
    name: "EECS 541 - Kira",
    link: "https://app.groupme.com/join_group/65212890/uUxo8gHO",
  },
  {
    name: "EECS 545 - Lee",
    link: "https://app.groupme.com/join_group/65212891/hCQsg5yx",
  },
  {
    name: "EECS 556 - Fessler",
    link: "https://app.groupme.com/join_group/65212892/KpFxs1f5",
  },
  {
    name: "EECS 557 - Ying",
    link: "https://app.groupme.com/join_group/65212894/0JKC60Mm",
  },
  {
    name: "EECS 559 - Qu",
    link: "https://app.groupme.com/join_group/65212895/QLFSYY5h",
  },
  {
    name: "EECS 560 - Ozay",
    link: "https://app.groupme.com/join_group/65212896/3IoiXjgb",
  },
  {
    name: "EECS 561 - Vasudevan",
    link: "https://app.groupme.com/join_group/65212897/CydZyJ8e",
  },
  {
    name: "EECS 562 - Meerkov",
    link: "https://app.groupme.com/join_group/65212899/M5QL1fcO",
  },
  {
    name: "EECS 565 - Seiler",
    link: "https://app.groupme.com/join_group/65212901/ahfAA0CT",
  },
  {
    name: "EECS 567 - Gregg",
    link: "https://app.groupme.com/join_group/65212903/3BzgcVyJ",
  },
  {
    name: "EECS 568 - Ghaffari Jadidi",
    link: "https://app.groupme.com/join_group/65212905/75wR9ict",
  },
  {
    name: "EECS 570",
    link: "https://app.groupme.com/join_group/65212907/xbjFWo1L",
  },
  {
    name: "EECS 570 - Narayanasamy",
    link: "https://app.groupme.com/join_group/65212910/lBy0eq2k",
  },
  {
    name: "EECS 579 - Hayes",
    link: "https://app.groupme.com/join_group/65212911/WzAsbzTL",
  },
  {
    name: "EECS 590 - Weimer",
    link: "https://app.groupme.com/join_group/65212932/XrrHTs1f",
  },
  {
    name: "EECS 592",
    link: "https://app.groupme.com/join_group/65212933/JZC98pBs",
  },
  {
    name: "EECS 592 - Durfee",
    link: "https://app.groupme.com/join_group/65212935/TRTjZBhk",
  },
  {
    name: "EECS 598 - Kuipers",
    link: "https://app.groupme.com/join_group/65212937/brQ50LnL",
  },
  {
    name: "EECS 598 - Bodwin",
    link: "https://app.groupme.com/join_group/65212939/ssS7oIuY",
  },
  {
    name: "EECS 598 - Ahmadi",
    link: "https://app.groupme.com/join_group/65212940/lqXommX7",
  },
  {
    name: "EECS 598 - Pradhan",
    link: "https://app.groupme.com/join_group/65212942/C0Jn2dys",
  },
  {
    name: "EECS 598 - Berenson",
    link: "https://app.groupme.com/join_group/65212944/7r2YcSiz",
  },
  {
    name: "EECS 598 - Prakash",
    link: "https://app.groupme.com/join_group/65212946/lrjN9s1N",
  },
  {
    name: "EECS 598 - Scott",
    link: "https://app.groupme.com/join_group/65212947/GLGGKqdV",
  },
  {
    name: "EECS 598 - Chowdhury",
    link: "https://app.groupme.com/join_group/65212949/OY1xqdJl",
  },
  {
    name: "EECS 598",
    link: "https://app.groupme.com/join_group/65212951/AO4cCC6K",
  },
  {
    name: "EECS 598 - Mower Provost",
    link: "https://app.groupme.com/join_group/65212953/WI4z1Ur9",
  },
  {
    name: "EECS 598 - Wang",
    link: "https://app.groupme.com/join_group/65212954/9sBRofHR",
  },
  {
    name: "EECS 598 - Owens",
    link: "https://app.groupme.com/join_group/65212956/m8nE9O5k",
  },
  {
    name: "EECS 598 - Jagadish, Gryak",
    link: "https://app.groupme.com/join_group/65212958/WlrYjDKK",
  },
  {
    name: "EECS 409 - Jagadish",
    link: "https://app.groupme.com/join_group/65212959/3HgAwS3J",
  },
  {
    name: "EECS 300",
    link: "https://app.groupme.com/join_group/65212961/FRFIGKXR",
  },
  {
    name: "EECS 429",
    link: "https://app.groupme.com/join_group/65212963/1hckChda",
  },
  {
    name: "EECS 458",
    link: "https://app.groupme.com/join_group/65212965/BJfTk4ox",
  },
  {
    name: "EECS 519",
    link: "https://app.groupme.com/join_group/65212966/4el0mE6a",
  },
  {
    name: "EECS 596",
    link: "https://app.groupme.com/join_group/65212968/d7h4mRj8",
  },
  {
    name: "EER 598 - Guzdial , Huang-Saad",
    link: "https://app.groupme.com/join_group/65212970/4nanRmaE",
  },
  {
    name: "EHS 570 - Xi",
    link: "https://app.groupme.com/join_group/65212972/Nxu4SC9Y",
  },
  {
    name: "EHS 576 - Xi",
    link: "https://app.groupme.com/join_group/65212973/JPR6AcI1",
  },
  {
    name: "EHS 588 - Hall",
    link: "https://app.groupme.com/join_group/65212975/OA26bUI6",
  },
  {
    name: "EHS 596 - Charles",
    link: "https://app.groupme.com/join_group/65212990/3fdTCYty",
  },
  {
    name: "EHS 597 - Dvonch",
    link: "https://app.groupme.com/join_group/65212992/syNfPXEe",
  },
  {
    name: "EHS 504 - Rozek",
    link: "https://app.groupme.com/join_group/65212994/F2anlmWz",
  },
  {
    name: "ELI 351 - Guo",
    link: "https://app.groupme.com/join_group/65212997/R1XcHv5V",
  },
  {
    name: "ELI 502 - Danek",
    link: "https://app.groupme.com/join_group/65212998/TTu7Ujqv",
  },
  {
    name: "ELI 510 - Bogart",
    link: "https://app.groupme.com/join_group/65213001/ETiT9eVX",
  },
  {
    name: "ELI 512 - Coleman",
    link: "https://app.groupme.com/join_group/65213003/8vZze5Im",
  },
  {
    name: "ELI 521 - Coleman",
    link: "https://app.groupme.com/join_group/65213005/4D5ba1n4",
  },
  {
    name: "ELI 521 - McDonald",
    link: "https://app.groupme.com/join_group/65213006/SLJgdkvq",
  },
  {
    name: "ELI 522 - Coleman",
    link: "https://app.groupme.com/join_group/65213008/HH58kxLt",
  },
  {
    name: "ELI 531 - Eddy",
    link: "https://app.groupme.com/join_group/65213009/KpdjskAx",
  },
  {
    name: "ELI 531 - Coleman",
    link: "https://app.groupme.com/join_group/65213010/c4LAwGDs",
  },
  {
    name: "ELI 532 - Dowling",
    link: "https://app.groupme.com/join_group/65213011/fepn22fc",
  },
  {
    name: "ELI 534 - Dowling",
    link: "https://app.groupme.com/join_group/65213013/EtUXLdYN",
  },
  {
    name: "ELI 536 - Bogart",
    link: "https://app.groupme.com/join_group/65213016/Ijt9d4Wl",
  },
  {
    name: "ELI 538 - Kato",
    link: "https://app.groupme.com/join_group/65213017/VfofbLha",
  },
  {
    name: "ELI 539 - Imber",
    link: "https://app.groupme.com/join_group/65213019/kqDxOC0E",
  },
  {
    name: "ELI 544 - Des Jardins",
    link: "https://app.groupme.com/join_group/65213021/PpkQMJjf",
  },
  {
    name: "ELI 560 - Des Jardins",
    link: "https://app.groupme.com/join_group/65213023/L5FIESd9",
  },
  {
    name: "ELI 580 - Romano Gillette",
    link: "https://app.groupme.com/join_group/65213024/fcS2iUyn",
  },
  {
    name: "ELI 592 - Danek",
    link: "https://app.groupme.com/join_group/65213026/VOEOnVEt",
  },
  {
    name: "ELI 131 - Romano Gillette",
    link: "https://app.groupme.com/join_group/65213028/axJwZYBF",
  },
  {
    name: "ELI 210 - Bogart",
    link: "https://app.groupme.com/join_group/65213030/kqqCmCs4",
  },
  {
    name: "ELI 236 - Bogart",
    link: "https://app.groupme.com/join_group/65213031/zFFLWnTY",
  },
  {
    name: "ELI 390 - Romano Gillette",
    link: "https://app.groupme.com/join_group/65213033/WLnCNsaz",
  },
  {
    name: "ELI 390 - Dyer",
    link: "https://app.groupme.com/join_group/65213035/3NqyR82G",
  },
  {
    name: "ELI 584 - Imber",
    link: "https://app.groupme.com/join_group/65213046/VhqnTawH",
  },
  {
    name: "ENGLISH 203 - Portnoy she/her, Van Zanen",
    link: "https://app.groupme.com/join_group/65213048/6aJpByeH",
  },
  {
    name: "ENGLISH 215 - Zemgulys",
    link: "https://app.groupme.com/join_group/65213050/VVJjGKMK",
  },
  {
    name: "ENGLISH 235 - Ensor",
    link: "https://app.groupme.com/join_group/65213051/dgdVtGjI",
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
    name: "ENGLISH 274 - Santamarina",
    link: "https://app.groupme.com/join_group/65213058/lj1bXX9y",
  },
  {
    name: "ENGLISH 290 - Chamberlin",
    link: "https://app.groupme.com/join_group/65213059/XLCQzecn",
  },
  {
    name: "ENGLISH 290 - Fitzgerald",
    link: "https://app.groupme.com/join_group/65213061/98HkxejL",
  },
  {
    name: "ENGLISH 290 - Pinsker",
    link: "https://app.groupme.com/join_group/65213063/ZaLlJnM0",
  },
  {
    name: "ENGLISH 292 - Brandolino",
    link: "https://app.groupme.com/join_group/65213064/yR3BekQg",
  },
  {
    name: "ENGLISH 293 - Brater",
    link: "https://app.groupme.com/join_group/65213066/8FICP2gI",
  },
  {
    name: "ENGLISH 313 - Makman, Sprouse",
    link: "https://app.groupme.com/join_group/65213068/jlngXY4F",
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
    name: "ENGLISH 313 - Mecklenburg",
    link: "https://app.groupme.com/join_group/65213073/NB1jALhC",
  },
  {
    name: "ENGLISH 313 - Schey",
    link: "https://app.groupme.com/join_group/65213076/Yeof4mMi",
  },
  {
    name: "ENGLISH 314 - Kolenda-Mason",
    link: "https://app.groupme.com/join_group/65213078/qZeq7Twc",
  },
  {
    name: "ENGLISH 317 - Brandolino",
    link: "https://app.groupme.com/join_group/65213079/fEyVI0wK",
  },
  {
    name: "ENGLISH 317 - Poulson-Bryant",
    link: "https://app.groupme.com/join_group/65213081/fCQytCDu",
  },
  {
    name: "ENGLISH 317 - Mitchell",
    link: "https://app.groupme.com/join_group/65213084/JHhBYS6A",
  },
  {
    name: "ENGLISH 317 - Bardenstein",
    link: "https://app.groupme.com/join_group/65213086/b4mpCYRL",
  },
  {
    name: "ENGLISH 318 - Kuppers",
    link: "https://app.groupme.com/join_group/65213087/7gnq5PJv",
  },
  {
    name: "ENGLISH 319 - Nichols",
    link: "https://app.groupme.com/join_group/65213090/bMD6Kr84",
  },
  {
    name: "ENGLISH 319 - Anderson",
    link: "https://app.groupme.com/join_group/65213092/kdNjW3aQ",
  },
  {
    name: "ENGLISH 332 - Nichols",
    link: "https://app.groupme.com/join_group/65213107/yDW2Ladt",
  },
  {
    name: "ENGLISH 341 - Makman",
    link: "https://app.groupme.com/join_group/65213109/aqmQ1dXU",
  },
  {
    name: "ENGLISH 351 - Hawes",
    link: "https://app.groupme.com/join_group/65213111/vJCOZ1SP",
  },
  {
    name: "ENGLISH 352 - Hartley",
    link: "https://app.groupme.com/join_group/65213113/c67hdk7F",
  },
  {
    name: "ENGLISH 362 - Cawkwell",
    link: "https://app.groupme.com/join_group/65213116/w6PHsqKU",
  },
  {
    name: "ENGLISH 367 - Cohen",
    link: "https://app.groupme.com/join_group/65213117/raonlqut",
  },
  {
    name: "ENGLISH 375 - Sarlati",
    link: "https://app.groupme.com/join_group/65213118/kLytpIWI",
  },
  {
    name: "ENGLISH 379 - Levy-Hussen",
    link: "https://app.groupme.com/join_group/65213119/Ph3VeDpt",
  },
  {
    name: "ENGLISH 383 - Levinson",
    link: "https://app.groupme.com/join_group/65213121/lWubiQwP",
  },
  {
    name: "ENGLISH 388 - Najita",
    link: "https://app.groupme.com/join_group/65213123/DUK16NKz",
  },
  {
    name: "ENGLISH 403 - Hawes",
    link: "https://app.groupme.com/join_group/65213124/OKbkvezV",
  },
  {
    name: "ENGLISH 411 - Lahiri",
    link: "https://app.groupme.com/join_group/65213126/W5dbnfAa",
  },
  {
    name: "ENGLISH 463 - Whittier-Ferguson",
    link: "https://app.groupme.com/join_group/65213128/DefEcuT6",
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
    name: "ENGLISH 124 - Rudewicz",
    link: "https://app.groupme.com/join_group/65213136/85tT2uqy",
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
    name: "ENGLISH 124 - Hill",
    link: "https://app.groupme.com/join_group/65213143/q1Y6TTFm",
  },
  {
    name: "ENGLISH 124 - Braun",
    link: "https://app.groupme.com/join_group/65213145/TvMTZ8WM",
  },
  {
    name: "ENGLISH 124 - Kaczmar",
    link: "https://app.groupme.com/join_group/65213147/eTSLBgUA",
  },
  {
    name: "ENGLISH 124 - Behrend",
    link: "https://app.groupme.com/join_group/65213149/lVtuXytp",
  },
  {
    name: "ENGLISH 124 - Wilson",
    link: "https://app.groupme.com/join_group/65213151/CblJvICp",
  },
  {
    name: "ENGLISH 124 - Jabbari",
    link: "https://app.groupme.com/join_group/65213154/vJlYs2FE",
  },
  {
    name: "ENGLISH 124 - Kerwin",
    link: "https://app.groupme.com/join_group/65213156/SgXwqpuC",
  },
  {
    name: "ENGLISH 124 - Bento",
    link: "https://app.groupme.com/join_group/65213159/J21gAxcD",
  },
  {
    name: "ENGLISH 124 - Sarpy",
    link: "https://app.groupme.com/join_group/65213174/p7epGc2x",
  },
  {
    name: "ENGLISH 124 - Philbrick",
    link: "https://app.groupme.com/join_group/65213175/LKa9AAng",
  },
  {
    name: "ENGLISH 124 - Cobblah",
    link: "https://app.groupme.com/join_group/65213177/qayFDKdp",
  },
  {
    name: "ENGLISH 124 - Cullinane",
    link: "https://app.groupme.com/join_group/65213179/yMELhlyY",
  },
  {
    name: "ENGLISH 124 - Moore",
    link: "https://app.groupme.com/join_group/65213181/auwY6n3G",
  },
  {
    name: "ENGLISH 124 - Gillum",
    link: "https://app.groupme.com/join_group/65213182/DgCYO7PR",
  },
  {
    name: "ENGLISH 124 - Cimon",
    link: "https://app.groupme.com/join_group/65213184/Hh8aQgPd",
  },
  {
    name: "ENGLISH 124 - McCormick",
    link: "https://app.groupme.com/join_group/65213187/p2v1Kymd",
  },
  {
    name: "ENGLISH 124 - Grant",
    link: "https://app.groupme.com/join_group/65213189/c44f0LEY",
  },
  {
    name: "ENGLISH 124 - Pelletier",
    link: "https://app.groupme.com/join_group/65213190/ZaBSZAP5",
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
    name: "ENGLISH 125 - McCracken",
    link: "https://app.groupme.com/join_group/65213199/IkkcukjM",
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
    name: "ENGLISH 125 - Mota",
    link: "https://app.groupme.com/join_group/65213205/mkOmrcFI",
  },
  {
    name: "ENGLISH 125 - Thomas",
    link: "https://app.groupme.com/join_group/65213207/M9T0NSEh",
  },
  {
    name: "ENGLISH 125 - Wiora",
    link: "https://app.groupme.com/join_group/65213209/Mr53lAdO",
  },
  {
    name: "ENGLISH 125 - Adams",
    link: "https://app.groupme.com/join_group/65213211/X1YP0rxk",
  },
  {
    name: "ENGLISH 125 - Lynch",
    link: "https://app.groupme.com/join_group/65213213/56YA7d3h",
  },
  {
    name: "ENGLISH 125 - Buckley",
    link: "https://app.groupme.com/join_group/65213214/FYzkUxVK",
  },
  {
    name: "ENGLISH 125 - Appleton Pine",
    link: "https://app.groupme.com/join_group/65213217/iJPcAkvb",
  },
  {
    name: "ENGLISH 125 - Ordonez",
    link: "https://app.groupme.com/join_group/65213219/SawDW4eF",
  },
  {
    name: "ENGLISH 125 - Bruno",
    link: "https://app.groupme.com/join_group/65213221/Pu2wuHRI",
  },
  {
    name: "ENGLISH 125 - Freeman",
    link: "https://app.groupme.com/join_group/65213223/az1EM3wr",
  },
  {
    name: "ENGLISH 125 - Crowder",
    link: "https://app.groupme.com/join_group/65213226/9tRaFXTv",
  },
  {
    name: "ENGLISH 125 - Kupetz",
    link: "https://app.groupme.com/join_group/65213241/5N6Bg7Za",
  },
  {
    name: "ENGLISH 125 - Falomo",
    link: "https://app.groupme.com/join_group/65213243/yuHvqp5l",
  },
  {
    name: "ENGLISH 125 - Uluc",
    link: "https://app.groupme.com/join_group/65213246/RPbxmnkh",
  },
  {
    name: "ENGLISH 125 - Kim-Butler",
    link: "https://app.groupme.com/join_group/65213250/rSOmLZjK",
  },
  {
    name: "ENGLISH 125 - Grimm",
    link: "https://app.groupme.com/join_group/65213252/554CQipe",
  },
  {
    name: "ENGLISH 125 - Glover",
    link: "https://app.groupme.com/join_group/65213254/4MhpTgpw",
  },
  {
    name: "ENGLISH 125 - Bisnath",
    link: "https://app.groupme.com/join_group/65213256/wsUk2lPp",
  },
  {
    name: "ENGLISH 125 - Notah",
    link: "https://app.groupme.com/join_group/65213257/lGKrYJxN",
  },
  {
    name: "ENGLISH 125 - Berryman",
    link: "https://app.groupme.com/join_group/65213259/z8ImQzPu",
  },
  {
    name: "ENGLISH 125 - Bransfield",
    link: "https://app.groupme.com/join_group/65213262/luRxiBvA",
  },
  {
    name: "ENGLISH 125 - Harlow",
    link: "https://app.groupme.com/join_group/65213264/n0UEgPfa",
  },
  {
    name: "ENGLISH 125 - Araghi",
    link: "https://app.groupme.com/join_group/65213266/oZNFfrjM",
  },
  {
    name: "ENGLISH 125 - Wong Gonzales",
    link: "https://app.groupme.com/join_group/65213268/0As1x0BC",
  },
  {
    name: "ENGLISH 125 - Song",
    link: "https://app.groupme.com/join_group/65213271/BKE4J0N4",
  },
  {
    name: "ENGLISH 125 - Allen",
    link: "https://app.groupme.com/join_group/65213273/529JCNUS",
  },
  {
    name: "ENGLISH 125 - Ramsey",
    link: "https://app.groupme.com/join_group/65213275/5xcJ4CY7",
  },
  {
    name: "ENGLISH 125 - Pandey",
    link: "https://app.groupme.com/join_group/65213277/gu6Pjxm3",
  },
  {
    name: "ENGLISH 125 - Puckett",
    link: "https://app.groupme.com/join_group/65213280/Z4opGxwM",
  },
  {
    name: "ENGLISH 125 - Na",
    link: "https://app.groupme.com/join_group/65213281/hgksOqVZ",
  },
  {
    name: "ENGLISH 125 - Woodworth",
    link: "https://app.groupme.com/join_group/65213284/zxhZg9ZM",
  },
  {
    name: "ENGLISH 125 - Amna",
    link: "https://app.groupme.com/join_group/65213287/IVMUl6wO",
  },
  {
    name: "ENGLISH 125 - Munson",
    link: "https://app.groupme.com/join_group/65213289/RgypWDDp",
  },
  {
    name: "ENGLISH 125 - An",
    link: "https://app.groupme.com/join_group/65213290/qlXqsuNn",
  },
  {
    name: "ENGLISH 125 - Reese",
    link: "https://app.groupme.com/join_group/65213292/ivhDWH9s",
  },
  {
    name: "ENGLISH 125 - Brown",
    link: "https://app.groupme.com/join_group/65213296/HfxqEfMT",
  },
  {
    name: "ENGLISH 125 - Godfrey",
    link: "https://app.groupme.com/join_group/65213298/HrOieOw7",
  },
  {
    name: "ENGLISH 125 - Wamser",
    link: "https://app.groupme.com/join_group/65213301/cBaOtJB6",
  },
  {
    name: "ENGLISH 125 - McCarty",
    link: "https://app.groupme.com/join_group/65213317/5dQTSlGc",
  },
  {
    name: "ENGLISH 125 - Hartwell",
    link: "https://app.groupme.com/join_group/65213319/TOx3wlur",
  },
  {
    name: "ENGLISH 125 - Burch",
    link: "https://app.groupme.com/join_group/65213320/GxvoM9n9",
  },
  {
    name: "ENGLISH 125 - Renner",
    link: "https://app.groupme.com/join_group/65213323/ST9hNqFi",
  },
  {
    name: "ENGLISH 125 - Moody",
    link: "https://app.groupme.com/join_group/65213325/D1f2p51w",
  },
  {
    name: "ENGLISH 125 - Duan",
    link: "https://app.groupme.com/join_group/65213327/o6TZ0in2",
  },
  {
    name: "ENGLISH 125 - Carlson",
    link: "https://app.groupme.com/join_group/65213328/IViVTMdi",
  },
  {
    name: "ENGLISH 125 - Fairfield",
    link: "https://app.groupme.com/join_group/65213331/PFMcI6os",
  },
  {
    name: "ENGLISH 125 - Smith",
    link: "https://app.groupme.com/join_group/65213333/pcck7ppr",
  },
  {
    name: "ENGLISH 125 - Ventura",
    link: "https://app.groupme.com/join_group/65213334/Ml8HDecg",
  },
  {
    name: "ENGLISH 125 - Boger",
    link: "https://app.groupme.com/join_group/65213338/rocjIybn",
  },
  {
    name: "ENGLISH 125 - Spooner",
    link: "https://app.groupme.com/join_group/65213341/vQjrLj1D",
  },
  {
    name: "ENGLISH 125 - Nelles",
    link: "https://app.groupme.com/join_group/65213343/7XcF6YAP",
  },
  {
    name: "ENGLISH 125 - Beauchamp",
    link: "https://app.groupme.com/join_group/65213344/oocOehWG",
  },
  {
    name: "ENGLISH 125 - Ward",
    link: "https://app.groupme.com/join_group/65213346/X7o6GtYW",
  },
  {
    name: "ENGLISH 125 - Moss",
    link: "https://app.groupme.com/join_group/65213348/NAyzCNH6",
  },
  {
    name: "ENGLISH 125 - McLemore",
    link: "https://app.groupme.com/join_group/65213351/lQh1NQnX",
  },
  {
    name: "ENGLISH 125 - Fernelius",
    link: "https://app.groupme.com/join_group/65213352/HEQa5mRs",
  },
  {
    name: "ENGLISH 125 - Owada",
    link: "https://app.groupme.com/join_group/65213355/K2iAtfIA",
  },
  {
    name: "ENGLISH 125 - Witherite",
    link: "https://app.groupme.com/join_group/65213358/AeN42UiE",
  },
  {
    name: "ENGLISH 125 - Geiger",
    link: "https://app.groupme.com/join_group/65213359/AcovLNau",
  },
  {
    name: "ENGLISH 125 - Ferszt",
    link: "https://app.groupme.com/join_group/65213361/KjZh8FKc",
  },
  {
    name: "ENGLISH 125 - McLaughlin",
    link: "https://app.groupme.com/join_group/65213363/bPqpcYYe",
  },
  {
    name: "ENGLISH 125 - Reel",
    link: "https://app.groupme.com/join_group/65213367/5pNyDZal",
  },
  {
    name: "ENGLISH 125",
    link: "https://app.groupme.com/join_group/65213368/yFjzjpFh",
  },
  {
    name: "ENGLISH 126 - McLaughlin",
    link: "https://app.groupme.com/join_group/65213382/Ajaqjjpz",
  },
  {
    name: "ENGLISH 126 - Romaine",
    link: "https://app.groupme.com/join_group/65213383/t8uQ1jms",
  },
  {
    name: "ENGLISH 214 - Ensor",
    link: "https://app.groupme.com/join_group/65213385/cC4IUHBb",
  },
  {
    name: "ENGLISH 221 - Pinto",
    link: "https://app.groupme.com/join_group/65213387/DrZyU2H9",
  },
  {
    name: "ENGLISH 221",
    link: "https://app.groupme.com/join_group/65213390/tyFVxfr8",
  },
  {
    name: "ENGLISH 221 - Walker",
    link: "https://app.groupme.com/join_group/65213392/FYsnle7X",
  },
  {
    name: "ENGLISH 223 - Majeski",
    link: "https://app.groupme.com/join_group/65213395/kepMK0Nc",
  },
  {
    name: "ENGLISH 223 - Morrow",
    link: "https://app.groupme.com/join_group/65213397/px7fSsyQ",
  },
  {
    name: "ENGLISH 223 - Burch",
    link: "https://app.groupme.com/join_group/65213401/WFqTYXgE",
  },
  {
    name: "ENGLISH 223 - Swanson",
    link: "https://app.groupme.com/join_group/65213403/oIG9CHPX",
  },
  {
    name: "ENGLISH 223 - Argy",
    link: "https://app.groupme.com/join_group/65213405/POdGYLDQ",
  },
  {
    name: "ENGLISH 223 - Afshar",
    link: "https://app.groupme.com/join_group/65213408/gwaN7IBt",
  },
  {
    name: "ENGLISH 223 - Greer",
    link: "https://app.groupme.com/join_group/65213412/l6ZMalFf",
  },
  {
    name: "ENGLISH 223 - McDaniel",
    link: "https://app.groupme.com/join_group/65213413/hkeEioKx",
  },
  {
    name: "ENGLISH 223 - Valdez",
    link: "https://app.groupme.com/join_group/65213415/8CfnQZ1z",
  },
  {
    name: "ENGLISH 223 - Schutz",
    link: "https://app.groupme.com/join_group/65213417/HubAnGO6",
  },
  {
    name: "ENGLISH 223 - John",
    link: "https://app.groupme.com/join_group/65213420/trPc3xFU",
  },
  {
    name: "ENGLISH 223 - Christman",
    link: "https://app.groupme.com/join_group/65213421/QeY8qpT3",
  },
  {
    name: "ENGLISH 223 - Bode",
    link: "https://app.groupme.com/join_group/65213424/pT5ir9kV",
  },
  {
    name: "ENGLISH 223 - Dobson",
    link: "https://app.groupme.com/join_group/65213426/A8D2LvFp",
  },
  {
    name: "ENGLISH 223 - Buckley",
    link: "https://app.groupme.com/join_group/65213428/Nx0ah5cI",
  },
  {
    name: "ENGLISH 223 - Dobjensky",
    link: "https://app.groupme.com/join_group/65213429/mlG3NfOx",
  },
  {
    name: "ENGLISH 225 - Schutz",
    link: "https://app.groupme.com/join_group/65213431/hlkhgWr4",
  },
  {
    name: "ENGLISH 225",
    link: "https://app.groupme.com/join_group/65213433/YJb2jcGg",
  },
  {
    name: "ENGLISH 225 - Wheeler she/her",
    link: "https://app.groupme.com/join_group/65213435/Z1tCc9Et",
  },
  {
    name: "ENGLISH 225 - Taylor III",
    link: "https://app.groupme.com/join_group/65213437/I7cScw5D",
  },
  {
    name: "ENGLISH 229",
    link: "https://app.groupme.com/join_group/65213443/9lZyEXVZ",
  },
  {
    name: "ENGLISH 229 - Zanders",
    link: "https://app.groupme.com/join_group/65213447/5MyoeI3m",
  },
  {
    name: "ENGLISH 230 - Tolle",
    link: "https://app.groupme.com/join_group/65213472/rMuAmx55",
  },
  {
    name: "ENGLISH 240 - Whittier-Ferguson, Rossing",
    link: "https://app.groupme.com/join_group/65213476/x4Yz5P4e",
  },
  {
    name: "ENGLISH 245 - Westlake",
    link: "https://app.groupme.com/join_group/65213479/qHZXm1BC",
  },
  {
    name: "ENGLISH 298 - Lyons",
    link: "https://app.groupme.com/join_group/65213482/gt1aIg3B",
  },
  {
    name: "ENGLISH 298 - Traisnel",
    link: "https://app.groupme.com/join_group/65213484/ZczGMmAo",
  },
  {
    name: "ENGLISH 298 - Nair",
    link: "https://app.groupme.com/join_group/65213487/vIDvIIoB",
  },
  {
    name: "ENGLISH 298 - Orr",
    link: "https://app.groupme.com/join_group/65213491/FsQVm2xh",
  },
  {
    name: "ENGLISH 315 - Murphy",
    link: "https://app.groupme.com/join_group/65213495/HH6EYob7",
  },
  {
    name: "ENGLISH 324 - Mattawa",
    link: "https://app.groupme.com/join_group/65213496/D8KCVszv",
  },
  {
    name: "ENGLISH 344 - Halpert, Askari",
    link: "https://app.groupme.com/join_group/65213498/QStXmH3m",
  },
  {
    name: "ENGLISH 349 - Westlake",
    link: "https://app.groupme.com/join_group/65213502/csqVbNKm",
  },
  {
    name: "ENGLISH 364 - Byers",
    link: "https://app.groupme.com/join_group/65213504/oCADSoiy",
  },
  {
    name: "ENGLISH 374 - Levy-Hussen",
    link: "https://app.groupme.com/join_group/65213506/4JAsONrk",
  },
  {
    name: "ENGLISH 378 - Mattawa",
    link: "https://app.groupme.com/join_group/65213509/9zlDSrhd",
  },
  {
    name: "ENGLISH 390 - Hartley",
    link: "https://app.groupme.com/join_group/65213512/Zi7hF5y6",
  },
  {
    name: "ENGLISH 405 - Moody",
    link: "https://app.groupme.com/join_group/65213513/YrRPkpll",
  },
  {
    name: "ENGLISH 408 - Toon",
    link: "https://app.groupme.com/join_group/65213515/wIVM5zaA",
  },
  {
    name: "ENGLISH 410 - Toon",
    link: "https://app.groupme.com/join_group/65213517/pEeApsdP",
  },
  {
    name: "ENGLISH 444 - Hughes",
    link: "https://app.groupme.com/join_group/65213519/Mazp6YiU",
  },
  {
    name: "ENGLISH 450 - Trevor",
    link: "https://app.groupme.com/join_group/65213520/d9p75tD1",
  },
  {
    name: "ENGLISH 452 - Hack",
    link: "https://app.groupme.com/join_group/65213522/eHujOEOk",
  },
  {
    name: "ENGLISH 461 - Schey",
    link: "https://app.groupme.com/join_group/65213523/DX2NMa20",
  },
  {
    name: "ENGLISH 490 - Bakara",
    link: "https://app.groupme.com/join_group/65213525/zaZfsDdH",
  },
  {
    name: "ENGLISH 503 - Toon",
    link: "https://app.groupme.com/join_group/65213526/x8AYQVZz",
  },
  {
    name: "ENGLISH 140 - Nichols",
    link: "https://app.groupme.com/join_group/65213528/ylD7j092",
  },
  {
    name: "ENGLISH 140 - Portnoy she/her",
    link: "https://app.groupme.com/join_group/65213533/WtCOoyrf",
  },
  {
    name: "ENGLISH 140 - Yergeau",
    link: "https://app.groupme.com/join_group/65213555/wUEnvNTE",
  },
  {
    name: "ENGLISH 227 - Garcia",
    link: "https://app.groupme.com/join_group/65213557/afBOu1d4",
  },
  {
    name: "ENGLISH 307 - Sweeney",
    link: "https://app.groupme.com/join_group/65213559/ZMn1eJEP",
  },
  {
    name: "ENGLISH 322 - Hinken",
    link: "https://app.groupme.com/join_group/65213562/snWmc36A",
  },
  {
    name: "ENGLISH 322 - Delp",
    link: "https://app.groupme.com/join_group/65213564/TvvNASCA",
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
    name: "ENGLISH 325 - Pinto",
    link: "https://app.groupme.com/join_group/65213569/qS7lIxDe",
  },
  {
    name: "ENGLISH 325 - Swanson",
    link: "https://app.groupme.com/join_group/65213572/bPrYJjGU",
  },
  {
    name: "ENGLISH 325 - Hinken",
    link: "https://app.groupme.com/join_group/65213574/bWSjvGDq",
  },
  {
    name: "ENGLISH 325 - Khleif",
    link: "https://app.groupme.com/join_group/65213577/BrGx08Pl",
  },
  {
    name: "ENGLISH 325 - Beer",
    link: "https://app.groupme.com/join_group/65213579/DSu71EPd",
  },
  {
    name: "ENGLISH 325 - Delp",
    link: "https://app.groupme.com/join_group/65213581/ANeVtJX6",
  },
  {
    name: "ENGLISH 325 - Berkley",
    link: "https://app.groupme.com/join_group/65213584/5doyENoS",
  },
  {
    name: "ENGLISH 325 - Gold",
    link: "https://app.groupme.com/join_group/65213589/xtHvdv6E",
  },
  {
    name: "ENGLISH 325 - Karczynski",
    link: "https://app.groupme.com/join_group/65213590/o9rGtWWT",
  },
  {
    name: "ENGLISH 325 - Cicciarelli",
    link: "https://app.groupme.com/join_group/65213593/fjsUwALS",
  },
  {
    name: "ENGLISH 327 - Packard",
    link: "https://app.groupme.com/join_group/65213596/jmPUPny0",
  },
  {
    name: "ENGLISH 340 - White",
    link: "https://app.groupme.com/join_group/65213597/dhuLEjew",
  },
  {
    name: "ENGLISH 340 - Knuth",
    link: "https://app.groupme.com/join_group/65213602/r7bM2FdR",
  },
  {
    name: "ENGLISH 397 - Pinch",
    link: "https://app.groupme.com/join_group/65213606/mNTUSIXE",
  },
  {
    name: "ENGLISH 407 - Kelow-Bennett",
    link: "https://app.groupme.com/join_group/65213609/5MbADmvv",
  },
  {
    name: "ENGLISH 423 - ODowd",
    link: "https://app.groupme.com/join_group/65213610/ZnTHwn6G",
  },
  {
    name: "ENGLISH 423 - Davies",
    link: "https://app.groupme.com/join_group/65213612/TGHNAMGm",
  },
  {
    name: "ENGLISH 424 - Harp",
    link: "https://app.groupme.com/join_group/65213614/kFEdSQSf",
  },
  {
    name: "ENGLISH 425 - Chamberlin",
    link: "https://app.groupme.com/join_group/65213616/sNfxko2P",
  },
  {
    name: "ENGLISH 460 - Habash",
    link: "https://app.groupme.com/join_group/65213650/KKedzva0",
  },
  {
    name: "ENGLISH 496 - Pinch",
    link: "https://app.groupme.com/join_group/65213652/jL7ZlHNc",
  },
  {
    name: "ENGLISH 508 - Gold",
    link: "https://app.groupme.com/join_group/65213656/Bab9u5e5",
  },
  {
    name: "ENGLISH 528 - Kuppers",
    link: "https://app.groupme.com/join_group/65213661/rKOVs3ew",
  },
  {
    name: "ENGLISH 540 - Kelow-Bennett",
    link: "https://app.groupme.com/join_group/65213663/yXyZ4JTZ",
  },
  {
    name: "ENGLISH 572 - Habash",
    link: "https://app.groupme.com/join_group/65213666/cNTopm9b",
  },
  {
    name: "ENGLISH 575 - Hu",
    link: "https://app.groupme.com/join_group/65213668/v0soSI1N",
  },
  {
    name: "ENGLISH 578 - Faizullah",
    link: "https://app.groupme.com/join_group/65213672/v8Abee0e",
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
    name: "ENGR 100 - Shih, Himsel-Burcon",
    link: "https://app.groupme.com/join_group/65213690/bg2R6vVz",
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
    name: "ENGR 100 - Van Nieuwstadt, Fowler",
    link: "https://app.groupme.com/join_group/65213701/WhitMppR",
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
    name: "ENGR 260 - Cotel",
    link: "https://app.groupme.com/join_group/65213716/t8XPH7TG",
  },
  {
    name: "ENGR 301 - Cotel",
    link: "https://app.groupme.com/join_group/65213720/cRvG2oKv",
  },
  {
    name: "ENGR 301",
    link: "https://app.groupme.com/join_group/65213725/Fw5ajQOQ",
  },
  {
    name: "ENGR 330 - Edington, Mateju",
    link: "https://app.groupme.com/join_group/65213729/f5gmXnG1",
  },
  {
    name: "ENGR 330 - Armstrong-Ceron, Mateju",
    link: "https://app.groupme.com/join_group/65213732/OGvYAFBv",
  },
  {
    name: "ENGR 371 - Strauss",
    link: "https://app.groupme.com/join_group/65213736/nCpTxu7y",
  },
  {
    name: "ENGR 410 - Islam",
    link: "https://app.groupme.com/join_group/65213769/gGw31udU",
  },
  {
    name: "ENGR 430 - Wilson, McCormick, Mateju",
    link: "https://app.groupme.com/join_group/65213772/OBOGDJti",
  },
  {
    name: "ENGR 430",
    link: "https://app.groupme.com/join_group/65213773/Nr4HuQSt",
  },
  {
    name: "ENGR 430 - McCormick, Wilson, Mateju",
    link: "https://app.groupme.com/join_group/65213778/lKu4pS0X",
  },
  {
    name: "ENGR 490 - Millunchick",
    link: "https://app.groupme.com/join_group/65213781/vyszEXQS",
  },
  {
    name: "ENGR 520 - Adriaens",
    link: "https://app.groupme.com/join_group/65213785/8zAlNr4c",
  },
  {
    name: "ENGR 591",
    link: "https://app.groupme.com/join_group/65213789/4yABF5N1",
  },
  {
    name: "ENGR 599 - Bell IV",
    link: "https://app.groupme.com/join_group/65213792/RL6d6zOo",
  },
  {
    name: "ENGR 599 - Yarger",
    link: "https://app.groupme.com/join_group/65213795/8i7MoIGh",
  },
  {
    name: "ENGR 599 - Strauss",
    link: "https://app.groupme.com/join_group/65213806/tXsB32Ae",
  },
  {
    name: "ENGR 599 - Wakefield",
    link: "https://app.groupme.com/join_group/65213810/n40Rq9bQ",
  },
  {
    name: "ENGR 599",
    link: "https://app.groupme.com/join_group/65213816/GPOHXw8e",
  },
  {
    name: "ENGR 599 - Van Nieuwstadt",
    link: "https://app.groupme.com/join_group/65213818/AQkYDXZn",
  },
  {
    name: "ENGR 599 - Hohner",
    link: "https://app.groupme.com/join_group/65213820/Gn2LBeLX",
  },
  {
    name: "ENGR 599 - Marino",
    link: "https://app.groupme.com/join_group/65213822/FKzRnQzk",
  },
  {
    name: "ENGR 599 - Siegel",
    link: "https://app.groupme.com/join_group/65213826/khD6wwMt",
  },
  {
    name: "ENGR 599 - Gronewold",
    link: "https://app.groupme.com/join_group/65213827/BaFSTbzp",
  },
  {
    name: "ENGR 599 - Kruger",
    link: "https://app.groupme.com/join_group/65213829/aGv33y5q",
  },
  {
    name: "ENGR 599 - Revzen",
    link: "https://app.groupme.com/join_group/65213835/MCmwwpMr",
  },
  {
    name: "ENGR 599 - Moore",
    link: "https://app.groupme.com/join_group/65213838/5KPNXOwx",
  },
  {
    name: "ENGR 599 - Hortop",
    link: "https://app.groupme.com/join_group/65213840/BwjvMi8l",
  },
  {
    name: "ENGR 599 - Renno",
    link: "https://app.groupme.com/join_group/65213843/5FhUVmdK",
  },
  {
    name: "ENGR 599 - Gaskell",
    link: "https://app.groupme.com/join_group/65213845/rFQjbZ9b",
  },
  {
    name: "ENGR 599 - Hess",
    link: "https://app.groupme.com/join_group/65213846/yr563uTs",
  },
  {
    name: "ENGR 599 - Shedden",
    link: "https://app.groupme.com/join_group/65213848/QrfZYYMG",
  },
  {
    name: "ENGR 599 - Kutty",
    link: "https://app.groupme.com/join_group/65213852/2Ja4r3kJ",
  },
  {
    name: "ENGR 599 - Arthur",
    link: "https://app.groupme.com/join_group/65213902/SvrK8yUG",
  },
  {
    name: "ENGR 599 - Nebeling",
    link: "https://app.groupme.com/join_group/65213904/Aj2KYn3X",
  },
  {
    name: "ENGR 599 - Najarian",
    link: "https://app.groupme.com/join_group/65213905/pZvqhrsw",
  },
  {
    name: "ENGR 599 - Middleton",
    link: "https://app.groupme.com/join_group/65213911/rKlGz4t4",
  },
  {
    name: "ENGR 599 - Hulbert",
    link: "https://app.groupme.com/join_group/65213914/mvmZexIO",
  },
  {
    name: "ENGR 599 - Sienko",
    link: "https://app.groupme.com/join_group/65213918/R0jfV5Qh",
  },
  {
    name: "ENGR 599 - Liang",
    link: "https://app.groupme.com/join_group/65213923/CO3hUOGK",
  },
  {
    name: "ENGR 599 - Barton",
    link: "https://app.groupme.com/join_group/65213925/9yPGHZWV",
  },
  {
    name: "ENGR 599 - Hu",
    link: "https://app.groupme.com/join_group/65213929/Z5hYeQMZ",
  },
  {
    name: "ENGR 599 - Guo",
    link: "https://app.groupme.com/join_group/65213933/MbQEBlrV",
  },
  {
    name: "ENGR 599 - Green",
    link: "https://app.groupme.com/join_group/65213937/OqXeqO0i",
  },
  {
    name: "ENGR 599 - Gilchrist",
    link: "https://app.groupme.com/join_group/65213940/VXuyt1gA",
  },
  {
    name: "ENGR 599 - Flannagan",
    link: "https://app.groupme.com/join_group/65213943/kXtVvwHO",
  },
  {
    name: "ENGR 599 - Kasper",
    link: "https://app.groupme.com/join_group/65213945/NlVNj0lo",
  },
  {
    name: "ENGR 599 - Ojeda",
    link: "https://app.groupme.com/join_group/65213951/zENjztXU",
  },
  {
    name: "ENGR 599 - Dinov",
    link: "https://app.groupme.com/join_group/65213957/UQKU7RXE",
  },
  {
    name: "ENGR 599 - Ringenberg",
    link: "https://app.groupme.com/join_group/65213961/4L4pY319",
  },
  {
    name: "ENGR 599 - Skerlos",
    link: "https://app.groupme.com/join_group/65213962/9Nb2YFvf",
  },
  {
    name: "ENS 462",
    link: "https://app.groupme.com/join_group/65213969/INt1HBtH",
  },
  {
    name: "ENS 480 - King III",
    link: "https://app.groupme.com/join_group/65213971/ESUW5p0O",
  },
  {
    name: "ENS 480 - Albert",
    link: "https://app.groupme.com/join_group/65213976/O7VqNe8W",
  },
  {
    name: "ENS 480 - Dimoff",
    link: "https://app.groupme.com/join_group/65213979/US3UrLW6",
  },
  {
    name: "ENS 480 - Eldan",
    link: "https://app.groupme.com/join_group/65213982/8xbccmWT",
  },
  {
    name: "ENS 480 - Holland",
    link: "https://app.groupme.com/join_group/65213986/nYRJ7pPa",
  },
  {
    name: "ENS 480 - Antonio",
    link: "https://app.groupme.com/join_group/65213989/pumnPjdE",
  },
  {
    name: "ENS 480 - Perkins",
    link: "https://app.groupme.com/join_group/65213991/55m35Cgt",
  },
  {
    name: "ENS 481 - Collier",
    link: "https://app.groupme.com/join_group/65214034/MKeEe7CW",
  },
  {
    name: "ENS 540 - Katz",
    link: "https://app.groupme.com/join_group/65214036/dk5HABQN",
  },
  {
    name: "ENS 581 - Collier",
    link: "https://app.groupme.com/join_group/65214043/BLkNDygm",
  },
  {
    name: "ENS 307",
    link: "https://app.groupme.com/join_group/65214046/pb5iARSN",
  },
  {
    name: "ENS 325",
    link: "https://app.groupme.com/join_group/65214051/pXYhMOoj",
  },
  {
    name: "ENS 326",
    link: "https://app.groupme.com/join_group/65214057/BTHXjLJ1",
  },
  {
    name: "ENS 335",
    link: "https://app.groupme.com/join_group/65214061/XvtdT23N",
  },
  {
    name: "ENS 344",
    link: "https://app.groupme.com/join_group/65214066/V88i0iKi",
  },
  {
    name: "ENS 345",
    link: "https://app.groupme.com/join_group/65214068/eaG3LQbd",
  },
  {
    name: "ENS 346",
    link: "https://app.groupme.com/join_group/65214073/OICRoJSD",
  },
  {
    name: "ENS 347",
    link: "https://app.groupme.com/join_group/65214075/pyjaJabL",
  },
  {
    name: "ENS 348",
    link: "https://app.groupme.com/join_group/65214079/Zk0rkHOW",
  },
  {
    name: "ENS 349",
    link: "https://app.groupme.com/join_group/65214083/HJcJNh50",
  },
  {
    name: "ENS 350",
    link: "https://app.groupme.com/join_group/65214087/QXYOVcY9",
  },
  {
    name: "ENS 351",
    link: "https://app.groupme.com/join_group/65214090/FVjmPvC7",
  },
  {
    name: "ENS 352",
    link: "https://app.groupme.com/join_group/65214094/mx7CL29A",
  },
  {
    name: "ENS 353",
    link: "https://app.groupme.com/join_group/65214098/IyuhOj8g",
  },
  {
    name: "ENS 354",
    link: "https://app.groupme.com/join_group/65214102/22l13KWg",
  },
  {
    name: "ENS 356",
    link: "https://app.groupme.com/join_group/65214107/qpFdRHkw",
  },
  {
    name: "ENS 400",
    link: "https://app.groupme.com/join_group/65214111/87HIqQBs",
  },
  {
    name: "ENS 407",
    link: "https://app.groupme.com/join_group/65214114/QBBe59jD",
  },
  {
    name: "ENS 451",
    link: "https://app.groupme.com/join_group/65214117/MQziXKwr",
  },
  {
    name: "ENS 460",
    link: "https://app.groupme.com/join_group/65214122/Oi1MnOfb",
  },
  {
    name: "ENS 461",
    link: "https://app.groupme.com/join_group/65214129/rE22lmVP",
  },
  {
    name: "ENS 463",
    link: "https://app.groupme.com/join_group/65214132/ajJxnxFe",
  },
  {
    name: "ENS 465",
    link: "https://app.groupme.com/join_group/65214140/WYBSTp68",
  },
  {
    name: "ENS 466",
    link: "https://app.groupme.com/join_group/65214143/g2yyDdsI",
  },
  {
    name: "ENS 469",
    link: "https://app.groupme.com/join_group/65214183/FQdwdiEp",
  },
  {
    name: "ENS 475",
    link: "https://app.groupme.com/join_group/65214191/97AV2GmG",
  },
  {
    name: "ENS 525",
    link: "https://app.groupme.com/join_group/65214193/knlLNjAS",
  },
  {
    name: "ENS 526",
    link: "https://app.groupme.com/join_group/65214198/UeiTXMYW",
  },
  {
    name: "ENS 535",
    link: "https://app.groupme.com/join_group/65214205/NOkZR72x",
  },
  {
    name: "ENS 545",
    link: "https://app.groupme.com/join_group/65214210/VFNidSqI",
  },
  {
    name: "ENS 547",
    link: "https://app.groupme.com/join_group/65214213/6yBXYH3m",
  },
  {
    name: "ENS 549",
    link: "https://app.groupme.com/join_group/65214217/51vccul6",
  },
  {
    name: "ENS 550",
    link: "https://app.groupme.com/join_group/65214220/MYdKjYCw",
  },
  {
    name: "ENS 553",
    link: "https://app.groupme.com/join_group/65214226/eSBlBpQQ",
  },
  {
    name: "ENS 554",
    link: "https://app.groupme.com/join_group/65214228/nNMK9A5z",
  },
  {
    name: "ENS 556",
    link: "https://app.groupme.com/join_group/65214232/OpHCshY7",
  },
  {
    name: "ENS 560",
    link: "https://app.groupme.com/join_group/65214235/3m3UV5dT",
  },
  {
    name: "ENS 566",
    link: "https://app.groupme.com/join_group/65214239/rAcOixkc",
  },
  {
    name: "ENS 569",
    link: "https://app.groupme.com/join_group/65214242/7caALVi1",
  },
  {
    name: "ENS 580",
    link: "https://app.groupme.com/join_group/65214248/rFDwf833",
  },
  {
    name: "ENSCEN 105 - Flanner",
    link: "https://app.groupme.com/join_group/65214254/ZpLW57lF",
  },
  {
    name: "ENSCEN 211 - Jovanovic",
    link: "https://app.groupme.com/join_group/65214257/BSeIxWv1",
  },
  {
    name: "ENSCEN 463 - Samson",
    link: "https://app.groupme.com/join_group/65214264/4OQUg7Rd",
  },
  {
    name: "ENSCEN 479 - Kort",
    link: "https://app.groupme.com/join_group/65214268/isACMrtU",
  },
  {
    name: "ENSCEN 533 - Driscoll",
    link: "https://app.groupme.com/join_group/65214272/5JDZv7Gg",
  },
  {
    name: "ENTR 390 - Sinclair",
    link: "https://app.groupme.com/join_group/65214278/SkBqpudn",
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
    name: "ENTR 390 - Wingfield, Moore",
    link: "https://app.groupme.com/join_group/65214290/mpS2hHrK",
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
    name: "ENTR 410 - Hayden, McFall",
    link: "https://app.groupme.com/join_group/65214343/MrdAW6Rs",
  },
  {
    name: "ENTR 411 - Hennessy",
    link: "https://app.groupme.com/join_group/65214346/WLO3KK1n",
  },
  {
    name: "ENTR 411 - White",
    link: "https://app.groupme.com/join_group/65214349/sfNnKsIm",
  },
  {
    name: "ENTR 411 - McNaughton",
    link: "https://app.groupme.com/join_group/65214358/4iuGkzKg",
  },
  {
    name: "ENTR 412 - Hennessy",
    link: "https://app.groupme.com/join_group/65214369/fJummyC1",
  },
  {
    name: "ENTR 413 - Dacko",
    link: "https://app.groupme.com/join_group/65214371/cZo8n3Hx",
  },
  {
    name: "ENTR 490 - Leppek",
    link: "https://app.groupme.com/join_group/65214373/XbvZUfMU",
  },
  {
    name: "ENTR 490 - Cucinelli, Hsia",
    link: "https://app.groupme.com/join_group/65214382/p3lXWFrV",
  },
  {
    name: "ENTR 490 - Dacko",
    link: "https://app.groupme.com/join_group/65214387/DukiiGDy",
  },
  {
    name: "ENTR 490 - Sick, Fay",
    link: "https://app.groupme.com/join_group/65214395/cAn3mYGO",
  },
  {
    name: "ENTR 490 - Huber",
    link: "https://app.groupme.com/join_group/65214399/In5wElwi",
  },
  {
    name: "ENTR 500 - Crumm",
    link: "https://app.groupme.com/join_group/65214404/8Xh11OMw",
  },
  {
    name: "ENTR 510 - Crumm",
    link: "https://app.groupme.com/join_group/65214410/baBAQk4f",
  },
  {
    name: "ENTR 550 - Fretz",
    link: "https://app.groupme.com/join_group/65214420/aACLojaO",
  },
  {
    name: "ENTR 560 - Cell",
    link: "https://app.groupme.com/join_group/65214430/1EgLkEDM",
  },
  {
    name: "ENTR 599 - Wingfield, Moore",
    link: "https://app.groupme.com/join_group/65214433/4Caa1SKg",
  },
  {
    name: "ENTR 599 - Cucinelli, Hsia",
    link: "https://app.groupme.com/join_group/65214440/8l93go7H",
  },
  {
    name: "ENTR 599 - Sick, Fay",
    link: "https://app.groupme.com/join_group/65214444/VP97jgOi",
  },
  {
    name: "ENTR 599 - Narayan",
    link: "https://app.groupme.com/join_group/65214449/EhL8RyUH",
  },
  {
    name: "ENTR 599 - Bacyinski",
    link: "https://app.groupme.com/join_group/65214455/CXfmNoS2",
  },
  {
    name: "ENTR 599 - Fortino",
    link: "https://app.groupme.com/join_group/65214461/BJjPDDQg",
  },
  {
    name: "ENTR 599 - Hayden, McFall",
    link: "https://app.groupme.com/join_group/65214465/xQCcXV0p",
  },
  {
    name: "ENTR 599 - Dacko",
    link: "https://app.groupme.com/join_group/65214471/DYZT8lj7",
  },
  {
    name: "ENTR 599 - Gordon",
    link: "https://app.groupme.com/join_group/65214477/uPQnpORi",
  },
  {
    name: "ENTR 599 - Huber",
    link: "https://app.groupme.com/join_group/65214482/6hX0TyOp",
  },
  {
    name: "ENTR 599 - Bailey",
    link: "https://app.groupme.com/join_group/65214490/vQvoSUkb",
  },
  {
    name: "ENTR 599 - Fidler",
    link: "https://app.groupme.com/join_group/65214494/bYUaknSs",
  },
  {
    name: "ENTR 407 - Bacyinski",
    link: "https://app.groupme.com/join_group/65214498/ryAaBflv",
  },
  {
    name: "ENVIRON 102 - Samson",
    link: "https://app.groupme.com/join_group/65214504/1kFoi80p",
  },
  {
    name: "ENVIRON 105 - Flanner",
    link: "https://app.groupme.com/join_group/65214509/6appKjF3",
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
    name: "ENVIRON 119 - Lohmann",
    link: "https://app.groupme.com/join_group/65214533/NrEcDNes",
  },
  {
    name: "ENVIRON 120 - Gleason",
    link: "https://app.groupme.com/join_group/65214601/5wajjxzz",
  },
  {
    name: "ENVIRON 131 - Robbins",
    link: "https://app.groupme.com/join_group/65214608/Ox8c7ync",
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
    name: "ENVIRON 229 - Demers",
    link: "https://app.groupme.com/join_group/65214624/KQFkqYkM",
  },
  {
    name: "ENVIRON 230 - Hetland",
    link: "https://app.groupme.com/join_group/65214634/XChOcX95",
  },
  {
    name: "ENVIRON 232 - Arbic",
    link: "https://app.groupme.com/join_group/65214643/np0u9GoN",
  },
  {
    name: "ENVIRON 235 - Moore",
    link: "https://app.groupme.com/join_group/65214651/iKZ3h1bh",
  },
  {
    name: "ENVIRON 250 - Raimi",
    link: "https://app.groupme.com/join_group/65214656/hHmAC7G4",
  },
  {
    name: "ENVIRON 258 - Brown",
    link: "https://app.groupme.com/join_group/65214662/3AmZMwsr",
  },
  {
    name: "ENVIRON 262 - Benedict",
    link: "https://app.groupme.com/join_group/65214669/Wwu6ZaGA",
  },
  {
    name: "ENVIRON 281 - Sanders",
    link: "https://app.groupme.com/join_group/65214675/0K7sBD8g",
  },
  {
    name: "ENVIRON 302 - Mills",
    link: "https://app.groupme.com/join_group/65214681/pCIxKiyI",
  },
  {
    name: "ENVIRON 310 - Colacino",
    link: "https://app.groupme.com/join_group/65214687/afb5wKOE",
  },
  {
    name: "ENVIRON 321 - Arnott",
    link: "https://app.groupme.com/join_group/65214693/NRFrGpUe",
  },
  {
    name: "ENVIRON 325 - Johnson",
    link: "https://app.groupme.com/join_group/65214703/QfWrZq89",
  },
  {
    name: "ENVIRON 332 - Passey",
    link: "https://app.groupme.com/join_group/65214712/4PKM2zV6",
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
    name: "ENVIRON 370 - Etienne",
    link: "https://app.groupme.com/join_group/65214727/VjVmk88N",
  },
  {
    name: "ENVIRON 376 - Bouma",
    link: "https://app.groupme.com/join_group/65214735/kUNZHlfy",
  },
  {
    name: "ENVIRON 377 - Balachander",
    link: "https://app.groupme.com/join_group/65214743/FAxhNL3S",
  },
  {
    name: "ENVIRON 380 - Simon",
    link: "https://app.groupme.com/join_group/65214749/8gWjccCa",
  },
  {
    name: "ENVIRON 390 - Murphy",
    link: "https://app.groupme.com/join_group/65214758/mQfJTr8S",
  },
  {
    name: "ENVIRON 391 - Soderstrom",
    link: "https://app.groupme.com/join_group/65214768/DLLsUCrp",
  },
  {
    name: "ENVIRON 403 - Niemi",
    link: "https://app.groupme.com/join_group/65214777/Orvcd7Gx",
  },
  {
    name: "ENVIRON 407 - Semrau",
    link: "https://app.groupme.com/join_group/65214785/xQMwT8Sf",
  },
  {
    name: "ENVIRON 442 - Sheldon",
    link: "https://app.groupme.com/join_group/65214882/74o1ZrOs",
  },
  {
    name: "ENVIRON 453 - Benedict",
    link: "https://app.groupme.com/join_group/65214887/fQSTGxCk",
  },
  {
    name: "ENVIRON 462 - Princen",
    link: "https://app.groupme.com/join_group/65214894/ysHqs48I",
  },
  {
    name: "ENVIRON 462 - DAnieri",
    link: "https://app.groupme.com/join_group/65214902/1UjK3N8G",
  },
  {
    name: "ENVIRON 464 - Adlerstein-Gonzalez",
    link: "https://app.groupme.com/join_group/65214907/Gwwa5rJ6",
  },
  {
    name: "ENVIRON 464 - Phung",
    link: "https://app.groupme.com/join_group/65214914/IiYHchzR",
  },
  {
    name: "ENVIRON 465 - Craig",
    link: "https://app.groupme.com/join_group/65214924/35qC89Na",
  },
  {
    name: "ENVIRON 465 - Jones",
    link: "https://app.groupme.com/join_group/65214929/9dce3qp5",
  },
  {
    name: "ENVIRON 475 - Hall",
    link: "https://app.groupme.com/join_group/65214936/Q6ux1km5",
  },
  {
    name: "ENVIRON 476 - Zak, Allgeier",
    link: "https://app.groupme.com/join_group/65214947/3SPXLdIP",
  },
  {
    name: "ENVIRON 479 - Cruz Da Silva Castro",
    link: "https://app.groupme.com/join_group/65214954/DrrC2IN5",
  },
  {
    name: "ENVIRON 417 - Hart",
    link: "https://app.groupme.com/join_group/65214960/7RPQSVwR",
  },
  {
    name: "ENVIRON 139 - Duvall",
    link: "https://app.groupme.com/join_group/65214969/U0uRIU1l",
  },
  {
    name: "ENVIRON 155 - Klein",
    link: "https://app.groupme.com/join_group/65214982/nVq82RTk",
  },
  {
    name: "ENVIRON 320 - Halpert, Askari",
    link: "https://app.groupme.com/join_group/65214988/mu42a1h9",
  },
  {
    name: "ENVIRON 337 - Goodenough",
    link: "https://app.groupme.com/join_group/65215001/FIXuJp8Q",
  },
  {
    name: "ENVIRON 399 - Duvall",
    link: "https://app.groupme.com/join_group/65215005/whg7GLPE",
  },
  {
    name: "ENVIRON 464 - Rife",
    link: "https://app.groupme.com/join_group/65215017/FyFMhBwq",
  },
  {
    name: "ENVIRON 326",
    link: "https://app.groupme.com/join_group/65215024/K5f5my7r",
  },
  {
    name: "ENVIRON 372",
    link: "https://app.groupme.com/join_group/65215030/N5hj6Z2p",
  },
  {
    name: "ENVIRON 409",
    link: "https://app.groupme.com/join_group/65215041/vWesp2jp",
  },
  {
    name: "ENVIRON 438 - Foufopoulos",
    link: "https://app.groupme.com/join_group/65215045/VFvHXPxJ",
  },
  {
    name: "ENVIRON 441 - Bergen",
    link: "https://app.groupme.com/join_group/65215055/pJ2gfYJr",
  },
  {
    name: "ENVIRON 411",
    link: "https://app.groupme.com/join_group/65215068/CifxXSwH",
  },
  {
    name: "EPID 460 - Rickard",
    link: "https://app.groupme.com/join_group/65215075/EbNHv9GG",
  },
  {
    name: "EPID 513 - Yang",
    link: "https://app.groupme.com/join_group/65215082/AqfOp0Ie",
  },
  {
    name: "EPID 521 - Larson",
    link: "https://app.groupme.com/join_group/65215150/4gTxr5qf",
  },
  {
    name: "EPID 525 - Robinson-Dunn",
    link: "https://app.groupme.com/join_group/65215160/exeee5Ld",
  },
  {
    name: "EPID 531 - August",
    link: "https://app.groupme.com/join_group/65215167/pZueqfNi",
  },
  {
    name: "EPID 560 - Rickard",
    link: "https://app.groupme.com/join_group/65215170/wOX2UJLK",
  },
  {
    name: "EPID 582 - Foxman",
    link: "https://app.groupme.com/join_group/65215177/qd1p1C4j",
  },
  {
    name: "EPID 594 - Zelner",
    link: "https://app.groupme.com/join_group/65215184/qSUjtDrV",
  },
  {
    name: "EPID 595 - Berrocal",
    link: "https://app.groupme.com/join_group/65215192/Cm8TRZBU",
  },
  {
    name: "EPID 599 - Tsodikov",
    link: "https://app.groupme.com/join_group/65215200/5wiXEWoi",
  },
  {
    name: "ES 310 - Sinclair",
    link: "https://app.groupme.com/join_group/65215207/3LIZwUZP",
  },
  {
    name: "ES 212 - Price",
    link: "https://app.groupme.com/join_group/65215217/KjT3yAqt",
  },
  {
    name: "ES 212 - Johnson",
    link: "https://app.groupme.com/join_group/65215226/VGAQxrJZ",
  },
  {
    name: "ES 250 - Menon",
    link: "https://app.groupme.com/join_group/65215235/rughe9Ym",
  },
  {
    name: "ES 395 - Middleton",
    link: "https://app.groupme.com/join_group/65215247/sRrnEQBi",
  },
  {
    name: "ES 401 - Gordon",
    link: "https://app.groupme.com/join_group/65215255/WcppA3H8",
  },
  {
    name: "ES 402 - Gordon",
    link: "https://app.groupme.com/join_group/65215265/tV0142k3",
  },
  {
    name: "ES 414 - Botkin",
    link: "https://app.groupme.com/join_group/65215275/vv1GfS4h",
  },
  {
    name: "ES 425 - Sriram",
    link: "https://app.groupme.com/join_group/65215283/qBRoWPJ7",
  },
  {
    name: "ES 504 - Schipani",
    link: "https://app.groupme.com/join_group/65215292/I6y5sUH6",
  },
  {
    name: "ES 515 - Menon",
    link: "https://app.groupme.com/join_group/65221786/IRk2So5O",
  },
  {
    name: "ES 569 - Gupta",
    link: "https://app.groupme.com/join_group/65221797/mOrfsbx4",
  },
  {
    name: "ES 403",
    link: "https://app.groupme.com/join_group/65221805/3H1Po81V",
  },
  {
    name: "ESENG 599 - Lastoskie",
    link: "https://app.groupme.com/join_group/65221822/j1JDdibQ",
  },
  {
    name: "ESENG 599 - Craig",
    link: "https://app.groupme.com/join_group/65221829/Ne6PYwnB",
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
    name: "FIN 317",
    link: "https://app.groupme.com/join_group/65221925/x6Lr8f7r",
  },
  {
    name: "FIN 320 - Allen",
    link: "https://app.groupme.com/join_group/65221936/1W69568F",
  },
  {
    name: "FIN 321",
    link: "https://app.groupme.com/join_group/65221946/a70kBzXy",
  },
  {
    name: "FIN 336 - Nezafat",
    link: "https://app.groupme.com/join_group/65221964/F1eeMVvg",
  },
  {
    name: "FIN 338 - Dittmar",
    link: "https://app.groupme.com/join_group/65221970/w2n7ihSR",
  },
  {
    name: "FIN 351 - Cascade",
    link: "https://app.groupme.com/join_group/65221987/BfmC5ACr",
  },
  {
    name: "FIN 402 - Sheinberg",
    link: "https://app.groupme.com/join_group/65221993/xA3y0P2S",
  },
  {
    name: "FIN 403 - Sheinberg",
    link: "https://app.groupme.com/join_group/65222010/Vf0nq7wo",
  },
  {
    name: "FIN 408 - Nezafat",
    link: "https://app.groupme.com/join_group/65222031/3bDqY3HM",
  },
  {
    name: "FIN 408",
    link: "https://app.groupme.com/join_group/65222040/SOZu5iz4",
  },
  {
    name: "FIN 409 - Lei",
    link: "https://app.groupme.com/join_group/65222047/MDCDrUgA",
  },
  {
    name: "FIN 409",
    link: "https://app.groupme.com/join_group/65222061/pEW5HOMy",
  },
  {
    name: "FIN 425",
    link: "https://app.groupme.com/join_group/65222072/mq32LHRh",
  },
  {
    name: "FIN 428 - Wu",
    link: "https://app.groupme.com/join_group/65222081/9zC709vi",
  },
  {
    name: "FIN 430 - Yimfor",
    link: "https://app.groupme.com/join_group/65222091/zMmq4bYS",
  },
  {
    name: "FIN 440 - Nezafat",
    link: "https://app.groupme.com/join_group/65222102/xeOL3w52",
  },
  {
    name: "FIN 466 - Soo",
    link: "https://app.groupme.com/join_group/65222112/Or92hmSF",
  },
  {
    name: "FIN 475 - Lei",
    link: "https://app.groupme.com/join_group/65222126/tbEZhdHk",
  },
  {
    name: "FIN 480 - Hall",
    link: "https://app.groupme.com/join_group/65222140/aoMvz6u3",
  },
  {
    name: "FIN 566 - Soo",
    link: "https://app.groupme.com/join_group/65222149/Arl1vCpy",
  },
  {
    name: "FIN 567 - Soo",
    link: "https://app.groupme.com/join_group/65222157/JCqHPEDP",
  },
  {
    name: "FIN 575 - Lei",
    link: "https://app.groupme.com/join_group/65222170/f6iHzZ2u",
  },
  {
    name: "FIN 583 - Bigelow",
    link: "https://app.groupme.com/join_group/65222326/bcCbbMqE",
  },
  {
    name: "FPIANO 100 - Bengtson",
    link: "https://app.groupme.com/join_group/65222335/y0owrI68",
  },
  {
    name: "FRENCH 345 - Cole",
    link: "https://app.groupme.com/join_group/65222344/WLtXbxHN",
  },
  {
    name: "FRENCH 346 - Lay",
    link: "https://app.groupme.com/join_group/65222355/S8y5w8ft",
  },
  {
    name: "FRENCH 372 - Boalick",
    link: "https://app.groupme.com/join_group/65222365/oorFCv90",
  },
  {
    name: "FRENCH 444 - Arnall",
    link: "https://app.groupme.com/join_group/65222378/Z5wyjMbL",
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
    name: "FRENCH 113 - Gabaron",
    link: "https://app.groupme.com/join_group/65222423/0ZzTwJ1w",
  },
  {
    name: "FRENCH 230",
    link: "https://app.groupme.com/join_group/65222439/yVwXULk1",
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
    name: "FRENCH 232 - Gabaron",
    link: "https://app.groupme.com/join_group/65222469/2PVzQsrC",
  },
  {
    name: "FRENCH 232 - Foster",
    link: "https://app.groupme.com/join_group/65222477/BVGvlSNS",
  },
  {
    name: "FRENCH 235 - Meyer",
    link: "https://app.groupme.com/join_group/65222491/502HyckS",
  },
  {
    name: "FRENCH 235 - Foster",
    link: "https://app.groupme.com/join_group/65222505/iMTkC6wK",
  },
  {
    name: "FRENCH 270 - Hannoosh",
    link: "https://app.groupme.com/join_group/65222514/TYDscmr7",
  },
  {
    name: "FRENCH 270 - Joseph-Gabriel",
    link: "https://app.groupme.com/join_group/65222533/JacwM2kL",
  },
  {
    name: "FRENCH 272 - Hoffmann",
    link: "https://app.groupme.com/join_group/65222544/ITNbOhBH",
  },
  {
    name: "FRENCH 272 - Kurtz",
    link: "https://app.groupme.com/join_group/65222551/qdkcKVfo",
  },
  {
    name: "FRENCH 274 - Gabaron",
    link: "https://app.groupme.com/join_group/65222562/WiSDV5ao",
  },
  {
    name: "FRENCH 336 - Hendrickson",
    link: "https://app.groupme.com/join_group/65222574/jZenaDkE",
  },
  {
    name: "FRENCH 350 - Caron",
    link: "https://app.groupme.com/join_group/65222588/vckc9FNy",
  },
  {
    name: "FRENCH 365 - Joseph-Gabriel",
    link: "https://app.groupme.com/join_group/65222602/XKigVdDO",
  },
  {
    name: "FRENCH 366 - Gutt",
    link: "https://app.groupme.com/join_group/65222610/pj3uqoLc",
  },
  {
    name: "FRENCH 379 - Caron",
    link: "https://app.groupme.com/join_group/65222623/J38TK5j9",
  },
  {
    name: "FRENCH 360 - Hoffmann",
    link: "https://app.groupme.com/join_group/65222631/Eliie8pS",
  },
  {
    name: "FRENHORN 111",
    link: "https://app.groupme.com/join_group/65222639/tMOzRoRG",
  },
  {
    name: "FTVM 150 - Flinn",
    link: "https://app.groupme.com/join_group/65222850/A6vSBF28",
  },
  {
    name: "FTVM 203 - Fanucchi",
    link: "https://app.groupme.com/join_group/65222861/FBe0W7EI",
  },
  {
    name: "FTVM 210 - Tice",
    link: "https://app.groupme.com/join_group/65222870/y4T5VkuM",
  },
  {
    name: "FTVM 210 - Prasad",
    link: "https://app.groupme.com/join_group/65222879/yEf1XYDb",
  },
  {
    name: "FTVM 232 - Poulson-Bryant",
    link: "https://app.groupme.com/join_group/65222891/FClIeSBB",
  },
  {
    name: "FTVM 272 - Noble-Olson",
    link: "https://app.groupme.com/join_group/65222907/IBB6Z3It",
  },
  {
    name: "FTVM 290 - McNamara",
    link: "https://app.groupme.com/join_group/65222921/dUH1JQQO",
  },
  {
    name: "FTVM 290 - Marek",
    link: "https://app.groupme.com/join_group/65222946/xQ3DXi2R",
  },
  {
    name: "FTVM 290 - Sarris",
    link: "https://app.groupme.com/join_group/65222957/fwHMWlBg",
  },
  {
    name: "FTVM 290 - Fanucchi",
    link: "https://app.groupme.com/join_group/65222971/Ob17jJ3X",
  },
  {
    name: "FTVM 300 - Rayher",
    link: "https://app.groupme.com/join_group/65222983/CvMLrAud",
  },
  {
    name: "FTVM 303 - Rayher",
    link: "https://app.groupme.com/join_group/65222994/AHFfOyCB",
  },
  {
    name: "FTVM 303 - Marek",
    link: "https://app.groupme.com/join_group/65223006/f8XuVxWo",
  },
  {
    name: "FTVM 306 - McNamara",
    link: "https://app.groupme.com/join_group/65223016/4l8vO6na",
  },
  {
    name: "FTVM 310 - Prasad",
    link: "https://app.groupme.com/join_group/65223027/5w33UxQx",
  },
  {
    name: "FTVM 310 - Thornton",
    link: "https://app.groupme.com/join_group/65223039/3J942pFB",
  },
  {
    name: "FTVM 311 - Thornton",
    link: "https://app.groupme.com/join_group/65223051/ZIkNZZBH",
  },
  {
    name: "FTVM 317 - Sarris",
    link: "https://app.groupme.com/join_group/65223060/WCLYQhPz",
  },
  {
    name: "FTVM 352 - Solomon",
    link: "https://app.groupme.com/join_group/65223071/Yy6kJdr1",
  },
  {
    name: "FTVM 366 - Nornes",
    link: "https://app.groupme.com/join_group/65223084/fyFPXPcO",
  },
  {
    name: "FTVM 366 - Phruksachart",
    link: "https://app.groupme.com/join_group/65223098/5kBKvWjo",
  },
  {
    name: "FTVM 366 - Rebull",
    link: "https://app.groupme.com/join_group/65223105/T18zWFtP",
  },
  {
    name: "FTVM 367 - Murphy",
    link: "https://app.groupme.com/join_group/65223119/kAvV3AjN",
  },
  {
    name: "FTVM 368 - Mihailova",
    link: "https://app.groupme.com/join_group/65223131/hzMe36Qt",
  },
  {
    name: "FTVM 394 - Granata",
    link: "https://app.groupme.com/join_group/65223147/0J4q8fMJ",
  },
  {
    name: "FTVM 404 - Hollison",
    link: "https://app.groupme.com/join_group/65223162/cZxB6zLr",
  },
  {
    name: "FTVM 404 - Fanucchi",
    link: "https://app.groupme.com/join_group/65223168/pkOkqj7F",
  },
  {
    name: "FTVM 406 - McNamara",
    link: "https://app.groupme.com/join_group/65223178/1astr3iU",
  },
  {
    name: "FTVM 410 - Shere",
    link: "https://app.groupme.com/join_group/65223190/cPIzZEDn",
  },
  {
    name: "FTVM 411 - Thornton",
    link: "https://app.groupme.com/join_group/65223196/H3H8T2Xx",
  },
  {
    name: "FTVM 427 - Burnstein",
    link: "https://app.groupme.com/join_group/65223212/Wdor2Ib5",
  },
  {
    name: "FTVM 441 - Rai",
    link: "https://app.groupme.com/join_group/65223228/h9Bk1ZjK",
  },
  {
    name: "FTVM 441 - Phruksachart",
    link: "https://app.groupme.com/join_group/65223409/EvtuGksA",
  },
  {
    name: "FTVM 455 - Rai",
    link: "https://app.groupme.com/join_group/65223415/jmnz6Y1z",
  },
  {
    name: "FTVM 455 - Herwitz",
    link: "https://app.groupme.com/join_group/65223428/DhH5B0Gv",
  },
  {
    name: "FTVM 460 - Solomon",
    link: "https://app.groupme.com/join_group/65223437/LzxDTDPm",
  },
  {
    name: "FTVM 190 - Sarris",
    link: "https://app.groupme.com/join_group/65223447/iqPhONsK",
  },
  {
    name: "FTVM 190 - Tsoffar",
    link: "https://app.groupme.com/join_group/65223459/LShniIV6",
  },
  {
    name: "FTVM 423 - Rayher, Burnstein",
    link: "https://app.groupme.com/join_group/65223462/k1vgqF7t",
  },
  {
    name: "FTVM 495 - Hollison",
    link: "https://app.groupme.com/join_group/65223475/5f3i3nko",
  },
  {
    name: "FTVM 314",
    link: "https://app.groupme.com/join_group/65223489/TpjuCl92",
  },
  {
    name: "FTVM 316",
    link: "https://app.groupme.com/join_group/65223498/TWCCymgT",
  },
  {
    name: "FTVM 353",
    link: "https://app.groupme.com/join_group/65223509/xcEufbrT",
  },
  {
    name: "FTVM 375",
    link: "https://app.groupme.com/join_group/65223524/Q7EFg8jG",
  },
  {
    name: "FTVM 376",
    link: "https://app.groupme.com/join_group/65223539/VQGmUlXE",
  },
  {
    name: "GEOG 111 - Arnaboldi",
    link: "https://app.groupme.com/join_group/65223554/UU8x1Vl3",
  },
  {
    name: "GEOG 145 - Tsai",
    link: "https://app.groupme.com/join_group/65223561/NXQuuHSg",
  },
  {
    name: "GERMAN 100 - Cribari-Assali",
    link: "https://app.groupme.com/join_group/65223570/u0hwA7rj",
  },
  {
    name: "GERMAN 230 - Goertz",
    link: "https://app.groupme.com/join_group/65223583/uGeHcCdu",
  },
  {
    name: "GERMAN 322 - Spector, Thurman",
    link: "https://app.groupme.com/join_group/65223594/dFEWcPef",
  },
  {
    name: "GERMAN 379 - Markovits",
    link: "https://app.groupme.com/join_group/65223605/BzvPM8Pb",
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
    name: "GERMAN 101 - Rastalsky",
    link: "https://app.groupme.com/join_group/65223634/s7laWDR8",
  },
  {
    name: "GERMAN 102",
    link: "https://app.groupme.com/join_group/65223644/4EY8zsI9",
  },
  {
    name: "GERMAN 112 - Dabak",
    link: "https://app.groupme.com/join_group/65223657/ocuSXTFn",
  },
  {
    name: "GERMAN 128 - Luchina",
    link: "https://app.groupme.com/join_group/65223671/i5ivn7kA",
  },
  {
    name: "GERMAN 228",
    link: "https://app.groupme.com/join_group/65223676/L5ySHM5c",
  },
  {
    name: "GERMAN 228 - Luchina",
    link: "https://app.groupme.com/join_group/65223693/VnUq4Tft",
  },
  {
    name: "GERMAN 232 - Dabak",
    link: "https://app.groupme.com/join_group/65223812/TKCgOudr",
  },
  {
    name: "GERMAN 232 - Swennes",
    link: "https://app.groupme.com/join_group/65223822/1DMeZZGC",
  },
  {
    name: "GERMAN 232 - Marquardt",
    link: "https://app.groupme.com/join_group/65223832/PSCTIpQc",
  },
  {
    name: "GERMAN 232 - Uritescu-Lombard",
    link: "https://app.groupme.com/join_group/65223840/C5fxlOp4",
  },
  {
    name: "GERMAN 232 - Ewing",
    link: "https://app.groupme.com/join_group/65223851/qlI1tNcv",
  },
  {
    name: "GERMAN 232 - Grzeskowiak",
    link: "https://app.groupme.com/join_group/65223860/JFpdC5oB",
  },
  {
    name: "GERMAN 232 - Gell",
    link: "https://app.groupme.com/join_group/65223871/GBJWuoVS",
  },
  {
    name: "GERMAN 234 - Dabak",
    link: "https://app.groupme.com/join_group/65223879/D71dOW9c",
  },
  {
    name: "GERMAN 300 - Gell",
    link: "https://app.groupme.com/join_group/65223894/9klFjGTg",
  },
  {
    name: "GERMAN 300 - Swennes",
    link: "https://app.groupme.com/join_group/65223903/hTnhQAxl",
  },
  {
    name: "GERMAN 306 - Swennes",
    link: "https://app.groupme.com/join_group/65223910/aFr2aMOk",
  },
  {
    name: "GERMAN 306 - Gell",
    link: "https://app.groupme.com/join_group/65223922/6i49RjyJ",
  },
  {
    name: "GERMAN 326 - Rodena-Krasan",
    link: "https://app.groupme.com/join_group/65223935/hmPM8lSc",
  },
  {
    name: "GERMAN 326 - Grzeskowiak",
    link: "https://app.groupme.com/join_group/65224232/N0714qpX",
  },
  {
    name: "GERMAN 326 - Rastalsky",
    link: "https://app.groupme.com/join_group/65224242/9pIbT98k",
  },
  {
    name: "GERMAN 326 - Mills",
    link: "https://app.groupme.com/join_group/65224251/etFNSDeB",
  },
  {
    name: "GERMAN 326 - Federhofer",
    link: "https://app.groupme.com/join_group/65224261/aouzfELd",
  },
  {
    name: "GERMAN 350 - Federhofer",
    link: "https://app.groupme.com/join_group/65224267/kj7iYjOs",
  },
  {
    name: "GERMAN 402 - Gailus",
    link: "https://app.groupme.com/join_group/65224279/rjMoQO7w",
  },
  {
    name: "GERMAN 426 - Rodena-Krasan",
    link: "https://app.groupme.com/join_group/65224286/hMP1yJEa",
  },
  {
    name: "GERMAN 426 - Uritescu-Lombard",
    link: "https://app.groupme.com/join_group/65224295/ESwcmOv5",
  },
  {
    name: "GERMAN 430 - Grzeskowiak",
    link: "https://app.groupme.com/join_group/65224301/01mrZF60",
  },
  {
    name: "GERMAN 449 - Dickinson",
    link: "https://app.groupme.com/join_group/65224310/TIgYQc8N",
  },
  {
    name: "GERMAN 449 - Markovits",
    link: "https://app.groupme.com/join_group/65224323/N7flNS9X",
  },
  {
    name: "GERMAN 505 - Toon",
    link: "https://app.groupme.com/join_group/65224333/jR3tM3df",
  },
  {
    name: "GERMAN 512 - Dabak",
    link: "https://app.groupme.com/join_group/65224344/UY4JzA2w",
  },
  {
    name: "GERMAN 303 - Amrine",
    link: "https://app.groupme.com/join_group/65224354/9ZlMhzNG",
  },
  {
    name: "GERMAN 303 - Hell",
    link: "https://app.groupme.com/join_group/65224362/iym2zg8T",
  },
  {
    name: "GERMAN 303",
    link: "https://app.groupme.com/join_group/65224369/HT1eaN5g",
  },
  {
    name: "GERMAN 303 - Luchina",
    link: "https://app.groupme.com/join_group/65224384/TcwPSvow",
  },
  {
    name: "GERMAN 303 - Toman",
    link: "https://app.groupme.com/join_group/65224394/yqt19YVa",
  },
  {
    name: "GERMAN 304 - Amrine",
    link: "https://app.groupme.com/join_group/65224400/bwh8H4PS",
  },
  {
    name: "GERMAN 312 - Measel",
    link: "https://app.groupme.com/join_group/65224407/rWIdcPWh",
  },
  {
    name: "GERMAN 358 - Rodena-Krasan",
    link: "https://app.groupme.com/join_group/65224413/aar6fnpE",
  },
  {
    name: "GERMAN 389 - Mills",
    link: "https://app.groupme.com/join_group/65224428/lAt17nOB",
  },
  {
    name: "GERMAN 396 - Thurman",
    link: "https://app.groupme.com/join_group/65224438/j0VXh51q",
  },
  {
    name: "GERMAN 416 - Hell",
    link: "https://app.groupme.com/join_group/65224454/UTmn2h6T",
  },
  {
    name: "GERMAN 416 - Ewing",
    link: "https://app.groupme.com/join_group/65224464/HjLfTqve",
  },
  {
    name: "GERMAN 416 - Uritescu-Lombard",
    link: "https://app.groupme.com/join_group/65224474/H8ldZVjD",
  },
  {
    name: "GERMAN 470 - Mills",
    link: "https://app.groupme.com/join_group/65224488/nN82M4N9",
  },
  {
    name: "GERMAN 492 - McIsaac",
    link: "https://app.groupme.com/join_group/65224505/v3643SyQ",
  },
  {
    name: "GREEK 102 - Markus",
    link: "https://app.groupme.com/join_group/65224628/wvI8Lg4F",
  },
  {
    name: "GREEK 103",
    link: "https://app.groupme.com/join_group/65224638/XUfYWBaz",
  },
  {
    name: "GREEK 103 - Berlin",
    link: "https://app.groupme.com/join_group/65224643/DsuqbVYS",
  },
  {
    name: "GREEK 302 - Berlin",
    link: "https://app.groupme.com/join_group/65224652/CdWX3R47",
  },
  {
    name: "GREEK 470 - Ahbel-Rappe",
    link: "https://app.groupme.com/join_group/65224666/ZB5ir32e",
  },
  {
    name: "GREEK 503 - Markus",
    link: "https://app.groupme.com/join_group/65224677/kiEUc7G0",
  },
  {
    name: "GREEK 504",
    link: "https://app.groupme.com/join_group/65224685/6svBHWir",
  },
  {
    name: "GREEK 504 - Berlin",
    link: "https://app.groupme.com/join_group/65224692/9eiQu6Ka",
  },
  {
    name: "GREEK 508 - Berlin",
    link: "https://app.groupme.com/join_group/65224703/YLO64ggr",
  },
  {
    name: "GREEK 515 - Foster",
    link: "https://app.groupme.com/join_group/65224713/7I1M0KWd",
  },
  {
    name: "GREEK 524 - Forsdyke",
    link: "https://app.groupme.com/join_group/65224724/E7KPoZng",
  },
  {
    name: "GREEKMOD 350 - Leontis",
    link: "https://app.groupme.com/join_group/65224732/ClB30YRZ",
  },
  {
    name: "GREEKMOD 102 - Margomenou",
    link: "https://app.groupme.com/join_group/65224742/z0rRr5Wm",
  },
  {
    name: "GREEKMOD 202 - Margomenou",
    link: "https://app.groupme.com/join_group/65224746/0C2YwG2B",
  },
  {
    name: "GREEKMOD 502 - Margomenou",
    link: "https://app.groupme.com/join_group/65224759/25D5CsNw",
  },
  {
    name: "GREEKMOD 504 - Margomenou",
    link: "https://app.groupme.com/join_group/65224766/FD7aPyml",
  },
  {
    name: "GREEKMOD 375 - Margomenou",
    link: "https://app.groupme.com/join_group/65224776/y1iZyfPl",
  },
  {
    name: "GTBOOKS 212 - Aleksic",
    link: "https://app.groupme.com/join_group/65224792/Tw4PmaiI",
  },
  {
    name: "GUITAR 111 - Edwards",
    link: "https://app.groupme.com/join_group/65224806/5wchxtdy",
  },
  {
    name: "GUITAR 112 - Edwards",
    link: "https://app.groupme.com/join_group/65224818/3R4nBoFf",
  },
  {
    name: "HARP 450",
    link: "https://app.groupme.com/join_group/65224828/gUm4VkpN",
  },
  {
    name: "HARP 550",
    link: "https://app.groupme.com/join_group/65224838/WgcJnbN5",
  },
  {
    name: "HBEHED 530 - Schmidt",
    link: "https://app.groupme.com/join_group/65224850/AoD9GEi0",
  },
  {
    name: "HBEHED 597 - Zikmund-Fisher",
    link: "https://app.groupme.com/join_group/65224859/fITKxSGj",
  },
  {
    name: "HEBREW 102",
    link: "https://app.groupme.com/join_group/65224870/w5HlFDTZ",
  },
  {
    name: "HEBREW 102 - Hareven",
    link: "https://app.groupme.com/join_group/65224884/7824ysNB",
  },
  {
    name: "HEBREW 201 - Weizman",
    link: "https://app.groupme.com/join_group/65225047/BVIvSN7D",
  },
  {
    name: "HEBREW 202",
    link: "https://app.groupme.com/join_group/65225061/JVdSAbz0",
  },
  {
    name: "HEBREW 202 - Weizman",
    link: "https://app.groupme.com/join_group/65225070/hIR2mds0",
  },
  {
    name: "HEBREW 202 - Aronson",
    link: "https://app.groupme.com/join_group/65225083/dekruZqj",
  },
  {
    name: "HEBREW 302 - Eubanks Segal",
    link: "https://app.groupme.com/join_group/65225090/PL8Yw7ko",
  },
  {
    name: "HEBREW 206 - Aronson",
    link: "https://app.groupme.com/join_group/65225101/WbMOyZ2h",
  },
  {
    name: "HEBREW 410 - Raz",
    link: "https://app.groupme.com/join_group/65225109/46JbBCKP",
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
    name: "HISTART 221 - Nevett",
    link: "https://app.groupme.com/join_group/65225149/wF6tvq3W",
  },
  {
    name: "HISTART 224 - Doris",
    link: "https://app.groupme.com/join_group/65225157/QGahlhbl",
  },
  {
    name: "HISTART 240 - Sears",
    link: "https://app.groupme.com/join_group/65225171/mJ3RpRaS",
  },
  {
    name: "HISTART 253 - Mays, Das , Chatterjee",
    link: "https://app.groupme.com/join_group/65225180/ctgvIMbI",
  },
  {
    name: "HISTART 272 - Ward",
    link: "https://app.groupme.com/join_group/65225191/Tou3QxCY",
  },
  {
    name: "HISTART 294 - Liu",
    link: "https://app.groupme.com/join_group/65225203/qMC2SjRp",
  },
  {
    name: "HISTART 370 - Lay",
    link: "https://app.groupme.com/join_group/65225229/gbhlKoLo",
  },
  {
    name: "HISTART 382 - Richards",
    link: "https://app.groupme.com/join_group/65225235/dx1qKYaj",
  },
  {
    name: "HISTART 389 - Stone",
    link: "https://app.groupme.com/join_group/65225240/osUAXzes",
  },
  {
    name: "HISTART 392 - Carr",
    link: "https://app.groupme.com/join_group/65225250/eBJDqV7T",
  },
  {
    name: "HISTART 394 - McMahon",
    link: "https://app.groupme.com/join_group/65225267/oPtu4cGh",
  },
  {
    name: "HISTART 394 - Chatterjee",
    link: "https://app.groupme.com/join_group/65225279/hOhFPhLS",
  },
  {
    name: "HISTART 394 - Miller",
    link: "https://app.groupme.com/join_group/65225290/BB5PLikU",
  },
  {
    name: "HISTART 489 - Toman",
    link: "https://app.groupme.com/join_group/65225300/7vbDTj5j",
  },
  {
    name: "HISTART 194 - Timmermann",
    link: "https://app.groupme.com/join_group/65225312/Q9uUR9tz",
  },
  {
    name: "HISTART 253 - Chatterjee",
    link: "https://app.groupme.com/join_group/65225319/jl2jpvhR",
  },
  {
    name: "HISTART 362 - Doris",
    link: "https://app.groupme.com/join_group/65225441/615dgX7P",
  },
  {
    name: "HISTART 371 - Biro",
    link: "https://app.groupme.com/join_group/65225451/lR7eqksJ",
  },
  {
    name: "HISTART 393 - Gear",
    link: "https://app.groupme.com/join_group/65225464/v1xffxwS",
  },
  {
    name: "HISTART 393 - Miller",
    link: "https://app.groupme.com/join_group/65225474/6J5NJrmV",
  },
  {
    name: "HISTART 393 - Ward",
    link: "https://app.groupme.com/join_group/65225480/WcUbRTUd",
  },
  {
    name: "HISTART 393 - McMahon",
    link: "https://app.groupme.com/join_group/65225488/Lg11v3Hq",
  },
  {
    name: "HISTART 393 - Liu",
    link: "https://app.groupme.com/join_group/65225494/lr0O11Ey",
  },
  {
    name: "HISTART 393 - Crasnow",
    link: "https://app.groupme.com/join_group/65225502/dzCj0bKc",
  },
  {
    name: "HISTART 466 - Carr",
    link: "https://app.groupme.com/join_group/65225515/Xt2AS1AX",
  },
  {
    name: "HISTART 497 - Rozas-Krause",
    link: "https://app.groupme.com/join_group/65225524/sc3Nvu3y",
  },
  {
    name: "HISTART 497 - Rife",
    link: "https://app.groupme.com/join_group/65225532/yCdruUgw",
  },
  {
    name: "HISTART 497 - Miller",
    link: "https://app.groupme.com/join_group/65225543/Za4nE0ov",
  },
  {
    name: "HISTART 499 - Lay",
    link: "https://app.groupme.com/join_group/65225553/6wlUhffL",
  },
  {
    name: "HISTART 577 - Chanchani",
    link: "https://app.groupme.com/join_group/65225562/oW67j07h",
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
    name: "HISTORY 217 - Ballinger",
    link: "https://app.groupme.com/join_group/65225600/l8FZoIuC",
  },
  {
    name: "HISTORY 222 - Neis",
    link: "https://app.groupme.com/join_group/65225607/pqm4oEXu",
  },
  {
    name: "HISTORY 229 - Frye",
    link: "https://app.groupme.com/join_group/65225616/DDZJf3rv",
  },
  {
    name: "HISTORY 230 - Akiboh",
    link: "https://app.groupme.com/join_group/65225624/2RYlJhOf",
  },
  {
    name: "HISTORY 230 - Peterson",
    link: "https://app.groupme.com/join_group/65225627/TM1fqxlJ",
  },
  {
    name: "HISTORY 230 - Pinsker",
    link: "https://app.groupme.com/join_group/65225644/ioMakkPx",
  },
  {
    name: "HISTORY 230 - Poteet",
    link: "https://app.groupme.com/join_group/65225655/jSVbqma0",
  },
  {
    name: "HISTORY 230 - Knysh",
    link: "https://app.groupme.com/join_group/65225663/xtgOSsy1",
  },
  {
    name: "HISTORY 230 - Tonomura",
    link: "https://app.groupme.com/join_group/65225667/UT01GayF",
  },
  {
    name: "HISTORY 230 - Wollenberg",
    link: "https://app.groupme.com/join_group/65225680/2jDKixs2",
  },
  {
    name: "HISTORY 230 - Roby",
    link: "https://app.groupme.com/join_group/65225689/m6f7wPB5",
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
    name: "HISTORY 247 - Peterson",
    link: "https://app.groupme.com/join_group/65225825/HNorw32R",
  },
  {
    name: "HISTORY 248 - de la Cruz",
    link: "https://app.groupme.com/join_group/65225835/nXHyERt9",
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
    name: "HISTORY 269 - Neis",
    link: "https://app.groupme.com/join_group/65225890/0TN8iPvM",
  },
  {
    name: "HISTORY 272 - Countryman",
    link: "https://app.groupme.com/join_group/65225897/bZgkNmc0",
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
    name: "HISTORY 304 - Crisostomo",
    link: "https://app.groupme.com/join_group/65225922/eyllrbE5",
  },
  {
    name: "HISTORY 304 - Beckman",
    link: "https://app.groupme.com/join_group/65225929/zmopAJMn",
  },
  {
    name: "HISTORY 307 - Cipa",
    link: "https://app.groupme.com/join_group/65225938/yklz4YRX",
  },
  {
    name: "HISTORY 314 - Cole",
    link: "https://app.groupme.com/join_group/65225954/5MoJasDa",
  },
  {
    name: "HISTORY 319 - Folland",
    link: "https://app.groupme.com/join_group/65225970/4t4C41Dw",
  },
  {
    name: "HISTORY 321 - Israel",
    link: "https://app.groupme.com/join_group/65225979/8wVoL058",
  },
  {
    name: "HISTORY 322 - Spector, Thurman",
    link: "https://app.groupme.com/join_group/65225987/NKqAvgLj",
  },
  {
    name: "HISTORY 325 - Mir",
    link: "https://app.groupme.com/join_group/65225998/0oBMANle",
  },
  {
    name: "HISTORY 326 - Gaggio",
    link: "https://app.groupme.com/join_group/65226008/TCDJzP9B",
  },
  {
    name: "HISTORY 328 - Beltran",
    link: "https://app.groupme.com/join_group/65226014/lj0M00uk",
  },
  {
    name: "HISTORY 328 - Fajardo",
    link: "https://app.groupme.com/join_group/65226022/xVcV1MRL",
  },
  {
    name: "HISTORY 328 - Suny",
    link: "https://app.groupme.com/join_group/65226031/nB8L3j8U",
  },
  {
    name: "HISTORY 328 - Hussein",
    link: "https://app.groupme.com/join_group/65226047/jpYqdcbN",
  },
  {
    name: "HISTORY 328 - Wollenberg",
    link: "https://app.groupme.com/join_group/65226054/AF1qLM4w",
  },
  {
    name: "HISTORY 328 - Sekeryan",
    link: "https://app.groupme.com/join_group/65226059/FUprTa18",
  },
  {
    name: "HISTORY 328 - Roby",
    link: "https://app.groupme.com/join_group/65226196/uxWECZ2v",
  },
  {
    name: "HISTORY 328 - Knysh",
    link: "https://app.groupme.com/join_group/65226208/NIo5RzXC",
  },
  {
    name: "HISTORY 328 - Witgen",
    link: "https://app.groupme.com/join_group/65226221/xd9OYO2b",
  },
  {
    name: "HISTORY 329 - Krinitsky",
    link: "https://app.groupme.com/join_group/65226226/IgeK06RH",
  },
  {
    name: "HISTORY 333 - Maiorova",
    link: "https://app.groupme.com/join_group/65226233/X79BcXpq",
  },
  {
    name: "HISTORY 337 - Simmons",
    link: "https://app.groupme.com/join_group/65226240/jPvr5wnJ",
  },
  {
    name: "HISTORY 348 - Caulfield",
    link: "https://app.groupme.com/join_group/65226249/baKKHNjm",
  },
  {
    name: "HISTORY 352 - Chang",
    link: "https://app.groupme.com/join_group/65226256/KJ9pib9i",
  },
  {
    name: "HISTORY 357 - Jimenez",
    link: "https://app.groupme.com/join_group/65226265/1RM2YsO8",
  },
  {
    name: "HISTORY 358 - Moyer",
    link: "https://app.groupme.com/join_group/65226272/Lo2E6utc",
  },
  {
    name: "HISTORY 370 - Jones",
    link: "https://app.groupme.com/join_group/65226286/bkxQGftS",
  },
  {
    name: "HISTORY 376 - Kazanjian",
    link: "https://app.groupme.com/join_group/65226296/lz0rQxkq",
  },
  {
    name: "HISTORY 397 - Babayan",
    link: "https://app.groupme.com/join_group/65226305/XACR0iW7",
  },
  {
    name: "HISTORY 401 - Moyer",
    link: "https://app.groupme.com/join_group/65226312/wveKS447",
  },
  {
    name: "HISTORY 434 - Suny",
    link: "https://app.groupme.com/join_group/65226321/Cqijl2Wj",
  },
  {
    name: "HISTORY 443 - Cole",
    link: "https://app.groupme.com/join_group/65226332/owuhPk17",
  },
  {
    name: "HISTORY 445 - Hawes",
    link: "https://app.groupme.com/join_group/65226338/YkyebIjB",
  },
  {
    name: "HISTORY 446 - Chang",
    link: "https://app.groupme.com/join_group/65226350/BpXbg3kA",
  },
  {
    name: "HISTORY 449 - Crisostomo",
    link: "https://app.groupme.com/join_group/65226355/36tQ3PB3",
  },
  {
    name: "HISTORY 454 - Lawsin",
    link: "https://app.groupme.com/join_group/65226364/xPxJwwFF",
  },
  {
    name: "HISTORY 468 - Jones",
    link: "https://app.groupme.com/join_group/65226369/Umbpa4tx",
  },
  {
    name: "SPANISH 439 - Fridman",
    link: "https://app.groupme.com/join_group/65227153/FN0lQXam",
  },
  {
    name: "SPANISH 440 - Russo",
    link: "https://app.groupme.com/join_group/65227163/x0RpKKSN",
  },
  {
    name: "SPANISH 443 - Villalobos Ruminott",
    link: "https://app.groupme.com/join_group/65227175/T9V6VqKu",
  },
  {
    name: "SPANISH 445 - Arnall",
    link: "https://app.groupme.com/join_group/65227186/PKnwlZtg",
  },
  {
    name: "SPANISH 450 - Szpiech",
    link: "https://app.groupme.com/join_group/65227196/y887W4hJ",
  },
  {
    name: "SPANISH 473 - Verdesio",
    link: "https://app.groupme.com/join_group/65227205/5A5XD5oJ",
  },
  {
    name: "SPANISH 474 - Ferrari",
    link: "https://app.groupme.com/join_group/65227211/Qzlv1txw",
  },
  {
    name: "SPANISH 474 - Sanjines",
    link: "https://app.groupme.com/join_group/65227227/9hSVvMxV",
  },
  {
    name: "SPANISH 480 - Costa Curras",
    link: "https://app.groupme.com/join_group/65227242/YdBmHVem",
  },
  {
    name: "SPANISH 485 - Verdesio",
    link: "https://app.groupme.com/join_group/65227247/93Qwk3jR",
  },
  {
    name: "SPANISH 487 - Henriksen",
    link: "https://app.groupme.com/join_group/65227260/rXjbjihg",
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
    name: "STATS 425 - Fink",
    link: "https://app.groupme.com/join_group/65227525/aBNXCZHN",
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
    name: "STRATEGY 310 - Wan",
    link: "https://app.groupme.com/join_group/65227659/zvx8KEAm",
  },
  {
    name: "STRATEGY 444 - Gordon",
    link: "https://app.groupme.com/join_group/65227667/7dHNz66u",
  },
  {
    name: "TCHNCLCM 300 - Derbesy",
    link: "https://app.groupme.com/join_group/65227676/FzohVZtq",
  },
  {
    name: "TCHNCLCM 300 - Drake",
    link: "https://app.groupme.com/join_group/65227684/luVvnPsX",
  },
  {
    name: "TCHNCLCM 300 - Fishstrom",
    link: "https://app.groupme.com/join_group/65227691/DqZTndcB",
  },
  {
    name: "TCHNCLCM 300 - Hanson",
    link: "https://app.groupme.com/join_group/65227698/qM3CpWBp",
  },
  {
    name: "TCHNCLCM 300 - Lewis",
    link: "https://app.groupme.com/join_group/65227714/NzZ50V3v",
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
    name: "TCHNCLCM 380 - Himsel-Burcon",
    link: "https://app.groupme.com/join_group/65227853/2zrZEsaj",
  },
  {
    name: "TCHNCLCM 380 - Royston",
    link: "https://app.groupme.com/join_group/65227857/80qPRH7c",
  },
  {
    name: "TCHNCLCM 380 - Wisniewski",
    link: "https://app.groupme.com/join_group/65227869/NqQsd6RU",
  },
  {
    name: "TCHNCLCM 496 - Casper",
    link: "https://app.groupme.com/join_group/65227882/uIddFhmE",
  },
  {
    name: "TCHNCLCM 496 - Fowler",
    link: "https://app.groupme.com/join_group/65227892/OeKdbrrX",
  },
  {
    name: "TCHNCLCM 496 - Khan",
    link: "https://app.groupme.com/join_group/65227903/hni9kVYJ",
  },
  {
    name: "TCHNCLCM 496 - Pavlov",
    link: "https://app.groupme.com/join_group/65227913/bouGv7HQ",
  },
  {
    name: "TCHNCLCM 496 - Royston",
    link: "https://app.groupme.com/join_group/65227920/HARwlUYD",
  },
  {
    name: "TCHNCLCM 497 - Alfano",
    link: "https://app.groupme.com/join_group/65227926/rlfepdl2",
  },
  {
    name: "TCHNCLCM 497 - Hogg Jr",
    link: "https://app.groupme.com/join_group/65227936/HopSa66w",
  },
  {
    name: "TCHNCLCM 497 - Jensen",
    link: "https://app.groupme.com/join_group/65227941/7lkOBWAH",
  },
  {
    name: "TCHNCLCM 497 - Montgomery",
    link: "https://app.groupme.com/join_group/65227950/xHcgKKfA",
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
    name: "THEORY 150",
    link: "https://app.groupme.com/join_group/65227976/vxDYIacv",
  },
  {
    name: "THEORY 150 - Arthur",
    link: "https://app.groupme.com/join_group/65227983/vo66QwTF",
  },
  {
    name: "THEORY 150 - Devries",
    link: "https://app.groupme.com/join_group/65227993/sVteG6nj",
  },
  {
    name: "THEORY 150 - Hall",
    link: "https://app.groupme.com/join_group/65228000/UAje5D9p",
  },
  {
    name: "THEORY 150 - Hannaford",
    link: "https://app.groupme.com/join_group/65228013/mTfLCQYC",
  },
  {
    name: "THEORY 150 - Rusch",
    link: "https://app.groupme.com/join_group/65228024/PWGs4pPT",
  },
  {
    name: "THEORY 150 - Vojcic",
    link: "https://app.groupme.com/join_group/65228032/28YRiZpO",
  },
  {
    name: "THEORY 212 - Tran",
    link: "https://app.groupme.com/join_group/65228043/3RKoAxg5",
  },
  {
    name: "THEORY 236 - Fournier",
    link: "https://app.groupme.com/join_group/65228054/fqqIXTCg",
  },
  {
    name: "THEORY 238 - Mukherji",
    link: "https://app.groupme.com/join_group/65228063/C75fmINW",
  },
  {
    name: "THEORY 239 - Petty",
    link: "https://app.groupme.com/join_group/65228070/Fv4ap0DQ",
  },
  {
    name: "THEORY 250 - Knoedler",
    link: "https://app.groupme.com/join_group/65228183/NAAPK7VE",
  },
  {
    name: "THEORY 430 - Martin",
    link: "https://app.groupme.com/join_group/65228191/ChqKdjeg",
  },
  {
    name: "THEORY 433 - Vojcic",
    link: "https://app.groupme.com/join_group/65228197/ge51hwmb",
  },
  {
    name: "THEORY 443 - Satyendra",
    link: "https://app.groupme.com/join_group/65228205/TbS4gBz0",
  },
  {
    name: "THEORY 460 - Hannaford",
    link: "https://app.groupme.com/join_group/65228212/ZGKMfiWf",
  },
  {
    name: "THEORY 460 - Mukherji",
    link: "https://app.groupme.com/join_group/65228224/oPAhMG1B",
  },
  {
    name: "THEORY 461 - Korsyn",
    link: "https://app.groupme.com/join_group/65228237/VNHmSf5q",
  },
  {
    name: "THTREMUS 101 - Gomez",
    link: "https://app.groupme.com/join_group/65228245/Lj4AqzrR",
  },
  {
    name: "THTREMUS 102 - Traister",
    link: "https://app.groupme.com/join_group/65228250/nyW7fCAN",
  },
  {
    name: "THTREMUS 110 - Maylie",
    link: "https://app.groupme.com/join_group/65228264/j3NaDMya",
  },
  {
    name: "THTREMUS 182 - Cantor",
    link: "https://app.groupme.com/join_group/65228275/oOy9WHUm",
  },
  {
    name: "THTREMUS 182 - Packard",
    link: "https://app.groupme.com/join_group/65228284/oOr94Um6",
  },
  {
    name: "THTREMUS 211 - Westlake",
    link: "https://app.groupme.com/join_group/65228292/4zFwf484",
  },
  {
    name: "THTREMUS 227 - Garcia",
    link: "https://app.groupme.com/join_group/65228301/9RExBmyk",
  },
  {
    name: "THTREMUS 233",
    link: "https://app.groupme.com/join_group/65228310/xoyT3RC7",
  },
  {
    name: "THTREMUS 240 - Murphy",
    link: "https://app.groupme.com/join_group/65228318/dLy8mwMq",
  },
  {
    name: "THTREMUS 245 - Uffner",
    link: "https://app.groupme.com/join_group/65228325/HpwN76wG",
  },
  {
    name: "THTREMUS 250 - Decker",
    link: "https://app.groupme.com/join_group/65228337/N0xd6iJV",
  },
  {
    name: "THTREMUS 256 - Murphy",
    link: "https://app.groupme.com/join_group/65228350/eEw4k3U2",
  },
  {
    name: "THTREMUS 271 - Kassabova",
    link: "https://app.groupme.com/join_group/65228359/yFH0gvqL",
  },
  {
    name: "THTREMUS 274 - Traister",
    link: "https://app.groupme.com/join_group/65228367/UYQzCd4I",
  },
  {
    name: "THTREMUS 285",
    link: "https://app.groupme.com/join_group/65228378/hwh2XEtU",
  },
  {
    name: "THTREMUS 291 - Moreland",
    link: "https://app.groupme.com/join_group/65228384/rvifnBrb",
  },
  {
    name: "THTREMUS 322 - Hughes",
    link: "https://app.groupme.com/join_group/65228390/d3JECFVy",
  },
  {
    name: "THTREMUS 323 - Westlake",
    link: "https://app.groupme.com/join_group/65228399/wARSa8e2",
  },
  {
    name: "THTREMUS 325 - Hooker",
    link: "https://app.groupme.com/join_group/65228409/9BkhQ5mg",
  },
  {
    name: "THTREMUS 327 - Packard",
    link: "https://app.groupme.com/join_group/65228419/i8zr1ijl",
  },
  {
    name: "THTREMUS 328",
    link: "https://app.groupme.com/join_group/65228436/sUOATMJX",
  },
  {
    name: "THTREMUS 345",
    link: "https://app.groupme.com/join_group/65228542/Ba5NLiLt",
  },
  {
    name: "THTREMUS 350 - Lindsay",
    link: "https://app.groupme.com/join_group/65228553/7iAh8TDr",
  },
  {
    name: "THTREMUS 351",
    link: "https://app.groupme.com/join_group/65228563/peRqpCB7",
  },
  {
    name: "THTREMUS 352",
    link: "https://app.groupme.com/join_group/65228571/wJfRrrac",
  },
  {
    name: "THTREMUS 360 - Judge",
    link: "https://app.groupme.com/join_group/65228585/PIAVJf9J",
  },
  {
    name: "THTREMUS 370 - Myers",
    link: "https://app.groupme.com/join_group/65228597/yyTtFKhv",
  },
  {
    name: "THTREMUS 371 - Tulip",
    link: "https://app.groupme.com/join_group/65228601/TSMnUzRd",
  },
  {
    name: "THTREMUS 385 - Cuyler",
    link: "https://app.groupme.com/join_group/65228612/EcYY5ruc",
  },
  {
    name: "THTREMUS 386",
    link: "https://app.groupme.com/join_group/65228616/1JEAmfP2",
  },
  {
    name: "THTREMUS 387",
    link: "https://app.groupme.com/join_group/65228628/APknthM0",
  },
  {
    name: "THTREMUS 388",
    link: "https://app.groupme.com/join_group/65229651/r1dYa7a0",
  },
  {
    name: "THTREMUS 395 - Moreland",
    link: "https://app.groupme.com/join_group/65229661/dPg4in7R",
  },
  {
    name: "THTREMUS 399",
    link: "https://app.groupme.com/join_group/65229670/LMyFRmwy",
  },
  {
    name: "THTREMUS 399 - Cantor",
    link: "https://app.groupme.com/join_group/65229688/SjEO1CiE",
  },
  {
    name: "THTREMUS 399 - Casas",
    link: "https://app.groupme.com/join_group/65229698/kmbJFfIM",
  },
  {
    name: "THTREMUS 399 - Eaton",
    link: "https://app.groupme.com/join_group/65229705/FMLOUJPh",
  },
  {
    name: "THTREMUS 399 - Hooker",
    link: "https://app.groupme.com/join_group/65229715/7k3iRJyR",
  },
  {
    name: "THTREMUS 399 - Mendeloff",
    link: "https://app.groupme.com/join_group/65229723/5VXDxbKL",
  },
  {
    name: "THTREMUS 399 - Oliver",
    link: "https://app.groupme.com/join_group/65229729/EG2etu5C",
  },
  {
    name: "THTREMUS 399 - Traister",
    link: "https://app.groupme.com/join_group/65229736/E989wWa0",
  },
  {
    name: "THTREMUS 403 - Myers",
    link: "https://app.groupme.com/join_group/65229759/6A34YUGf",
  },
  {
    name: "THTREMUS 404 - Myers",
    link: "https://app.groupme.com/join_group/65229762/peL3qqOY",
  },
  {
    name: "THTREMUS 426 - Cuyler",
    link: "https://app.groupme.com/join_group/65229770/48MOCgXs",
  },
  {
    name: "THTREMUS 429 - Casas",
    link: "https://app.groupme.com/join_group/65229780/oW8XTNhV",
  },
  {
    name: "THTREMUS 438 - Cuyler",
    link: "https://app.groupme.com/join_group/65229791/zkErM3yN",
  },
  {
    name: "THTREMUS 443 - Tulip",
    link: "https://app.groupme.com/join_group/65229799/zAE5FAN3",
  },
  {
    name: "THTREMUS 445",
    link: "https://app.groupme.com/join_group/65229810/RpNyqMAD",
  },
  {
    name: "THTREMUS 446 - Uffner",
    link: "https://app.groupme.com/join_group/65229814/rhbTCChc",
  },
  {
    name: "THTREMUS 451",
    link: "https://app.groupme.com/join_group/65229821/fSEG9MvP",
  },
  {
    name: "THTREMUS 461",
    link: "https://app.groupme.com/join_group/65229830/vmguzuLX",
  },
  {
    name: "THTREMUS 463 - Judge",
    link: "https://app.groupme.com/join_group/65229841/3hyaNsaa",
  },
  {
    name: "THTREMUS 464",
    link: "https://app.groupme.com/join_group/65229850/S78dPcyX",
  },
  {
    name: "THTREMUS 470",
    link: "https://app.groupme.com/join_group/65229860/57gJY6rp",
  },
  {
    name: "THTREMUS 482 - Packard, Lindsay",
    link: "https://app.groupme.com/join_group/65229871/mDXvsa7G",
  },
  {
    name: "THTREMUS 495",
    link: "https://app.groupme.com/join_group/65229879/mzbHRFh2",
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
    name: "TO 302",
    link: "https://app.groupme.com/join_group/65229914/nNAoZa7v",
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
    name: "TO 420",
    link: "https://app.groupme.com/join_group/65229955/spHV8Tef",
  },
  {
    name: "TO 421 - Roy",
    link: "https://app.groupme.com/join_group/65229964/CG7IxFye",
  },
  {
    name: "TO 428 - Wu",
    link: "https://app.groupme.com/join_group/65230071/Tk4gFb0D",
  },
  {
    name: "TO 433 - Kumar",
    link: "https://app.groupme.com/join_group/65230081/w0lSWCD4",
  },
  {
    name: "TO 435 - Leider",
    link: "https://app.groupme.com/join_group/65230092/jNjiSSSz",
  },
  {
    name: "TO 448 - Svaan",
    link: "https://app.groupme.com/join_group/65230100/TY52J9Tf",
  },
  {
    name: "TO 465 - Nelson",
    link: "https://app.groupme.com/join_group/65230111/7c4c1BQr",
  },
  {
    name: "TO 470 - Jasin",
    link: "https://app.groupme.com/join_group/65230121/DFcOjJPs",
  },
  {
    name: "TURKISH 102 - Sevinc",
    link: "https://app.groupme.com/join_group/65230129/Y5S3j0vw",
  },
  {
    name: "TURKISH 202 - Sevinc",
    link: "https://app.groupme.com/join_group/65230137/70mnZbqK",
  },
  {
    name: "UARTS 250",
    link: "https://app.groupme.com/join_group/65230144/x4NsyxZJ",
  },
  {
    name: "UARTS 460",
    link: "https://app.groupme.com/join_group/65230156/aIpPP39K",
  },
  {
    name: "UC 101 - Nguyen",
    link: "https://app.groupme.com/join_group/65230166/tnKuFC7X",
  },
  {
    name: "UC 110 - Wallace",
    link: "https://app.groupme.com/join_group/65230173/nAZl4tYP",
  },
  {
    name: "UC 151 - Joiner",
    link: "https://app.groupme.com/join_group/65230180/75F7nqAU",
  },
  {
    name: "UC 202 - Penry",
    link: "https://app.groupme.com/join_group/65230184/lJtEw1G0",
  },
  {
    name: "UC 204 - Moreno, Groller",
    link: "https://app.groupme.com/join_group/65230192/s9TxxXcE",
  },
  {
    name: "UC 214 - Johnson",
    link: "https://app.groupme.com/join_group/65230203/aav82xTQ",
  },
  {
    name: "UC 214 - Price",
    link: "https://app.groupme.com/join_group/65230209/7cyOOJCZ",
  },
  {
    name: "UC 252 - Flint",
    link: "https://app.groupme.com/join_group/65230220/zQfbece9",
  },
  {
    name: "UC 280 - Ferrez",
    link: "https://app.groupme.com/join_group/65230226/mhoxmf3J",
  },
  {
    name: "UC 280 - Knox",
    link: "https://app.groupme.com/join_group/65230232/sNpJZBCf",
  },
  {
    name: "UC 302",
    link: "https://app.groupme.com/join_group/65230247/TaNpiMAf",
  },
  {
    name: "UC 310 - Kantaris",
    link: "https://app.groupme.com/join_group/65230255/AhYdjdcs",
  },
  {
    name: "UC 380 - Nemtanu",
    link: "https://app.groupme.com/join_group/65230265/oT4aWVqi",
  },
  {
    name: "UC 390 - Espinoza",
    link: "https://app.groupme.com/join_group/65230273/eqpQ6HLO",
  },
  {
    name: "UC 402",
    link: "https://app.groupme.com/join_group/65230280/pL2KxLam",
  },
  {
    name: "UC 402 - Dye, Moreno",
    link: "https://app.groupme.com/join_group/65230288/Otk5JPt9",
  },
  {
    name: "UC 403",
    link: "https://app.groupme.com/join_group/65230305/KfN43JDZ",
  },
  {
    name: "UC 410 - Kantaris",
    link: "https://app.groupme.com/join_group/65230317/d6hK2usO",
  },
  {
    name: "UKR 152 - Bondarenko",
    link: "https://app.groupme.com/join_group/65230326/TZ4kywRY",
  },
  {
    name: "UKR 252 - Bondarenko",
    link: "https://app.groupme.com/join_group/65230334/XAupWptF",
  },
  {
    name: "UKR 352 - Rogovyk",
    link: "https://app.groupme.com/join_group/65230343/rYh5aPfd",
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
    name: "VIOLA 450",
    link: "https://app.groupme.com/join_group/65230469/lzy53Wn2",
  },
  {
    name: "VIOLIN 450",
    link: "https://app.groupme.com/join_group/65230479/2PLJk9jH",
  },
  {
    name: "VIOLIN 460 - Schotten",
    link: "https://app.groupme.com/join_group/65230485/MgvJIiZ6",
  },
  {
    name: "VOICE 111 - Grosvenor",
    link: "https://app.groupme.com/join_group/65230494/RC86tA1K",
  },
  {
    name: "VOICE 111 - Worrell",
    link: "https://app.groupme.com/join_group/65230501/PQ1dLw9a",
  },
  {
    name: "VOICELIT 202 - Cheek",
    link: "https://app.groupme.com/join_group/65230505/ce2SRHGK",
  },
  {
    name: "VOICELIT 203 - Rusche, Cheek",
    link: "https://app.groupme.com/join_group/65230510/U4iduV5O",
  },
  {
    name: "VOICELIT 410",
    link: "https://app.groupme.com/join_group/65230522/n9LaMDR1",
  },
  {
    name: "VOICELIT 450 - Herseth",
    link: "https://app.groupme.com/join_group/65230525/dcHK2RUg",
  },
  {
    name: "VOICELIT 460 - Olsen",
    link: "https://app.groupme.com/join_group/65230531/cwlPx0uB",
  },
  {
    name: "VOICELIT 460 - Severtson",
    link: "https://app.groupme.com/join_group/65230540/u3dKgZzH",
  },
  {
    name: "VOICELIT 491 - Katz",
    link: "https://app.groupme.com/join_group/65230544/VpfY8VKs",
  },
  {
    name: "WELLNESS 200 - Savvidou",
    link: "https://app.groupme.com/join_group/65230550/464QWe1v",
  },
  {
    name: "WELLNESS 220 - Obrecht",
    link: "https://app.groupme.com/join_group/65230556/rxW3zhkn",
  },
  {
    name: "WELLNESS 412 - Matuza",
    link: "https://app.groupme.com/join_group/65230564/60uqWMHM",
  },
  {
    name: "WGS 150 - Aristarkhova",
    link: "https://app.groupme.com/join_group/65230573/eojtysAq",
  },
  {
    name: "WGS 150 - Lawsin",
    link: "https://app.groupme.com/join_group/65230580/Ky6NTD30",
  },
  {
    name: "WGS 150 - Tsoffar",
    link: "https://app.groupme.com/join_group/65230594/sA8eLibz",
  },
  {
    name: "WGS 213 - Tonomura",
    link: "https://app.groupme.com/join_group/65230604/Y2Kaw2fA",
  },
  {
    name: "WGS 213 - Zemgulys",
    link: "https://app.groupme.com/join_group/65230614/kSHMkDSC",
  },
  {
    name: "WGS 214 - Ensor",
    link: "https://app.groupme.com/join_group/65230624/elCAa5hy",
  },
  {
    name: "WGS 220 - Gabriel",
    link: "https://app.groupme.com/join_group/65230632/9alSPZRN",
  },
  {
    name: "WGS 224 - Neis",
    link: "https://app.groupme.com/join_group/65230647/MofhiMKc",
  },
  {
    name: "WGS 235 - Cable",
    link: "https://app.groupme.com/join_group/65230658/LltoUihC",
  },
  {
    name: "WGS 240 - Dumes",
    link: "https://app.groupme.com/join_group/65230664/bYKBNssJ",
  },
  {
    name: "WGS 243 - Calvo-Quiros",
    link: "https://app.groupme.com/join_group/65230669/1bTiCc1X",
  },
  {
    name: "WGS 265 - Bolivar",
    link: "https://app.groupme.com/join_group/65230784/hFcx7VBG",
  },
  {
    name: "WGS 270 - Peterson",
    link: "https://app.groupme.com/join_group/65230806/Klk76DNl",
  },
  {
    name: "WGS 291",
    link: "https://app.groupme.com/join_group/65230814/ZMsZgdRs",
  },
  {
    name: "WGS 293 - Mendoza",
    link: "https://app.groupme.com/join_group/65230822/y7drOOLg",
  },
  {
    name: "WGS 311 - Alexy",
    link: "https://app.groupme.com/join_group/65230829/bIiIaygb",
  },
  {
    name: "WGS 313 - Dhar",
    link: "https://app.groupme.com/join_group/65230839/qvr39wHd",
  },
  {
    name: "WGS 314 - Kolenda-Mason",
    link: "https://app.groupme.com/join_group/65230844/hfj9Q3Mi",
  },
  {
    name: "WGS 315 - Murphy",
    link: "https://app.groupme.com/join_group/65230847/wjjc5eMj",
  },
  {
    name: "WGS 319 - Simmons",
    link: "https://app.groupme.com/join_group/65230859/QaWknbHi",
  },
  {
    name: "WGS 330 - Dhar",
    link: "https://app.groupme.com/join_group/65230870/zthNZ8CT",
  },
  {
    name: "WGS 330 - Mendoza",
    link: "https://app.groupme.com/join_group/65230880/H4SJKHgv",
  },
  {
    name: "WGS 331 - Gabriel",
    link: "https://app.groupme.com/join_group/65230889/0zBvU8ps",
  },
  {
    name: "WGS 337 - Simmons",
    link: "https://app.groupme.com/join_group/65230899/45sQnGxQ",
  },
  {
    name: "WGS 341 - Eubanks Segal",
    link: "https://app.groupme.com/join_group/65230905/Gu0NZNBX",
  },
  {
    name: "WGS 343 - Karem Albrecht",
    link: "https://app.groupme.com/join_group/65230916/uZJFWHlw",
  },
  {
    name: "WGS 344 - Andre, Brissey",
    link: "https://app.groupme.com/join_group/65230929/QaLQQq5e",
  },
  {
    name: "WGS 345 - Ali",
    link: "https://app.groupme.com/join_group/65230938/YdEKBGgu",
  },
  {
    name: "WGS 345 - Dhar",
    link: "https://app.groupme.com/join_group/65230950/V9m0aKWL",
  },
  {
    name: "WGS 347 - Sweeney",
    link: "https://app.groupme.com/join_group/65230960/brjTztHY",
  },
  {
    name: "WGS 351 - Welch",
    link: "https://app.groupme.com/join_group/65230969/kiFYB7MY",
  },
  {
    name: "WGS 363 - Lawsin",
    link: "https://app.groupme.com/join_group/65230983/CiF99lBz",
  },
  {
    name: "WGS 370 - Jones",
    link: "https://app.groupme.com/join_group/65230988/Jj4BvVMT",
  },
  {
    name: "WGS 389 - Cole",
    link: "https://app.groupme.com/join_group/65231004/2fpNYeTN",
  },
  {
    name: "WGS 397 - Babayan",
    link: "https://app.groupme.com/join_group/65231011/q2bNyML6",
  },
  {
    name: "WGS 400 - Johnson, Harris",
    link: "https://app.groupme.com/join_group/65231019/MReTPmvC",
  },
  {
    name: "WGS 410 - Peterson",
    link: "https://app.groupme.com/join_group/65231025/U0ds7j4Q",
  },
  {
    name: "WGS 411 - Hubbs",
    link: "https://app.groupme.com/join_group/65231038/byl3SWJC",
  },
  {
    name: "WGS 431 - Beischel",
    link: "https://app.groupme.com/join_group/65231048/9y4h9p2E",
  },
  {
    name: "WGS 433 - Kelow-Bennett",
    link: "https://app.groupme.com/join_group/65231127/uQzdjucj",
  },
  {
    name: "WGS 434 - Brissey",
    link: "https://app.groupme.com/join_group/65231133/mBR08kZZ",
  },
  {
    name: "WGS 435 - Jackson",
    link: "https://app.groupme.com/join_group/65231144/Bi4mWqO6",
  },
  {
    name: "WGS 435 - Merrill",
    link: "https://app.groupme.com/join_group/65231153/f5b8hc7t",
  },
  {
    name: "WGS 435 - Rai",
    link: "https://app.groupme.com/join_group/65231159/jnUTfKjz",
  },
  {
    name: "WGS 435 - Saluk",
    link: "https://app.groupme.com/join_group/65231161/LYdfkKNW",
  },
  {
    name: "WGS 442 - McClelland",
    link: "https://app.groupme.com/join_group/65231168/MeqLbHSx",
  },
  {
    name: "WGS 447 - McGann",
    link: "https://app.groupme.com/join_group/65231175/kcWZmWYD",
  },
  {
    name: "WGS 451 - Smock",
    link: "https://app.groupme.com/join_group/65231182/6GZbA3Vk",
  },
  {
    name: "WGS 483 - Cortina",
    link: "https://app.groupme.com/join_group/65231185/e6Dq4Rmv",
  },
  {
    name: "WRITING 100",
    link: "https://app.groupme.com/join_group/65231188/R4rDM2hR",
  },
  {
    name: "WRITING 100 - Conway",
    link: "https://app.groupme.com/join_group/65231193/9ZTesG12",
  },
  {
    name: "WRITING 200 - Babcock",
    link: "https://app.groupme.com/join_group/65231195/DuOYSOhl",
  },
  {
    name: "WRITING 200 - Cassel",
    link: "https://app.groupme.com/join_group/65231207/WXlLg88w",
  },
  {
    name: "WRITING 200 - Hetzel",
    link: "https://app.groupme.com/join_group/65231211/wE4Lfovw",
  },
  {
    name: "WRITING 200 - Li",
    link: "https://app.groupme.com/join_group/65231217/nH6NMqfp",
  },
  {
    name: "WRITING 201 - Beal",
    link: "https://app.groupme.com/join_group/65231225/eWwikTCL",
  },
  {
    name: "WRITING 201 - Karczynski",
    link: "https://app.groupme.com/join_group/65231236/7NuCtepL",
  },
  {
    name: "WRITING 201 - Tell",
    link: "https://app.groupme.com/join_group/65231248/2yPOPxOw",
  },
  {
    name: "WRITING 220 - Brancho",
    link: "https://app.groupme.com/join_group/65231258/SU53wLnl",
  },
  {
    name: "WRITING 220 - Hetzel",
    link: "https://app.groupme.com/join_group/65231261/GpRlCPjP",
  },
  {
    name: "WRITING 229 - Li",
    link: "https://app.groupme.com/join_group/65231270/548eK5Y8",
  },
  {
    name: "WRITING 300 - Sessolo",
    link: "https://app.groupme.com/join_group/65231276/EgEUuYgm",
  },
  {
    name: "WRITING 305 - Cassel",
    link: "https://app.groupme.com/join_group/65231284/tGd0dWTR",
  },
  {
    name: "WRITING 305 - Sano",
    link: "https://app.groupme.com/join_group/65231286/tE3vtif4",
  },
  {
    name: "WRITING 340 - Li",
    link: "https://app.groupme.com/join_group/65231298/4MBn1jcQ",
  },
  {
    name: "WRITING 350 - Cicciarelli",
    link: "https://app.groupme.com/join_group/65231304/0IQ6LBaP",
  },
  {
    name: "WRITING 420 - Babcock",
    link: "https://app.groupme.com/join_group/65231407/rSrVg7fY",
  },
  {
    name: "WRITING 420 - Manis",
    link: "https://app.groupme.com/join_group/65231414/1qodDCOq",
  },
  {
    name: "WRITING 420 - McDaniel",
    link: "https://app.groupme.com/join_group/65231422/SvppNzSW",
  },
  {
    name: "YIDDISH 102 - Luchina",
    link: "https://app.groupme.com/join_group/65231430/wdgvSkml",
  },
  {
    name: "YIDDISH 202",
    link: "https://app.groupme.com/join_group/65231439/D7PLnuRY",
  },
  {
    name: "YIDDISH 202 - Luchina",
    link: "https://app.groupme.com/join_group/65231448/92ifwk8U",
  },
  {
    name: "YIDDISH 432 - Luchina",
    link: "https://app.groupme.com/join_group/65231453/1a9ITlr0",
  },
  {
    name: "ANTHRCUL 337 - Mueggler",
    link: "https://app.groupme.com/join_group/65238312/ce4QegX4",
  },
  {
    name: "ARABAM 311 - Crasnow",
    link: "https://app.groupme.com/join_group/65238329/9XwSNpZZ",
  },
  {
    name: "ARCH 507",
    link: "https://app.groupme.com/join_group/65238342/DzikwNZP",
  },
  {
    name: "ARCH 509 - Maigret",
    link: "https://app.groupme.com/join_group/65238354/Wf2RyxfV",
  },
  {
    name: "ARTDES 399 - Metsker",
    link: "https://app.groupme.com/join_group/65238361/IPq69XRQ",
  },
  {
    name: "ARTSADMN 406 - Dworkin",
    link: "https://app.groupme.com/join_group/65238379/uikELBIF",
  },
  {
    name: "ASIAN 261 - Rebull",
    link: "https://app.groupme.com/join_group/65238402/KcWyCVNb",
  },
  {
    name: "ASIAN 465 - Carr",
    link: "https://app.groupme.com/join_group/65238411/jNpsOaGY",
  },
  {
    name: "ASIAN 480 - Nornes",
    link: "https://app.groupme.com/join_group/65238419/Cr55bLDr",
  },
  {
    name: "ASIANLAN 126",
    link: "https://app.groupme.com/join_group/65238431/fWeZxKNu",
  },
  {
    name: "AT 305 - Lepley",
    link: "https://app.groupme.com/join_group/65238434/qdwr6szy",
  },
  {
    name: "AUTO 533 - Dasgupta",
    link: "https://app.groupme.com/join_group/65238443/md3jIoUd",
  },
  {
    name: "BA 553 - Spreitzer",
    link: "https://app.groupme.com/join_group/65238458/PL2fbk8L",
  },
  {
    name: "BCOM 369 - Crawford",
    link: "https://app.groupme.com/join_group/65238467/k9OpycN2",
  },
  {
    name: "BIOLCHEM 403 - Nichols",
    link: "https://app.groupme.com/join_group/65238477/Uv1dS9Xd",
  },
  {
    name: "BIOSTAT 522",
    link: "https://app.groupme.com/join_group/65238490/wdsS0aBK",
  },
  {
    name: "BL 507 - Kress",
    link: "https://app.groupme.com/join_group/65238503/oE0h00zk",
  },
  {
    name: "CDB 450 - Hortsch",
    link: "https://app.groupme.com/join_group/65238517/nH8nK2w0",
  },
  {
    name: "CEE 574 - Li",
    link: "https://app.groupme.com/join_group/65238531/Gye1fgy4",
  },
  {
    name: "CHE 344 - Singh",
    link: "https://app.groupme.com/join_group/65238540/R2RE3g0o",
  },
  {
    name: "CHE 460 - Tadd",
    link: "https://app.groupme.com/join_group/65238545/1zXUwtsQ",
  },
  {
    name: "CHEM 247 - Bailey",
    link: "https://app.groupme.com/join_group/65238553/K9og6zLO",
  },
  {
    name: "CHEM 580 - Kubarych",
    link: "https://app.groupme.com/join_group/65238576/RTbiWtxB",
  },
  {
    name: "CLCIV 125 - Schironi",
    link: "https://app.groupme.com/join_group/65238591/yOfXMiEt",
  },
  {
    name: "CLCIV 253 - Mays, Chatterjee, Das",
    link: "https://app.groupme.com/join_group/65238599/5alEkjAF",
  },
  {
    name: "CLCIV 379 - Stone",
    link: "https://app.groupme.com/join_group/65238613/gHMrzjZw",
  },
  {
    name: "CLIMATE 463 - Samson",
    link: "https://app.groupme.com/join_group/65238621/i2cHyx0B",
  },
  {
    name: "CLIMATE 323",
    link: "https://app.groupme.com/join_group/65238630/JXwiF63A",
  },
  {
    name: "COMM 431 - Collings",
    link: "https://app.groupme.com/join_group/65238644/ejz4dFwb",
  },
  {
    name: "COMP 516 - Santos",
    link: "https://app.groupme.com/join_group/65238660/9xkFvqbG",
  },
  {
    name: "CONDUCT 503 - Haithcock",
    link: "https://app.groupme.com/join_group/65238671/S6oVIPxw",
  },
  {
    name: "DANCE 595 - Croft",
    link: "https://app.groupme.com/join_group/65238687/LnKO7pVF",
  },
  {
    name: "DANCE 412",
    link: "https://app.groupme.com/join_group/65238699/wpsksar5",
  },
  {
    name: "DATASCI 503 - Zhu",
    link: "https://app.groupme.com/join_group/65238706/0rSehtkl",
  },
  {
    name: "DIGITAL 200 - Li",
    link: "https://app.groupme.com/join_group/65238719/AhvbPHpY",
  },
  {
    name: "EARTH 122 - Samson",
    link: "https://app.groupme.com/join_group/65238733/zMpLHt66",
  },
  {
    name: "EARTH 477 - Cruz Da Silva Castro",
    link: "https://app.groupme.com/join_group/65238747/BXHCAaKz",
  },
  {
    name: "EAS 539 - Currie",
    link: "https://app.groupme.com/join_group/65238752/4EwAOzCP",
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
    name: "EDUC 446 - Pasque",
    link: "https://app.groupme.com/join_group/65238787/8Tjp4IOr",
  },
  {
    name: "EDUC 304 - Waychunas",
    link: "https://app.groupme.com/join_group/65238793/Sjxy2WZr",
  },
  {
    name: "EDUC 390 - Dyer",
    link: "https://app.groupme.com/join_group/65238800/VGsILX5D",
  },
  {
    name: "EDUC 571 - Stanzler",
    link: "https://app.groupme.com/join_group/65238810/EjKUtSJb",
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
    name: "EECS 482 - Kapritsos, Kasikci, Chen",
    link: "https://app.groupme.com/join_group/65238952/Zz3me3k2",
  },
  {
    name: "EECS 514 - Gianchandani",
    link: "https://app.groupme.com/join_group/65238959/m5afOkP4",
  },
  {
    name: "EECS 586 - Lee",
    link: "https://app.groupme.com/join_group/65238964/qWkloH6r",
  },
  {
    name: "EHS 594 - Batterman",
    link: "https://app.groupme.com/join_group/65238972/1SR7Ao0U",
  },
  {
    name: "ELI 393 - Kato",
    link: "https://app.groupme.com/join_group/65238984/sdtn9BmE",
  },
  {
    name: "ENGLISH 320 - Balachander",
    link: "https://app.groupme.com/join_group/65238994/9i9jf6fs",
  },
  {
    name: "ENGLISH 124 - Hagler",
    link: "https://app.groupme.com/join_group/65239010/9H2HyoLa",
  },
  {
    name: "EECS 281",
    link: "https://app.groupme.com/join_group/65239222/9SxBEusz",
  },
  {
    name: "ENGLISH 125 - Parra Garcia",
    link: "https://app.groupme.com/join_group/65239230/4AnEAqEI",
  },
  {
    name: "ENGLISH 125 - Williams",
    link: "https://app.groupme.com/join_group/65239242/KNiOHha2",
  },
  {
    name: "ENGLISH 125 - Tunstall",
    link: "https://app.groupme.com/join_group/65239258/AqgObDJG",
  },
  {
    name: "ENGLISH 225 - Tessier",
    link: "https://app.groupme.com/join_group/65239270/X47gvoiN",
  },
  {
    name: "ENGLISH 140 - Najita",
    link: "https://app.groupme.com/join_group/65239382/GW98W0kK",
  },
  {
    name: "ENGLISH 428 - Walker",
    link: "https://app.groupme.com/join_group/65239393/tBIWDM1W",
  },
  {
    name: "ENGR 371 - Guo",
    link: "https://app.groupme.com/join_group/65239402/VvedSNUW",
  },
  {
    name: "ENGR 599 - Ku",
    link: "https://app.groupme.com/join_group/65239416/V13QEPDM",
  },
  {
    name: "ENS 181 - Collier",
    link: "https://app.groupme.com/join_group/65239425/fOMuLq1Q",
  },
  {
    name: "ENS 467",
    link: "https://app.groupme.com/join_group/65239437/rHD5tbmx",
  },
  {
    name: "ENTR 409 - Fortino",
    link: "https://app.groupme.com/join_group/65239453/Dho7umea",
  },
  {
    name: "ENVIRON 437 - Becker",
    link: "https://app.groupme.com/join_group/65239575/fOROYa0g",
  },
  {
    name: "EPID 516 - Smith",
    link: "https://app.groupme.com/join_group/65239588/AmpYOFSv",
  },
  {
    name: "FIN 580",
    link: "https://app.groupme.com/join_group/65239597/0kFq8odQ",
  },
  {
    name: "GERMAN 231",
    link: "https://app.groupme.com/join_group/65239607/hK7bjCON",
  },
  {
    name: "GREEK 402 - Ready",
    link: "https://app.groupme.com/join_group/65239616/Ko6gtcG4",
  },
  {
    name: "HISTART 342 - Willette",
    link: "https://app.groupme.com/join_group/65239748/ZmhFVhkB",
  },
  {
    name: "HISTART 351 - Willette",
    link: "https://app.groupme.com/join_group/65239764/TnG40gZT",
  },
  {
    name: "HISTORY 230 - Witgen",
    link: "https://app.groupme.com/join_group/65239777/dWECoAqR",
  },
  {
    name: "HISTORY 328",
    link: "https://app.groupme.com/join_group/65239787/PpkOzgP1",
  },
  {
    name: "STATS 425 - Chan",
    link: "https://app.groupme.com/join_group/65239798/NZOWt3sG",
  },
  {
    name: "TCHNCLCM 380 - Hanson",
    link: "https://app.groupme.com/join_group/65239817/owEkrsD7",
  },
  {
    name: "THTREMUS 335 - Lucas",
    link: "https://app.groupme.com/join_group/65239976/nrnWvH77",
  },
  {
    name: "TO 425 - Koksalan",
    link: "https://app.groupme.com/join_group/65239989/OdgEu3t6",
  },
  {
    name: "URP 390 - Norman",
    link: "https://app.groupme.com/join_group/65240001/hChxrFVq",
  },
  {
    name: "WGS 245 - Hubbs",
    link: "https://app.groupme.com/join_group/65240020/ffM2JVLO",
  },
  {
    name: "WGS 431 - Jones",
    link: "https://app.groupme.com/join_group/65240030/4rAwijb7",
  },
  {
    name: "ENGLISH 230 - Soberano",
    link: "https://app.groupme.com/join_group/65241690/VcKJHUha",
  },
  {
    name: "ENVIRON 119 - Yarce",
    link: "https://app.groupme.com/join_group/65241704/jvEdn9j6",
  },
  {
    name: "HEBREW 201",
    link: "https://app.groupme.com/join_group/65241718/4UFgMD4x",
  },
  {
    name: "THEORY 250 - Fournier",
    link: "https://app.groupme.com/join_group/65241731/bEBxOTVY",
  },
  {
    name: "WRITING 405 - McDaniel",
    link: "https://app.groupme.com/join_group/65241888/vrwcVkO3",
  },
  {
    name: "HISTORY 195 - Osgood",
    link: "https://app.groupme.com/join_group/65203522/qqF2d2Fo",
  },
  {
    name: "HISTORY 195 - Patterson",
    link: "https://app.groupme.com/join_group/65203530/CU9lfbB5",
  },
  {
    name: "HISTORY 197 - de Pee",
    link: "https://app.groupme.com/join_group/65203535/XTHdic35",
  },
  {
    name: "HISTORY 197 - Marwil",
    link: "https://app.groupme.com/join_group/65203551/MN8YJEnx",
  },
  {
    name: "HISTORY 197 - Mills",
    link: "https://app.groupme.com/join_group/65203556/CaRpsSPy",
  },
  {
    name: "HISTORY 202 - Ballinger",
    link: "https://app.groupme.com/join_group/65203566/S7z0ao1H",
  },
  {
    name: "HISTORY 202 - Cipa",
    link: "https://app.groupme.com/join_group/65203580/QF9D4RpW",
  },
  {
    name: "HISTORY 202 - Shin",
    link: "https://app.groupme.com/join_group/65204068/rPAEOl2q",
  },
  {
    name: "HISTORY 202 - Wroblewski",
    link: "https://app.groupme.com/join_group/65204084/V5EDtwYS",
  },
  {
    name: "HISTORY 384 - Veidlinger",
    link: "https://app.groupme.com/join_group/65204092/lsgdgBsQ",
  },
  {
    name: "HISTORY 396 - Thurman",
    link: "https://app.groupme.com/join_group/65204100/gDWwrAoy",
  },
  {
    name: "HISTORY 407 - Caulfield",
    link: "https://app.groupme.com/join_group/65204112/Z3D3VRC0",
  },
  {
    name: "HISTORY 417 - Gailus",
    link: "https://app.groupme.com/join_group/65204121/cncKvvVT",
  },
  {
    name: "HISTORY 444 - Goldman",
    link: "https://app.groupme.com/join_group/65204129/gcf4u9qE",
  },
  {
    name: "HISTORY 447 - Gull",
    link: "https://app.groupme.com/join_group/65204141/MthYmusE",
  },
  {
    name: "HISTORY 481 - Toman",
    link: "https://app.groupme.com/join_group/65204151/a5F7Pp3U",
  },
  {
    name: "HISTORY 496 - Cole",
    link: "https://app.groupme.com/join_group/65204160/fQyT9ZyR",
  },
  {
    name: "HISTORY 496 - Poteet",
    link: "https://app.groupme.com/join_group/65204172/SavZzx8f",
  },
  {
    name: "HISTORY 496 - Shin",
    link: "https://app.groupme.com/join_group/65204180/C3t1WSCH",
  },
  {
    name: "HISTORY 496 - Thompson",
    link: "https://app.groupme.com/join_group/65204192/DViY7Qs8",
  },
  {
    name: "HISTORY 497 - Fancy",
    link: "https://app.groupme.com/join_group/65204199/LYe8HvAL",
  },
  {
    name: "HISTORY 497 - Israel",
    link: "https://app.groupme.com/join_group/65204208/cMH4FJjz",
  },
  {
    name: "HISTORY 497 - Squatriti",
    link: "https://app.groupme.com/join_group/65204219/gM8mAl8m",
  },
  {
    name: "HISTORY 498 - de Pee",
    link: "https://app.groupme.com/join_group/65204229/74lExpWp",
  },
  {
    name: "HISTORY 498 - Jimenez",
    link: "https://app.groupme.com/join_group/65204238/yObCOKJ4",
  },
  {
    name: "HISTORY 499 - Spooner",
    link: "https://app.groupme.com/join_group/65204880/9JzolXnZ",
  },
  {
    name: "HONORS 170",
    link: "https://app.groupme.com/join_group/65204893/qgOF48Lh",
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
    name: "HS 301 - Harden, Mason",
    link: "https://app.groupme.com/join_group/65204951/8nkWd8vO",
  },
  {
    name: "HUMGEN 480 - Bielas, Kwan, Iwase",
    link: "https://app.groupme.com/join_group/65204965/oH6zllw6",
  },
  {
    name: "IHS 340 - Huffnagle",
    link: "https://app.groupme.com/join_group/65204975/PyNMxHiA",
  },
  {
    name: "INFLXMED 401 - Stanley",
    link: "https://app.groupme.com/join_group/65204987/fBH2Jikz",
  },
  {
    name: "INSTHUM 311 - Krugliak",
    link: "https://app.groupme.com/join_group/65204998/KKUTN34M",
  },
  {
    name: "INTLSTD 101 - Tsai",
    link: "https://app.groupme.com/join_group/65205007/b9gLXkwf",
  },
  {
    name: "INTLSTD 170 - Sula",
    link: "https://app.groupme.com/join_group/65205019/3QuHx2O0",
  },
  {
    name: "INTLSTD 301 - Stonington",
    link: "https://app.groupme.com/join_group/65205032/OkY0iqyr",
  },
  {
    name: "INTLSTD 348 - Caulfield",
    link: "https://app.groupme.com/join_group/65205037/Ks1loAjs",
  },
  {
    name: "INTLSTD 384 - Randall",
    link: "https://app.groupme.com/join_group/65205047/VdEhNBIR",
  },
  {
    name: "INTLSTD 385 - Kawar",
    link: "https://app.groupme.com/join_group/65205063/CuhbsI7n",
  },
  {
    name: "INTLSTD 385 - Nordaas",
    link: "https://app.groupme.com/join_group/65206111/g3BJsjBw",
  },
  {
    name: "INTLSTD 385 - Tsai",
    link: "https://app.groupme.com/join_group/65206121/ik1F1pIG",
  },
  {
    name: "INTLSTD 401 - Caulfield",
    link: "https://app.groupme.com/join_group/65206133/h8ZJCRwc",
  },
  {
    name: "INTLSTD 401 - Fariss",
    link: "https://app.groupme.com/join_group/65206165/8pZHBaFf",
  },
  {
    name: "INTLSTD 401 - Manuel",
    link: "https://app.groupme.com/join_group/65206342/77sOCsQV",
  },
  {
    name: "INTLSTD 401 - Marcum",
    link: "https://app.groupme.com/join_group/65206353/xNU1D5PV",
  },
  {
    name: "INTLSTD 401 - Nathan",
    link: "https://app.groupme.com/join_group/65206361/CnI4Pd94",
  },
  {
    name: "INTLSTD 401 - Nordaas",
    link: "https://app.groupme.com/join_group/65206368/WWm6kpgZ",
  },
  {
    name: "INTLSTD 401 - Phung",
    link: "https://app.groupme.com/join_group/65206375/HFcc1INS",
  },
  {
    name: "INTLSTD 401 - Sarlati",
    link: "https://app.groupme.com/join_group/65206393/OrvdkPYb",
  },
  {
    name: "INTLSTD 401 - Stonington",
    link: "https://app.groupme.com/join_group/65206400/1DIPReei",
  },
  {
    name: "INTLSTD 401 - Tanielian",
    link: "https://app.groupme.com/join_group/65206411/xfFQdPFX",
  },
  {
    name: "INTLSTD 401 - Tsai",
    link: "https://app.groupme.com/join_group/65206426/05rtC2gR",
  },
  {
    name: "INTLSTD 401 - Uehling",
    link: "https://app.groupme.com/join_group/65206440/96hTmGv6",
  },
  {
    name: "INTLSTD 401 - Zameret",
    link: "https://app.groupme.com/join_group/65206447/86O8D3CU",
  },
  {
    name: "INTLSTD 470 - Saluk",
    link: "https://app.groupme.com/join_group/65206455/Eej8nMYq",
  },
  {
    name: "INTLSTD 489 - Herwitz",
    link: "https://app.groupme.com/join_group/65206468/V5FfczhL",
  },
  {
    name: "INTLSTD 499 - Marcum",
    link: "https://app.groupme.com/join_group/65206484/YR3WJRdO",
  },
  {
    name: "INTMED 409 - Erb-Downward",
    link: "https://app.groupme.com/join_group/65206493/DAM3r3zZ",
  },
  {
    name: "INTPERF 160 - Hughes",
    link: "https://app.groupme.com/join_group/65206509/2glXxxwS",
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
    name: "IOE 410 - Nagarajan",
    link: "https://app.groupme.com/join_group/65206614/5O60XmfF",
  },
  {
    name: "IOE 419 - Daskin",
    link: "https://app.groupme.com/join_group/65206620/QcY7zyAx",
  },
  {
    name: "IOE 424 - Levantrosser",
    link: "https://app.groupme.com/join_group/65206625/gLBM4vxE",
  },
  {
    name: "IOE 424 - Sathe",
    link: "https://app.groupme.com/join_group/65206633/ctTPetzh",
  },
  {
    name: "IOE 430 - Liu",
    link: "https://app.groupme.com/join_group/65206731/em6b27Hm",
  },
  {
    name: "IOE 436 - Green",
    link: "https://app.groupme.com/join_group/65206741/oYCRUXRO",
  },
  {
    name: "IOE 438 - Frantz",
    link: "https://app.groupme.com/join_group/65206752/AaZ12BLB",
  },
  {
    name: "IOE 441 - Gusikhin",
    link: "https://app.groupme.com/join_group/65206761/6gHlSjTJ",
  },
  {
    name: "IOE 453 - Kamaly",
    link: "https://app.groupme.com/join_group/65206772/7sxmfrEe",
  },
  {
    name: "IOE 460 - Wu",
    link: "https://app.groupme.com/join_group/65206783/Cwa491U0",
  },
  {
    name: "IOE 463 - Armstrong",
    link: "https://app.groupme.com/join_group/65206791/StWoF1we",
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
    name: "MATH 412 - Olano",
    link: "https://app.groupme.com/join_group/65211211/ePC4uSbi",
  },
  {
    name: "MATH 412 - Smolkin",
    link: "https://app.groupme.com/join_group/65211214/d8D0oWr6",
  },
  {
    name: "MATH 416 - Norwood",
    link: "https://app.groupme.com/join_group/65211217/onczdSau",
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
    name: "MATH 425 - Li",
    link: "https://app.groupme.com/join_group/65211251/EssK6d24",
  },
  {
    name: "MATH 425 - Rome",
    link: "https://app.groupme.com/join_group/65211255/YjveZ9zd",
  },
  {
    name: "MATH 433 - Wright",
    link: "https://app.groupme.com/join_group/65211258/OLkz5dYV",
  },
  {
    name: "MATH 440",
    link: "https://app.groupme.com/join_group/65211260/lBYjIph7",
  },
  {
    name: "MATH 450 - Wen",
    link: "https://app.groupme.com/join_group/65211264/Bf1KsrkI",
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
    name: "MATH 452 - Liu",
    link: "https://app.groupme.com/join_group/65211274/PCbxuAEe",
  },
  {
    name: "MATH 454 - Megginson",
    link: "https://app.groupme.com/join_group/65211276/qhllH1hW",
  },
  {
    name: "MATH 462",
    link: "https://app.groupme.com/join_group/65211280/WpmpGgLr",
  },
  {
    name: "MATH 462 - Dunworth",
    link: "https://app.groupme.com/join_group/65211283/RCNY6lPZ",
  },
  {
    name: "MATH 465 - George",
    link: "https://app.groupme.com/join_group/65211285/6likd9sZ",
  },
  {
    name: "MATH 474 - Cohen",
    link: "https://app.groupme.com/join_group/65211329/8ctl6iZx",
  },
  {
    name: "MATH 475 - Koziol",
    link: "https://app.groupme.com/join_group/65211334/ucYir8mx",
  },
  {
    name: "MATH 489 - White",
    link: "https://app.groupme.com/join_group/65211339/jWJTjJpf",
  },
  {
    name: "MATH 494 - Zieve",
    link: "https://app.groupme.com/join_group/65211343/sQiEfeBC",
  },
  {
    name: "MATH 498 - Bass",
    link: "https://app.groupme.com/join_group/65211347/VJk5k0f8",
  },
  {
    name: "MATH 498 - DeBacker",
    link: "https://app.groupme.com/join_group/65211351/csg2myFE",
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
    name: "MATSCIE 293 - Beck, Yalisove",
    link: "https://app.groupme.com/join_group/65211369/5MPLfwYH",
  },
  {
    name: "MATSCIE 335",
    link: "https://app.groupme.com/join_group/65211374/LRP33WUN",
  },
  {
    name: "MATSCIE 335 - Thornton, Sun",
    link: "https://app.groupme.com/join_group/65211378/2a16f15I",
  },
  {
    name: "MATSCIE 365 - Chambers",
    link: "https://app.groupme.com/join_group/65211381/zukq4OMm",
  },
  {
    name: "MATSCIE 440 - Poudeu-Poudeu",
    link: "https://app.groupme.com/join_group/65211387/i5elKnAS",
  },
  {
    name: "MATSCIE 465 - Hovden",
    link: "https://app.groupme.com/join_group/65211392/Zqc7wlnm",
  },
  {
    name: "MATSCIE 482 - Shtein, Li",
    link: "https://app.groupme.com/join_group/65211396/A59PKDJh",
  },
  {
    name: "MCDB 306 - Spillane",
    link: "https://app.groupme.com/join_group/65211399/MtcbkgAe",
  },
  {
    name: "MCDB 310 - Akey, Nandakumar",
    link: "https://app.groupme.com/join_group/65211402/mHD4hbHh",
  },
  {
    name: "MCDB 321 - Li",
    link: "https://app.groupme.com/join_group/65211406/Y315eY4C",
  },
  {
    name: "MCDB 401 - Bembenek",
    link: "https://app.groupme.com/join_group/65211412/Btjkimkb",
  },
  {
    name: "MCDB 401 - Stockbridge",
    link: "https://app.groupme.com/join_group/65211414/Jdpa4d7r",
  },
  {
    name: "MCDB 409 - Erb-Downward",
    link: "https://app.groupme.com/join_group/65211416/BulGkvny",
  },
  {
    name: "MCDB 411 - Akey",
    link: "https://app.groupme.com/join_group/65211420/8vZPzoYt",
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
    name: "MCDB 423",
    link: "https://app.groupme.com/join_group/65211469/ObxrxqIy",
  },
  {
    name: "MCDB 424",
    link: "https://app.groupme.com/join_group/65211471/ZyrTyBE2",
  },
  {
    name: "MCDB 428",
    link: "https://app.groupme.com/join_group/65211474/KFenb3sE",
  },
  {
    name: "MCDB 428 - DeSantis, Li",
    link: "https://app.groupme.com/join_group/65211476/U8lWrQfv",
  },
  {
    name: "MCDB 429 - Archbold",
    link: "https://app.groupme.com/join_group/65211480/Of0zNfKI",
  },
  {
    name: "MCDB 435 - Chang",
    link: "https://app.groupme.com/join_group/65211485/Xk5kbDEa",
  },
  {
    name: "MCDB 441 - Wang",
    link: "https://app.groupme.com/join_group/65211488/RGRdWzLh",
  },
  {
    name: "MCDB 452 - Wong",
    link: "https://app.groupme.com/join_group/65211491/TYdrjPpu",
  },
  {
    name: "MCDB 459 - Aton",
    link: "https://app.groupme.com/join_group/65211496/MgZqnC5h",
  },
  {
    name: "MCDB 463 - Duan",
    link: "https://app.groupme.com/join_group/65211499/gNftfUAG",
  },
  {
    name: "MCDB 494 - Kurdziel",
    link: "https://app.groupme.com/join_group/65211503/YPWx4XJl",
  },
  {
    name: "MCDB 499 - Jakob",
    link: "https://app.groupme.com/join_group/65211505/4BT2Gr30",
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
    name: "MECHENG 311 - Barber",
    link: "https://app.groupme.com/join_group/65211542/IB1gmvLQ",
  },
  {
    name: "MECHENG 320 - Dowling",
    link: "https://app.groupme.com/join_group/65211543/P54nTZNY",
  },
  {
    name: "MECHENG 335 - Boehman",
    link: "https://app.groupme.com/join_group/65211580/NDYoSrYa",
  },
  {
    name: "MECHENG 335 - Kaviany",
    link: "https://app.groupme.com/join_group/65211584/OX0a8GCr",
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
    name: "MECHENG 400 - Schultz",
    link: "https://app.groupme.com/join_group/65211612/QEtQ5zjN",
  },
  {
    name: "MECHENG 401 - Ni",
    link: "https://app.groupme.com/join_group/65211615/gyCJx6oE",
  },
  {
    name: "MECHENG 420 - Akhavan",
    link: "https://app.groupme.com/join_group/65211619/981z32iU",
  },
  {
    name: "MECHENG 433 - Dasgupta",
    link: "https://app.groupme.com/join_group/65211621/MPWetP7M",
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
    name: "MECHENG 450 - Cooper, Sienko, Liu, Skerlos, Saitou, Shorter",
    link: "https://app.groupme.com/join_group/65211631/eP72Lcgb",
  },
  {
    name: "MECHENG 451 - Pan",
    link: "https://app.groupme.com/join_group/65211634/QQvlO9h2",
  },
  {
    name: "MECHENG 476 - Grotberg",
    link: "https://app.groupme.com/join_group/65211636/jFhpCHry",
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
    name: "MECHENG 499 - Daly",
    link: "https://app.groupme.com/join_group/65211645/SJbupj5a",
  },
  {
    name: "MECHENG 499 - Grosh",
    link: "https://app.groupme.com/join_group/65211648/19SYR6RC",
  },
  {
    name: "MECHENG 499 - Johnsen",
    link: "https://app.groupme.com/join_group/65211653/wOL3k8Qd",
  },
  {
    name: "MECHENG 499 - Popa",
    link: "https://app.groupme.com/join_group/65211658/5Ftxzbcv",
  },
  {
    name: "MECHENG 499 - Tol",
    link: "https://app.groupme.com/join_group/65211661/usNXWaU8",
  },
  {
    name: "MECHENG 499 - Umbriac",
    link: "https://app.groupme.com/join_group/65211662/F29hsn1n",
  },
  {
    name: "MEDCHEM 310 - Scott",
    link: "https://app.groupme.com/join_group/65211664/LRuMVRdN",
  },
  {
    name: "MELANG 102 - Scott",
    link: "https://app.groupme.com/join_group/65211686/uZ3in5Pk",
  },
  {
    name: "MELANG 465 - Muehlberger",
    link: "https://app.groupme.com/join_group/65211691/pM6w0T44",
  },
  {
    name: "MEMS 211 - Fancy",
    link: "https://app.groupme.com/join_group/65211693/bmK7nhkj",
  },
  {
    name: "MEMS 240 - Sears",
    link: "https://app.groupme.com/join_group/65211696/uhT0Dxo1",
  },
  {
    name: "MEMS 325 - Mir",
    link: "https://app.groupme.com/join_group/65211702/SZZBg7be",
  },
  {
    name: "MEMS 360 - Burde",
    link: "https://app.groupme.com/join_group/65211704/RqWwbA9G",
  },
  {
    name: "MEMS 367 - Cohen",
    link: "https://app.groupme.com/join_group/65211707/xVsNBH5L",
  },
  {
    name: "MEMS 386 - Gutt",
    link: "https://app.groupme.com/join_group/65211709/ELiGZghh",
  },
  {
    name: "MEMS 442 - Gull",
    link: "https://app.groupme.com/join_group/65211712/8zyhCNhd",
  },
  {
    name: "MENAS 244 - Lieberman",
    link: "https://app.groupme.com/join_group/65211716/ORSQl0aG",
  },
  {
    name: "MENAS 332 - Ali",
    link: "https://app.groupme.com/join_group/65211719/AOWuF97E",
  },
  {
    name: "MENAS 332 - Roby",
    link: "https://app.groupme.com/join_group/65211721/T34QZies",
  },
  {
    name: "MENAS 462",
    link: "https://app.groupme.com/join_group/65211723/u8dtUIRU",
  },
  {
    name: "MENAS 463",
    link: "https://app.groupme.com/join_group/65211727/BQ8Axl3j",
  },
  {
    name: "MFG 402 - Ni",
    link: "https://app.groupme.com/join_group/65211730/Nh9wnqJT",
  },
  {
    name: "MFG 426 - Levantrosser",
    link: "https://app.groupme.com/join_group/65211733/l1evkvly",
  },
  {
    name: "MFG 441 - Gusikhin",
    link: "https://app.groupme.com/join_group/65211739/xjTXtLxy",
  },
  {
    name: "MFG 453 - Pan",
    link: "https://app.groupme.com/join_group/65211743/Nbpg2U1w",
  },
  {
    name: "MFG 456 - Kamaly",
    link: "https://app.groupme.com/join_group/65211747/l5MvON7w",
  },
  {
    name: "MFG 462 - Dong",
    link: "https://app.groupme.com/join_group/65211750/1x7j1om5",
  },
  {
    name: "MFG 463 - Armstrong",
    link: "https://app.groupme.com/join_group/65211754/N9i5gtjC",
  },
  {
    name: "MFG 466 - Jin",
    link: "https://app.groupme.com/join_group/65211757/DsIczaC6",
  },
  {
    name: "MFG 480 - Shtein, Li",
    link: "https://app.groupme.com/join_group/65211761/ZJYzkk6v",
  },
  {
    name: "MICRBIOL 350",
    link: "https://app.groupme.com/join_group/65211764/SxOoCjLs",
  },
  {
    name: "MICRBIOL 405",
    link: "https://app.groupme.com/join_group/65211768/Lhkijn1w",
  },
  {
    name: "MICRBIOL 409 - Erb-Downward",
    link: "https://app.groupme.com/join_group/65211804/9wB5NTXm",
  },
  {
    name: "MICRBIOL 415 - Spindler, Ono",
    link: "https://app.groupme.com/join_group/65211806/aqXDac9K",
  },
  {
    name: "MICRBIOL 430",
    link: "https://app.groupme.com/join_group/65211808/l5LrF3Cv",
  },
  {
    name: "MICRBIOL 440 - Moore",
    link: "https://app.groupme.com/join_group/65211809/68von2TW",
  },
  {
    name: "MIDEAST 216 - Knysh",
    link: "https://app.groupme.com/join_group/65211811/CQxBn926",
  },
  {
    name: "MIDEAST 236 - Boccaccini",
    link: "https://app.groupme.com/join_group/65211814/rBKy8Kkz",
  },
  {
    name: "MIDEAST 239 - Beckman",
    link: "https://app.groupme.com/join_group/65211816/8b7m6ktC",
  },
  {
    name: "MIDEAST 281 - Pinsker",
    link: "https://app.groupme.com/join_group/65211818/Fw71v9pZ",
  },
  {
    name: "MIDEAST 284 - Lieberman",
    link: "https://app.groupme.com/join_group/65211822/S6p7RLQe",
  },
  {
    name: "MIDEAST 290 - Eubanks Segal",
    link: "https://app.groupme.com/join_group/65211825/7yIvLnrb",
  },
  {
    name: "MIDEAST 290 - Raz",
    link: "https://app.groupme.com/join_group/65211827/cNMTXa1C",
  },
  {
    name: "MIDEAST 291",
    link: "https://app.groupme.com/join_group/65211830/Lt0iPHKN",
  },
  {
    name: "MIDEAST 291 - Cross",
    link: "https://app.groupme.com/join_group/65211834/t41wPeAD",
  },
  {
    name: "MIDEAST 291 - Roby",
    link: "https://app.groupme.com/join_group/65211837/T6hq78Zd",
  },
  {
    name: "MIDEAST 291 - Wollenberg",
    link: "https://app.groupme.com/join_group/65211840/1NQ6vqa6",
  },
  {
    name: "MIDEAST 295 - DeGrado",
    link: "https://app.groupme.com/join_group/65211843/jFrLxeGr",
  },
  {
    name: "MIDEAST 295 - Eliav",
    link: "https://app.groupme.com/join_group/65211848/wHsvW94l",
  },
  {
    name: "MIDEAST 295 - Macfarlane",
    link: "https://app.groupme.com/join_group/65211850/lM26gHet",
  },
  {
    name: "MIDEAST 315 - Bardenstein",
    link: "https://app.groupme.com/join_group/65211853/81z5OhrE",
  },
  {
    name: "MIDEAST 320 - Cipa",
    link: "https://app.groupme.com/join_group/65211857/ucpgkgIg",
  },
  {
    name: "MIDEAST 321 - Knysh",
    link: "https://app.groupme.com/join_group/65211860/AiEc0CsO",
  },
  {
    name: "MIDEAST 328 - Ali",
    link: "https://app.groupme.com/join_group/65211864/uAhIFWl8",
  },
  {
    name: "MIDEAST 329 - Bardenstein",
    link: "https://app.groupme.com/join_group/65211868/TxBkLBq7",
  },
  {
    name: "MIDEAST 337 - Beckman",
    link: "https://app.groupme.com/join_group/65211873/rXpQGW5a",
  },
  {
    name: "MIDEAST 341 - Crisostomo",
    link: "https://app.groupme.com/join_group/65211902/sF1ZKCN0",
  },
  {
    name: "MIDEAST 355 - Eliav",
    link: "https://app.groupme.com/join_group/65211906/2agRGD8J",
  },
  {
    name: "MIDEAST 375 - Mir",
    link: "https://app.groupme.com/join_group/65211907/FvSpntCc",
  },
  {
    name: "MIDEAST 387 - Babayan",
    link: "https://app.groupme.com/join_group/65211909/vz3fuCVJ",
  },
  {
    name: "MIDEAST 390 - Eubanks Segal",
    link: "https://app.groupme.com/join_group/65211912/5R5SVOmu",
  },
  {
    name: "MIDEAST 391",
    link: "https://app.groupme.com/join_group/65211914/AwVzSLmk",
  },
  {
    name: "MIDEAST 391 - Luchina",
    link: "https://app.groupme.com/join_group/65211915/GMSwJOCt",
  },
  {
    name: "MIDEAST 391 - Roby",
    link: "https://app.groupme.com/join_group/65211917/0d8ef9lj",
  },
  {
    name: "MIDEAST 426 - Pifer",
    link: "https://app.groupme.com/join_group/65211920/298g6rSW",
  },
  {
    name: "MIDEAST 427 - Cross",
    link: "https://app.groupme.com/join_group/65211921/q6wbVtr3",
  },
  {
    name: "MIDEAST 430 - Le Gassick",
    link: "https://app.groupme.com/join_group/65211926/2I2xSDEH",
  },
  {
    name: "MIDEAST 445 - Crisostomo",
    link: "https://app.groupme.com/join_group/65211928/IrENuV5p",
  },
  {
    name: "MIDEAST 445 - Richards",
    link: "https://app.groupme.com/join_group/65211932/O60HrYxy",
  },
  {
    name: "MIDEAST 487 - Cole",
    link: "https://app.groupme.com/join_group/65211933/OyXBcSAF",
  },
  {
    name: "MIDEAST 490",
    link: "https://app.groupme.com/join_group/65211935/l8UVgBDy",
  },
  {
    name: "MIDEAST 490 - Boccaccini",
    link: "https://app.groupme.com/join_group/65211938/9ljT9KR1",
  },
  {
    name: "MIDEAST 490 - DeGrado",
    link: "https://app.groupme.com/join_group/65211941/oHJAS3fJ",
  },
  {
    name: "MIDEAST 490 - Ginsburg",
    link: "https://app.groupme.com/join_group/65211944/1LQMe9c1",
  },
  {
    name: "MILSCI 102 - Groller",
    link: "https://app.groupme.com/join_group/65211948/L8g9JZNn",
  },
  {
    name: "MILSCI 102 - Kositz",
    link: "https://app.groupme.com/join_group/65211951/MEWjReQD",
  },
  {
    name: "MILSCI 202 - Moreno, Groller",
    link: "https://app.groupme.com/join_group/65211954/SshPBeTH",
  },
  {
    name: "MILSCI 302",
    link: "https://app.groupme.com/join_group/65211957/6IQKfjno",
  },
  {
    name: "MILSCI 402 - Dye, Moreno",
    link: "https://app.groupme.com/join_group/65211963/mppWbsuC",
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
    name: "MKT 310 - Carter",
    link: "https://app.groupme.com/join_group/65212013/Y9bWPrpl",
  },
  {
    name: "MKT 312 - Olson",
    link: "https://app.groupme.com/join_group/65212015/BBTHmkoY",
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
    name: "MKT 322 - Collins",
    link: "https://app.groupme.com/join_group/65212021/eRJRx1Tl",
  },
  {
    name: "MKT 323 - Schulz",
    link: "https://app.groupme.com/join_group/65212023/8yeaneZK",
  },
  {
    name: "MKT 407 - Angell",
    link: "https://app.groupme.com/join_group/65212025/pYHprye2",
  },
  {
    name: "MKT 409 - Collins",
    link: "https://app.groupme.com/join_group/65212029/8v6JRSc7",
  },
  {
    name: "MKT 424",
    link: "https://app.groupme.com/join_group/65212032/7JQROpCf",
  },
  {
    name: "MKT 425 - Sriram",
    link: "https://app.groupme.com/join_group/65212034/WdpfuIRj",
  },
  {
    name: "MKT 426 - Schwartz",
    link: "https://app.groupme.com/join_group/65212038/cJjDXPhN",
  },
  {
    name: "MKT 430 - Angell, Burson",
    link: "https://app.groupme.com/join_group/65212040/NVknmlRb",
  },
  {
    name: "MKT 450 - Ramaswamy",
    link: "https://app.groupme.com/join_group/65212041/IujNaA6s",
  },
  {
    name: "MO 320 - Mayer",
    link: "https://app.groupme.com/join_group/65212048/D9JnuS29",
  },
  {
    name: "MO 321",
    link: "https://app.groupme.com/join_group/65212050/RmysCAdc",
  },
  {
    name: "MO 410 - Page",
    link: "https://app.groupme.com/join_group/65212053/yLs3Yx6J",
  },
  {
    name: "MO 415 - Alexander",
    link: "https://app.groupme.com/join_group/65212056/7MWKvZYe",
  },
  {
    name: "MO 455 - Dutton, Worline",
    link: "https://app.groupme.com/join_group/65212059/BTtMNuUD",
  },
  {
    name: "MO 463 - Degraff",
    link: "https://app.groupme.com/join_group/65212061/kMh444Ie",
  },
  {
    name: "MO 468 - Spreitzer , Erwin",
    link: "https://app.groupme.com/join_group/65212065/KBcYKAsZ",
  },
  {
    name: "MOVESCI 110 - Bodary, Vesia, Gross",
    link: "https://app.groupme.com/join_group/65212096/xa4NcbB9",
  },
  {
    name: "MOVESCI 110 - Gross, Vesia, Bodary",
    link: "https://app.groupme.com/join_group/65212099/e0X90Pk0",
  },
  {
    name: "MOVESCI 110 - Vesia, Gross, Bodary",
    link: "https://app.groupme.com/join_group/65212104/a7sr9lzn",
  },
  {
    name: "MOVESCI 219 - Clark",
    link: "https://app.groupme.com/join_group/65212106/z92xH8Qk",
  },
  {
    name: "MOVESCI 219 - Palmieri-Smith",
    link: "https://app.groupme.com/join_group/65212109/I0d5HNi2",
  },
  {
    name: "MOVESCI 219 - Richardson",
    link: "https://app.groupme.com/join_group/65212113/YhJPTKGO",
  },
  {
    name: "MOVESCI 230 - Gross",
    link: "https://app.groupme.com/join_group/65212115/zuxF5Kqa",
  },
  {
    name: "MOVESCI 240 - Chen",
    link: "https://app.groupme.com/join_group/65212116/8tZMOanB",
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
    name: "MOVESCI 320 - Brown",
    link: "https://app.groupme.com/join_group/65212121/OF3m3Vx6",
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
    name: "MOVESCI 361 - Mergos",
    link: "https://app.groupme.com/join_group/65212127/AzlRC8oo",
  },
  {
    name: "MOVESCI 363 - Mergos",
    link: "https://app.groupme.com/join_group/65212128/30vUP5Di",
  },
  {
    name: "MOVESCI 403",
    link: "https://app.groupme.com/join_group/65212130/9QQVYDdP",
  },
  {
    name: "MOVESCI 413",
    link: "https://app.groupme.com/join_group/65212134/nzIUQf5m",
  },
  {
    name: "MOVESCI 413 - Mergos",
    link: "https://app.groupme.com/join_group/65212136/h9KwLECf",
  },
  {
    name: "MOVESCI 413 - Umberger",
    link: "https://app.groupme.com/join_group/65212137/Mp15QJKM",
  },
  {
    name: "MOVESCI 422 - Vesia",
    link: "https://app.groupme.com/join_group/65212140/4jMFPARL",
  },
  {
    name: "MOVESCI 425 - Ulrich",
    link: "https://app.groupme.com/join_group/65212144/8zxA1eE7",
  },
  {
    name: "MOVESCI 429",
    link: "https://app.groupme.com/join_group/65212147/kG2lPrDF",
  },
  {
    name: "MOVESCI 434",
    link: "https://app.groupme.com/join_group/65212150/DxHN3dZX",
  },
  {
    name: "MOVESCI 439",
    link: "https://app.groupme.com/join_group/65212153/7et5LBlU",
  },
  {
    name: "MOVESCI 442 - Haus",
    link: "https://app.groupme.com/join_group/65212155/cKytLtBF",
  },
  {
    name: "MOVESCI 446 - Hasson",
    link: "https://app.groupme.com/join_group/65212193/5DFkQzUf",
  },
  {
    name: "MOVESCI 449",
    link: "https://app.groupme.com/join_group/65212196/pXrELHpV",
  },
  {
    name: "MOVESCI 451 - Harris",
    link: "https://app.groupme.com/join_group/65212200/VUGBb4sU",
  },
  {
    name: "MOVESCI 452",
    link: "https://app.groupme.com/join_group/65212202/FjDgZdyv",
  },
  {
    name: "MOVESCI 475 - Czajka",
    link: "https://app.groupme.com/join_group/65212205/FJvrELRm",
  },
  {
    name: "MUSED 111 - Fitzpatrick",
    link: "https://app.groupme.com/join_group/65212208/edLQDbwQ",
  },
  {
    name: "MUSED 202 - Hopkins",
    link: "https://app.groupme.com/join_group/65212210/BKi3qrLi",
  },
  {
    name: "MUSED 203 - Vecchio",
    link: "https://app.groupme.com/join_group/65212213/tMnW93Bf",
  },
  {
    name: "MUSED 205 - Vecchio",
    link: "https://app.groupme.com/join_group/65212216/v8d8Fxvg",
  },
  {
    name: "MUSED 207 - Urena Gonzalez, Fitzpatrick",
    link: "https://app.groupme.com/join_group/65212219/LvBQWCqd",
  },
  {
    name: "MUSED 320 - Skadsem",
    link: "https://app.groupme.com/join_group/65212220/i1igCIhv",
  },
  {
    name: "MUSED 340",
    link: "https://app.groupme.com/join_group/65212222/LuV5Jtyl",
  },
  {
    name: "MUSED 340 - Skadsem",
    link: "https://app.groupme.com/join_group/65212224/wCFd7Y46",
  },
  {
    name: "MUSED 342 - Rodriguez",
    link: "https://app.groupme.com/join_group/65212226/4lhTdjaI",
  },
  {
    name: "MUSED 370",
    link: "https://app.groupme.com/join_group/65212227/ACF7I1VZ",
  },
  {
    name: "MUSED 370 - Hopkins",
    link: "https://app.groupme.com/join_group/65212230/fytb84bb",
  },
  {
    name: "MUSED 371 - Weaver",
    link: "https://app.groupme.com/join_group/65212233/iKbuihHU",
  },
  {
    name: "MUSED 408 - Collins, McCarthy",
    link: "https://app.groupme.com/join_group/65212236/hO2AXOQv",
  },
  {
    name: "MUSED 470 - Conway",
    link: "https://app.groupme.com/join_group/65212239/cch9JDx8",
  },
  {
    name: "MUSED 495",
    link: "https://app.groupme.com/join_group/65212242/dhDEG5oG",
  },
  {
    name: "MUSED 496 - McCarthy",
    link: "https://app.groupme.com/join_group/65212245/zjMAAKBn",
  },
  {
    name: "MUSEUMS 401 - Hennebury",
    link: "https://app.groupme.com/join_group/65212247/Ct1XA5fN",
  },
  {
    name: "MUSICOL 122 - Lwanga",
    link: "https://app.groupme.com/join_group/65212252/Zc54v8EB",
  },
  {
    name: "MUSICOL 123 - Garrett",
    link: "https://app.groupme.com/join_group/65212256/eWcO8pWO",
  },
  {
    name: "MUSICOL 130 - Stein",
    link: "https://app.groupme.com/join_group/65212259/B0ooNchi",
  },
  {
    name: "MUSICOL 240 - Pierce",
    link: "https://app.groupme.com/join_group/65212287/z51PNN6E",
  },
  {
    name: "MUSICOL 306",
    link: "https://app.groupme.com/join_group/65212291/CdZT3J2b",
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
    name: "MUSICOL 405 - Kaur",
    link: "https://app.groupme.com/join_group/65212305/cuWq1LH0",
  },
  {
    name: "MUSICOL 406",
    link: "https://app.groupme.com/join_group/65212308/HENUnlT9",
  },
  {
    name: "MUSICOL 406 - Castro",
    link: "https://app.groupme.com/join_group/65212312/buXt42Yd",
  },
  {
    name: "MUSICOL 406 - Lam",
    link: "https://app.groupme.com/join_group/65212315/rpomfGS6",
  },
  {
    name: "MUSICOL 406 - Whiting",
    link: "https://app.groupme.com/join_group/65212316/Iz3Hopp6",
  },
  {
    name: "MUSICOL 407",
    link: "https://app.groupme.com/join_group/65212319/u1Ov1GGa",
  },
  {
    name: "MUSICOL 407 - Garrett",
    link: "https://app.groupme.com/join_group/65212321/AB0xQLys",
  },
  {
    name: "MUSICOL 407 - Velasquez",
    link: "https://app.groupme.com/join_group/65214408/UzuXTAjR",
  },
  {
    name: "MUSICOL 408 - Pierce",
    link: "https://app.groupme.com/join_group/65214414/EvJUcfSG",
  },
  {
    name: "MUSICOL 414 - Cruz",
    link: "https://app.groupme.com/join_group/65214423/jbI7pt3g",
  },
  {
    name: "MUSICOL 477 - Borders",
    link: "https://app.groupme.com/join_group/65214432/iQFSy7xK",
  },
  {
    name: "MUSPERF 200 - Andre, Brissey",
    link: "https://app.groupme.com/join_group/65214434/kt5Cowt8",
  },
  {
    name: "MUSPERF 300 - Thompson",
    link: "https://app.groupme.com/join_group/65214441/A4sPbToA",
  },
  {
    name: "MUSPERF 401 - Aaron",
    link: "https://app.groupme.com/join_group/65214445/h5aCqF8A",
  },
  {
    name: "MUSPERF 401 - Belen",
    link: "https://app.groupme.com/join_group/65214450/8sXhP3d0",
  },
  {
    name: "MUSPERF 401 - Berofsky",
    link: "https://app.groupme.com/join_group/65214456/uK7sgcjD",
  },
  {
    name: "MUSPERF 401 - Cantor",
    link: "https://app.groupme.com/join_group/65214462/LSmfpySr",
  },
  {
    name: "MUSPERF 401 - Chambers",
    link: "https://app.groupme.com/join_group/65214467/ckMCBunp",
  },
  {
    name: "MUSPERF 401 - Coade",
    link: "https://app.groupme.com/join_group/65214473/ki99Pz6C",
  },
  {
    name: "MUSPERF 401 - Corey",
    link: "https://app.groupme.com/join_group/65214478/ZPLWbpAi",
  },
  {
    name: "MUSPERF 401 - Goosman",
    link: "https://app.groupme.com/join_group/65214484/Sm3pK8cK",
  },
  {
    name: "MUSPERF 401 - Greene",
    link: "https://app.groupme.com/join_group/65214492/9IaO3pNT",
  },
  {
    name: "MUSPERF 401 - Hahn",
    link: "https://app.groupme.com/join_group/65214495/ZhAA7BwM",
  },
  {
    name: "MUSPERF 401 - Halen",
    link: "https://app.groupme.com/join_group/65214499/huJl9dXd",
  },
  {
    name: "MUSPERF 401 - Harding",
    link: "https://app.groupme.com/join_group/65214506/8A27UIKm",
  },
  {
    name: "MUSPERF 401 - Jackson",
    link: "https://app.groupme.com/join_group/65214511/jeKMixzw",
  },
  {
    name: "MUSPERF 401 - Katz",
    link: "https://app.groupme.com/join_group/65214521/kQs3EZlI",
  },
  {
    name: "MUSPERF 401 - Kibbie",
    link: "https://app.groupme.com/join_group/65214526/O8WazFkl",
  },
  {
    name: "MUSPERF 401 - Kiesler",
    link: "https://app.groupme.com/join_group/65214536/aUYsgutf",
  },
  {
    name: "MUSPERF 401 - Porter",
    link: "https://app.groupme.com/join_group/65214549/hWJcqHEu",
  },
  {
    name: "MUSPERF 401 - Sarath",
    link: "https://app.groupme.com/join_group/65214555/nluw7tph",
  },
  {
    name: "MUSPERF 401 - Skelton",
    link: "https://app.groupme.com/join_group/65214561/BpuxlFNs",
  },
  {
    name: "MUSPERF 401 - Washington",
    link: "https://app.groupme.com/join_group/65214626/Cpb5OIWp",
  },
  {
    name: "MUSTHTRE 280",
    link: "https://app.groupme.com/join_group/65214633/Y9cNOKYY",
  },
  {
    name: "MUSTHTRE 324",
    link: "https://app.groupme.com/join_group/65214642/G8NQJmev",
  },
  {
    name: "MUSTHTRE 336",
    link: "https://app.groupme.com/join_group/65214652/XOiIUIfH",
  },
  {
    name: "MUSTHTRE 352",
    link: "https://app.groupme.com/join_group/65214657/84E0hhpz",
  },
  {
    name: "MUSTHTRE 354",
    link: "https://app.groupme.com/join_group/65214664/68oaGcJX",
  },
  {
    name: "MUSTHTRE 360",
    link: "https://app.groupme.com/join_group/65214670/48JqysJP",
  },
  {
    name: "MUSTHTRE 424",
    link: "https://app.groupme.com/join_group/65214676/BENmiZ4l",
  },
  {
    name: "MUSTHTRE 436",
    link: "https://app.groupme.com/join_group/65214683/3bXRLyDr",
  },
  {
    name: "MUSTHTRE 450",
    link: "https://app.groupme.com/join_group/65214694/oYdHd9Xa",
  },
  {
    name: "MUSTHTRE 458 - Shankel",
    link: "https://app.groupme.com/join_group/65214704/ExqzdQNR",
  },
  {
    name: "MUSTHTRE 480",
    link: "https://app.groupme.com/join_group/65214713/QfUQ1glg",
  },
  {
    name: "MUSTHTRE 496",
    link: "https://app.groupme.com/join_group/65214721/1RlJYf24",
  },
  {
    name: "NATIVEAM 204 - Witgen",
    link: "https://app.groupme.com/join_group/65214725/cKfYUoba",
  },
  {
    name: "NATIVEAM 223 - Pitawanakwat",
    link: "https://app.groupme.com/join_group/65214729/yV5DBXTP",
  },
  {
    name: "NATIVEAM 311 - Witgen",
    link: "https://app.groupme.com/join_group/65214734/0211TPH5",
  },
  {
    name: "NATIVEAM 323 - Pitawanakwat",
    link: "https://app.groupme.com/join_group/65214744/PZXGfvnU",
  },
  {
    name: "NATIVEAM 498 - Stillman",
    link: "https://app.groupme.com/join_group/65214750/baXDbAfY",
  },
  {
    name: "NAVARCH 210 - Karr",
    link: "https://app.groupme.com/join_group/65214759/Vi6d9jID",
  },
  {
    name: "NAVARCH 280 - Pan",
    link: "https://app.groupme.com/join_group/65214769/ed90NTEf",
  },
  {
    name: "NAVARCH 310 - Vlahopoulos",
    link: "https://app.groupme.com/join_group/65214779/rqCjI0NT",
  },
  {
    name: "NAVARCH 321",
    link: "https://app.groupme.com/join_group/65214786/DEToig8b",
  },
  {
    name: "NAVARCH 321 - Bernitsas",
    link: "https://app.groupme.com/join_group/65214791/yRqr2J5v",
  },
  {
    name: "NAVARCH 332 - McCoy",
    link: "https://app.groupme.com/join_group/65214798/BqIByYUf",
  },
  {
    name: "NAVARCH 370 - Singer",
    link: "https://app.groupme.com/join_group/65214801/YOIAIxp9",
  },
  {
    name: "NAVARCH 440",
    link: "https://app.groupme.com/join_group/65214898/9RTkDJpH",
  },
  {
    name: "NAVARCH 440 - Maki",
    link: "https://app.groupme.com/join_group/65214903/GWpgi2bt",
  },
  {
    name: "NAVARCH 461 - Dong",
    link: "https://app.groupme.com/join_group/65214908/mvg3xgcV",
  },
  {
    name: "NAVARCH 471 - Singer",
    link: "https://app.groupme.com/join_group/65214917/60GTIxCl",
  },
  {
    name: "NAVARCH 499 - Bernitsas",
    link: "https://app.groupme.com/join_group/65214933/gIbXZbvv",
  },
  {
    name: "NAVSCI 102 - Nguyen",
    link: "https://app.groupme.com/join_group/65214940/yiKJNaq2",
  },
  {
    name: "NAVSCI 202 - Dyer Jr",
    link: "https://app.groupme.com/join_group/65214952/VYZ6dop8",
  },
  {
    name: "NAVSCI 301",
    link: "https://app.groupme.com/join_group/65214956/7GbKHCAK",
  },
  {
    name: "NAVSCI 310 - Kantaris",
    link: "https://app.groupme.com/join_group/65214964/30Gj0tuk",
  },
  {
    name: "NAVSCI 410 - Kantaris",
    link: "https://app.groupme.com/join_group/65214987/mb9jVHgC",
  },
  {
    name: "NERS 201 - Field",
    link: "https://app.groupme.com/join_group/65214998/Pqpf2XAo",
  },
  {
    name: "NERS 211 - Jovanovic",
    link: "https://app.groupme.com/join_group/65215003/lvLRkZUh",
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
    name: "NERS 312 - Wehe",
    link: "https://app.groupme.com/join_group/65215026/8juK6HQj",
  },
  {
    name: "NERS 315",
    link: "https://app.groupme.com/join_group/65215038/JVQOhiyc",
  },
  {
    name: "NERS 344 - Sun",
    link: "https://app.groupme.com/join_group/65215043/Szx2GXJ1",
  },
  {
    name: "NERS 425",
    link: "https://app.groupme.com/join_group/65215052/dhE24VXl",
  },
  {
    name: "NERS 442 - Kochunas",
    link: "https://app.groupme.com/join_group/65215060/GdHSfkIt",
  },
  {
    name: "NERS 472 - Gilgenbach",
    link: "https://app.groupme.com/join_group/65215071/yFPPBFm4",
  },
  {
    name: "NERS 492 - Kuranz",
    link: "https://app.groupme.com/join_group/65215078/bqtWAVwr",
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
    name: "NURS 240 - Prochnow, Jiang",
    link: "https://app.groupme.com/join_group/65215174/FNzfdY4D",
  },
  {
    name: "NURS 244 - Saslow, Anderson",
    link: "https://app.groupme.com/join_group/65215182/Gta2hmgx",
  },
  {
    name: "NURS 262 - Shakoor, Accurso",
    link: "https://app.groupme.com/join_group/65215186/EGoL4hCs",
  },
  {
    name: "NURS 295 - Mutumba",
    link: "https://app.groupme.com/join_group/65215197/xy20ynR4",
  },
  {
    name: "NURS 370 - Antilla",
    link: "https://app.groupme.com/join_group/65215205/Q8x0ffbf",
  },
  {
    name: "NURS 371 - Voepel-Lewis, Duffy",
    link: "https://app.groupme.com/join_group/65215214/19IXQSp3",
  },
  {
    name: "NURS 372 - Prochnow, Harden",
    link: "https://app.groupme.com/join_group/65215224/xVqTVcfT",
  },
  {
    name: "NURS 373 - Strobbe",
    link: "https://app.groupme.com/join_group/65215232/KVe1gbW2",
  },
  {
    name: "NURS 395 - Kahle",
    link: "https://app.groupme.com/join_group/65215245/gC7eGgHQ",
  },
  {
    name: "NURS 421 - Eagle",
    link: "https://app.groupme.com/join_group/65215252/y5d0xmdM",
  },
  {
    name: "NURS 454 - Rosemberg",
    link: "https://app.groupme.com/join_group/65215260/D0QVVcqU",
  },
  {
    name: "NURS 456 - Stoddard",
    link: "https://app.groupme.com/join_group/65215273/SmvCS0gc",
  },
  {
    name: "NURS 457 - Price",
    link: "https://app.groupme.com/join_group/65215279/DYlOpWLt",
  },
  {
    name: "NURS 459 - Price",
    link: "https://app.groupme.com/join_group/65215290/XXj0vbRk",
  },
  {
    name: "OBOE 111",
    link: "https://app.groupme.com/join_group/65215298/dumdx3uN",
  },
  {
    name: "OPERA 341",
    link: "https://app.groupme.com/join_group/65215308/NV8brUlT",
  },
  {
    name: "OPERA 451",
    link: "https://app.groupme.com/join_group/65215319/yYFenS3F",
  },
  {
    name: "OPERA 455",
    link: "https://app.groupme.com/join_group/65215325/7jGot48e",
  },
  {
    name: "ORGSTUDY 195 - Fein",
    link: "https://app.groupme.com/join_group/65215334/ttUno4CP",
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
    name: "ORGSTUDY 425 - Ho",
    link: "https://app.groupme.com/join_group/65215370/gKSOgsDt",
  },
  {
    name: "ORGSTUDY 440 - Samford",
    link: "https://app.groupme.com/join_group/65215379/7LzYziqm",
  },
  {
    name: "ORGSTUDY 445 - Fein",
    link: "https://app.groupme.com/join_group/65215386/y957bkWn",
  },
  {
    name: "ORGSTUDY 450 - Samford",
    link: "https://app.groupme.com/join_group/65215393/V5GaQy9U",
  },
  {
    name: "ORGSTUDY 495 - Camp",
    link: "https://app.groupme.com/join_group/65215503/N3PMgCc5",
  },
  {
    name: "ORGSTUDY 495 - Sweetman",
    link: "https://app.groupme.com/join_group/65215510/ZXR9FdaP",
  },
  {
    name: "PAT 100 - Camc",
    link: "https://app.groupme.com/join_group/65215520/YJ2E6w5Y",
  },
  {
    name: "PAT 100 - Granzow",
    link: "https://app.groupme.com/join_group/65215535/DXmNwfy3",
  },
  {
    name: "PAT 100 - Gurevich",
    link: "https://app.groupme.com/join_group/65215547/JIycNnlk",
  },
  {
    name: "PAT 100 - Kirshner",
    link: "https://app.groupme.com/join_group/65215561/rFSmKeOD",
  },
  {
    name: "PAT 100 - OModhrain, Ulintz",
    link: "https://app.groupme.com/join_group/65215568/ePh1M4KI",
  },
  {
    name: "PAT 100 - Rush",
    link: "https://app.groupme.com/join_group/65215578/D0JBvgOi",
  },
  {
    name: "PAT 102 - OModhrain, Ulintz",
    link: "https://app.groupme.com/join_group/65215589/sm83aN05",
  },
  {
    name: "PAT 200 - Dooley",
    link: "https://app.groupme.com/join_group/65215597/YNjCb1rV",
  },
  {
    name: "PAT 200 - Edwards",
    link: "https://app.groupme.com/join_group/65215603/6lIoykeP",
  },
  {
    name: "PAT 200 - hill",
    link: "https://app.groupme.com/join_group/65215612/9qAmQBar",
  },
  {
    name: "PAT 201 - Edwards",
    link: "https://app.groupme.com/join_group/65215621/Q2yYB3yZ",
  },
  {
    name: "PAT 202 - Dooley",
    link: "https://app.groupme.com/join_group/65215628/KzxT0KG7",
  },
  {
    name: "PAT 202 - Santos",
    link: "https://app.groupme.com/join_group/65215639/oYNClp6T",
  },
  {
    name: "PAT 204 - Camc",
    link: "https://app.groupme.com/join_group/65215647/bklRCI8t",
  },
  {
    name: "PAT 204 - Ozcan",
    link: "https://app.groupme.com/join_group/65215654/MTVT9aDw",
  },
  {
    name: "PAT 300 - Camc",
    link: "https://app.groupme.com/join_group/65215665/eKQfQsPs",
  },
  {
    name: "PAT 300 - Granzow",
    link: "https://app.groupme.com/join_group/65215672/lAsk1hpa",
  },
  {
    name: "PAT 300 - Gurevich",
    link: "https://app.groupme.com/join_group/65215679/hDKrBTKP",
  },
  {
    name: "PAT 300 - Kirshner",
    link: "https://app.groupme.com/join_group/65215687/kd8YzdSj",
  },
  {
    name: "PAT 300 - OModhrain",
    link: "https://app.groupme.com/join_group/65215696/FmkT9ewV",
  },
  {
    name: "PAT 300 - Rush",
    link: "https://app.groupme.com/join_group/65215704/4bhUCtRE",
  },
  {
    name: "PAT 305 - Thompson",
    link: "https://app.groupme.com/join_group/65215711/Pyhf8iqO",
  },
  {
    name: "PAT 332",
    link: "https://app.groupme.com/join_group/65215717/aTOpQ1sL",
  },
  {
    name: "PAT 412 - Rush",
    link: "https://app.groupme.com/join_group/65215819/6gF0sl8c",
  },
  {
    name: "PAT 413 - Gurevich",
    link: "https://app.groupme.com/join_group/65215826/k5lLFzzK",
  },
  {
    name: "PAT 422 - Corey",
    link: "https://app.groupme.com/join_group/65215834/3cUYGdzg",
  },
  {
    name: "PAT 432 - Edwards",
    link: "https://app.groupme.com/join_group/65215850/k6SVb5lI",
  },
  {
    name: "PAT 442 - Kirshner",
    link: "https://app.groupme.com/join_group/65215855/kWhjAKkC",
  },
  {
    name: "PAT 451",
    link: "https://app.groupme.com/join_group/65215865/XmXnnJIK",
  },
  {
    name: "PAT 452 - Gurevich",
    link: "https://app.groupme.com/join_group/65215874/tUOGZKqP",
  },
  {
    name: "PAT 454 - Granzow",
    link: "https://app.groupme.com/join_group/65215883/3XBXvDrI",
  },
  {
    name: "PAT 461 - Granzow",
    link: "https://app.groupme.com/join_group/65215889/yM3CPbT2",
  },
  {
    name: "PAT 472 - Kuuskoski",
    link: "https://app.groupme.com/join_group/65215892/q2DVKG3K",
  },
  {
    name: "PAT 490 - Camc",
    link: "https://app.groupme.com/join_group/65215897/UnOP0QQf",
  },
  {
    name: "PAT 490 - Corey",
    link: "https://app.groupme.com/join_group/65215902/vXtGZ3kr",
  },
  {
    name: "PAT 490 - Dooley",
    link: "https://app.groupme.com/join_group/65215908/Nhsy0tfv",
  },
  {
    name: "PAT 490 - Granzow",
    link: "https://app.groupme.com/join_group/65215922/3GL58KvA",
  },
  {
    name: "PAT 490 - Gurevich",
    link: "https://app.groupme.com/join_group/65215931/1vYTQSue",
  },
  {
    name: "PAT 490 - Kirshner",
    link: "https://app.groupme.com/join_group/65215936/e3LIUYGG",
  },
  {
    name: "PAT 490 - OModhrain",
    link: "https://app.groupme.com/join_group/65215942/f3RoYqKS",
  },
  {
    name: "PAT 490 - Rush",
    link: "https://app.groupme.com/join_group/65215954/5OcKEtGE",
  },
  {
    name: "PAT 490 - Santos",
    link: "https://app.groupme.com/join_group/65215962/1jG0KiWA",
  },
  {
    name: "PAT 498 - LeBoeuf",
    link: "https://app.groupme.com/join_group/65215975/w8r9SWr4",
  },
  {
    name: "PERCUSS 488 - Perkins",
    link: "https://app.groupme.com/join_group/65215983/VZ5qG0r7",
  },
  {
    name: "PERSIAN 102 - Aghaei",
    link: "https://app.groupme.com/join_group/65215990/eMEvWiEq",
  },
  {
    name: "PERSIAN 202 - Aghaei",
    link: "https://app.groupme.com/join_group/65215997/JNXCGZiM",
  },
  {
    name: "PHARMACY 212 - Luzum",
    link: "https://app.groupme.com/join_group/65215999/tCKWgzAq",
  },
  {
    name: "PHARMACY 217 - Ellingrod",
    link: "https://app.groupme.com/join_group/65216006/IM5voviq",
  },
  {
    name: "PHARMACY 412 - Hertz",
    link: "https://app.groupme.com/join_group/65216017/gabqwUCd",
  },
  {
    name: "PHARMSCI 101 - Lee",
    link: "https://app.groupme.com/join_group/65216027/bPSk1xSM",
  },
  {
    name: "PHARMSCI 211 - Amidon",
    link: "https://app.groupme.com/join_group/65216040/BvgqJO10",
  },
  {
    name: "PHARMSCI 402 - Amidon",
    link: "https://app.groupme.com/join_group/65216051/pmnrWJpc",
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
    name: "PHIL 196 - Baker",
    link: "https://app.groupme.com/join_group/65216204/zs8olN8i",
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
    name: "PHIL 365 - Mandair",
    link: "https://app.groupme.com/join_group/65216287/dsMEpKU3",
  },
  {
    name: "PHIL 376 - Bouma",
    link: "https://app.groupme.com/join_group/65216294/8jwsgxK0",
  },
  {
    name: "PHIL 383 - Lormand",
    link: "https://app.groupme.com/join_group/65216302/mjfsPtYf",
  },
  {
    name: "PHIL 391 - Caston",
    link: "https://app.groupme.com/join_group/65216308/ZJfIRif9",
  },
  {
    name: "PHIL 397 - Davis",
    link: "https://app.groupme.com/join_group/65216310/FmuFVLoR",
  },
  {
    name: "PHIL 414 - Thomason",
    link: "https://app.groupme.com/join_group/65216326/bqTOqkiD",
  },
  {
    name: "PHIL 416 - Fairchild",
    link: "https://app.groupme.com/join_group/65216336/Px1BFAjn",
  },
  {
    name: "PHIL 430 - Munroe",
    link: "https://app.groupme.com/join_group/65216353/GUC4swWC",
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
    name: "PHIL 450 - Lormand",
    link: "https://app.groupme.com/join_group/65216374/LfZnTvzs",
  },
  {
    name: "PHIL 475 - Gailus",
    link: "https://app.groupme.com/join_group/65216383/fWo5zJq4",
  },
  {
    name: "PHRMACOL 425 - Jutkiewicz, Courtney, OMalley, Hernandez-Casner",
    link: "https://app.groupme.com/join_group/65216388/0L15KMXv",
  },
  {
    name: "PHYSED 255 - Winkelseth",
    link: "https://app.groupme.com/join_group/65216498/1IxfZADE",
  },
  {
    name: "PHYSED 336 - Winkelseth",
    link: "https://app.groupme.com/join_group/65216503/0xpCukF2",
  },
  {
    name: "PHYSICS 106 - Chupp",
    link: "https://app.groupme.com/join_group/65216511/UHpVWBcO",
  },
  {
    name: "PHYSICS 115 - Tomasch",
    link: "https://app.groupme.com/join_group/65216519/8AOmDZfw",
  },
  {
    name: "PHYSICS 116 - Spitz",
    link: "https://app.groupme.com/join_group/65216531/TNjXMX3w",
  },
  {
    name: "PHYSICS 119",
    link: "https://app.groupme.com/join_group/65216551/fArOqmUd",
  },
  {
    name: "PHYSICS 119 - Spica",
    link: "https://app.groupme.com/join_group/65216560/03NWLVxB",
  },
  {
    name: "PHYSICS 121 - Tomasch",
    link: "https://app.groupme.com/join_group/65216567/dNtctH7R",
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
    name: "PHYSICS 260 - Campbell, Spanton",
    link: "https://app.groupme.com/join_group/65218005/RIxLFKsC",
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
    name: "PHYSICS 405 - Qian",
    link: "https://app.groupme.com/join_group/65218088/cuUdXi5J",
  },
  {
    name: "PHYSICS 406 - Aidala",
    link: "https://app.groupme.com/join_group/65218098/eMdQJ2Uq",
  },
  {
    name: "PHYSICS 411 - Gull",
    link: "https://app.groupme.com/join_group/65218107/qa7L3xyO",
  },
  {
    name: "PHYSICS 417 - Yang",
    link: "https://app.groupme.com/join_group/65218116/JXZRvXqt",
  },
  {
    name: "PHYSICS 420 - Avestruz",
    link: "https://app.groupme.com/join_group/65218128/7xoChpEM",
  },
  {
    name: "PHYSICS 430 - Ivanova",
    link: "https://app.groupme.com/join_group/65218131/Vhw7dVqH",
  },
  {
    name: "PHYSICS 441",
    link: "https://app.groupme.com/join_group/65218139/sbuwK0ra",
  },
  {
    name: "PHYSICS 442",
    link: "https://app.groupme.com/join_group/65218149/q4JOPZ40",
  },
  {
    name: "PHYSICS 450",
    link: "https://app.groupme.com/join_group/65218159/IRIF2s3p",
  },
  {
    name: "PHYSICS 453 - Riles",
    link: "https://app.groupme.com/join_group/65218175/ks0rjP8z",
  },
  {
    name: "PHYSICS 457 - Zhou",
    link: "https://app.groupme.com/join_group/65218186/yvmjCTKF",
  },
  {
    name: "PHYSICS 463 - Mao",
    link: "https://app.groupme.com/join_group/65218203/GJ16KUyx",
  },
  {
    name: "PHYSIOL 404",
    link: "https://app.groupme.com/join_group/65218338/YItuDwZb",
  },
  {
    name: "PHYSIOL 415",
    link: "https://app.groupme.com/join_group/65218344/6wcaBPLy",
  },
  {
    name: "PIANO 110",
    link: "https://app.groupme.com/join_group/65218357/hlMWJMsq",
  },
  {
    name: "PIANO 110 - Cho",
    link: "https://app.groupme.com/join_group/65218370/Jr1ZQ4Ue",
  },
  {
    name: "PIANO 110 - Kasman",
    link: "https://app.groupme.com/join_group/65218378/9qiTnzZP",
  },
  {
    name: "PIANO 110 - Kim",
    link: "https://app.groupme.com/join_group/65218392/aiwkyoIa",
  },
  {
    name: "PIANO 110 - Lee",
    link: "https://app.groupme.com/join_group/65218399/r1RJzb1U",
  },
  {
    name: "PIANO 110 - Ma",
    link: "https://app.groupme.com/join_group/65218409/KQqBtwmV",
  },
  {
    name: "PIANO 110 - Solomonick",
    link: "https://app.groupme.com/join_group/65218417/MC8is8ob",
  },
  {
    name: "PIANO 110 - Wong",
    link: "https://app.groupme.com/join_group/65218424/x0S5nJqG",
  },
  {
    name: "PIANO 110 - Zhang",
    link: "https://app.groupme.com/join_group/65218439/MVFFaHGv",
  },
  {
    name: "PIANO 111 - Cho",
    link: "https://app.groupme.com/join_group/65218454/4BQgc6n7",
  },
  {
    name: "PIANO 111 - Lee",
    link: "https://app.groupme.com/join_group/65218467/3U5h4e2c",
  },
  {
    name: "PIANO 111 - Liu",
    link: "https://app.groupme.com/join_group/65218482/CfSwWIAO",
  },
  {
    name: "PIANO 111 - Wong",
    link: "https://app.groupme.com/join_group/65218492/ZlzULNbF",
  },
  {
    name: "PIANO 112 - Benson",
    link: "https://app.groupme.com/join_group/65218496/0XMw05So",
  },
  {
    name: "PIANO 112 - Kim",
    link: "https://app.groupme.com/join_group/65218506/GUOJ3EfU",
  },
  {
    name: "PIANO 112 - Ren",
    link: "https://app.groupme.com/join_group/65218516/xY0gyq86",
  },
  {
    name: "PIANO 112 - Sahin",
    link: "https://app.groupme.com/join_group/65218532/Sez7Xmw7",
  },
  {
    name: "PIANO 112 - Santoso",
    link: "https://app.groupme.com/join_group/65218539/v43nsYaC",
  },
  {
    name: "PIANO 112 - Shinnick",
    link: "https://app.groupme.com/join_group/65218548/gx7dUiS1",
  },
  {
    name: "PIANO 112 - Wan",
    link: "https://app.groupme.com/join_group/65218555/zLXdENWS",
  },
  {
    name: "PIANO 112 - Yang",
    link: "https://app.groupme.com/join_group/65218564/WH4jdQPC",
  },
  {
    name: "PIANO 113 - Chang",
    link: "https://app.groupme.com/join_group/65218576/gEQdaMz1",
  },
  {
    name: "PIANO 114 - Chang",
    link: "https://app.groupme.com/join_group/65218587/hEWY0U9V",
  },
  {
    name: "PIANO 205 - Howell",
    link: "https://app.groupme.com/join_group/65218601/P0aZfVuc",
  },
  {
    name: "PIANOLP 402 - Grijalva",
    link: "https://app.groupme.com/join_group/65218722/ymL6tkE8",
  },
  {
    name: "PNE 201",
    link: "https://app.groupme.com/join_group/65218730/TH1MIYoB",
  },
  {
    name: "PNE 202",
    link: "https://app.groupme.com/join_group/65218741/Un880PLZ",
  },
  {
    name: "PNE 203",
    link: "https://app.groupme.com/join_group/65218753/njVL51RO",
  },
  {
    name: "PNE 204",
    link: "https://app.groupme.com/join_group/65218766/LjqZOalM",
  },
  {
    name: "PNE 205",
    link: "https://app.groupme.com/join_group/65218775/0KJJGEDq",
  },
  {
    name: "PNE 206",
    link: "https://app.groupme.com/join_group/65218792/Yc0aAlEj",
  },
  {
    name: "PNE 207",
    link: "https://app.groupme.com/join_group/65218805/3TXFqmu6",
  },
  {
    name: "PNE 208",
    link: "https://app.groupme.com/join_group/65218814/gj2sD7I1",
  },
  {
    name: "PNE 209",
    link: "https://app.groupme.com/join_group/65218830/5ALRWXFW",
  },
  {
    name: "PNE 210",
    link: "https://app.groupme.com/join_group/65218844/FEBiwGvA",
  },
  {
    name: "PNE 211",
    link: "https://app.groupme.com/join_group/65218854/1qoKTxZJ",
  },
  {
    name: "PNE 212",
    link: "https://app.groupme.com/join_group/65218865/2N0xTkHV",
  },
  {
    name: "PNE 213",
    link: "https://app.groupme.com/join_group/65218875/8H9xwS5e",
  },
  {
    name: "PNE 214",
    link: "https://app.groupme.com/join_group/65219246/5WrOLnhB",
  },
  {
    name: "PNE 215",
    link: "https://app.groupme.com/join_group/65219256/svDpZl9D",
  },
  {
    name: "PNE 216",
    link: "https://app.groupme.com/join_group/65219270/XYoHsuHT",
  },
  {
    name: "PNE 217",
    link: "https://app.groupme.com/join_group/65219277/RfpDFDBf",
  },
  {
    name: "PNE 218",
    link: "https://app.groupme.com/join_group/65219285/7zIDyFD6",
  },
  {
    name: "PNE 219",
    link: "https://app.groupme.com/join_group/65219290/96rfaBwM",
  },
  {
    name: "PNE 220",
    link: "https://app.groupme.com/join_group/65219303/ymhkWmpz",
  },
  {
    name: "PNE 221",
    link: "https://app.groupme.com/join_group/65219309/o9ZPFcSX",
  },
  {
    name: "PNE 222",
    link: "https://app.groupme.com/join_group/65219320/6qezsiIT",
  },
  {
    name: "PNE 223",
    link: "https://app.groupme.com/join_group/65219329/s62x507M",
  },
  {
    name: "PNE 224",
    link: "https://app.groupme.com/join_group/65219342/2kSAjAUS",
  },
  {
    name: "PNE 225",
    link: "https://app.groupme.com/join_group/65219352/PtLwZjhd",
  },
  {
    name: "PNE 301",
    link: "https://app.groupme.com/join_group/65219361/iKIJn8fh",
  },
  {
    name: "PNE 302",
    link: "https://app.groupme.com/join_group/65219369/N6acRhIJ",
  },
  {
    name: "PNE 303",
    link: "https://app.groupme.com/join_group/65219379/p8aJKOy7",
  },
  {
    name: "PNE 304",
    link: "https://app.groupme.com/join_group/65219390/xFpHWrWI",
  },
  {
    name: "PNE 305",
    link: "https://app.groupme.com/join_group/65219403/saNZBzCS",
  },
  {
    name: "PNE 306",
    link: "https://app.groupme.com/join_group/65219417/2uAgf0uk",
  },
  {
    name: "PNE 307",
    link: "https://app.groupme.com/join_group/65219428/4LC8AcSl",
  },
  {
    name: "PNE 308",
    link: "https://app.groupme.com/join_group/65219443/vEnYb2EV",
  },
  {
    name: "PNE 309",
    link: "https://app.groupme.com/join_group/65219456/jlUxWD0n",
  },
  {
    name: "PNE 310",
    link: "https://app.groupme.com/join_group/65219466/n4T39V9X",
  },
  {
    name: "PNE 311",
    link: "https://app.groupme.com/join_group/65219472/2J7KjnZy",
  },
  {
    name: "PNE 312",
    link: "https://app.groupme.com/join_group/65219489/aiBIXLcv",
  },
  {
    name: "PNE 326",
    link: "https://app.groupme.com/join_group/65219500/31azBVq2",
  },
  {
    name: "PNE 328",
    link: "https://app.groupme.com/join_group/65219631/wxSYJuoh",
  },
  {
    name: "PNE 329",
    link: "https://app.groupme.com/join_group/65219642/PVjEKBz8",
  },
  {
    name: "PNE 330",
    link: "https://app.groupme.com/join_group/65219653/3yOrKov6",
  },
  {
    name: "PNE 331",
    link: "https://app.groupme.com/join_group/65219661/Hkrx48Id",
  },
  {
    name: "PNE 332",
    link: "https://app.groupme.com/join_group/65219669/NBsvpcWq",
  },
  {
    name: "PNE 333",
    link: "https://app.groupme.com/join_group/65219678/6qvzfpS6",
  },
  {
    name: "PNE 334",
    link: "https://app.groupme.com/join_group/65219688/wnpUurvR",
  },
  {
    name: "PNE 335",
    link: "https://app.groupme.com/join_group/65219696/AOL8ftMG",
  },
  {
    name: "PNE 336",
    link: "https://app.groupme.com/join_group/65219708/6wMTrE1B",
  },
  {
    name: "PNE 337",
    link: "https://app.groupme.com/join_group/65219719/hmKOXRL4",
  },
  {
    name: "PNE 351",
    link: "https://app.groupme.com/join_group/65219728/j4FYAxRS",
  },
  {
    name: "PNE 353",
    link: "https://app.groupme.com/join_group/65219741/YtcgGu15",
  },
  {
    name: "PNE 357",
    link: "https://app.groupme.com/join_group/65219773/z3wsqOkd",
  },
  {
    name: "PNE 359",
    link: "https://app.groupme.com/join_group/65219788/LaBI0TdR",
  },
  {
    name: "PNE 360",
    link: "https://app.groupme.com/join_group/65219800/Lent2qTq",
  },
  {
    name: "PNE 361",
    link: "https://app.groupme.com/join_group/65219809/xojatGTS",
  },
  {
    name: "PNE 362",
    link: "https://app.groupme.com/join_group/65219818/44ENLbDU",
  },
  {
    name: "PNE 363",
    link: "https://app.groupme.com/join_group/65219830/Jj5LpPLM",
  },
  {
    name: "PNE 364",
    link: "https://app.groupme.com/join_group/65219840/D0xXH5M5",
  },
  {
    name: "PNE 365",
    link: "https://app.groupme.com/join_group/65219854/qQLTtonI",
  },
  {
    name: "PNE 366",
    link: "https://app.groupme.com/join_group/65219865/PIBQ0Iay",
  },
  {
    name: "PNE 376",
    link: "https://app.groupme.com/join_group/65219880/bYegcPRn",
  },
  {
    name: "PNE 377",
    link: "https://app.groupme.com/join_group/65219897/5AzT2xUM",
  },
  {
    name: "PNE 378",
    link: "https://app.groupme.com/join_group/65219919/tWgRQPJP",
  },
  {
    name: "PNE 379",
    link: "https://app.groupme.com/join_group/65219930/NumzrFbh",
  },
  {
    name: "PNE 380",
    link: "https://app.groupme.com/join_group/65219938/lG4u2Rfq",
  },
  {
    name: "PNE 382",
    link: "https://app.groupme.com/join_group/65219964/oz5elEvL",
  },
  {
    name: "PNE 383",
    link: "https://app.groupme.com/join_group/65219977/QJu0dsx3",
  },
  {
    name: "PNE 384",
    link: "https://app.groupme.com/join_group/65219985/S4jfqDr8",
  },
  {
    name: "PNE 385",
    link: "https://app.groupme.com/join_group/65219993/Keo7Cpk6",
  },
  {
    name: "PNE 386",
    link: "https://app.groupme.com/join_group/65220001/XXvSqbXv",
  },
  {
    name: "PNE 387",
    link: "https://app.groupme.com/join_group/65220016/PTcrP0KU",
  },
  {
    name: "PNE 402",
    link: "https://app.groupme.com/join_group/65220162/34wifepv",
  },
  {
    name: "PNE 403",
    link: "https://app.groupme.com/join_group/65220176/crSZwyM4",
  },
  {
    name: "PNE 404",
    link: "https://app.groupme.com/join_group/65220189/sYCTnCUD",
  },
  {
    name: "PNE 406",
    link: "https://app.groupme.com/join_group/65220206/m7RvEf3d",
  },
  {
    name: "PNE 407",
    link: "https://app.groupme.com/join_group/65220213/yC2F9ReA",
  },
  {
    name: "PNE 408",
    link: "https://app.groupme.com/join_group/65220227/KNb29GWL",
  },
  {
    name: "PNE 409",
    link: "https://app.groupme.com/join_group/65220234/qb6QtVfb",
  },
  {
    name: "PNE 410",
    link: "https://app.groupme.com/join_group/65220243/kAqY40qV",
  },
  {
    name: "PNE 411",
    link: "https://app.groupme.com/join_group/65220258/U3rsb16l",
  },
  {
    name: "PNE 426",
    link: "https://app.groupme.com/join_group/65220270/cY79mLny",
  },
  {
    name: "PNE 427",
    link: "https://app.groupme.com/join_group/65220281/zYiALMWa",
  },
  {
    name: "PNE 428",
    link: "https://app.groupme.com/join_group/65220294/ahxAGmjq",
  },
  {
    name: "PNE 429",
    link: "https://app.groupme.com/join_group/65220299/rGsfbOZ3",
  },
  {
    name: "PNE 430",
    link: "https://app.groupme.com/join_group/65220305/0bvDhckN",
  },
  {
    name: "PNE 431",
    link: "https://app.groupme.com/join_group/65220315/66IqJhvk",
  },
  {
    name: "PNE 432",
    link: "https://app.groupme.com/join_group/65220331/ijr6uKjw",
  },
  {
    name: "PNE 434",
    link: "https://app.groupme.com/join_group/65220340/7TcnLyCj",
  },
  {
    name: "PNE 435",
    link: "https://app.groupme.com/join_group/65220351/lo3Xs2I5",
  },
  {
    name: "PNE 436",
    link: "https://app.groupme.com/join_group/65220359/VfK2E3u7",
  },
  {
    name: "PNE 438",
    link: "https://app.groupme.com/join_group/65220366/riE27WOn",
  },
  {
    name: "PNE 439",
    link: "https://app.groupme.com/join_group/65220377/qYWNlxO0",
  },
  {
    name: "PNE 442",
    link: "https://app.groupme.com/join_group/65220385/sJx9Yy9I",
  },
  {
    name: "PNE 451",
    link: "https://app.groupme.com/join_group/65220391/3a3UGRwE",
  },
  {
    name: "PNE 452",
    link: "https://app.groupme.com/join_group/65220402/OCJpj7wv",
  },
  {
    name: "PNE 453",
    link: "https://app.groupme.com/join_group/65220415/CvlRqYUe",
  },
  {
    name: "PNE 455",
    link: "https://app.groupme.com/join_group/65220423/YWoZ4Kuh",
  },
  {
    name: "PNE 458",
    link: "https://app.groupme.com/join_group/65220432/lY2XWSbB",
  },
  {
    name: "PNE 461",
    link: "https://app.groupme.com/join_group/65220568/gssXDks2",
  },
  {
    name: "PNE 462",
    link: "https://app.groupme.com/join_group/65220577/FUIOEqSK",
  },
  {
    name: "PNE 463",
    link: "https://app.groupme.com/join_group/65220583/fNcysz3z",
  },
  {
    name: "PNE 464",
    link: "https://app.groupme.com/join_group/65220592/5yO0TKRj",
  },
  {
    name: "PNE 465",
    link: "https://app.groupme.com/join_group/65220603/dJRNtVX5",
  },
  {
    name: "PNE 466",
    link: "https://app.groupme.com/join_group/65220609/obQBEveR",
  },
  {
    name: "PNE 467",
    link: "https://app.groupme.com/join_group/65220618/w1CRODrW",
  },
  {
    name: "POLISH 122 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65220625/lAquPMTw",
  },
  {
    name: "POLISH 222 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65220636/TuT6nrJP",
  },
  {
    name: "POLISH 314",
    link: "https://app.groupme.com/join_group/65220648/s06mvHyB",
  },
  {
    name: "POLISH 322 - Pasek",
    link: "https://app.groupme.com/join_group/65220660/iZtsHHIr",
  },
  {
    name: "POLISH 422 - Pasek",
    link: "https://app.groupme.com/join_group/65220670/9FMoBXF7",
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
    name: "POLSCI 307 - Manuel",
    link: "https://app.groupme.com/join_group/65220764/Cf4wo8Mt",
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
    name: "POLSCI 339 - Gallagher",
    link: "https://app.groupme.com/join_group/65220793/g6rkAWa7",
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
    name: "POLSCI 389 - Temin",
    link: "https://app.groupme.com/join_group/65221026/t1YCbMX2",
  },
  {
    name: "POLSCI 396 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65221036/aSr56nSq",
  },
  {
    name: "POLSCI 399 - Horner",
    link: "https://app.groupme.com/join_group/65221045/M5m8XyYw",
  },
  {
    name: "POLSCI 402 - Tyler",
    link: "https://app.groupme.com/join_group/65221053/f1f7i5sy",
  },
  {
    name: "POLSCI 434 - Suny",
    link: "https://app.groupme.com/join_group/65221063/3pz5CrAM",
  },
  {
    name: "POLSCI 489 - Davenport",
    link: "https://app.groupme.com/join_group/65221086/6u9kM6MJ",
  },
  {
    name: "POLSCI 489 - Davis",
    link: "https://app.groupme.com/join_group/65221096/tlluXMro",
  },
  {
    name: "POLSCI 489 - Markovits",
    link: "https://app.groupme.com/join_group/65221110/qEaSTe7k",
  },
  {
    name: "POLSCI 489 - Mickey",
    link: "https://app.groupme.com/join_group/65221123/N4GbrQ0y",
  },
  {
    name: "POLSCI 489 - Nathan",
    link: "https://app.groupme.com/join_group/65221135/JRxJqvB2",
  },
  {
    name: "POLSCI 489 - Nordaas",
    link: "https://app.groupme.com/join_group/65221142/gY2QwvpC",
  },
  {
    name: "POLSCI 489 - Pitcher",
    link: "https://app.groupme.com/join_group/65221152/ts0n34bV",
  },
  {
    name: "POLSCI 489 - Shiraito",
    link: "https://app.groupme.com/join_group/65221157/i0L5YqnU",
  },
  {
    name: "POLSCI 489 - Zeisberg",
    link: "https://app.groupme.com/join_group/65221180/vdjWJvds",
  },
  {
    name: "POLSCI 491 - Demessie",
    link: "https://app.groupme.com/join_group/65221195/EuxtwTXi",
  },
  {
    name: "POLSCI 492",
    link: "https://app.groupme.com/join_group/65221209/Fmk3jCq8",
  },
  {
    name: "POLSCI 494 - Min",
    link: "https://app.groupme.com/join_group/65221223/7J43AWmP",
  },
  {
    name: "POLSCI 495 - Heffernan",
    link: "https://app.groupme.com/join_group/65221238/IB4PRvGb",
  },
  {
    name: "POLSCI 495 - Manuel",
    link: "https://app.groupme.com/join_group/65221242/d2rouK3F",
  },
  {
    name: "POLSCI 496 - Ocampo",
    link: "https://app.groupme.com/join_group/65221253/xoaVwbn8",
  },
  {
    name: "POLSCI 498 - Fariss",
    link: "https://app.groupme.com/join_group/65221270/3mASlKZm",
  },
  {
    name: "PORTUG 102 - Segarra Costaguta Mattos",
    link: "https://app.groupme.com/join_group/65221283/GmPxfajq",
  },
  {
    name: "PORTUG 232 - Segarra Costaguta Mattos",
    link: "https://app.groupme.com/join_group/65221293/c2WKcmWN",
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
    name: "PPE 400 - Lowe",
    link: "https://app.groupme.com/join_group/65221467/yz0bjSis",
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
    name: "PSYCH 120 - Jodl",
    link: "https://app.groupme.com/join_group/65221519/05JrAcnu",
  },
  {
    name: "PSYCH 120 - Park",
    link: "https://app.groupme.com/join_group/65221530/9F1dUoHq",
  },
  {
    name: "PSYCH 122 - Hicks",
    link: "https://app.groupme.com/join_group/65221543/f9CiU4o1",
  },
  {
    name: "PSYCH 211",
    link: "https://app.groupme.com/join_group/65221558/8PPUFJLY",
  },
  {
    name: "PSYCH 213",
    link: "https://app.groupme.com/join_group/65221572/5uaQhXLZ",
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
    name: "PSYCH 304",
    link: "https://app.groupme.com/join_group/65221743/QVBHdJd4",
  },
  {
    name: "PSYCH 305",
    link: "https://app.groupme.com/join_group/65221754/SZZys7Du",
  },
  {
    name: "PSYCH 306",
    link: "https://app.groupme.com/join_group/65221783/Zep7BliY",
  },
  {
    name: "PSYCH 308",
    link: "https://app.groupme.com/join_group/65221794/JCONjBrt",
  },
  {
    name: "PSYCH 310 - Hwang",
    link: "https://app.groupme.com/join_group/65221801/1AtTPIZk",
  },
  {
    name: "PSYCH 310 - Schoem",
    link: "https://app.groupme.com/join_group/65221812/jR7QWD0s",
  },
  {
    name: "PSYCH 311",
    link: "https://app.groupme.com/join_group/65221824/G8V9aS6E",
  },
  {
    name: "PSYCH 311 - Hicks",
    link: "https://app.groupme.com/join_group/65221839/rw88E8vs",
  },
  {
    name: "PSYCH 312",
    link: "https://app.groupme.com/join_group/65221853/fUMiBKzJ",
  },
  {
    name: "PSYCH 324",
    link: "https://app.groupme.com/join_group/65221868/PRHudtM8",
  },
  {
    name: "PSYCH 325",
    link: "https://app.groupme.com/join_group/65221880/u37rAQHf",
  },
  {
    name: "PSYCH 333 - Berridge",
    link: "https://app.groupme.com/join_group/65222037/DnlNI6MQ",
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
    name: "PSYCH 340 - Perkins",
    link: "https://app.groupme.com/join_group/65222074/vnoBnnGY",
  },
  {
    name: "PSYCH 341",
    link: "https://app.groupme.com/join_group/65222086/CsaeIydW",
  },
  {
    name: "PSYCH 344 - Guo",
    link: "https://app.groupme.com/join_group/65222098/XMDzTC59",
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
    name: "PSYCH 355 - Gelman",
    link: "https://app.groupme.com/join_group/65222164/jYDuanKb",
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
    name: "PSYCH 362 - De Young",
    link: "https://app.groupme.com/join_group/65222198/nk381Row",
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
    name: "PSYCH 380 - Sekaquaptewa",
    link: "https://app.groupme.com/join_group/65222245/svnz7x30",
  },
  {
    name: "PSYCH 389 - Dunning",
    link: "https://app.groupme.com/join_group/65222255/3V6X3oA3",
  },
  {
    name: "PSYCH 390 - Mahalingam",
    link: "https://app.groupme.com/join_group/65222269/APF3fvVw",
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
    name: "PSYCH 401 - Aragona",
    link: "https://app.groupme.com/join_group/65222296/JCFSRYKI",
  },
  {
    name: "PSYCH 401 - Beischel",
    link: "https://app.groupme.com/join_group/65222303/eOYeJOqU",
  },
  {
    name: "PSYCH 401 - Belgrade",
    link: "https://app.groupme.com/join_group/65222310/vwlD6lPb",
  },
  {
    name: "PSYCH 401 - Gohar",
    link: "https://app.groupme.com/join_group/65222459/Cvwwo5BF",
  },
  {
    name: "PSYCH 401 - Holden",
    link: "https://app.groupme.com/join_group/65222468/PpQ7bMAw",
  },
  {
    name: "PSYCH 401 - Malley",
    link: "https://app.groupme.com/join_group/65222476/uvt15mfP",
  },
  {
    name: "PSYCH 401 - Melani",
    link: "https://app.groupme.com/join_group/65222489/I5dZWrnr",
  },
  {
    name: "PSYCH 401 - Miller",
    link: "https://app.groupme.com/join_group/65222503/lhUSqqic",
  },
  {
    name: "PSYCH 401 - Rabinowitz",
    link: "https://app.groupme.com/join_group/65222510/uuy5mr00",
  },
  {
    name: "PSYCH 401 - Rios",
    link: "https://app.groupme.com/join_group/65222529/T4BEFLZl",
  },
  {
    name: "PSYCH 401 - Schiestl",
    link: "https://app.groupme.com/join_group/65222540/RyMlh7TT",
  },
  {
    name: "PSYCH 402 - Baumgartner",
    link: "https://app.groupme.com/join_group/65222549/M4VHogVH",
  },
  {
    name: "PSYCH 411 - Kaplowitz",
    link: "https://app.groupme.com/join_group/65222559/ZfPrzWBj",
  },
  {
    name: "PSYCH 413 - Pachella",
    link: "https://app.groupme.com/join_group/65222571/DtBLWLQE",
  },
  {
    name: "PSYCH 424 - Lustig",
    link: "https://app.groupme.com/join_group/65222584/3XJAGCpH",
  },
  {
    name: "PSYCH 426 - Lustig",
    link: "https://app.groupme.com/join_group/65222596/SPAplSY4",
  },
  {
    name: "PSYCH 429 - Lustig",
    link: "https://app.groupme.com/join_group/65222608/pF5mZ2sY",
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
    name: "PSYCH 433 - Ahmed",
    link: "https://app.groupme.com/join_group/65222638/uDQBwoPQ",
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
    name: "PSYCH 446 - Preston",
    link: "https://app.groupme.com/join_group/65222690/gBBRJCW0",
  },
  {
    name: "PSYCH 447 - Meyer",
    link: "https://app.groupme.com/join_group/65222700/NYqW33UI",
  },
  {
    name: "PSYCH 447 - Snodgrass",
    link: "https://app.groupme.com/join_group/65222710/vx325LSJ",
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
    name: "PSYCH 467 - Cortina",
    link: "https://app.groupme.com/join_group/65222896/5SJ5SW9n",
  },
  {
    name: "PSYCH 467 - Kira",
    link: "https://app.groupme.com/join_group/65222911/CXF3zVuI",
  },
  {
    name: "PSYCH 469 - Rosenbaum",
    link: "https://app.groupme.com/join_group/65222925/QwkDaQgo",
  },
  {
    name: "PSYCH 474 - Chang",
    link: "https://app.groupme.com/join_group/65222941/IkZABxSR",
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
    name: "PUBHLTH 305 - Rozek",
    link: "https://app.groupme.com/join_group/65222982/vHojO4i8",
  },
  {
    name: "PUBHLTH 309 - Bauer, Aaronson",
    link: "https://app.groupme.com/join_group/65222990/3PbXfdtL",
  },
  {
    name: "PUBHLTH 310 - Anderson",
    link: "https://app.groupme.com/join_group/65223004/dvyvtcM0",
  },
  {
    name: "PUBHLTH 313 - Harper",
    link: "https://app.groupme.com/join_group/65223014/eTGEsKQt",
  },
  {
    name: "PUBHLTH 382 - Neblett",
    link: "https://app.groupme.com/join_group/65223024/kX4JxE6h",
  },
  {
    name: "PUBHLTH 383 - Zawistowski",
    link: "https://app.groupme.com/join_group/65223037/HZW4Aak1",
  },
  {
    name: "PUBHLTH 402 - Piette",
    link: "https://app.groupme.com/join_group/65223047/yHd1zljs",
  },
  {
    name: "PUBHLTH 413 - Yang",
    link: "https://app.groupme.com/join_group/65223058/edyTdMYh",
  },
  {
    name: "PUBHLTH 460 - Rickard",
    link: "https://app.groupme.com/join_group/65223067/i8MK0OkX",
  },
  {
    name: "PUBPOL 250 - Raimi",
    link: "https://app.groupme.com/join_group/65223083/ezTJ3OpD",
  },
  {
    name: "PUBPOL 300 - Spencer",
    link: "https://app.groupme.com/join_group/65223095/3q82Cp1a",
  },
  {
    name: "PUBPOL 413",
    link: "https://app.groupme.com/join_group/65223101/H5a581DA",
  },
  {
    name: "PUBPOL 413 - Scheerer",
    link: "https://app.groupme.com/join_group/65223114/cejLTKmo",
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
    name: "PUBPOL 447",
    link: "https://app.groupme.com/join_group/65223156/3vYpGDYs",
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
    name: "PUBPOL 475 - Farley, Neidert",
    link: "https://app.groupme.com/join_group/65223366/GQLmYkXq",
  },
  {
    name: "PUBPOL 475 - Hall",
    link: "https://app.groupme.com/join_group/65223371/9TR0XkPt",
  },
  {
    name: "PUBPOL 475 - Harris",
    link: "https://app.groupme.com/join_group/65223381/BvSsxxgt",
  },
  {
    name: "PUBPOL 475 - Levitsky",
    link: "https://app.groupme.com/join_group/65223391/2Am97RK3",
  },
  {
    name: "PUBPOL 475 - Raimi",
    link: "https://app.groupme.com/join_group/65223400/nHuzKGK1",
  },
  {
    name: "PUBPOL 477",
    link: "https://app.groupme.com/join_group/65224236/8i9eLJOo",
  },
  {
    name: "PUBPOL 495 - Ali",
    link: "https://app.groupme.com/join_group/65224246/Rj8K2gGv",
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
    name: "QMSS 251 - Bruch, Romero",
    link: "https://app.groupme.com/join_group/65225410/Bb0tomLi",
  },
  {
    name: "QMSS 451 - Whitaker",
    link: "https://app.groupme.com/join_group/65225423/Ux1IRJou",
  },
  {
    name: "RCARTS 270",
    link: "https://app.groupme.com/join_group/65225435/lI6r6tv8",
  },
  {
    name: "RCARTS 334",
    link: "https://app.groupme.com/join_group/65225445/GvjxqZNJ",
  },
  {
    name: "RCARTS 350",
    link: "https://app.groupme.com/join_group/65225453/rCFbQQ5Y",
  },
  {
    name: "RCARTS 370",
    link: "https://app.groupme.com/join_group/65225463/5M7mcinA",
  },
  {
    name: "RCARTS 379",
    link: "https://app.groupme.com/join_group/65225470/kOS72Cmd",
  },
  {
    name: "RCARTS 390",
    link: "https://app.groupme.com/join_group/65225478/GWNU1hj5",
  },
  {
    name: "RCARTS 399",
    link: "https://app.groupme.com/join_group/65225485/LA3Y0t83",
  },
  {
    name: "RCASL 102 - Berwanger",
    link: "https://app.groupme.com/join_group/65226436/xM5OHoeF",
  },
  {
    name: "RCASL 202 - Berwanger",
    link: "https://app.groupme.com/join_group/65226447/5WFlhSrJ",
  },
  {
    name: "RCCORE 100 - Brandel",
    link: "https://app.groupme.com/join_group/65226457/zS6pXMxk",
  },
  {
    name: "RCCORE 100 - Stainton",
    link: "https://app.groupme.com/join_group/65226466/EGZsjPGj",
  },
  {
    name: "RCCORE 334 - Merrill",
    link: "https://app.groupme.com/join_group/65226473/kGgzGTvK",
  },
  {
    name: "RCHUMS 150 - Flinn",
    link: "https://app.groupme.com/join_group/65226485/6aS5mbA0",
  },
  {
    name: "RCHUMS 202 - Wetzel",
    link: "https://app.groupme.com/join_group/65226491/oJyWPTkV",
  },
  {
    name: "RCHUMS 220 - Matthews",
    link: "https://app.groupme.com/join_group/65226503/ysSq8Jpm",
  },
  {
    name: "RCHUMS 221 - Messer",
    link: "https://app.groupme.com/join_group/65226515/JcRt4Ydc",
  },
  {
    name: "RCHUMS 251 - Wells",
    link: "https://app.groupme.com/join_group/65226524/v9NCNsEh",
  },
  {
    name: "RCHUMS 272 - Ward",
    link: "https://app.groupme.com/join_group/65226536/tSGS6F59",
  },
  {
    name: "RCHUMS 273 - Oh",
    link: "https://app.groupme.com/join_group/65226548/mK0IoXV9",
  },
  {
    name: "RCHUMS 280 - Westlake",
    link: "https://app.groupme.com/join_group/65226564/iUkSNFyu",
  },
  {
    name: "RCHUMS 281 - Mendeloff",
    link: "https://app.groupme.com/join_group/65226578/dRRVEEXd",
  },
  {
    name: "RCHUMS 303",
    link: "https://app.groupme.com/join_group/65226590/742EO2iP",
  },
  {
    name: "RCHUMS 312",
    link: "https://app.groupme.com/join_group/65226597/BSHYz61Z",
  },
  {
    name: "RCHUMS 320 - Thomas",
    link: "https://app.groupme.com/join_group/65226602/jXEosbw4",
  },
  {
    name: "RCHUMS 321 - Messer",
    link: "https://app.groupme.com/join_group/65226610/0YxdcLxc",
  },
  {
    name: "RCHUMS 325 - Matthews",
    link: "https://app.groupme.com/join_group/65226616/2KQAyFGs",
  },
  {
    name: "RCHUMS 325 - Messer",
    link: "https://app.groupme.com/join_group/65226624/6Yb9kcAw",
  },
  {
    name: "RCHUMS 325 - Rosegrant",
    link: "https://app.groupme.com/join_group/65226632/5fH9FhDx",
  },
  {
    name: "RCHUMS 325 - Thomas",
    link: "https://app.groupme.com/join_group/65226646/Ou9QufVo",
  },
  {
    name: "RCHUMS 326 - Matthews",
    link: "https://app.groupme.com/join_group/65226655/f3JszwNM",
  },
  {
    name: "RCHUMS 326 - Messer",
    link: "https://app.groupme.com/join_group/65226666/hLpTNlJH",
  },
  {
    name: "RCHUMS 326 - Rosegrant",
    link: "https://app.groupme.com/join_group/65226675/WjPY3cQg",
  },
  {
    name: "RCHUMS 326 - Thomas",
    link: "https://app.groupme.com/join_group/65226686/VMikcigQ",
  },
  {
    name: "RCHUMS 334",
    link: "https://app.groupme.com/join_group/65226701/lIVYmgdq",
  },
  {
    name: "RCHUMS 334 - Amrine",
    link: "https://app.groupme.com/join_group/65226710/hzQEzGpb",
  },
  {
    name: "RCHUMS 334 - Andre, Brissey",
    link: "https://app.groupme.com/join_group/65226721/cRsOBwnD",
  },
  {
    name: "RCHUMS 334 - Crasnow",
    link: "https://app.groupme.com/join_group/65226841/CwQ79tEL",
  },
  {
    name: "RCHUMS 334 - Gordon-Gurfinkel",
    link: "https://app.groupme.com/join_group/65226851/qbkw3KUy",
  },
  {
    name: "RCHUMS 334 - Maiorova",
    link: "https://app.groupme.com/join_group/65226860/I28dvash",
  },
  {
    name: "RCHUMS 334 - Matthews",
    link: "https://app.groupme.com/join_group/65226867/dhMH628l",
  },
  {
    name: "RCHUMS 334 - Rosegrant",
    link: "https://app.groupme.com/join_group/65226878/Dhkk3ayN",
  },
  {
    name: "RCHUMS 334 - Steinberg",
    link: "https://app.groupme.com/join_group/65226883/KIv9MCyu",
  },
  {
    name: "RCHUMS 334 - Wells",
    link: "https://app.groupme.com/join_group/65226889/N95P2eek",
  },
  {
    name: "RCHUMS 335 - Lucas",
    link: "https://app.groupme.com/join_group/65226900/w2rzOU1v",
  },
  {
    name: "RCHUMS 337 - Goodenough",
    link: "https://app.groupme.com/join_group/65226906/S2RM23fG",
  },
  {
    name: "RCHUMS 341",
    link: "https://app.groupme.com/join_group/65226910/trScNiZx",
  },
  {
    name: "RCHUMS 341 - Gordon-Gurfinkel",
    link: "https://app.groupme.com/join_group/65226924/xZ3QrP62",
  },
  {
    name: "RCHUMS 344 - Willette",
    link: "https://app.groupme.com/join_group/65226928/G1ujSt6F",
  },
  {
    name: "RCHUMS 381 - Walsh",
    link: "https://app.groupme.com/join_group/65226940/WBXKQzqI",
  },
  {
    name: "RCHUMS 387",
    link: "https://app.groupme.com/join_group/65226949/413bGBnM",
  },
  {
    name: "RCHUMS 423",
    link: "https://app.groupme.com/join_group/65226958/8VgJSI7K",
  },
  {
    name: "RCHUMS 425 - Matthews",
    link: "https://app.groupme.com/join_group/65226968/uxMbktj4",
  },
  {
    name: "RCHUMS 425 - Messer",
    link: "https://app.groupme.com/join_group/65226976/aPXtvYoG",
  },
  {
    name: "RCHUMS 425 - Rosegrant",
    link: "https://app.groupme.com/join_group/65226989/56Y49B0o",
  },
  {
    name: "RCHUMS 425 - Thomas",
    link: "https://app.groupme.com/join_group/65226999/G1yvShTq",
  },
  {
    name: "RCHUMS 426 - Matthews",
    link: "https://app.groupme.com/join_group/65227006/b4DfnhXi",
  },
  {
    name: "RCHUMS 426 - Messer",
    link: "https://app.groupme.com/join_group/65227018/eHmqLMXW",
  },
  {
    name: "RCHUMS 426 - Rosegrant",
    link: "https://app.groupme.com/join_group/65227029/e5hUFR93",
  },
  {
    name: "RCHUMS 426 - Thomas",
    link: "https://app.groupme.com/join_group/65227038/XJ3QoY5z",
  },
  {
    name: "RCHUMS 481",
    link: "https://app.groupme.com/join_group/65227052/6wOgpr6h",
  },
  {
    name: "RCHUMS 481 - Mendeloff",
    link: "https://app.groupme.com/join_group/65227156/lEtvIQGN",
  },
  {
    name: "RCHUMS 482",
    link: "https://app.groupme.com/join_group/65227168/YWkMTE3m",
  },
  {
    name: "RCHUMS 482 - Mendeloff",
    link: "https://app.groupme.com/join_group/65227177/gJpn8hh1",
  },
  {
    name: "RCIDIV 305 - Murphy",
    link: "https://app.groupme.com/join_group/65227190/ABeh48VJ",
  },
  {
    name: "RCIDIV 341 - Crisostomo",
    link: "https://app.groupme.com/join_group/65227197/IfN6pFJg",
  },
  {
    name: "RCIDIV 350 - Crowell",
    link: "https://app.groupme.com/join_group/65227208/Gffpb2Az",
  },
  {
    name: "RCIDIV 350 - Regester, Berger",
    link: "https://app.groupme.com/join_group/65227216/4xj7gH0R",
  },
  {
    name: "RCIDIV 351 - Burkam",
    link: "https://app.groupme.com/join_group/65227231/jf5warAa",
  },
  {
    name: "RCIDIV 390 - Murphy",
    link: "https://app.groupme.com/join_group/65227244/klAJEPSo",
  },
  {
    name: "RCIDIV 391 - Soderstrom",
    link: "https://app.groupme.com/join_group/65227251/pUr1CLXj",
  },
  {
    name: "RCLANG 190 - Bayraktar",
    link: "https://app.groupme.com/join_group/65227265/oJt9gfje",
  },
  {
    name: "RCLANG 191 - Cribari-Assali",
    link: "https://app.groupme.com/join_group/65227284/wunSeChi",
  },
  {
    name: "RCLANG 194 - Gutierrez Tashian",
    link: "https://app.groupme.com/join_group/65227293/KiAqovsm",
  },
  {
    name: "RCLANG 256 - Okuno",
    link: "https://app.groupme.com/join_group/65227303/YQctZiqg",
  },
  {
    name: "RCLANG 290 - Butler-Borruat",
    link: "https://app.groupme.com/join_group/65227313/Nn3dHwNe",
  },
  {
    name: "RCLANG 291 - Goertz",
    link: "https://app.groupme.com/join_group/65227321/QS7v4A02",
  },
  {
    name: "RCLANG 293 - Makin",
    link: "https://app.groupme.com/join_group/65227329/p9JNLC6t",
  },
  {
    name: "RCLANG 294 - Nunez",
    link: "https://app.groupme.com/join_group/65227335/EplPLDoF",
  },
  {
    name: "RCLANG 296 - Okuno",
    link: "https://app.groupme.com/join_group/65227346/zojkV3j7",
  },
  {
    name: "RCLANG 310 - Bayraktar",
    link: "https://app.groupme.com/join_group/65227359/Npu3y4VM",
  },
  {
    name: "RCLANG 320 - Butler-Borruat",
    link: "https://app.groupme.com/join_group/65227364/6amPsp1A",
  },
  {
    name: "RCLANG 320 - Filion",
    link: "https://app.groupme.com/join_group/65227371/lbzy49IA",
  },
  {
    name: "RCLANG 321 - Goertz",
    link: "https://app.groupme.com/join_group/65227383/7gzHl7ab",
  },
  {
    name: "RCLANG 324 - Espinoza-Pino",
    link: "https://app.groupme.com/join_group/65227393/6JtLmqzq",
  },
  {
    name: "RCLANG 324 - Lopez-Cotin",
    link: "https://app.groupme.com/join_group/65227408/IluWCkZP",
  },
  {
    name: "RCLANG 324 - Munoz-Diaz",
    link: "https://app.groupme.com/join_group/65227422/KsaGjd0V",
  },
  {
    name: "RCLANG 334 - Espinoza-Pino",
    link: "https://app.groupme.com/join_group/65227543/NdsYqrUQ",
  },
  {
    name: "RCMUSIC 258 - Gould",
    link: "https://app.groupme.com/join_group/65227553/5asKkFGF",
  },
  {
    name: "RCMUSIC 320",
    link: "https://app.groupme.com/join_group/65227559/aRbaNAlX",
  },
  {
    name: "RCMUSIC 321",
    link: "https://app.groupme.com/join_group/65227570/N3h8yrrK",
  },
  {
    name: "RCMUSIC 350 - Kirschenmann",
    link: "https://app.groupme.com/join_group/65227582/2tgLyiCn",
  },
  {
    name: "RCMUSIC 351",
    link: "https://app.groupme.com/join_group/65227590/Ub5kzxzE",
  },
  {
    name: "RCNSCI 202 - Benedict",
    link: "https://app.groupme.com/join_group/65227605/YMTC32vn",
  },
  {
    name: "RCNSCI 260 - Evans",
    link: "https://app.groupme.com/join_group/65227617/sBOUtmbJ",
  },
  {
    name: "RCSSCI 230 - Burkam",
    link: "https://app.groupme.com/join_group/65227626/ykyd2FJa",
  },
  {
    name: "RCSSCI 250 - Kawar",
    link: "https://app.groupme.com/join_group/65227633/LgpQVPb9",
  },
  {
    name: "RCSSCI 260 - Lynch",
    link: "https://app.groupme.com/join_group/65227642/G8gLbEnF",
  },
  {
    name: "RCSSCI 275 - Carson",
    link: "https://app.groupme.com/join_group/65227651/XhoUjmwv",
  },
  {
    name: "RCSSCI 290 - Murphy",
    link: "https://app.groupme.com/join_group/65227658/6eVmTl6Q",
  },
  {
    name: "RCSSCI 301 - Robinson",
    link: "https://app.groupme.com/join_group/65227665/Qb2yqYG5",
  },
  {
    name: "RCSSCI 330 - Ward",
    link: "https://app.groupme.com/join_group/65227675/F7KA338R",
  },
  {
    name: "RCSSCI 343 - Zelner",
    link: "https://app.groupme.com/join_group/65227682/Sdu5BhlD",
  },
  {
    name: "RCSSCI 350 - DAnieri",
    link: "https://app.groupme.com/join_group/65227688/F0c8z12J",
  },
  {
    name: "RCSSCI 360 - Dillard",
    link: "https://app.groupme.com/join_group/65227696/zQpVaGkE",
  },
  {
    name: "RCSSCI 360 - Krinitsky",
    link: "https://app.groupme.com/join_group/65227712/zZ6v56g0",
  },
  {
    name: "RCSSCI 360 - Lynch",
    link: "https://app.groupme.com/join_group/65227720/WKk4WDvj",
  },
  {
    name: "RCSSCI 360 - Pickus",
    link: "https://app.groupme.com/join_group/65227732/enKyyLc2",
  },
  {
    name: "RCSSCI 360 - Sanchez-Snell",
    link: "https://app.groupme.com/join_group/65227742/Zssl59eq",
  },
  {
    name: "RCSSCI 360 - Turnley",
    link: "https://app.groupme.com/join_group/65227752/rXHfk1NQ",
  },
  {
    name: "RCSSCI 371 - Ahn",
    link: "https://app.groupme.com/join_group/65227765/zFo5XdTn",
  },
  {
    name: "RCSSCI 390 - Dyer",
    link: "https://app.groupme.com/join_group/65227771/OzKnkI6t",
  },
  {
    name: "RCSSCI 390 - Romano Gillette",
    link: "https://app.groupme.com/join_group/65227776/lf8EG1Nj",
  },
  {
    name: "RCSSCI 461 - Kawar",
    link: "https://app.groupme.com/join_group/65227883/jUBX3hHn",
  },
  {
    name: "RCSSCI 461 - Pickus",
    link: "https://app.groupme.com/join_group/65227893/W2KplBfR",
  },
  {
    name: "REEES 396 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65227905/Qyiuh2Ky",
  },
  {
    name: "RELIGION 111 - Scott",
    link: "https://app.groupme.com/join_group/65227923/2TRibPiC",
  },
  {
    name: "RELIGION 204 - Knysh",
    link: "https://app.groupme.com/join_group/65227933/VTaEnREj",
  },
  {
    name: "RELIGION 225 - Brick",
    link: "https://app.groupme.com/join_group/65227940/j6eUvKvB",
  },
  {
    name: "RELIGION 230 - Lopez Jr",
    link: "https://app.groupme.com/join_group/65227947/RJRN5fTX",
  },
  {
    name: "RELIGION 231 - Ujeed, Lopez Jr",
    link: "https://app.groupme.com/join_group/65227955/ow4uIZ55",
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
    name: "RELIGION 258 - Levinson, Fox, Robertson",
    link: "https://app.groupme.com/join_group/65227980/Ge3SNoRQ",
  },
  {
    name: "RELIGION 260 - Neis",
    link: "https://app.groupme.com/join_group/65227991/6aL7fNKW",
  },
  {
    name: "RELIGION 262",
    link: "https://app.groupme.com/join_group/65227996/YZPruxVm",
  },
  {
    name: "RELIGION 306 - Mandair",
    link: "https://app.groupme.com/join_group/65228010/WzTrY0G5",
  },
  {
    name: "RELIGION 325 - Mir",
    link: "https://app.groupme.com/join_group/65228020/pvieFBql",
  },
  {
    name: "RELIGION 326 - Eliav",
    link: "https://app.groupme.com/join_group/65228029/ACPy2EFe",
  },
  {
    name: "RELIGION 328 - White",
    link: "https://app.groupme.com/join_group/65228040/SPamlWaR",
  },
  {
    name: "RELIGION 365 - Mandair",
    link: "https://app.groupme.com/join_group/65228052/HNzQA8HN",
  },
  {
    name: "ROB 103",
    link: "https://app.groupme.com/join_group/65228060/UGubo7ku",
  },
  {
    name: "ROMLANG 250 - Ekotto",
    link: "https://app.groupme.com/join_group/65228069/vlyLfTCx",
  },
  {
    name: "ROMLING 298 - Roosevelt",
    link: "https://app.groupme.com/join_group/65228078/w6xmjM9b",
  },
  {
    name: "ROMLING 333 - Goetz",
    link: "https://app.groupme.com/join_group/65228087/E5Vv0vFn",
  },
  {
    name: "ROMLING 413 - Garcia-Amaya",
    link: "https://app.groupme.com/join_group/65228097/pRAzsWjK",
  },
  {
    name: "ROMLING 415 - Gallego",
    link: "https://app.groupme.com/join_group/65228111/61GS09bF",
  },
  {
    name: "ROMLING 487 - Henriksen",
    link: "https://app.groupme.com/join_group/65228118/oGF0tZLS",
  },
  {
    name: "ROMLING 487 - Satterfield",
    link: "https://app.groupme.com/join_group/65228128/gbLkrXv7",
  },
  {
    name: "RUSSIAN 102",
    link: "https://app.groupme.com/join_group/65228136/Im0bYZEa",
  },
  {
    name: "RUSSIAN 202",
    link: "https://app.groupme.com/join_group/65228233/uFc7j7CV",
  },
  {
    name: "RUSSIAN 203 - Makin",
    link: "https://app.groupme.com/join_group/65228241/BVGB1pHv",
  },
  {
    name: "RUSSIAN 225 - Shkolnik",
    link: "https://app.groupme.com/join_group/65228247/W13CyZMw",
  },
  {
    name: "RUSSIAN 302 - Shkolnik",
    link: "https://app.groupme.com/join_group/65228261/HWIBrqVn",
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
    name: "RUSSIAN 402",
    link: "https://app.groupme.com/join_group/65228291/bXJP9DUk",
  },
  {
    name: "RUSSIAN 402 - Shkolnik",
    link: "https://app.groupme.com/join_group/65228300/R02tlCbP",
  },
  {
    name: "RUSSIAN 450 - Makin",
    link: "https://app.groupme.com/join_group/65228309/GTkV9ntz",
  },
  {
    name: "RUSSIAN 499 - Makin",
    link: "https://app.groupme.com/join_group/65228317/EXCXeqT7",
  },
  {
    name: "SACREDMU 491 - Kuperus",
    link: "https://app.groupme.com/join_group/65228326/kRzA02Qd",
  },
  {
    name: "SCAND 104 - Gull",
    link: "https://app.groupme.com/join_group/65228338/iDbJDBlk",
  },
  {
    name: "SCAND 234 - Eriksson",
    link: "https://app.groupme.com/join_group/65228544/DIO91R0C",
  },
  {
    name: "SCAND 325 - Eriksson",
    link: "https://app.groupme.com/join_group/65228555/dj1KMdAJ",
  },
  {
    name: "SCAND 442 - Gull",
    link: "https://app.groupme.com/join_group/65228566/CHKbYAgf",
  },
  {
    name: "SEAS 455 - Phung",
    link: "https://app.groupme.com/join_group/65228573/9bQQjVNj",
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
    name: "SI 320 - Godin, Besprozvany",
    link: "https://app.groupme.com/join_group/65228615/3MsfJGm7",
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
    name: "SI 340 - Chen",
    link: "https://app.groupme.com/join_group/65228650/whXCfzx7",
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
    name: "SI 390 - Frazier",
    link: "https://app.groupme.com/join_group/65228670/CpG8dsTN",
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
    name: "SI 431 - Schoenebeck",
    link: "https://app.groupme.com/join_group/65228702/1BpQLh9H",
  },
  {
    name: "SI 460 - Borland",
    link: "https://app.groupme.com/join_group/65228712/FqOyNDK5",
  },
  {
    name: "SI 485 - Jacobs",
    link: "https://app.groupme.com/join_group/65228717/8YLHDOFX",
  },
  {
    name: "SI 487",
    link: "https://app.groupme.com/join_group/65228724/5D9UwtPR",
  },
  {
    name: "SI 489 - Schoenebeck",
    link: "https://app.groupme.com/join_group/65228727/2lWCqXDs",
  },
  {
    name: "SIABRD 301",
    link: "https://app.groupme.com/join_group/65228733/TJsRgGlL",
  },
  {
    name: "SIABRD 302",
    link: "https://app.groupme.com/join_group/65228739/YMYZDGwK",
  },
  {
    name: "SIABRD 303",
    link: "https://app.groupme.com/join_group/65228745/EFxDHEhb",
  },
  {
    name: "SIABRD 304",
    link: "https://app.groupme.com/join_group/65228753/tM9bKfQR",
  },
  {
    name: "SIABRD 330",
    link: "https://app.groupme.com/join_group/65228760/9Oz72Xbq",
  },
  {
    name: "SLAVIC 150 - Pasek",
    link: "https://app.groupme.com/join_group/65228865/NZ7c57ld",
  },
  {
    name: "SLAVIC 151 - Khagi",
    link: "https://app.groupme.com/join_group/65228872/vvNtihAL",
  },
  {
    name: "SLAVIC 225 - Toman",
    link: "https://app.groupme.com/join_group/65228880/KCt7yyJN",
  },
  {
    name: "SLAVIC 245 - Aleksic",
    link: "https://app.groupme.com/join_group/65228890/MIKrj98R",
  },
  {
    name: "SLAVIC 290",
    link: "https://app.groupme.com/join_group/65228902/AJuciekO",
  },
  {
    name: "SLAVIC 290 - Krutikov",
    link: "https://app.groupme.com/join_group/65228908/Ho1njJvU",
  },
  {
    name: "SLAVIC 290 - Luchina",
    link: "https://app.groupme.com/join_group/65228911/SGu2gVIY",
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
    name: "SLAVIC 396 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65228930/bpXNIBxi",
  },
  {
    name: "SLAVIC 470 - Pierce",
    link: "https://app.groupme.com/join_group/65228941/zVG8ZkU1",
  },
  {
    name: "SLAVIC 470 - Toman",
    link: "https://app.groupme.com/join_group/65228950/TWN4BjG8",
  },
  {
    name: "SLAVIC 471 - Herscher",
    link: "https://app.groupme.com/join_group/65228959/74H5ARfC",
  },
  {
    name: "SM 100 - Button",
    link: "https://app.groupme.com/join_group/65228963/HSbGHHE2",
  },
  {
    name: "SM 100 - Simpkins",
    link: "https://app.groupme.com/join_group/65228971/LBicLJ2t",
  },
  {
    name: "SM 101",
    link: "https://app.groupme.com/join_group/65228982/CaKVbjeR",
  },
  {
    name: "SM 101 - Basten",
    link: "https://app.groupme.com/join_group/65228987/MSqnxKdz",
  },
  {
    name: "SM 101 - Luther",
    link: "https://app.groupme.com/join_group/65228994/0Mt8BTen",
  },
  {
    name: "SM 111",
    link: "https://app.groupme.com/join_group/65229000/B9EdDSK6",
  },
  {
    name: "SM 111 - Basten",
    link: "https://app.groupme.com/join_group/65229008/8qKz86Cc",
  },
  {
    name: "SM 203",
    link: "https://app.groupme.com/join_group/65229017/JeMitOO8",
  },
  {
    name: "SM 203 - George",
    link: "https://app.groupme.com/join_group/65229022/W5ciJ2xg",
  },
  {
    name: "SM 217 - Donahue",
    link: "https://app.groupme.com/join_group/65229028/5CwFGF7t",
  },
  {
    name: "SM 217 - Phelan",
    link: "https://app.groupme.com/join_group/65229371/F4zAfNv2",
  },
  {
    name: "SM 238 - Szymanski",
    link: "https://app.groupme.com/join_group/65229376/8oI4cJ0t",
  },
  {
    name: "SM 239 - Szymanski",
    link: "https://app.groupme.com/join_group/65229385/xux0tiHg",
  },
  {
    name: "SM 241 - Fort",
    link: "https://app.groupme.com/join_group/65229390/3J5pWW7Q",
  },
  {
    name: "SM 246 - Basten",
    link: "https://app.groupme.com/join_group/65229395/okU8FZ3l",
  },
  {
    name: "SM 249 - Park",
    link: "https://app.groupme.com/join_group/65229396/vV0kX2eR",
  },
  {
    name: "SM 313 - Grant Long",
    link: "https://app.groupme.com/join_group/65229408/RZCe7kcD",
  },
  {
    name: "SM 313 - Wade",
    link: "https://app.groupme.com/join_group/65229411/4KnCIgQf",
  },
  {
    name: "SM 313 - Wang",
    link: "https://app.groupme.com/join_group/65229414/IMkboAM2",
  },
  {
    name: "SM 317 - Donahue",
    link: "https://app.groupme.com/join_group/65229421/0MwiMHEN",
  },
  {
    name: "SM 330 - Wang",
    link: "https://app.groupme.com/join_group/65229431/BpZN7IiU",
  },
  {
    name: "SM 331 - Fort",
    link: "https://app.groupme.com/join_group/65229441/qkJJFio5",
  },
  {
    name: "SM 332 - Heinze",
    link: "https://app.groupme.com/join_group/65229447/SCUalIYb",
  },
  {
    name: "SM 333 - Pollick",
    link: "https://app.groupme.com/join_group/65229453/dXPm3ujh",
  },
  {
    name: "SM 403",
    link: "https://app.groupme.com/join_group/65229461/WhHWdiRh",
  },
  {
    name: "SM 430 - Babiak",
    link: "https://app.groupme.com/join_group/65229472/7GEdAzul",
  },
  {
    name: "SM 431 - Sant",
    link: "https://app.groupme.com/join_group/65229484/YaMDF7fn",
  },
  {
    name: "SM 432 - Phelan",
    link: "https://app.groupme.com/join_group/65229490/BWHPr6e0",
  },
  {
    name: "SM 433 - Pollick",
    link: "https://app.groupme.com/join_group/65229497/un73tih3",
  },
  {
    name: "SM 435 - Kwak",
    link: "https://app.groupme.com/join_group/65229505/xIc9uvKQ",
  },
  {
    name: "SM 436 - Pollick",
    link: "https://app.groupme.com/join_group/65229512/1wPSnlbZ",
  },
  {
    name: "SM 437 - George",
    link: "https://app.groupme.com/join_group/65229529/qXyF7yUk",
  },
  {
    name: "SM 438 - Fort",
    link: "https://app.groupme.com/join_group/65229649/S5X5ESfs",
  },
  {
    name: "SM 439 - Kwak",
    link: "https://app.groupme.com/join_group/65229659/Kp7Eyb8h",
  },
  {
    name: "SM 440 - Rosentraub",
    link: "https://app.groupme.com/join_group/65229673/5Ak2BX0K",
  },
  {
    name: "SM 441 - Rosentraub",
    link: "https://app.groupme.com/join_group/65229680/XdCV9tPZ",
  },
  {
    name: "SM 444 - Wade",
    link: "https://app.groupme.com/join_group/65229687/pB2lug76",
  },
  {
    name: "SM 445 - Sant",
    link: "https://app.groupme.com/join_group/65229697/6eXbldqf",
  },
  {
    name: "SM 446 - Collins",
    link: "https://app.groupme.com/join_group/65229706/bFGjJ92d",
  },
  {
    name: "SM 450 - Wang",
    link: "https://app.groupme.com/join_group/65229716/rAkLrDeD",
  },
  {
    name: "SM 454 - Park",
    link: "https://app.groupme.com/join_group/65229724/G2RpEjxF",
  },
  {
    name: "SM 499 - Babiak",
    link: "https://app.groupme.com/join_group/65229730/CBVGeJEt",
  },
  {
    name: "SM 499 - Phelan",
    link: "https://app.groupme.com/join_group/65229738/zVOxKxAP",
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
    name: "SOC 218",
    link: "https://app.groupme.com/join_group/65229819/MnqD8o5O",
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
    name: "SOC 295 - Gong",
    link: "https://app.groupme.com/join_group/65229873/YpeclnGv",
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
    name: "SOC 303 - Mahan",
    link: "https://app.groupme.com/join_group/65229923/5f2QxKNQ",
  },
  {
    name: "SOC 310 - Ybarra",
    link: "https://app.groupme.com/join_group/65230023/NSfUiMjK",
  },
  {
    name: "SOC 313 - Robinson",
    link: "https://app.groupme.com/join_group/65230028/Xzw0pxiE",
  },
  {
    name: "SOC 320 - Hwang",
    link: "https://app.groupme.com/join_group/65230038/MhE8wEu3",
  },
  {
    name: "SOC 320 - Schoem",
    link: "https://app.groupme.com/join_group/65230049/ducP9c9f",
  },
  {
    name: "SOC 321",
    link: "https://app.groupme.com/join_group/65230053/8mi3Kg4o",
  },
  {
    name: "SOC 321 - Hicks",
    link: "https://app.groupme.com/join_group/65230069/RCmb4G2u",
  },
  {
    name: "SOC 324",
    link: "https://app.groupme.com/join_group/65230218/ssCDLNW3",
  },
  {
    name: "SOC 325 - Christensen",
    link: "https://app.groupme.com/join_group/65230224/HOIS44Yl",
  },
  {
    name: "SOC 331 - Neidert",
    link: "https://app.groupme.com/join_group/65230228/5655DHPG",
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
    name: "SOC 346 - McGann",
    link: "https://app.groupme.com/join_group/65230262/Tl22aqQh",
  },
  {
    name: "SOC 368 - McGann",
    link: "https://app.groupme.com/join_group/65230267/9XAXQ8yg",
  },
  {
    name: "SOC 375",
    link: "https://app.groupme.com/join_group/65230276/2RhRY7JZ",
  },
  {
    name: "SOC 379 - Markovits",
    link: "https://app.groupme.com/join_group/65230286/pL3RLeRR",
  },
  {
    name: "SOC 391 - Ellman",
    link: "https://app.groupme.com/join_group/65230293/GBhwcak4",
  },
  {
    name: "SOC 393 - Westwalewicz",
    link: "https://app.groupme.com/join_group/65230310/opW9ESu6",
  },
  {
    name: "SOC 398 - Sullivan",
    link: "https://app.groupme.com/join_group/65230321/ZLRdTF6c",
  },
  {
    name: "SOC 447 - McGann",
    link: "https://app.groupme.com/join_group/65230328/j6S3yNhm",
  },
  {
    name: "SOC 451 - Smock",
    link: "https://app.groupme.com/join_group/65230337/yQnzijiY",
  },
  {
    name: "SOC 458 - Schoem",
    link: "https://app.groupme.com/join_group/65230346/MZ6Bs3Qc",
  },
  {
    name: "SOC 471 - Kaplowitz",
    link: "https://app.groupme.com/join_group/65230354/IwAM7MMO",
  },
  {
    name: "SOC 476 - Kelley",
    link: "https://app.groupme.com/join_group/65230361/AGvw2Frp",
  },
  {
    name: "SOC 495 - Byrd",
    link: "https://app.groupme.com/join_group/65230372/GCPkaaP6",
  },
  {
    name: "SOC 495 - Camp",
    link: "https://app.groupme.com/join_group/65230379/jbl1CS4I",
  },
  {
    name: "SOC 495 - Frye",
    link: "https://app.groupme.com/join_group/65230390/QV290Lka",
  },
  {
    name: "SOC 495 - Kelley",
    link: "https://app.groupme.com/join_group/65230398/wkCEppyL",
  },
  {
    name: "SOC 495 - Mahan",
    link: "https://app.groupme.com/join_group/65230407/V0VC31tS",
  },
  {
    name: "SOC 495 - Pickus",
    link: "https://app.groupme.com/join_group/65230416/HJyJ6Tet",
  },
  {
    name: "SOC 495 - Steinmetz",
    link: "https://app.groupme.com/join_group/65230427/ugy6gDtG",
  },
  {
    name: "SOC 497 - Armstrong",
    link: "https://app.groupme.com/join_group/65230431/V1c0RL0a",
  },
  {
    name: "SOC 499 - Anspach",
    link: "https://app.groupme.com/join_group/65230439/mIX6FcHT",
  },
  {
    name: "SPACE 101 - Gilbert",
    link: "https://app.groupme.com/join_group/65230449/tYuGB1fA",
  },
  {
    name: "SPACE 103 - Landi",
    link: "https://app.groupme.com/join_group/65230455/71P3wpkC",
  },
  {
    name: "SPACE 280",
    link: "https://app.groupme.com/join_group/65230467/ArJ33Zu1",
  },
  {
    name: "SPACE 323",
    link: "https://app.groupme.com/join_group/65230555/0yJL8ie9",
  },
  {
    name: "SPACE 350 - Huang",
    link: "https://app.groupme.com/join_group/65230559/tAXEedVi",
  },
  {
    name: "SPACE 381",
    link: "https://app.groupme.com/join_group/65230571/TeETB5JX",
  },
  {
    name: "SPACE 405 - Ruf",
    link: "https://app.groupme.com/join_group/65230579/exkPwHt2",
  },
  {
    name: "SPACE 423 - Liemohn",
    link: "https://app.groupme.com/join_group/65230585/UV70t3SO",
  },
  {
    name: "SPACE 431 - Budhu",
    link: "https://app.groupme.com/join_group/65230602/Tskh8dRb",
  },
  {
    name: "SPACE 471 - Moldwin",
    link: "https://app.groupme.com/join_group/65230612/DL0NX5uA",
  },
  {
    name: "SPACE 477 - Jia",
    link: "https://app.groupme.com/join_group/65230622/banYIBAc",
  },
  {
    name: "SPANISH 100",
    link: "https://app.groupme.com/join_group/65230631/ktAnXyCz",
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
    name: "SPANISH 102 - Piper",
    link: "https://app.groupme.com/join_group/65230662/e4gz9nTB",
  },
  {
    name: "SPANISH 103",
    link: "https://app.groupme.com/join_group/65230668/Tbqijjzw",
  },
  {
    name: "SPANISH 103 - Piper",
    link: "https://app.groupme.com/join_group/65230679/luvm4r8d",
  },
  {
    name: "SPANISH 230",
    link: "https://app.groupme.com/join_group/65230686/fFzUadxh",
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
    name: "SPANISH 280 - dos Santos",
    link: "https://app.groupme.com/join_group/65230737/pCwKDUZY",
  },
  {
    name: "SPANISH 280 - Hernandez",
    link: "https://app.groupme.com/join_group/65230748/BIfX0biZ",
  },
  {
    name: "SPANISH 280 - Hernandez-Vogt",
    link: "https://app.groupme.com/join_group/65230757/lbVGiWrZ",
  },
  {
    name: "SPANISH 280 - Highfill",
    link: "https://app.groupme.com/join_group/65230769/770HUZts",
  },
  {
    name: "SPANISH 280 - Huerta Bravo",
    link: "https://app.groupme.com/join_group/65230781/cw3bqrqL",
  },
  {
    name: "SPANISH 280 - Sanchez Gumiel",
    link: "https://app.groupme.com/join_group/65230900/BdLf9GK4",
  },
  {
    name: "SPANISH 280 - Williams",
    link: "https://app.groupme.com/join_group/65230909/clD8zSXq",
  },
  {
    name: "SPANISH 283 - Dorantes",
    link: "https://app.groupme.com/join_group/65230919/4HNsbsbv",
  },
  {
    name: "SPANISH 287 - Gallego",
    link: "https://app.groupme.com/join_group/65230930/SkaCyAuo",
  },
  {
    name: "SPANISH 287 - Larrotiz",
    link: "https://app.groupme.com/join_group/65230941/d1fDnwLh",
  },
  {
    name: "SPANISH 289 - Dorantes",
    link: "https://app.groupme.com/join_group/65230954/0KTKVRcX",
  },
  {
    name: "SPANISH 289 - Pollard",
    link: "https://app.groupme.com/join_group/65231765/mKPI47ub",
  },
  {
    name: "SPANISH 295 - Freire Hermida",
    link: "https://app.groupme.com/join_group/65231775/qu5WVo7p",
  },
  {
    name: "SPANISH 295 - Gutierrez Chavarria, Freire Hermida",
    link: "https://app.groupme.com/join_group/65231779/fiQaXwR9",
  },
  {
    name: "SPANISH 295 - Hansen, Freire Hermida",
    link: "https://app.groupme.com/join_group/65231784/mF7O4SHG",
  },
  {
    name: "SPANISH 295 - Severs, Freire Hermida",
    link: "https://app.groupme.com/join_group/65231789/jt4bTzPV",
  },
  {
    name: "SPANISH 296 - Campbell",
    link: "https://app.groupme.com/join_group/65231794/2HTj0m09",
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
    name: "SPANISH 333 - Goetz",
    link: "https://app.groupme.com/join_group/65231823/N5qKeyiU",
  },
  {
    name: "SPANISH 368 - Nunez",
    link: "https://app.groupme.com/join_group/65231834/8LJo3upa",
  },
  {
    name: "SPANISH 373",
    link: "https://app.groupme.com/join_group/65231842/H7PJx9TF",
  },
  {
    name: "SPANISH 373 - Couret",
    link: "https://app.groupme.com/join_group/65231852/SyDydfjB",
  },
  {
    name: "SPANISH 373 - Ferrari",
    link: "https://app.groupme.com/join_group/65231856/hCKh6WyM",
  },
  {
    name: "SPANISH 373 - Ruiz Mendoza",
    link: "https://app.groupme.com/join_group/65231861/97P1HgAk",
  },
  {
    name: "SPANISH 373 - Satterfield",
    link: "https://app.groupme.com/join_group/65231871/QY4nCCoG",
  },
  {
    name: "SPANISH 381 - Nemser",
    link: "https://app.groupme.com/join_group/65231879/9Umm4A8A",
  },
  {
    name: "SPANISH 385 - De Entrambasaguas-Monsell",
    link: "https://app.groupme.com/join_group/65231881/iXzjiagl",
  },
  {
    name: "SPANISH 387 - Szpiech",
    link: "https://app.groupme.com/join_group/65231891/OaZ7Ykjo",
  },
  {
    name: "SPANISH 405 - Coll Ramirez",
    link: "https://app.groupme.com/join_group/65231895/ftxSOdJG",
  },
  {
    name: "SPANISH 413 - Garcia-Amaya",
    link: "https://app.groupme.com/join_group/65231903/uPWn1y0i",
  },
  {
    name: "SPANISH 415 - Gallego",
    link: "https://app.groupme.com/join_group/65231911/PzftIODj",
  },
  {
    name: "SPANISH 421 - De Entrambasaguas-Monsell",
    link: "https://app.groupme.com/join_group/65231916/bZQNnMbN",
  },
  {
    name: "SPANISH 426 - Herrero-Olaizola",
    link: "https://app.groupme.com/join_group/65231924/lKMy7cmv",
  },
  {
    name: "SPANISH 430 - Boalick",
    link: "https://app.groupme.com/join_group/65231929/LpOqVeRn",
  },
  {
    name: "SPANISH 432 - Nunez",
    link: "https://app.groupme.com/join_group/65231938/NUVN3j7d",
  },
  {
    name: "SPANISH 438 - Nemser",
    link: "https://app.groupme.com/join_group/65232017/yU8XP9Hr",
  },
  {
    name: "SPANISH 438 - Sanjines",
    link: "https://app.groupme.com/join_group/65232023/55XAKmjs",
  },
  {
    name: "SPANISH 438 - Villalobos Ruminott",
    link: "https://app.groupme.com/join_group/65232030/PuKVuXVF",
  },
  {
    name: "IOE 425 - Levantrosser",
    link: "https://app.groupme.com/join_group/65239154/iJRztiRo",
  },
  {
    name: "ITALIAN 101 - Garrido Baez",
    link: "https://app.groupme.com/join_group/65239164/QqUCxEAO",
  },
  {
    name: "JUDAIC 217 - Wollenberg",
    link: "https://app.groupme.com/join_group/65239179/Qd5xyXAH",
  },
  {
    name: "JUDAIC 440 - Goldman",
    link: "https://app.groupme.com/join_group/65239193/1lTG2rLt",
  },
  {
    name: "KRSTD 290 - Walsh",
    link: "https://app.groupme.com/join_group/65239207/PILMZLHo",
  },
  {
    name: "LATIN 101 - Goggin",
    link: "https://app.groupme.com/join_group/65239225/RODuUk29",
  },
  {
    name: "LATIN 410 - Dufallo",
    link: "https://app.groupme.com/join_group/65239232/19FOB4Dy",
  },
  {
    name: "LATIN 472 - Soter",
    link: "https://app.groupme.com/join_group/65239245/29EtD6cy",
  },
  {
    name: "LSWA 230 - Manis",
    link: "https://app.groupme.com/join_group/65239261/mJN8h46o",
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
    name: "MATH 419 - Zhang",
    link: "https://app.groupme.com/join_group/65239413/PiNidXdq",
  },
  {
    name: "MATH 471 - Zhang",
    link: "https://app.groupme.com/join_group/65239422/oONgWZUv",
  },
  {
    name: "MCDB 417 - Csankovszki",
    link: "https://app.groupme.com/join_group/65239549/tvwO3kVn",
  },
  {
    name: "MECHENG 240 - Popa",
    link: "https://app.groupme.com/join_group/65239564/NoQDsf3T",
  },
  {
    name: "MECHENG 320 - Towne",
    link: "https://app.groupme.com/join_group/65239571/Gopxy4Ft",
  },
  {
    name: "MEDCHEM 410",
    link: "https://app.groupme.com/join_group/65239584/Z7zAUbho",
  },
  {
    name: "MICRBIOL 405 - Sandkvist, Eaton, Telesnitsky, Barron",
    link: "https://app.groupme.com/join_group/65239594/6jiGcsSV",
  },
  {
    name: "MIDEAST 338 - Richards",
    link: "https://app.groupme.com/join_group/65239613/8zUL7VbJ",
  },
  {
    name: "MILSCI 402",
    link: "https://app.groupme.com/join_group/65239620/LrflsLOz",
  },
  {
    name: "MKT 300 - Huang",
    link: "https://app.groupme.com/join_group/65239630/JQaCjnRc",
  },
  {
    name: "MOVESCI 110 - Bodary, Gross, Vesia",
    link: "https://app.groupme.com/join_group/65239765/auGqThna",
  },
  {
    name: "MOVESCI 443 - Ludlow",
    link: "https://app.groupme.com/join_group/65239778/Va7hk1e4",
  },
  {
    name: "MUSICOL 140 - Clague",
    link: "https://app.groupme.com/join_group/65239790/wOrZ18HG",
  },
  {
    name: "MUSICOL 345 - Lwanga",
    link: "https://app.groupme.com/join_group/65239801/76RVexBW",
  },
  {
    name: "MUSPERF 401 - Wagner",
    link: "https://app.groupme.com/join_group/65239825/Lylmas8n",
  },
  {
    name: "NAVARCH 431 - Lee",
    link: "https://app.groupme.com/join_group/65239985/TKU99d4D",
  },
  {
    name: "NAVARCH 475 - Collette, Khan",
    link: "https://app.groupme.com/join_group/65239998/pjzXtdUn",
  },
  {
    name: "NAVSCI 402",
    link: "https://app.groupme.com/join_group/65240013/fbtBxNEI",
  },
  {
    name: "NURS 238 - Mutumba",
    link: "https://app.groupme.com/join_group/65240027/i5VZiAUt",
  },
  {
    name: "ORGSTUDY 490",
    link: "https://app.groupme.com/join_group/65240040/bn6DQg5z",
  },
  {
    name: "PAT 400 - Rush",
    link: "https://app.groupme.com/join_group/65240051/OhFgYuqj",
  },
  {
    name: "PHARMSCI 499 - Lee",
    link: "https://app.groupme.com/join_group/65240064/PPSOZ9ks",
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
    name: "PIANO 460",
    link: "https://app.groupme.com/join_group/65240240/B1DnVmR1",
  },
  {
    name: "PNE 327",
    link: "https://app.groupme.com/join_group/65240251/kSlxhe1e",
  },
  {
    name: "PNE 355",
    link: "https://app.groupme.com/join_group/65240263/LuSf8nUY",
  },
  {
    name: "PNE 381",
    link: "https://app.groupme.com/join_group/65240269/y4bVApZe",
  },
  {
    name: "PNE 401",
    link: "https://app.groupme.com/join_group/65240286/wRAUvzJA",
  },
  {
    name: "PNE 460",
    link: "https://app.groupme.com/join_group/65240293/CYxKabfE",
  },
  {
    name: "POLSCI 387 - Tsebelis",
    link: "https://app.groupme.com/join_group/65240307/FefmXqHj",
  },
  {
    name: "POLSCI 435 - Tessler",
    link: "https://app.groupme.com/join_group/65240321/slAnEEnl",
  },
  {
    name: "PORTUG 280 - Segarra Costaguta Mattos",
    link: "https://app.groupme.com/join_group/65240332/PoL4C7c1",
  },
  {
    name: "PSYCH 330 - Rosati",
    link: "https://app.groupme.com/join_group/65240342/B1JlHy0k",
  },
  {
    name: "PSYCH 401 - Buvinger",
    link: "https://app.groupme.com/join_group/65240347/7h20a3EK",
  },
  {
    name: "PSYCH 457 - Carter",
    link: "https://app.groupme.com/join_group/65240365/tMgIi5UO",
  },
  {
    name: "PUBPOL 457",
    link: "https://app.groupme.com/join_group/65240375/SnGwodzk",
  },
  {
    name: "RCHUMS 334 - Burde",
    link: "https://app.groupme.com/join_group/65240397/3JZVBGGi",
  },
  {
    name: "RCLANG 334",
    link: "https://app.groupme.com/join_group/65240405/xFuuhySv",
  },
  {
    name: "RCSSCI 461 - Caulfield",
    link: "https://app.groupme.com/join_group/65240420/9wupVTBX",
  },
  {
    name: "REEES 405 - Toman",
    link: "https://app.groupme.com/join_group/65240427/p4HjeBIh",
  },
  {
    name: "RUSSIAN 103",
    link: "https://app.groupme.com/join_group/65240443/ChYRIKRe",
  },
  {
    name: "SIABRD 351",
    link: "https://app.groupme.com/join_group/65240450/AzTXourY",
  },
  {
    name: "SLAVIC 281 - Pinsker",
    link: "https://app.groupme.com/join_group/65240456/hmssYqQh",
  },
  {
    name: "SOC 305 - Steinmetz",
    link: "https://app.groupme.com/join_group/65240468/3U42GamY",
  },
  {
    name: "SPACE 321 - Li",
    link: "https://app.groupme.com/join_group/65240475/j97OMacM",
  },
  {
    name: "SPANISH 280 - Martinez Alvarez",
    link: "https://app.groupme.com/join_group/65240481/ceWpf99c",
  },
  {
    name: "SPANISH 342 - Russo",
    link: "https://app.groupme.com/join_group/65240505/pZ7WMLsm",
  },
  {
    name: "SPANISH 437 - Arnall",
    link: "https://app.groupme.com/join_group/65240518/SqAdfQGp",
  },
  {
    name: "MATH 215 - Irmak",
    link: "https://app.groupme.com/join_group/65241701/lDNnc0Qj",
  },
  {
    name: "MATH 472 - Yan",
    link: "https://app.groupme.com/join_group/65241717/HaC4Xw5R",
  },
  {
    name: "MO 302 - Sandelands",
    link: "https://app.groupme.com/join_group/65241729/9gX0Zwct",
  },
  {
    name: "MUSPERF 401 - Lusmann",
    link: "https://app.groupme.com/join_group/65241737/WzVrJWKO",
  },
  {
    name: "MUSTHTRE 442",
    link: "https://app.groupme.com/join_group/65241747/yMFLERp4",
  },
  {
    name: "PHIL 417 - Belot",
    link: "https://app.groupme.com/join_group/65241913/n7B0h00a",
  },
];
