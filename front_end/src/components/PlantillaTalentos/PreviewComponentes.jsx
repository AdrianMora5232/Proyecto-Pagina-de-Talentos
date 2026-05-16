import { useMemo, useRef, useState, useLayoutEffect } from 'react';
import Estructura1 from './Estructura1';
import Estructura1_1 from './Estructura1_1';
import Estructura1_2 from './Estructura1_2';
import Estructura1_3 from './Estructura1_3';
import Estructura1_4 from './Estructura1_4';
import GrillaDoble from './GrillaDoble';
import GrillaTriple from './GrillaTriple';
import Grilla1_2_Izda from './Grilla1_2_Izda';
import '../../styles/PlantillaTalentos/PreviewComponentes.css';

const MAPA = {
    Estructura1, Estructura1_1, Estructura1_2, Estructura1_3, Estructura1_4,
    GrillaDoble, GrillaTriple, Grilla1_2_Izda,
};

const CANVAS_WIDTH = 860;
const noop = () => {};

function PreviewComponentes({ componentes }) {
    const outerRef = useRef(null);
    const [scale, setScale] = useState(0.33);
    const primeros = useMemo(() => (componentes || []).slice(0, 2), [componentes]);

    useLayoutEffect(() => {
        if (outerRef.current) {
            const w = outerRef.current.offsetWidth;
            setScale(w / CANVAS_WIDTH);
        }
    }, []);

    return (
        <div className="prevc-outer" ref={outerRef}>
            <div
                className="prevc-inner"
                style={{ transform: `scale(${scale})`, width: CANVAS_WIDTH }}
            >
                {primeros.length === 0 && <div className="prevc-empty" />}
                {primeros.map((comp, i) => {
                    const Comp = MAPA[comp.type];
                    if (!Comp) return <div key={i} className="prevc-empty" />;
                    return (
                        <Comp
                            key={i}
                            onActivate={noop}
                            activeElement={null}
                            initialData={comp.data}
                            onUpdate={noop}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PreviewComponentes;
