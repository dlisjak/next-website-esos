import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import ABSTRACT_5 from '../../../public/images/headers/1920/ABSTRACT_5.jpeg';
import EIFFEL from '../../../public/images/storitve/spletne_resitve/EIFFEL.jpeg';
import SHOP from '../../../public/images/storitve/spletne_resitve/SHOP.jpeg';
import ROCKET from '../../../public/images/storitve/spletne_resitve/ROCKET.jpeg';
import WOMAN_BEACH from '../../../public/images/storitve/spletne_resitve/WOMAN_BEACH.jpeg';
import SAND_CAVE from '../../../public/images/storitve/spletne_resitve/SAND_CAVE.jpeg';

const Index = () => {
  return (
    <div className="webservices h-full">
      <Head>
        <title>Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital</title>
        <meta
          name="title"
          content="Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital"
        />
        <meta
          name="description"
          content="Za Vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki Vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.esos.si/storitve/izdelava-optimizacija-spletnih-strani-trgovin"
        />
        <meta
          property="og:title"
          content="Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital"
        />
        <meta
          property="og:description"
          content="Za Vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki Vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_5.jpeg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.esos.si/storitve/izdelava-optimizacija-spletnih-strani-trgovin"
        />
        <meta
          property="twitter:title"
          content="Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital"
        />
        <meta
          property="twitter:description"
          content="Za Vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki Vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_5.jpeg`}
        />
        <link
          rel="canonical"
          href="https://www.esos.si/storitve/izdelava-optimizacija-spletnih-strani-trgovin"
        />
      </Head>
      <Header
        image={ABSTRACT_5}
        alt="Northern lights on a dark starry night"
        title={
          <h2 className="text-white	text-4xl sm:text-5xl mb-6">
            Izdelava in optimizacija
            <br />
            spletnih strani in trgovin
          </h2>
        }
        subtitle="Spletne Rešitve"
        buttons={
          <>
            <Link href="#spletne-strani">
              <a className="button mr-4 mb-4">Spletne strani</a>
            </Link>
            <Link href="#spletne-trgovine">
              <a className="button mr-4 mb-4">Spletne trgovine</a>
            </Link>
            <Link href="#optimizacija">
              <a className="button mb-4">Optimizacija</a>
            </Link>
          </>
        }
      />
      <div
        id="spletne-strani"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={EIFFEL}
            alt="Eiffel tower"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Ustvarimo nekaj nepozabnega</p>}
            title={
              <>
                Izdelava
                <br />
                Spletnih Strani
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Za Vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij,
                  ki Vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S
                  tem boste dobili možnost, da v prihodnje nadgradite, prilagodite funkcionalnost in
                  izgled svoje spletne strani, saj se poslovno okolje nenehno spreminja in so
                  potrebne velike zmožnosti prilagoditve poslovanja.
                </p>
                <p className="mb-2">
                  Ponujamo Vam oblikovanje in izdelavo spletne strani po dostopnih cenah,
                  optimizacijo za vse vrste brskalnikov. Vaša spletna stran bo prilagojena vsem
                  modernim napravam.
                </p>
                <p className="mb-2">
                  Za današnjega uporabnika spletnih strani je pomembna dobra uporabniška izkušnja
                  ter moderen izgled in enostaven uporabniški vmesnik.
                </p>
                <p className="mb-2">
                  Za izdelavo spletnih strani Vam nudimo vse potrebne storitve, kot so načrtovanje
                  in izdelavo spletne strani, dizajn, postavitev spletne strani na spletu v varnem
                  okolju z minimalnimi stroški za gostovanje na hitro odzivnih strežnikih in
                  registracijo domen.
                </p>
                <p className="mb-2">
                  Za dobro prepoznavnost vaše nove spletne strani Vam pomagamo pri organizaciji
                  digitalne marketinške kampanje preko socialnih omrežij in Google-a in spremljamo,
                  ter analiziramo skupaj z Vami statistiko na Google Analitycs, ki nam na podlagi
                  podatkov omogoča, da lahko v hitrem času spremljamo uspešnost reklamne akcije in
                  odziv morebitnih kupcev ali uporabnikov.
                </p>
              </>
            }
          >
            <div className="flex flex-wrap">
              <Link href="/kontakt">
                <a className="button -dark mr-4 mb-4">Pošljite povpraševanje</a>
              </Link>
              <Link href="#spletne-trgovine">
                <a className="button -dark mr-4 mb-4">Izdelava spletnih trgovin</a>
              </Link>
              <Link href="#optimizacija">
                <a className="button -dark mr-4 mb-4">SEO Optimizacija</a>
              </Link>
            </div>
          </Section>
        </SectionContainer>
      </div>
      <div
        id="spletne-trgovine"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            right
            image={SHOP}
            alt="leather jackets hanging in a shop"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Spletna prodaja kot bi morala biti</p>}
            title={
              <>
                Izdelava
                <br />
                Spletnih Trgovin
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Za Vas izdelamo spletno trgovino z uporabo najmodernejših orodij in Vam omogočimo
                  preprosto in smiselno dodajanje ter pregledovanje izdelkov, kupcev in ostalih
                  pomembnih podatkov.
                </p>
                <p className="mb-2">
                  Ponujamo Vam oblikovanje in izdelavo optimizirane spletne trgovine po dostopnih
                  cenah, optimizacijo za vse vrste brskalnikov. Vaša spletna trgovina bo prilagojena
                  vsem modernim napravam.
                </p>
                <p className="mb-2">
                  Za današnjega uporabnika spletnih trgovin je pomembna dobra uporabniška izkušnja,
                  odzivnost ter moderen izgled in enostaven uporabniški vmesnik.
                </p>
                <p className="mb-2">
                  Za izdelavo spletnih trgovin Vam nudimo vse potrebne storitve, kot so načrtovanje,
                  izdelava spletne trgovine, dizajn, postavitev spletne trgovine na spletu v varnem
                  okolju z minimalnimi stroški za gostovanje na hitro odzivnih strežnikih in
                  registracijo domen.
                </p>
                <p className="mb-2">
                  Za dobro prepoznavnost vaše nove spletne trgovine Vam pomagamo pri organizaciji
                  premišljene digitalne marketinške kampanje preko socialnih omrežij in Google-a in
                  spremljamo, ter skupaj z Vami analiziramo statistiko na Google Analitycs, ki nam
                  na podlagi podatkov omogoča, da lahko v hitrem času spremljamo uspešnost reklamne
                  strategije in odziv morebitnih kupcev ali uporabnikov.
                </p>
              </>
            }
          >
            <div className="flex flex-wrap">
              <Link href="/kontakt">
                <a className="button -dark mr-4 mb-4">Pošlji povpraševanje</a>
              </Link>
              <Link href="#optimizacija">
                <a className="button -dark mb-4">SEO Optimizacija</a>
              </Link>
            </div>
          </Section>
        </SectionContainer>
      </div>
      <div
        id="optimizacija"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={ROCKET}
            alt="Rocket lighting off the ground"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Rezultati kot še nikoli</p>}
            title={
              <>
                SEO Optimizacija
                <br />
                Spletnih Strani
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Že imate spletno stran ali spletno trgovino? Za Vas tudi optimiziramo obstoječo
                  spletno stran oz. trgovino z uporabo najustreznejših orodij, ki Vam bodo povečale
                  odzivnost, obisk in promet.
                </p>
                <p className="mb-2">
                  Ponujamo Vam izdelavo optimizacijske strategije, ki jo premišljeno nato izvedemo.
                  Poskrbimo za pregleden prikaz pomamebnih informacij, s katerimi boste lahko
                  konkurirali tudi na globalnem trgu.
                </p>
                <p className="mb-2">
                  Naše optimizacijske rešitve so ene izmed najuspešnejših in najmodernejših na
                  globalnem trgu, zato smo samozavestni, da Vam lahko pomagamo.
                </p>
                <p className="mb-2">
                  Ker ima optimizacija spletnih rešitev več premikajočih se delov je najbolje, da to
                  prepustite nam, saj imamo za Vas pripravljeno le najboljše.
                </p>
                <p className="mb-2">
                  Za povečanje obiska in s tem tudi prodaje, redno in skrbno nadzorujemo obnašanje
                  Vaših obiskovalcev ter na podlagi realnih podatkov izvedemo optimizacijsko
                  strategijo.
                </p>
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark">Pošlji povpraševanje</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
      <div
        id="content"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={WOMAN_BEACH}
            right
            alt="Woman walking on the beach"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Dobite največ za najmanj</p>}
            title={
              <>
                Izdelava Spletnih
                <br />
                Strani Cenik
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Zaradi narave storitev je končna cena izračun večih faktorjev. Cena varira na
                  zahtevnost implementacije posameznega dizajna, št. strani, SEO optimizacijo,
                  optimizacijo slik, dodajanje Google in Facebook analitike, Google Maps,
                  implementacije CMS-ja in različnih funkcionalnosti.
                  <br />
                  Začetna cena izdelave spletne strani je 750 €.
                </p>
                <p className="mb-2">
                  Zaradi narave našega izdelovanje, da dosežemo popolnost, je pomembno, da se
                  vsakemu aspektu spletne rešitve posebej posvetimo.
                </p>
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark">Pošlji povpraševanje</a>
            </Link>
          </Section>
          <Section
            image={SAND_CAVE}
            alt="sand falling in a sand cave"
            showImageOnSmall={false}
            aboveTitle={
              <p className="text-slate-500">Profesionalna izdelava spletnih strani in aplikacij</p>
            }
            title={
              <>
                Izdelava Spletnih
                <br />
                Strani in Aplikacij
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Z nami izgradnje spletnih strani in aplikacij postane umetnost. Z suverenostjo
                  lahko obvladamo neobvladujoče in tako doprinesemo popolne rezultate, kjer se je to
                  prej zdelo nemogoče.
                </p>
                <p className="mb-2">
                  Izgradnje spletnih strani in aplikacije je proces, kjer je pomemben vsak korak. Če
                  ne obvladujemo vseh procesov, to kasneje plačamo z obrestmi. Naše rešitve
                  omogočajo, da Vašim strankam doprinesete neverjetno uporabniško izkušnjo, boljši
                  izplen oglaševalskih sredstev in povišane konverzije ter izstopanje izmed tekmeci.
                </p>
                <p className="mb-2">
                  Z našo natančnostjo in marljivim delom želimo to dokazati tudi Vam.
                </p>
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark">Pošlji povpraševanje</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Index;
