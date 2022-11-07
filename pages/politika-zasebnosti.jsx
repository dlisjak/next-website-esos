import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div
      id="politika-zasebnosti"
      className="container mx-auto bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4 pt-24 post"
    >
      <h1>Politika Zasebnosti</h1>
      <p>
        Namen Esos politike zasebnosti (v nadaljevanju: politika) je seznanitev uporabnikov in
        obiskovalcev (v nadaljevanju: uporabnik) s namenom in pravno podlago za obdelavo in
        shranjevanje osebnih podatkov. Ta politika se lahko kadarkoli spremeni in dopolni, vendar ne
        s predhodnim obvestilom uporabnika. Vsi teksti, podobe in druge informacije na našem
        spletnem mestu so predmet avtorske zaščite in drugih oblik zaščite intelektualne lastnine.
      </p>
      <h2>Upravljalec in pooblaščena oseba za varstvo podatkov</h2>
      <p>
        Naziv podjetja: Cyber Invest d.o.o. <br />
        Kontakt (email): gdpr@esos.si (Samo za težave povezane s GDPR)
      </p>
      <h2>Namen obdelave in podlage za obdelavo podatkov</h2>
      <span>Zbiranje in obdelovanje podatkov s navezuje na naslednje pravne podlage:</span>
      <ul>
        <li>Obdelava podatkov iz zakonskih obveznosti vodenja evidenc.</li>
        <li>
          Obdelava potrebna za zagotavljanje nemotenega delovanja aplikacij, diagnostika in podobno.
        </li>
        <li>
          Posameznik na katerega se nanašajo podatki je privolil v obdelovano njegovih osebnih
          podatkov iz enega ali več razlogov.
        </li>
        <li>
          Obdelava na podlagi zakonitega interesa, za katere se ponudnik prizadeva in kadar nad
          takimi interesi ni omejitev povezanih z zagotavljanjem varstva osebnih podatkov.
        </li>
        <li>Obdelava podatkov na podlagi privolitve.</li>
        <li>Obdelava na podlagi pogodbe.</li>
      </ul>
      <h2>Piškotki</h2>
      <p>
        Spletno mesto Esos in z njim povezane druge spletne aplikacije uporabljajo piškote za
        zagotavljanje nemotenega delovanja programske opreme. Piškotek je majhna datoteka, običajno
        vsebuje zaporedje črk in števil, ki se naloži na uporabnikov računalnik ali mobilni telefon,
        ko ta obišče določeno spletno mesto. Naše aplikacije in spletna mesta vključujejo tudi druge
        ponudnike spletnih storitev, ki uporabljajo lastne piškote, med te spadajo naslednje strani:
      </p>
      <ul>
        <li>
          Google:
          <a
            href="https://policies.google.com/privacy"
            rel="external noopener noreferrer"
            target="_blank"
            className="text-blue-500 ml-2"
          >
            Povezava do politike zasebnosti
          </a>
        </li>
      </ul>
      <h2>Hramba Osebnih Podatkov</h2>
      <p>
        Vaše osebne podatke bomo shranjevali toliko časa, kolikor je potrebnega da uresničimo namen
        iz katerega so bili podatki zbrani. Podatki uporabnikov, ki se shranjujejo iz zakonskih
        zahtev, se hranijo za obdobje kot jih predpisuje zakon.
      </p>
      <p>
        Osebni podatki, katerih shramba ni zakonsko predpisana, se shranjujejo do preklica
        privolitve uporabnika.
      </p>
      <p>
        Privolitev lahko kadar koli prekličete, ne da bi to vplivalo na zakonitost obdelave
        podatkov, ki se je na podlagi privolitve izvajala do njenega preklica.
      </p>
      <h2>Pravna podlaga za obdelavo osebnih podatkov</h2>
      <p>
        Obdelava vaših osebnih podatkov je v skladu z veljavno evropsko zakonodajo (predvsem Uredbo
        (EU) 2016/697 o varstvu posameznikov pri obdelavi osebnih podatkov in o pretoku takih
        podatkov (Splošna uredba o varstvu podatkov ali GDPR) in konvencijami Sveta Evrope (ETS št.
        108, ETS  št.181, ETS št. 185, ETS št. 189)) in nacionalno zakonodajo Republike Slovenije
        (Zakonom o varstvu osebnih podatkov (ZVOP-1, Ur. l. RS, št. 94/07), Zakonom o elektronskem
        poslovanju na trgu (ZEPT, Ur. l. RS, št. 96/09 in 19/15) itd.).
      </p>
      <p>
        Mladoletne osebe do 16 let ne smejo posredovati kakršnihkoli osebnih podatkov na spletne
        strani ali drugače brez dovoljenja (privolitve ali odobritve) nosilca starševske skrbi za
        otroka (enega od staršev ali skrbnikov). Esos ne bo nikoli zavestno zbiral osebnih podatkov
        od oseb, za katere bi bil seznanjen, da so mladoletne (mlajše od 16 let).
      </p>
      <p>
        Pritožbo lahko podate Informacijskemu pooblaščencu (naslov: Dunajska 22, 1000 Ljubljana,
        e-naslov: gp.ip@ip-rs.si telefon: 012309730, spletna stran: www.ip-rs.si).
      </p>
    </div>
  );
};

export default PrivacyPolicy;
