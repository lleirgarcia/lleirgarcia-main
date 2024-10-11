"use client"; // Asegura que este componente se renderice en el cliente

import Image from "next/image";
import '../../styles/globals.css';
import { useRouter } from 'next/navigation'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useState } from 'react';


interface EducationalProps {
  url: string;
}
const popupStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '5px',
  zIndex: 1000,
  fontSize: '14px',
};


export default function Educational({ url }: EducationalProps){
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const copyLink = (link: string) => {
    // Copiar el enlace al portapapeles
    navigator.clipboard.writeText(link).then(() => {
      // Mostrar el popup
      setShowPopup(true);

      // Ocultar el popup después de 2 segundos
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar el enlace: ', err);
    });
  };

  
  return ( 
    <>
    <div className="px-4 my-5 text-center">
      <h1 className="display-5 fw-bold text-white">
        <span>The education you need</span>
      </h1>
      <div className="col-lg- mx-auto">
        <p className="lead mb-4 text-white">
         <strong>Best educational</strong> online and presencial courses and educational centers.
        </p>
      </div>
    </div>

<div className="container">
  <div className="px-4 py-1 my-3 text-center">
    <h2 className="titles">Masters y post-grados</h2>
  </div>

  <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-2 align-items-center justify-content-center">
    <div className="list-group w-75">

      {/* Sexto enlace */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/6800/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Máster Universitario en Ciberseguridad (Unir)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Master</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/6800/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>

      {/* Séptimo enlace */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/6947/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Máster en Full Stack Developer (UNIR)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Master</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/6947/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>

      {/* Octavo enlace */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/6949/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Máster de Programación Web (CEI)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Master</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/6949/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>

      {/* Noveno enlace */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/7146/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Máster en Blockchain Management y Web3 (EBIS Business Techschool)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Master</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/7146/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>

      {/* Décimo enlace */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/8657/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Máster en Big Data & Analytics (EAE Business School Madrid)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Master</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/8657/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>

      {/* Otros enlaces */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/13747/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Máster de Formación Permanente en Desarrollo web, Móvil y Marketing online (SEAS)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Máster</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/13747/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>
    </div>
  </div>
</div>

<div className="container">
  <div className="px-4 py-1 my-3 text-center">
    <h2 className="titles">Ciclos formativos</h2>
  </div>
  <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-2 align-items-center justify-content-center">
    <div className="list-group w-75">
      {/* Enlaces de ciclos formativos */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/10040/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-2">FP Técnico Superior en Desarrollo de Aplicaciones Web (CEI)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Ciclo superior</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/10040/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>

      {/* Otros enlaces */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/11130/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">FP Grado Superior en Desarrollo de Aplicaciones Web (Ilerna)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Ciclo superior</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/11130/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/11206/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">FP Grado Superior en Desarrollo de Aplicaciones Web (DIGITECH)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Ciclo Superior</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/11206/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>
    </div>
  </div>
</div>

<div className="container">
  <div className="px-4 py-1 my-3 text-center">
    <h2 className="titles">Bootcamps</h2>
  </div>
  <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-2 align-items-center justify-content-center">
    <div className="list-group w-75">
      {/* Sexto enlace */}
      <div className="d-flex justify-content-between align-items-center list-group-item list-group-item-action gap-3 py-3">
        <a href="https://eadv.io/18234/aqualityguy" target="_blank" aria-current="true" className="flex-grow-1 text-decoration-none custom-link">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Bootcamp en Desarrollo Full Stack (thePower)</h6>
            </div>
            <small className="opacity-50 text-nowrap">Bootcamp</small>
          </div>
        </a>
        <span onClick={() => copyLink("https://eadv.io/18234/aqualityguy")} style={{ cursor: 'pointer' }}>
          <ContentCopyIcon fontSize="small" />
        </span>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-3 align-items-center justify-content-center">
    
    <button type="button" className="btn btn-dark btc-sm"
      onClick={() => router.back()} // Navegación hacia atrás con el nuevo hook
    
    >
      Volver
    </button>
    </div>
  </div>



{/* Footer */}
<footer className="bg-dark text-white text-center py-3 mt-5">
  <p>&copy; 2024 lleirgarcia.es. All rights reserved.</p>
</footer>

  </>
  );
}
