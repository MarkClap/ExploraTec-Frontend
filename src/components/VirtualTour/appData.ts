const appData = {
  name: "Tecsup - Campus Centro",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: false,
  },
  scenes: [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "tileUrl": "/tiles/0-entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.068067774237692,
        "pitch": 0.03346392230207229,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.9204639688937917,
          "pitch": -0.002028122994131465,
          "rotation": 0,
          "target": "1-patio-central"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-patio-central",
      "name": "Patio Central",
      "tileUrl": "/tiles/1-patio-central",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.37378225865015224,
        "pitch": 0.10870001243675098,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.752987778948084,
          "pitch": -0.012615710038859973,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.2896812861544902,
          "pitch": 0.020910561396986438,
          "rotation": 0,
          "target": "18-maquinitas"
        },
        {
          "yaw": -1.2000605687561166,
          "pitch": 0.023445704229420272,
          "rotation": 0,
          "target": "22-pabellon-4---piso-1"
        },
        {
          "yaw": -2.2265197692443053,
          "pitch": -0.014558242272778799,
          "rotation": 0,
          "target": "25-entrada-biblioteca"
        },
        {
          "yaw": -0.08231905245866855,
          "pitch": 0.006307545346725618,
          "rotation": 0,
          "target": "2-camino"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7008975200473486,
          "pitch": -0.048665228131163474,
          "title": "cafetin",
          "text": "\n El cafetín de Tecsup es un espacio diseñado para brindar comodidad y un ambiente relajado donde los estudiantes y colaboradores pueden disfrutar de una variedad de opciones de snacks, bebidas y alimentos. Aquí podrás encontrar desde opciones ligeras para una pausa rápida hasta platos más completos para recargar energías. Es el lugar perfecto para desconectar un momento, compartir con amigos o estudiar en un ambiente distinto. Además, el cafetín se compromete a ofrecer productos de calidad y un servicio amable que hacen de este espacio una extensión más de la experiencia Tecsup."
        },
        {
          "yaw": -2.5197525587454024,
          "pitch": -0.017992820492674255,
          "title": "secretaria",
          "text": "La secretaría de Tecsup es el punto de referencia para atender las consultas administrativas y académicas de los estudiantes. Aquí se gestionan trámites importantes como matrículas, certificados, constancias, y otros documentos necesarios para el desarrollo académico. El equipo de la secretaría está comprometido en brindar un servicio eficiente y amigable, orientando a los estudiantes en sus necesidades administrativas y facilitando los procesos que contribuyen a su formación. La secretaría es un espacio clave que respalda y apoya a la comunidad estudiantil en cada etapa de su aprendizaje en Tecsup."
        },
        {
          "yaw": -0.8002573703119804,
          "pitch": 0.02753771597134147,
          "title": "auditorio",
          "text": "El auditorio de Tecsup es un espacio diseñado para el aprendizaje, la innovación y el intercambio de ideas. Equipado con tecnología de última generación, este lugar alberga conferencias, charlas, talleres, y eventos académicos que enriquecen la experiencia educativa de los estudiantes. Con una capacidad para recibir a numerosos asistentes, el auditorio permite que alumnos y profesores participen en actividades de formación, presentaciones de proyectos, y encuentros institucionales que fortalecen la comunidad académica de Tecsup. Es un espacio donde se fomenta el conocimiento y se inspiran nuevas ideas."
        }
      ]
    },
    {
      "id": "2-camino",
      "name": "Camino",
      "tileUrl": "/tiles/2-camino",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7804664979256959,
        "pitch": 0.07928142668257365,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.4241354608098664,
          "pitch": 0.08603545120801748,
          "rotation": 0,
          "target": "1-patio-central"
        },
        {
          "yaw": -1.5059207968092014,
          "pitch": 0.10750188435218355,
          "rotation": 0,
          "target": "18-maquinitas"
        },
        {
          "yaw": 0.7225895516070011,
          "pitch": 0.005992476736270902,
          "rotation": 0,
          "target": "4-pabellon-7"
        },
        {
          "yaw": 2.347162116014762,
          "pitch": 0.012850096607326833,
          "rotation": 0,
          "target": "13-cerca-del-ajedrez"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pabellon-4---piso-2-s",
      "name": "Pabellon 4 - piso 2-S",
      "tileUrl": "/tiles/3-pabellon-4---piso-2-s",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7496300251299726,
        "pitch": 0.05321616605054302,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.06190682412813153,
          "pitch": 0.04084627265671159,
          "rotation": 0,
          "target": "20-pabellon-4---piso-2-m"
        },
        {
          "yaw": -1.6102385634518885,
          "pitch": 0.4075639633637671,
          "rotation": 0,
          "target": "24-pabellon-4"
        },
        {
          "yaw": -1.6404797958845272,
          "pitch": 0.06383705944092988,
          "rotation": 0,
          "target": "5-area-de-salones-4b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pabellon-7",
      "name": "Pabellon 7",
      "tileUrl": "/tiles/4-pabellon-7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.7890632846116805,
        "pitch": 0.0979808966190987,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.8328945391073148,
          "pitch": -0.04981811906169753,
          "rotation": 0,
          "target": "14-salon-701"
        },
        {
          "yaw": -0.6517989124659067,
          "pitch": -0.050095511683309724,
          "rotation": 0,
          "target": "16-salon-702"
        },
        {
          "yaw": 0.2253653918651306,
          "pitch": 0.017224265941418793,
          "rotation": 0,
          "target": "17-salon-704"
        },
        {
          "yaw": 1.1666275690975123,
          "pitch": 0.07004888166120082,
          "rotation": 0,
          "target": "5-area-de-salones-4b"
        },
        {
          "yaw": 2.6989407940991637,
          "pitch": 0.07529275960077086,
          "rotation": 0,
          "target": "7-area-de-tecnologia"
        },
        {
          "yaw": -2.411728566007266,
          "pitch": 0.000655798039741029,
          "rotation": 0,
          "target": "8-area-de-mecanica"
        },
        {
          "yaw": -0.9797354094636308,
          "pitch": -0.058074825105254746,
          "rotation": 0,
          "target": "2-camino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-area-de-salones-4b",
      "name": "Area de salones 4B",
      "tileUrl": "/tiles/5-area-de-salones-4b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.175795725260399,
        "pitch": 0.06994485307894394,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5400871500416073,
          "pitch": -0.017000157022044604,
          "rotation": 0,
          "target": "4-pabellon-7"
        },
        {
          "yaw": 0.007333182646721781,
          "pitch": 0.052531117027022844,
          "rotation": 6.283185307179586,
          "target": "24-pabellon-4"
        },
        {
          "yaw": -0.09002617235100807,
          "pitch": -0.08188002284860119,
          "rotation": 0,
          "target": "3-pabellon-4---piso-2-s"
        },
        {
          "yaw": 3.1166380995160488,
          "pitch": 0.01561215689389961,
          "rotation": 0,
          "target": "6-polideportivo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-polideportivo",
      "name": "Polideportivo",
      "tileUrl": "/tiles/6-polideportivo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.855754504708207,
        "pitch": -0.0039251213590034695,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.14334777072640748,
          "pitch": -0.08332311174008744,
          "rotation": 0,
          "target": "7-area-de-tecnologia"
        },
        {
          "yaw": 0.09079340932724733,
          "pitch": -0.07724610207628935,
          "rotation": 0,
          "target": "5-area-de-salones-4b"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8808330011448735,
          "pitch": 0.0003712450725377181,
          "title": "Title8",
          "text": "La cancha de básquet de Tecsup es un espacio diseñado para fomentar el deporte y la actividad física entre los estudiantes. Este lugar permite que los alumnos practiquen y disfruten del básquet, ya sea en entrenamientos, partidos amistosos o torneos internos. La cancha está equipada para ofrecer un ambiente seguro y adecuado para desarrollar habilidades deportivas y promover el trabajo en equipo, la disciplina y el espíritu de competencia. Además, es un espacio perfecto para que los estudiantes se desconecten de las clases y fortalezcan lazos de amistad a través del deporte."
        },
        {
          "yaw": -2.6344805832050753,
          "pitch": -0.009873433375929608,
          "title": "Title7",
          "text": "La segunda cancha de fútbol de Tecsup ofrece un espacio adicional para la práctica deportiva, brindando a los estudiantes más opciones para ejercitarse y divertirse. Con un tamaño ideal para partidos entre amigos o entrenamientos, esta cancha es un lugar donde se promueve el trabajo en equipo, la disciplina y la pasión por el deporte. Además, su ubicación permite que los estudiantes puedan disfrutar de momentos de esparcimiento y actividad física en un ambiente seguro y adecuado. Es el escenario perfecto tanto para los aficionados al fútbol como para quienes buscan mantenerse activos."
        },
        {
          "yaw": 2.751514009576252,
          "pitch": 0.02737968052720774,
          "title": "Title6",
          "text": "La cancha principal deportiva de Tecsup es un espacio dedicado a la actividad física y el bienestar estudiantil. Aquí, los estudiantes pueden practicar deportes como fútbol y futsal promoviendo un estilo de vida saludable y un espíritu de equipo. La cancha está equipada para albergar torneos internos y entrenamientos, ofreciendo un lugar ideal para desconectar de las clases y fortalecer la convivencia. Este espacio contribuye al desarrollo integral de los estudiantes, fomentando valores como la disciplina, el respeto y la colaboración."
        },
        {
          "yaw": 2.0367276644384606,
          "pitch": 0.016725697453622956,
          "title": "Title5",
          "text": "La parte trasera de la cancha principal en Tecsup es un área de descanso y esparcimiento, ideal para los estudiantes que buscan un momento de relajación entre sus actividades. Rodeada de vegetación y con áreas para sentarse, este espacio brinda un ambiente tranquilo y agradable, perfecto para conversar con amigos o simplemente disfrutar del aire libre. Además, suele ser un punto de encuentro para quienes practican deportes, ya que permite observar los partidos o entrenamientos que se desarrollan en la cancha. Es un lugar que complementa el área deportiva, promoviendo el bienestar y la convivencia estudiantil."
        }
      ]
    },
    {
      "id": "7-area-de-tecnologia",
      "name": "Area de Tecnologia",
      "tileUrl": "/tiles/7-area-de-tecnologia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.6036655881553745,
        "pitch": 0.049634774133533455,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.2374759312403274,
          "pitch": 0.004316486209743786,
          "rotation": 0,
          "target": "6-polideportivo"
        },
        {
          "yaw": 1.2456513688084847,
          "pitch": 0.0055975882395813414,
          "rotation": 0,
          "target": "15-salones-de-mecanica"
        },
        {
          "yaw": 2.8647878605417674,
          "pitch": 0.010565903718852354,
          "rotation": 0,
          "target": "8-area-de-mecanica"
        },
        {
          "yaw": -1.7375094850453827,
          "pitch": -0.011426574490229768,
          "rotation": 0,
          "target": "5-area-de-salones-4b"
        },
        {
          "yaw": -2.273965034866226,
          "pitch": 0.006615075422107708,
          "rotation": 0,
          "target": "4-pabellon-7"
        },
        {
          "yaw": -2.4833577391960144,
          "pitch": 0.0030672844758399265,
          "rotation": 0,
          "target": "2-camino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-area-de-mecanica",
      "name": "Area de mecanica",
      "tileUrl": "/tiles/8-area-de-mecanica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8508243040789729,
          "pitch": -0.024323044208285793,
          "rotation": 0,
          "target": "12-zona-verde"
        },
        {
          "yaw": -2.2637830163950206,
          "pitch": 0.013169883672583538,
          "rotation": 0,
          "target": "9-mecanica"
        },
        {
          "yaw": 2.397242413709985,
          "pitch": 0.037718372694047986,
          "rotation": 0,
          "target": "7-area-de-tecnologia"
        },
        {
          "yaw": 1.558054875477203,
          "pitch": 0.02517539535663893,
          "rotation": 0,
          "target": "5-area-de-salones-4b"
        },
        {
          "yaw": 1.2630619810111572,
          "pitch": 0.04223658088478288,
          "rotation": 0,
          "target": "4-pabellon-7"
        },
        {
          "yaw": 0.8134125007975683,
          "pitch": 0.01735772119087109,
          "rotation": 0,
          "target": "2-camino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-mecanica",
      "name": "Mecanica",
      "tileUrl": "/tiles/9-mecanica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0703577001528295,
        "pitch": 0.03661413445394501,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.8473853554432829,
          "pitch": 0.0380968409942426,
          "rotation": 0,
          "target": "8-area-de-mecanica"
        },
        {
          "yaw": 1.0182041527674937,
          "pitch": -0.11458582743885337,
          "rotation": 0,
          "target": "10-segundo-piso-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6026364563032693,
          "pitch": 0.013005706417201779,
          "title": "Title",
          "text": "Text6"
        }
      ]
    },
    {
      "id": "10-segundo-piso-e",
      "name": "Segundo piso E",
      "tileUrl": "/tiles/10-segundo-piso-e",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.3843882704168635,
        "pitch": 0.19671989928456313,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.6183350483920345,
          "pitch": 0.22263342647692497,
          "rotation": 0,
          "target": "9-mecanica"
        },
        {
          "yaw": -2.8261324684955937,
          "pitch": 0.03530679384449087,
          "rotation": 0,
          "target": "11-segundo-piso-s"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7489800427472364,
          "pitch": 0.3264462244727344,
          "title": "Salon 2 piso",
          "text": "En este salón de teoría en Tecsup es un espacio diseñado para la enseñanza y el aprendizaje de fundamentos técnicos y científicos. Equipado con tecnología audiovisual y asientos cómodos, este salón brinda un entorno propicio para la reflexión y el intercambio de ideas. Aquí, los estudiantes profundizan en conceptos clave, resuelven problemas y participan activamente en clases que fomentan el pensamiento crítico y el conocimiento teórico esencial para sus áreas de estudio. Es un espacio donde la teoría toma vida para complementar la práctica."
        }
      ]
    },
    {
      "id": "11-segundo-piso-s",
      "name": "Segundo piso S",
      "tileUrl": "/tiles/11-segundo-piso-s",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.869334468694607,
        "pitch": 0.13855905929719192,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.5208352025556744,
          "pitch": 0.09696280138255275,
          "rotation": 0,
          "target": "10-segundo-piso-e"
        },
        {
          "yaw": 0.6308310940994204,
          "pitch": 0.3072806322415147,
          "rotation": 0,
          "target": "15-salones-de-mecanica"
        },
        {
          "yaw": -0.8119715390020197,
          "pitch": 0.19644552709918273,
          "rotation": 0,
          "target": "27-pabellon-14"
        },
        {
          "yaw": -1.9924034946737592,
          "pitch": 0.20179559082255238,
          "rotation": 0,
          "target": "7-area-de-tecnologia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-zona-verde",
      "name": "Zona verde",
      "tileUrl": "/tiles/12-zona-verde",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.6005102975792376,
        "pitch": 0.012155769434428976,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.5371374461785816,
          "pitch": 0.0595419744499317,
          "rotation": 0,
          "target": "8-area-de-mecanica"
        },
        {
          "yaw": -1.8001784006026398,
          "pitch": 0.03898390062499324,
          "rotation": 0,
          "target": "13-cerca-del-ajedrez"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0183960359477773,
          "pitch": -0.0969345961149326,
          "title": "estacionamiento",
          "text": "El estacionamiento de Tecsup es un espacio amplio y organizado, diseñado para brindar comodidad y seguridad tanto a estudiantes como al personal. Ubicado estratégicamente cerca de las principales instalaciones del campus, ofrece fácil acceso a aulas, laboratorios y áreas administrativas. Este espacio busca facilitar la movilidad dentro del campus, asegurando que todos puedan desplazarse sin inconvenientes y contribuyendo a una experiencia educativa cómoda y accesible."
        }
      ]
    },
    {
      "id": "13-cerca-del-ajedrez",
      "name": "Cerca del ajedrez",
      "tileUrl": "/tiles/13-cerca-del-ajedrez",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.3982961327673333,
        "pitch": 0.05883963469248599,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.2437593140445813,
          "pitch": -0.03446526246621495,
          "rotation": 0,
          "target": "12-zona-verde"
        },
        {
          "yaw": -1.3525798779529232,
          "pitch": 0.005694644130748827,
          "rotation": 0,
          "target": "2-camino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-salon-701",
      "name": "Salon-701",
      "tileUrl": "/tiles/14-salon-701",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3499848226088904,
        "pitch": 0.13118616109151837,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.8695697069294415,
          "pitch": 0.08315707590686472,
          "rotation": 0,
          "target": "4-pabellon-7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.32317072286488724,
          "pitch": 0.05321212207160464,
          "title": "salon7",
          "text": "Este laboratorio de Tecsup es un ambiente equipado con tecnología de última generación y estaciones de trabajo personalizadas, diseñado para fomentar el desarrollo de competencias digitales y prácticas en áreas como programación, diseño y análisis de datos. Los estudiantes cuentan con acceso a software especializado y recursos tecnológicos que fortalecen su formación práctica en sus respectivas disciplinas. Este espacio promueve un aprendizaje dinámico y experimental, permitiendo a los alumnos aplicar sus conocimientos teóricos en proyectos reales y adquirir habilidades clave en entornos digitales.t9"
        }
      ]
    },
    {
      "id": "15-salones-de-mecanica",
      "name": "Salones de mecanica",
      "tileUrl": "/tiles/15-salones-de-mecanica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.579913967038893,
        "pitch": 0.20462232258914526,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.1948992977338158,
          "pitch": -0.3140707475226243,
          "rotation": 0,
          "target": "11-segundo-piso-s"
        },
        {
          "yaw": 2.532295439513698,
          "pitch": 0.07767178102434258,
          "rotation": 0,
          "target": "7-area-de-tecnologia"
        },
        {
          "yaw": -2.8127486217796687,
          "pitch": 0.10649851349136519,
          "rotation": 0,
          "target": "27-pabellon-14"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.951353050988632,
          "pitch": 0.1436105184965868,
          "title": "salon m",
          "text": "El salón de mecánica de Tecsup es un espacio dedicado a la formación práctica y técnica de los estudiantes, equipado con herramientas y equipos especializados que permiten el desarrollo de habilidades en el ámbito de la ingeniería mecánica. Aquí, los alumnos pueden realizar experimentos, prácticas y proyectos bajo la guía de docentes experimentados, explorando conceptos de mecánica, mantenimiento y tecnología industrial. Este salón es el núcleo donde los futuros técnicos e ingenieros aplican sus conocimientos y se preparan para enfrentar los retos del sector industrial."
        }
      ]
    },
    {
      "id": "16-salon-702",
      "name": "Salon-702",
      "tileUrl": "/tiles/16-salon-702",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.13352049296544344,
        "pitch": 0.06016347297796898,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.194323242672512,
          "pitch": 0.29071585445505654,
          "rotation": 0,
          "target": "4-pabellon-7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.18943196163744958,
          "pitch": 0.03369744882537873,
          "title": "salon7",
          "text": "En este laboratorio de Tecsup es un espacio equipado con tecnología avanzada y estaciones de trabajo individuales, diseñado para el desarrollo de competencias digitales y prácticas en programación, diseño, y análisis de datos. Aquí, los estudiantes tienen acceso a software especializado y herramientas que complementan su formación práctica en sus respectivas carreras. Este salón permite un aprendizaje interactivo y experimental, donde los alumnos aplican teoría en proyectos reales y desarrollan habilidades esenciales en entornos digitales."
        }
      ]
    },
    {
      "id": "17-salon-704",
      "name": "Salon-704",
      "tileUrl": "/tiles/17-salon-704",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.11680000230292897,
        "pitch": 0.19049884264050831,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.8769512148745022,
          "pitch": 0.19190046085929957,
          "rotation": 0,
          "target": "4-pabellon-7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05222650835678522,
          "pitch": 0.06556314123161755,
          "title": "salon7",
          "text": "laboratorio de Tecsup es un entorno moderno equipado con tecnología avanzada y estaciones de trabajo individuales, pensado para impulsar el aprendizaje práctico en programación, diseño y análisis de datos. Aquí, los estudiantes tienen a su disposición herramientas especializadas y software de última generación que enriquecen su formación académica. Este espacio está diseñado para promover un aprendizaje activo y colaborativo, donde los alumnos pueden poner en práctica sus conocimientos y desarrollar competencias fundamentales para los desafíos del mundo digital."
        }
      ]
    },
    {
      "id": "18-maquinitas",
      "name": "Maquinitas",
      "tileUrl": "/tiles/18-maquinitas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.30799326117512393,
        "pitch": 0.06422820643307148,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.393582067895597,
          "pitch": -0.045086919303777506,
          "rotation": 0,
          "target": "2-camino"
        },
        {
          "yaw": 0.3935819407993435,
          "pitch": -1.2401827120811504e-8,
          "rotation": 0,
          "target": "1-patio-central"
        },
        {
          "yaw": 2.3019344075672894,
          "pitch": 0.06545528762631747,
          "rotation": 0,
          "target": "24-pabellon-4"
        },
        {
          "yaw": 2.293304573076969,
          "pitch": -0.37100050930332173,
          "rotation": 0,
          "target": "19-pabellon-4---piso-2-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pabellon-4---piso-2-e",
      "name": "Pabellon 4 - piso 2-E",
      "tileUrl": "/tiles/19-pabellon-4---piso-2-e",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.2306012269010491,
        "pitch": 0.11764363691673552,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.1007130494163793,
          "pitch": 0.4159445786881282,
          "rotation": 0,
          "target": "18-maquinitas"
        },
        {
          "yaw": 1.506677071045286,
          "pitch": 0.1975751216798436,
          "rotation": 0,
          "target": "23-salon-pabellon-4"
        },
        {
          "yaw": 2.117034201985466,
          "pitch": 0.03920779490994697,
          "rotation": 0,
          "target": "20-pabellon-4---piso-2-m"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pabellon-4---piso-2-m",
      "name": "Pabellon 4 - piso 2-M",
      "tileUrl": "/tiles/20-pabellon-4---piso-2-m",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5735930062748444,
        "pitch": -0.02161666746624391,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.9147986527167937,
          "pitch": 0.022354334704845158,
          "rotation": 0,
          "target": "19-pabellon-4---piso-2-e"
        },
        {
          "yaw": -2.7724309916275836,
          "pitch": -0.002796042050601244,
          "rotation": 0,
          "target": "21-pabellon-4---piso-2--a"
        },
        {
          "yaw": -1.1496350279601941,
          "pitch": -0.005725953702919284,
          "rotation": 0,
          "target": "3-pabellon-4---piso-2-s"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pabellon-4---piso-2--a",
      "name": "Pabellon 4 - piso 2 -A",
      "tileUrl": "/tiles/21-pabellon-4---piso-2--a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.485147575836219,
        "pitch": -0.03808891496041156,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.2788263753757558,
          "pitch": 0.09070863878285707,
          "rotation": 0,
          "target": "20-pabellon-4---piso-2-m"
        },
        {
          "yaw": 0.4963383004432238,
          "pitch": 0.4263046536894741,
          "rotation": 0,
          "target": "22-pabellon-4---piso-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pabellon-4---piso-1",
      "name": "Pabellon 4 - piso 1",
      "tileUrl": "/tiles/22-pabellon-4---piso-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5397362343490109,
        "pitch": 0.0654317735714649,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.009138633981212507,
          "pitch": 0.03920703860404373,
          "rotation": 0,
          "target": "1-patio-central"
        },
        {
          "yaw": 0.6371712718432647,
          "pitch": 0.03860733140267847,
          "rotation": 0,
          "target": "25-entrada-biblioteca"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-salon-pabellon-4",
      "name": "Salon Pabellon 4",
      "tileUrl": "/tiles/23-salon-pabellon-4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0557323219442338,
        "pitch": 0.10222709296154875,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.3373369656530159,
          "pitch": 0.17077658718420174,
          "rotation": 0,
          "target": "19-pabellon-4---piso-2-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9554821111980125,
          "pitch": -0.04230698854033221,
          "title": "salon4",
          "text": "El salón de clases en el Pabellón 4 de Tecsup es un espacio diseñado para el aprendizaje práctico y colaborativo. Aquí, los estudiantes participan en clases teóricas y talleres que combinan conocimientos técnicos con actividades interactivas, fomentando una experiencia educativa completa. Equipado con modernos recursos didácticos y tecnología de apoyo, el salón permite a los alumnos desarrollar habilidades esenciales en sus áreas de estudio. Es un ambiente donde la teoría se transforma en práctica, impulsando a los estudiantes a aplicar sus conocimientos y prepararse para los desafíos del mundo profesional."
        }
      ]
    },
    {
      "id": "24-pabellon-4",
      "name": "Pabellon 4",
      "tileUrl": "/tiles/24-pabellon-4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8374782385256143,
        "pitch": 0.12930464642399997,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.4803305977781571,
          "pitch": 0.04541730672172939,
          "rotation": 0,
          "target": "18-maquinitas"
        },
        {
          "yaw": -1.603487137468349,
          "pitch": 0.0010937046229457792,
          "rotation": 0,
          "target": "5-area-de-salones-4b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-entrada-biblioteca",
      "name": "Entrada biblioteca",
      "tileUrl": "/tiles/25-entrada-biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.520956627746088,
        "pitch": 0.1488263522881237,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.872146950919392,
          "pitch": 0.1699254947710198,
          "rotation": 0,
          "target": "26-biblioteca"
        },
        {
          "yaw": 0.7607714835040831,
          "pitch": 0.06510688309848334,
          "rotation": 0,
          "target": "1-patio-central"
        },
        {
          "yaw": -2.0653062389269845,
          "pitch": 0.004699487025908056,
          "rotation": 0,
          "target": "22-pabellon-4---piso-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9940759020486425,
          "pitch": 0.07993292785335449,
          "title": "secret",
          "text": "La oficina de administración académica de Tecsup es el lugar designado para atender las necesidades administrativas y académicas de los estudiantes. Desde este espacio, se gestionan procesos esenciales como inscripciones, emisión de certificados, constancias y otros documentos indispensables para el desarrollo académico. El equipo de administración se destaca por su compromiso de ofrecer un servicio ágil y accesible, guiando a los estudiantes en cada paso de sus trámites y asegurando una experiencia positiva. Este departamento desempeña un rol fundamental en el acompañamiento y soporte de la comunidad estudiantil a lo largo de su trayectoria en Tecsup."
        }
      ]
    },
    {
      "id": "26-biblioteca",
      "name": "Biblioteca",
      "tileUrl": "/tiles/26-biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5889819252946982,
        "pitch": 0.0588478331193123,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.945504251554631,
          "pitch": 0.0011027762344539838,
          "rotation": 0,
          "target": "25-entrada-biblioteca"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6839102988183416,
          "pitch": -0.01863227684441071,
          "title": "biblio",
          "text": "La biblioteca de Tecsup es un espacio fundamental para el desarrollo académico y personal de los estudiantes. Con una amplia colección de libros, revistas, y recursos digitales, la biblioteca ofrece acceso a información actualizada en diversas áreas de estudio. Es un lugar diseñado para el estudio individual y grupal, con zonas de trabajo y estaciones de computadoras equipadas. Además, el ambiente tranquilo y ordenado permite concentrarse y aprovechar al máximo el tiempo de estudio. La biblioteca de Tecsup no solo es un centro de aprendizaje, sino también un espacio donde los estudiantes pueden investigar, explorar y expandir sus conocimientos."
        }
      ]
    },
    {
      "id": "27-pabellon-14",
      "name": "Pabellon 14",
      "tileUrl": "/tiles/27-pabellon-14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.16261231574169344,
        "pitch": 0.03393553020449147,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.3225363842882487,
          "pitch": -0.01631273781950071,
          "rotation": 0,
          "target": "15-salones-de-mecanica"
        },
        {
          "yaw": -1.1052314623078026,
          "pitch": -0.1728916952446511,
          "rotation": 0,
          "target": "11-segundo-piso-s"
        },
        {
          "yaw": 0.4830635939466159,
          "pitch": 0.05859701040134091,
          "rotation": 0,
          "target": "28-salon-1509"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-salon-1509",
      "name": "Salon-1509",
      "tileUrl": "/tiles/28-salon-1509",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.025531007986233,
        "pitch": 0.08548815376315666,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.865462656074932,
          "pitch": 0.15308741147573812,
          "rotation": 0,
          "target": "27-pabellon-14"
        }
      ],
      "infoHotspots": []
    }
  ],
};

export default appData;