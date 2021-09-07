$( document ).ready(function() {

    let csv_icon = '<i class="bi bi-file-earmark-bar-graph" style="font-size: 2rem; color: #0099AA;"></i>';
    let xls_icon = '<i class="bi bi-file-earmark-excel-fill" style="font-size: 2rem; color: #00AAAA;"></i>';
    let pdf_icon = '<i class="bi bi-file-earmark-pdf-fill" style="font-size: 2rem; color: #DD2222;"></i>';

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            $.each(data, function(n, partido) {
                let partido_link = partido.web ? `<a href="${partido.web}">${partido.nombre}</a>` : partido.nombre;
                if (partido.lista) {partido_link='[' + partido.lista + '] ' + partido_link;}
                let partido_boleta_img = partido.boleta ? `<a href="${partido.boleta}"><img class="boleta" src="${partido.boleta}" /></a>` : '';

                let gastos = partido.data.gastos;
                let gastos_csv = gastos.csv ? `<a href="${gastos.csv}">` + csv_icon + ' </a>' : '';
                let gastos_xls = gastos.xls ? `<a href="${gastos.xls}">` + xls_icon + ' </a>' : '';

                let ingresos = partido.data.ingresos;
                let ingresos_csv = ingresos.csv ? `<a href="${ingresos.csv}">` + csv_icon + ' </a>' : '';
                let ingresos_xls = ingresos.xls ? `<a href="${ingresos.xls}">` + xls_icon + ' </a>' : '';

                let candidatos = partido.data.candidatos;
                let candidatos_csv = candidatos.csv ? `<a href="${candidatos.csv}">` + csv_icon + ' </a>' : '';
                let candidatos_xls = candidatos.xls ? `<a href="${candidatos.xls}">` + xls_icon + ' </a>' : '';
                let candidatos_pdf = candidatos.pdf ? `<a href="${candidatos.pdf}">` + pdf_icon + ' </a>' : '';

                let row = `
                    <tr>
                        <td colspan=4 class="nombre-partido">${partido_link}</th>
                    </tr>
                    <tr>
                        <td>${partido_boleta_img}</th>
                        <td>${gastos_csv} ${gastos_xls}</td>
                        <td>${ingresos_csv} ${ingresos_xls}</td>
                        <td>${candidatos_csv} ${candidatos_xls} ${candidatos_pdf}</td>
                    </tr>`;
                $('#tabla-partidos').append(row);
            });
            
        }
        );

    
  });