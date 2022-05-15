// Components
import Names from "../components/steps/Names";
import Email from "../components/steps/Email";
import Address from "../components/steps/Address";
import Floors from "../components/steps/Floors";
import Checks from "../components/steps/Checks";
import Description from "../components/Description";
import NoFound from "../components/NoFound";

export const Paths = [
    {
        path: "/",
        component: Description,
        name: "Descripción",
        code: null,
        visible: false
    },
    {
        path: "*",
        component: NoFound,
        name: "404",
        code: null,
        visible: false
    },
    {
        path: "nombre-completo",
        component: Names,
        name: "Nombre Completo",
        nameState: "names",
        code: "Paso 1",
        visible: true,
        descripcion: "Agrege su nombre completo sin espacios en el campo nombre completo, Ej: Richard Hendricks.",
        icon: "fa-solid fa-1"
    },
    {
        path: "email",
        component: Email,
        name: "Email",
        nameState: "email",
        code: "Paso 2",
        visible: true,
        descripcion: "Agrege su email valido en el campo email, Ej: example@correo.com",
        icon: "fa-solid fa-2"
    },
    {
        path: "direccion-apartamento",
        component: Address,
        name: "Dirección del apartamento",
        code: "Paso 3",
        nameState: "address",
        visible: true,
        descripcion: "Agrege su dirrecion completa en el campo direccion, Ej: Carrera 50 #34-124, Apto 1209",
        icon: "fa-solid fa-3"
    },
    {
        path: "numero-pisos",
        component: Floors,
        name: "Número del piso",
        code: "Paso 4",
        nameState: "floor",
        visible: true,
        descripcion: "Defina el número del piso en la que requiere en inmueble, Ej: Piso 12",
        icon: "fa-solid fa-4"

    },
    {
        path: "beneficios",
        component: Checks,
        name: "Beneficios",
        code: "Paso 5",
        nameState: "perks",
        visible: true,
        descripcion: "Agrege los beneficios que requiera del inmueble, Ej: Zona BBQ, Sálon comunal, parques de juegos.",
        icon: "fa-solid fa-5"
    },
]