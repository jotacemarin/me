<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div
                v-for="(experience, index) in curriculum"
                :key="`${index}-${experience.title}-${experience.company}`"
                class="flex-grow-1"
            >
                <h3 class="mb-0">{{ experience.title }}</h3>
                <div class="subheading">{{ experience.company }}</div>
                <p><i>{{ diff(experience.startDate, experience.endDate) }}</i></p>
                <p>{{ experience.headline }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { MomentUtils } from '../utils';

export default {
    name: 'Experience',

    data: () => ({
        curriculum: [
            {
                title: 'Software Developer',
                company: 'Truora Inc.',
                startDate: new Date(2020, 11),
                endDate: Date.now(),
                headline: ''
            },
            {
                title: 'Software Developer',
                company: 'Cafeto Software',
                startDate: new Date(2019, 9),
                endDate: new Date(2020, 8),
                headline: 'Software Engineer Intermediate I.'
            },
            {
                title: 'Software Developer',
                company: 'Kuntur Digital',
                startDate: new Date(2018, 7),
                endDate: new Date(2019, 2),
                headline: 'Desarrollo de software a la medida con tecnologias: NodeJs, MongoDB, Angular 6, React.'
            },
            {
                title: 'Software Developer',
                company: 'NovaIP',
                startDate: new Date(2017, 7),
                endDate: new Date(2019, 9),
                headline: 'Desarrollo de software para telefonia ip con las tecnologias: Asterisk, Nginx, Java, Jersey RESTful Web Services, Postgrest, MySQL, Redis, MongoDB, AngularJs, Angular 2, WebRTC (Jitsi meet, Twillio Video SDK), Websockets, Socket.io, Ionic v3, Angular Material, Bootstrap.'
            },
            {
                title: 'Instructor',
                company: 'Intituto Educativo ProEdu',
                startDate: new Date(2015, 10),
                endDate: new Date(2017, 5),
                headline: 'Docencia en reparacion y mantenimiento en equipos de computo e impresoras.'
            },
            {
                title: 'Tecnico en sistemas',
                company: 'ATC soluciones integrales',
                startDate: new Date(2015, 1),
                endDate: new Date(2015, 6),
                headline: 'Mantenimiento y reparacion de equipos de computo e impresoras, instalacion de redes y cableado estructurado, manejo de herramientas ofimaticas, administracion de software contable cg-uno version 8.5.'
            },
            {
                title: 'Tecnico en sistemas',
                company: 'Computadores y servicios del Cauca',
                startDate: new Date(2013, 6),
                endDate: new Date(2016, 3),
                headline: 'Mantenimiento y reparacion de hardware para los equipos de computo, impresoras, dvrs, camaras de vigilancia analogas y digitales, instalacion de redes y cableado estructurado, administracion de centralitas ip pbx (elastix y asterisk), manejo en herramientas ofimaticas de microsoft, administracion de cctv (tp-link, dahua), administracion de software contable cg-uno en sus versiones 5.0 y 8.5, soporte para sofware con base de datos sql server 2003, desarrollo de macros para hojas de calculo (visual basic para excel), angularjs y jquery.'
            },
        ],
    }),

    methods: {
        diff(start, end) {
            return MomentUtils.diff(start, end);
        },
    },
};
</script>