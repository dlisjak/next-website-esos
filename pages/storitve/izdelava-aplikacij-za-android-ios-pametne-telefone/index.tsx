import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/Header';
import Section from '../../../components/Section';
import SectionContainer from '../../../components/SectionContainer';

import ABSTRACT_30 from '../../../public/images/headers/1920/ABSTRACT_30.jpeg';
import IZDELAVA_APLIKACIJ from '../../../public/images/storitve/mobilne_aplikacije/IZDELAVA_APLIKACIJ.jpeg';

const Index = () => {
  return (
    <div className="appdevelopment h-full">
      <Head>
        <title>Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital</title>
        <meta
          name="title"
          content="Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital"
        />
        <meta
          name="description"
          content="Za Vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo Vam celotno ponudbo od izdelave do gostovanja na Cloud strežnikih."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.esos.si/storitve/izdelava-aplikacij-za-android-ios-pametne-telefone"
        />
        <meta
          property="og:title"
          content="Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital"
        />
        <meta
          property="og:description"
          content="Za Vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo Vam celotno ponudbo od izdelave do gostovanja na Cloud strežnikih."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_30.jpeg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.esos.si/storitve/izdelava-aplikacij-za-android-ios-pametne-telefone"
        />
        <meta
          property="twitter:title"
          content="Izdelava aplikacij za android in iOS pametne telefone | ESOS Digital"
        />
        <meta
          property="twitter:description"
          content="Za Vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo Vam celotno ponudbo od izdelave do gostovanja na Cloud strežnikih."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_META_FOLDER_URL}ABSTRACT_30.jpeg`}
        />
        <link
          rel="canonical"
          href="https://www.esos.si/storitve/izdelava-aplikacij-za-android-ios-pametne-telefone"
        />
      </Head>
      <Header
        image={ABSTRACT_30}
        alt="Northern lights on a dark starry night"
        title={
          <h2 className="text-white	text-4xl sm:text-5xl mb-6">
            Izdelava Aplikacij <br />
            Za Android in IOS <br />
            Pametne Telefone
          </h2>
        }
        subtitle="Mobilne Rešitve"
        buttons={
          <>
            <Link href="#mobilne-aplikacije">
              <a className="button mr-4 mb-4">Izdelava mobilne aplikacije</a>
            </Link>
          </>
        }
      />
      <div
        id="mobilne-aplikacije"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={IZDELAVA_APLIKACIJ}
            alt="Colorful image of a sand cave"
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
                  Za Vas izdelamo mobilne aplikacije na sistemih iOS in Android. Omogočimo Vam
                  celotno ponudbo od izdelave, gostovanja na strežnikih na Cloud tehnologiji s
                  podporo kubernetes sistema.
                </p>
                <p className="mb-2">
                  Pomagamo Vam tudi pri digitalnem marketingu izdelane aplikacij in pozicioniranju
                  na Google Play in Apple Store. S pomočjo oglaševanja na Google Ads Vam omogočimo
                  najboljši reklami izplen in čim večje število namestitev aplikacije na mobilne
                  telefone uporabnikov.
                </p>
                <p className="mb-2">
                  Aplikacijo Vam izdelamo na način, da lahko najbolje iztržite oglaševalski prostor
                  v Vaši aplikaciji in dodatno zaslužite z oddajanjem oglaševalskega prostora v
                  aplikaciji.
                </p>
                <p className="mb-2">
                  Moderni uporabnik najuspešnejših aplikacij večino časa preživi na mobilnih
                  telefonih in se uporaba le teh močno povečuje v primerjavi ostalim napravam, kot
                  so računalniki in prenosniki. Zato Vam svetujemo, da svojo ponudbo ali idejo za
                  novo aplikacijo ponudite uporabnikom preko aplikacij, ki potem smiselno omogočajo
                  uporabniku, da komunicira in uporablja aplikacijo kot stalen in veren kupec.
                </p>
              </>
            }
          >
            <Link href="/kontakt">
              <a className="button -dark mr-4">Pošlji povpraševanje</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Index;
