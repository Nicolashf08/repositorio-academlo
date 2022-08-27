
let students = [
  { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
  ];
  let channels = []
  let finalChannels
  const newObject = {}

function countApplicationsByChannel(students) {
    for (i = 0; i < students.length; i++){
        if (students[i].application != null){
            channels.push(students[i].channel)
            Object.assign(newObject, channels)

        }
    }
    return newObject
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable applications
    // return applications;
  }
  console.log(countApplicationsByChannel(students))