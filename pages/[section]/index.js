import Head from 'next/head'
import {useRouter} from 'next/router';
import Header from '../components/Header';
import NuestrosServicios from '../../sections/NuestrosServicios';
import QuienesSomos from '../../sections/QuienesSomos';
import MetodologiaDeTrabajo from '../../sections/MetodologiaDeTrabajo';
import {labels} from '../../utils/uiconstants';
import FloatingLinks from './../components/FloatingLinks';

export default function Home() {
    const router = useRouter();
    const sanitizedPath = router.asPath.slice(1, router.asPath.length);
    return (
        <div className="root-container">
            <Head>
                <title>{labels.sectionTitles[sanitizedPath]}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <FloatingLinks />
            <main id={sanitizedPath}>
                {
                    sanitizedPath == 'nuestros-servicios' ? (
                        <NuestrosServicios />
                    ) : sanitizedPath == 'quienes-somos' ? (
                        <QuienesSomos />
                    ) : sanitizedPath == 'metodologia-de-trabajo' ? (
                        <MetodologiaDeTrabajo />
                    ) : ''
                }
            </main>
        </div>
    )
}
