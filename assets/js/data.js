/*
    FIND ME
    Which day and time is shown in the agenda by default
*/
defaults = {
    time:   'night',
    day:    '9'
};

/*
    FIND ME
    Put the dates here, it is used for some comparisons
*/
comps = {
    viernes:    8,
    sabado:     9,
    mes:        'marzo'
}

/*
    FIND ME
    Write the days as 'Viernes (matutina)' and 'Viernes (vespertina)' if needed
*/
days = [
    {
        day:        'viernes (matutina)',
        date:       '8',
        month:      'marzo',
        year:       '2024',
        inPerson:   'presencial',
        startTime:  '9:00',
        endTime:    '13:00',
        location:   'Universidad Galileo',
        room:       'Track 1: salón por confirmar - Track 2: salón por confirmar',
        address:    '7 avenida, calle Dr Eduardo Suger, zona 10',
        audience:   'Orientado a estudiantes de colegios'
    },

    {
        day:        'viernes (vespertina)',
        date:       '8',
        month:      'marzo',
        year:       '2024',
        inPerson:   'presencial',
        startTime:  '18:00',
        endTime:    '21:00',
        location:   'Universidad Galileo',
        room:       'Track 1: salón por confirmar - Track 2: salón por confirmar',
        address:    '7 avenida, calle Dr Eduardo Suger, zona 10',
        audience:   'Público en general'
    },

    {
        day:        'sábado',
        date:       '9',
        month:      'marzo',
        year:       '2024',
        inPerson:   'presencial',
        startTime:  '9:00',
        endTime:    '13:00',
        location:   'Universidad Galileo',
        room:       'Track 1: salón por confirmar - Track 2: salón por confirmar',
        address:    '7 avenida, calle Dr Eduardo Suger, zona 10',
        audience:   'Público en general'
    }
];

info = [
    'Women Techmakers Guatemala es una comunidad en la cual las mujeres en tecnología pueden inspirarse e incentivarse unas a otras para lograr sus sueños.',
    'El Día Internacional de la Mujer (IWD, siglas en inglés) se conmemora el 8 de marzo alrededor del mundo, en cada región se realizan distintas actividades. En varios casos, se realiza con un enfoque específico en política, economía o tecnología. El objetivo de los eventos a llevarse a cabo en Guatemala es empoderar a mujeres que trabajan o tienen interés en tecnología a través de visibilizar esfuerzos, aumentar vínculos de comunidad y brindar los recursos necesarios para el crecimiento profesional.',
    'Se tendrá una serie de conferencias de mujeres líderes en diversas áreas de la tecnología, comunicación, diseño gráfico y periodismo entre otras, además, se busca crear un espacio de networking.',
    'El evento es completamente gratuito, solo requiere inscripción.'
];
