import type { Category, CategoryId, Listing } from "@/lib/types";
import type { Locale } from "./index";

// Spanish for the data-driven content (categories + listing prose). Falls back
// to English when a translation is missing, so the site never shows a blank.

const CATEGORY_ES: Record<CategoryId, { label: string; short: string; blurb: string }> = {
  crisis: { label: "Crisis y reducción de daños", short: "Ayuda en crisis", blurb: "Ayuda para sobredosis, suicidio y seguridad — ahora mismo." },
  housing: { label: "Vivienda y refugio", short: "Vivienda", blurb: "Una cama esta noche y vivienda a largo plazo." },
  food: { label: "Comida", short: "Comida", blurb: "Comidas y despensa gratis hoy." },
  id: { label: "Identificación y documentos", short: "Identificación", blurb: "Identificación estatal, acta de nacimiento, tarjeta de Seguro Social." },
  jobs: { label: "Trabajo y capacitación", short: "Trabajo", blurb: "Trabajo y capacitación que contratan a personas con antecedentes." },
  healthcare: { label: "Atención médica", short: "Salud", blurb: "Clínicas, medicinas y seguro." },
  benefits: { label: "Beneficios públicos", short: "Beneficios", blurb: "SNAP, Medicaid y ayuda en efectivo." },
  legal: { label: "Ayuda legal", short: "Ayuda legal", blurb: "Limpiar tu antecedente, perdones y ayuda legal." },
  behavioral: { label: "Salud mental y recuperación", short: "Salud mental", blurb: "Consejería y tratamiento por uso de sustancias." },
  transportation: { label: "Cómo moverte", short: "Transporte", blurb: "Pases de transporte y tarifas reducidas." },
};

type ListingTx = Partial<Pick<Listing, "summary" | "whatToDoNow" | "hours" | "cost" | "neighborhood" | "address">>;

const LISTING_ES: Record<string, ListingTx> = {
  "988-lifeline": { summary: "Apoyo gratis y confidencial para crisis de suicidio, salud mental o uso de sustancias — a cualquier hora, de día o de noche.", whatToDoNow: "Llama o envía un texto al 988. No tienes que estar pensando en el suicidio para pedir ayuda. Es gratis y puedes quedarte en el anonimato.", hours: "24 horas al día, 7 días a la semana", cost: "Gratis" },
  "net-access-point": { summary: "Punto de entrada, abierto 24/7 y sin cita, para tratamiento por uso de sustancias, con medicamento el mismo día para la adicción a opioides (buprenorfina/metadona).", whatToDoNow: "Llama a cualquier hora o entra sin cita. El tratamiento con medicamento reduce el riesgo de muerte por sobredosis alrededor de un 75%.", hours: "24 horas al día, 7 días a la semana", cost: "Gratis / acepta Medicaid" },
  "careconnect-warmline": { summary: "Una línea telefónica atendida por pares para apoyo emocional y para conectarte con atención de salud mental — para cuando no es una emergencia pero necesitas hablar.", whatToDoNow: "Llama para hablar con alguien que ha pasado por lo mismo. Gratis y confidencial.", cost: "Gratis" },
  "prevention-point": { summary: "Servicios de reducción de daños: naloxona (Narcan) gratis, servicios de jeringas, cuidado de heridas y manejo de casos.", whatToDoNow: "La naloxona gratis puede revertir una sobredosis. Llama o visita para conseguirla y aprender a usarla.", cost: "Gratis", hours: "Llama para confirmar el horario", neighborhood: "Kensington" },
  "reentry-nrc": { summary: "Centros de reingreso de la ciudad con manejo de casos, ayuda para conseguir una identificación, capacitación laboral, orientación sobre beneficios y ayuda para limpiar tu antecedente, todo en un solo lugar.", whatToDoNow: "Llama a la Oficina de Alianzas de Reingreso para encontrar tu centro más cercano y qué llevar.", neighborhood: "Kensington y el norte de Filadelfia" },
  "homeless-outreach": { summary: "Si no tienes dónde dormir esta noche, la línea de ayuda puede conectarte con un refugio de emergencia y equipos de ayuda en la calle.", whatToDoNow: "Llama para pedir un lugar en un refugio o que un equipo salga a encontrarte.", cost: "Gratis", hours: "24 horas al día" },
  "broad-street-ministry": { summary: "Comidas calientes, una dirección postal para personas sin hogar, ropa y servicios sociales — tratando a cada persona con dignidad.", whatToDoNow: "Ven por una comida, o consigue gratis una dirección postal que puedes usar para solicitudes de trabajo y de beneficios.", cost: "Gratis", hours: "Llama para confirmar el horario de comidas", neighborhood: "Center City" },
  plse: { summary: "Ayuda legal gratis para limpiar o sellar tu antecedente penal (expungement) y solicitar un perdón — las barreras del antecedente que bloquean el trabajo y la vivienda.", whatToDoNow: "Comunícate sobre un expungement o un perdón. Un antecedente más limpio te abre el trabajo y la vivienda.", cost: "Gratis" },
  clsphila: { summary: "Ayuda legal civil gratis para habitantes de Filadelfia de bajos ingresos — negaciones de beneficios, vivienda, empleo y temas de antecedentes.", cost: "Gratis" },
  careerlink: { summary: "Centros públicos de empleo con ofertas de trabajo, ayuda con el currículum, capacitación y personal que trabaja con personas que regresan de la cárcel.", whatToDoNow: "Visita un centro o empieza en línea para recibir ayuda para encontrar trabajo y capacitación." },
  "compass-benefits": { summary: "El sitio de Pensilvania para solicitar SNAP (estampillas de comida), Medicaid (cobertura médica) y ayuda en efectivo en una sola solicitud.", whatToDoNow: "Puedes solicitar en línea, por teléfono o en persona. Medicaid y SNAP no tienen costo.", cost: "Gratis solicitar" },
  "septa-fares": { summary: "Cómo viajar en SEPTA por menos — tarifas reducidas y programas de transporte gratis para personas de bajos ingresos.", whatToDoNow: "Pregunta en un centro de reingreso por un pase de transporte; un programa de tarifa cero para bajos ingresos puede cubrir tus viajes." },
};

const LANGUAGE_ES: Record<string, string> = { English: "Inglés", Spanish: "Español" };

export function localizeCategory(c: Category, lang: Locale): Category {
  if (lang === "en") return c;
  return { ...c, ...CATEGORY_ES[c.id] };
}

export function localizeListing(l: Listing, lang: Locale): Listing {
  if (lang === "en") return l;
  const t = LISTING_ES[l.id] ?? {};
  return {
    ...l,
    ...t,
    languages: l.languages?.map((x) => LANGUAGE_ES[x] ?? x),
  };
}
