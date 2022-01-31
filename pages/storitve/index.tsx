import Link from 'next/link';
import Head from 'next/head';

import Header from '../../components/Header';
import Section from '../../components/Section';
import SectionContainer from '../../components/SectionContainer';

import BUILDING_BRIDGE from '../../public/images/headers/1920/BUILDING_BRIDGE.jpeg';
import EIFFEL from '../../public/images/storitve/spletne_resitve/EIFFEL.jpeg';
import IZDELAVA_APLIKACIJ from '../../public/images/storitve/mobilne_aplikacije/IZDELAVA_APLIKACIJ.jpeg';
import DIGITALNI_MARKETING from '../../public/images/storitve/DIGITALNI_MARKETING.jpeg';
import VIDEO_PRODUCTION from '../../public/images/storitve/VIDEO_PRODUCTION.jpeg';
import ANIMACIJE from '../../public/images/storitve/3D_ANIMACIJE.jpeg';

const Storitve = () => {
  return (
    <div className="storitve h-full">
      <Head>
        <title>Storitve | ESOS Digital</title>
        <meta property="title" content="Storitve | ESOS Digital" key="title" />
        <meta property="og:title" content="Storitve | ESOS Digital" key="og:title" />
        <meta
          name="description"
          content="Za vas pripravimo edinstveno rešitev s katero boste lahko zajadrali mimo konkurence."
          key="description"
        />
        <meta
          name="og:description"
          content="Za vas pripravimo edinstveno rešitev s katero boste lahko zajadrali mimo konkurence."
          key="og:description"
        />
      </Head>
      <Header
        image={BUILDING_BRIDGE}
        alt="Majestic cathedral near a big bridge"
        objectPosition="right"
        title={
          <>
            <h1 className="text-white text-3xl sm:text-5xl mb-6">
              Spletne Rešitve
              <br />
              Mobilne Aplikacije
              <br />
              Digitalni Marketing
              <br />
              3D Animacije
              <br />
              Video Produkcija
            </h1>
          </>
        }
        subtitle="Storitve"
        buttons={
          <>
            <Link href="#storitve">
              <a className="button mr-4">Več o storitvah</a>
            </Link>
            <Link href="/reference">
              <a className="button">Reference</a>
            </Link>
          </>
        }
      />
      <div
        id="storitve"
        className="bg-[#EfEfEf] h-auto flex relative flex-col justify-center text-black py-12 px-4"
      >
        <SectionContainer>
          <Section
            image={EIFFEL}
            alt="Beautiful skyscraper reaching for the skies"
            aboveTitle={
              <p className="text-slate-500">Izdelava in optimizacija spletnih strani in trgovin</p>
            }
            title={
              <>
                Optimizacija
                <br />
                Spletnih Rešitev
              </>
            }
            text={
              <p>
                Za vas izdelamo spletno stran z uporabo najmodernejših in najustreznejših orodij, ki
                vam bodo omogočala, da boste konkurenčni ponudnik svojih storitev na spletu.
              </p>
            }
          >
            <Link href="/storitve/izdelava-in-optimizacija-spletnih-strani-in-trgovin">
              <a className="button -dark">Preberite podrobneje</a>
            </Link>
          </Section>
          <Section
            right
            image={IZDELAVA_APLIKACIJ}
            alt="Colorful image of a sand cave"
            aboveTitle={<p className="text-slate-500">Izdelava in razvoj aplikacij</p>}
            title={
              <>
                Izdelava Mobilnih
                <br />
                Aplikacij
              </>
            }
            text={
              <p>
                Za vas izdelamo mobilne aplikacije na sistemih iOS in Android. Omogočimo vam celotno
                ponudbo od izdelave do gostovanja na Cloud strežnikih.
              </p>
            }
          >
            <Link href="/storitve/izdelava-aplikacij-za-android-in-ios-pametne-telefone">
              <a className="button -dark">Poglej podrobneje</a>
            </Link>
          </Section>
          <Section
            image={DIGITALNI_MARKETING}
            alt="Colorful tower reaching for the skies"
            aboveTitle={<p className="text-slate-500">Dober glas seže v deveto vas</p>}
            title="Digitalni Marketing"
            text={
              <p>
                Za vas organiziramo in upravljamo izvedbo učinkovitih digitalnih trženjskih
                strategij. Tako boste dobili celostni vpogled in pravilno izbrali ciljno občinstvo,
                ki vam bo omogočilo najboljši izplen vloženih sredstev v reklamno kampanjo.
              </p>
            }
          >
            <Link href="/storitve/digitalni-marketing">
              <a className="button -dark">Poglej podrobneje</a>
            </Link>
          </Section>
          <Section
            right
            image={ANIMACIJE}
            alt="Disney castle"
            aboveTitle={<p className="text-slate-500">Ko resničnost poka po šivih</p>}
            title={
              <>
                3D Modeliranje
                <br />& Animiranje
              </>
            }
            text={
              <p>
                Za vas izdelamo mobilne aplikacije na sisemih iOS in Android. Omogočimo vam celotno
                ponudbo od izdelave, gostovanja na Cloud tehnologiji s podporo kubernetes sistema.
              </p>
            }
          >
            <Link href="/storitve/3d-modeliranje-animiranje">
              <a className="button -dark">Poglej podrobneje</a>
            </Link>
          </Section>
          <Section
            image={VIDEO_PRODUCTION}
            alt="Cathedral in distance between two greek towers"
            aboveTitle={<p className="text-slate-500">Inspiracija ne počiva</p>}
            title="Video Produkcija"
            text={
              <p>
                Za vas pripravimo in uresničimo kreativno vizijo, kjer bo vašemu občinstvu jasno, da
                so končno prispeli na pravi naslov. Z kreativno in umetniško režijo boste izstopali
                in uspešno predali svojo sporočilo.
              </p>
            }
          >
            <Link href="/storitve/video-produkcija">
              <a className="button -dark">Poglej podrobneje</a>
            </Link>
          </Section>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Storitve;
