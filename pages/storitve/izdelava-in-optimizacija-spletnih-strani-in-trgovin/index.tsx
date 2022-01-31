import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import ABSTRACT_5 from '../../../public/images/headers/1920/ABSTRACT_5.jpeg';
import EIFFEL from '../../../public/images/storitve/spletne_resitve/EIFFEL.jpeg';
import SHOP from '../../../public/images/storitve/spletne_resitve/SHOP.jpeg';
import ROCKET from '../../../public/images/storitve/spletne_resitve/ROCKET.jpeg';

const Index = () => {
  return (
    <div className="webservices h-full">
      <Head>
        <title>Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital</title>
        <meta
          property="title"
          content="Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital"
          key="title"
        />
        <meta
          property="og:title"
          content="Izdelava in optimizacija spletnih strani in trgovin | ESOS Digital"
          key="og:title"
        />
        <meta
          name="description"
          content="Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu."
          key="description"
        />
        <meta
          name="og:description"
          content="Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu."
          key="og:description"
        />
      </Head>
      <Header
        image={ABSTRACT_5}
        alt="Northern lights on a dark starry night"
        title={
          <h1 className="text-white	text-4xl sm:text-5xl mb-6">
            Izdelava in optimizacija
            <br />
            spletnih strani in trgovin
          </h1>
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
            alt="Populated city with towers"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Ustvarimo nekaj nepozabnega</p>}
            title={
              <>
                Izdelava
                <br />
                spletnih strani
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij,
                  ki vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S
                  tem boste dobili možnost, da v prihodnje nadgradite, prilagodite funkcionalnost in
                  izgled svoje spletne strani, saj se poslovno okolje nenehno spreminja in so
                  potrebne velike zmožnosti prilagoditve poslovanja.
                </p>
                <p className="mb-2">
                  Ponujamo vam oblikovanje in izdelavo spletne strani po dostopnih cenah,
                  optimizacijo za vse vrste brskalnikov. Vaša spletna stran bo prilagojena različnim
                  napravam (računalnik, tablica, mobilni telefon).
                </p>
                <p className="mb-2">
                  Za današnjega uporabnika spletnih strani je pomembna dobra uporabniška izkušnja
                  ter moderen izgled in enostaven uporabniški vmesnik.
                </p>
                <p className="mb-2">
                  Za izdelavo spletnih strani vam nudimo vse potrebne storitve, kot so načrtovanje
                  in izdelavo spletne strani, dizajn, postavitev spletne strani na spletu v varnem
                  okolju z minimalnimi stroški za gostovanje na hitro odzivnih strežnikih in
                  registracijo domen.
                </p>
                <p className="mb-2">
                  Za dobro prepoznavnost vaše nove spletne strani vam pomagamo pri organizaciji
                  digitalne marketinške kampanje preko socialnih omrežij in Google –a in spremljamo,
                  ter analiziramo skupaj z vami statistiko na Google Analitycs, ki nam na podlagi
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
            alt="Populated city with towers"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Spletna prodaja kot bi morala biti</p>}
            title={
              <>
                Izdelava
                <br />
                spletnih trgovin
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij,
                  ki vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S
                  tem boste dobili možnost, da v prihodnje nadgradite, prilagodite funkcionalnost in
                  izgled svoje spletne strani, saj se poslovno okolje nenehno spreminja in so
                  potrebne velike zmožnosti prilagoditve poslovanja.
                </p>
                <p className="mb-2">
                  Ponujamo vam oblikovanje in izdelavo spletne strani po dostopnih cenah,
                  optimizacijo za vse vrste brskalnikov. Vaša spletna stran bo prilagojena različnim
                  napravam (računalnik, tablica, mobilni telefon).
                </p>
                <p className="mb-2">
                  Za današnjega uporabnika spletnih strani je pomembna dobra uporabniška izkušnja
                  ter moderen izgled in enostaven uporabniški vmesnik.
                </p>
                <p className="mb-2">
                  Za izdelavo spletnih strani vam nudimo vse potrebne storitve, kot so načrtovanje
                  in izdelavo spletne strani, dizajn, postavitev spletne strani na spletu v varnem
                  okolju z minimalnimi stroški za gostovanje na hitro odzivnih strežnikih in
                  registracijo domen.
                </p>
                <p className="mb-2">
                  Za dobro prepoznavnost vaše nove spletne strani vam pomagamo pri organizaciji
                  digitalne marketinške kampanje preko socialnih omrežij in Google –a in spremljamo,
                  ter analiziramo skupaj z vami statistiko na Google Analitycs, ki nam na podlagi
                  podatkov omogoča, da lahko v hitrem času spremljamo uspešnost reklamne akcije in
                  odziv morebitnih kupcev ali uporabnikov.
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
            alt="Populated city with towers"
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
                  Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij,
                  ki vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu. S
                  tem boste dobili možnost, da v prihodnje nadgradite, prilagodite funkcionalnost in
                  izgled svoje spletne strani, saj se poslovno okolje nenehno spreminja in so
                  potrebne velike zmožnosti prilagoditve poslovanja.
                </p>
                <p className="mb-2">
                  Ponujamo vam oblikovanje in izdelavo spletne strani po dostopnih cenah,
                  optimizacijo za vse vrste brskalnikov. Vaša spletna stran bo prilagojena različnim
                  napravam (računalnik, tablica, mobilni telefon).
                </p>
                <p className="mb-2">
                  Za današnjega uporabnika spletnih strani je pomembna dobra uporabniška izkušnja
                  ter moderen izgled in enostaven uporabniški vmesnik.
                </p>
                <p className="mb-2">
                  Za izdelavo spletnih strani vam nudimo vse potrebne storitve, kot so načrtovanje
                  in izdelavo spletne strani, dizajn, postavitev spletne strani na spletu v varnem
                  okolju z minimalnimi stroški za gostovanje na hitro odzivnih strežnikih in
                  registracijo domen.
                </p>
                <p className="mb-2">
                  Za dobro prepoznavnost vaše nove spletne strani vam pomagamo pri organizaciji
                  digitalne marketinške kampanje preko socialnih omrežij in Google –a in spremljamo,
                  ter analiziramo skupaj z vami statistiko na Google Analitycs, ki nam na podlagi
                  podatkov omogoča, da lahko v hitrem času spremljamo uspešnost reklamne akcije in
                  odziv morebitnih kupcev ali uporabnikov.
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
