import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import ABSTRACT_5 from '../../../public/images/headers/1920/ABSTRACT_5.jpeg';
import IZDELAVA_APLIKACIJ from '../../../public/images/storitve/mobilne_aplikacije/IZDELAVA_APLIKACIJ.jpeg';

const Index = () => {
  return (
    <div className="appdevelopment h-full">
      <Head>
        <title>Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital</title>
        <meta
          property="title"
          content="Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital"
          key="title"
        />
        <meta
          property="og:title"
          content="Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital"
          key="og:title"
        />
        <meta
          name="description"
          content="Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno ponudbo od izdelave do gostovanja na Cloud strežnikih."
          key="description"
        />
        <meta
          name="og:description"
          content="Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno ponudbo od izdelave do gostovanja na Cloud strežnikih."
          key="og:description"
        />
      </Head>
      <Header
        image={ABSTRACT_5}
        alt="Northern lights on a dark starry night"
        title={
          <h1 className="text-white	text-4xl sm:text-5xl mb-6">
            Izdelava Aplikacij
            <br />
            Za Android in IOS
            <br />
            Pametne Telefone
          </h1>
        }
        subtitle="Mobilne Rešitve"
        buttons={
          <>
            <Link href="#spletne-strani">
              <a className="button mr-4 mb-4">Izdelava mobilne aplikacije</a>
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
            image={IZDELAVA_APLIKACIJ}
            alt="Populated city with towers"
            showImageOnSmall={false}
            aboveTitle={<p className="text-slate-500">Ustvarimo nekaj nepozabnega</p>}
            title={
              <>
                Izdelava
                <br />
                Mobilne Aplikacije
              </>
            }
            text={
              <>
                <p className="mb-2">
                  Za vas izdelamo mobilne aplikacije na sistemih iOS in Android. Omogočimo vam
                  celotno ponudbo od izdelave, gostovanja na strežnikih na Cloud tehnologiji s
                  podporo kubernetes sistema.
                </p>
                <p className="mb-2">
                  Pomagamo vam tudi pri digitalnem marketingu izdelane aplikacij in pozicioniranju
                  na Google Play in Apple Store. S pomočjo oglaševanja na Google Ads vam omogočimo
                  najboljši reklami izplen in čim večje število namestitev aplikacije na mobilne
                  telefone uporabnikov.
                </p>
                <p className="mb-2">
                  Aplikacijo vam izdelamo na način, da lahko najbolje iztržite oglaševalski prostor
                  v vaši aplikaciji in dodatno zaslužite z oddajanjem oglaševalskega prostora v
                  aplikaciji.
                </p>
                <p className="mb-2">
                  Moderni uporabnik najuspešnejših aplikacij večino časa preživi na mobilnih
                  telefonih in se uporaba le teh močno povečuje v primerjavi ostalim napravam, kot
                  so računalniki in prenosniki. Zato vam svetujemo, da svojo ponudbo ali idejo za
                  novo aplikacijo ponudite uporabnikom preko aplikacij, ki potem smiselno omogočajo
                  uporabniku, da komunicira in uporablja aplikacijo kot stalen in veren kupec.
                </p>
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark mr-4">Kontakt</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Index;
