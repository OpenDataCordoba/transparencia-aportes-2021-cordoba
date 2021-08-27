$( document ).ready(function() {

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            $.each(data, function(n, partido) {
                let partido_link = partido.web ? `<a href="${partido.web}">${partido.nombre}</a>` : partido.nombre;

                let gastos = partido.data.gastos;
                let gastos_csv = gastos.csv ? `<a href="${gastos.csv}">Descargar</a>` : 'No disponible';
                let gastos_xls = gastos.xls ? `<a href="${gastos.xls}">Descargar</a>` : 'No disponible';

                let ingresos = partido.data.ingresos;
                let ingresos_csv = ingresos.csv ? `<a href="${ingresos.csv}">Descargar</a>` : 'No disponible';
                let ingresos_xls = ingresos.xls ? `<a href="${ingresos.xls}">Descargar</a>` : 'No disponible';

                let candidatos = partido.data.candidatos;
                let candidatos_csv = candidatos.csv ? `<a href="${candidatos.csv}">Descargar</a>` : 'No disponible';
                let candidatos_xls = candidatos.xls ? `<a href="${candidatos.xls}">Descargar</a>` : 'No disponible';

                let row = `
                    <tr>
                        <th scope="row">${partido_link}</th>
                        <td>${gastos_csv}</td><td>${gastos_xls}</td>
                        <td>${ingresos_csv}</td><td>${ingresos_xls}</td>
                        <td>${candidatos_csv}</td><td>${candidatos_xls}</td>
                    </tr>`;
                $('#tabla-partidos').append(row);
            });
            
        }
        );

    
  });