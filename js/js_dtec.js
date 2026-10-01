document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Inicializar o mapa na div #mapa-interativo (coordenadas de imagem)
  var map = L.map('mapa-interativo', {
    crs: L.CRS.Simple,
    minZoom: -2.5,
    maxZoom: 3,
    zoomControl: true,
    attributionControl: false
  });

  // 2. Dimensões virtuais da planta DO EVENTO (Ex: 1920x1080)

  // w = 900, h = 1200;
  // w = 1228, h = 869;

  var w = 1228, h = 750;
  var bounds = [[0, 0], [h, w]];

  // ATENÇÃO: para mudar a imagem do "mapa" é só colocar o caminho dentro das aspas: L.imageOverlay('...', bounds)
  // Exemplo: 'planta-oficial-dtec.png'

  var image = L.imageOverlay('src/mapa Evento_Dtec 2026_v02_terreo.png', bounds).addTo(map);
  map.fitBounds(bounds);
  map.setMinZoom(map.getZoom()); 
  map.setMaxBounds(bounds); 

// essa parte das camadas eu tirei, pois achei que ficava muito poluido com elas. se quiser de volta é so tirar os "//"

  // 3. Grupos de Camadas para possibilitar os Filtros

  //var estandesGroup = L.layerGroup().addTo(map);
  //var auditoriosGroup = L.layerGroup().addTo(map);


  // 4. Mapear Estandes (Polígonos clicáveis sobre a imagem)
  
  //var estande1 = L.polygon([
   // [350, 400], [350, 650], [550, 650], [550, 400]
 // ], { 
   // color: '#E854C9', 
    //fillColor: '#E854C9', 
   // fillOpacity: 0.4,
   // weight: 2 
  //}).addTo(estandesGroup);
 // estande1.bindPopup("<b>Estande Principal</b><br>Exposição de Projetos RAITec");


  // 5. Mapear Auditórios
 
  //var auditorio1 = L.polygon([
    //[700, 800], [700, 1150], [950, 1150], [950, 800]
  //], { 
//    color: '#7B2FF7', 
//    fillColor: '#7B2FF7', 
//    fillOpacity: 0.4,
    //weight: 2 
//  }).addTo(auditoriosGroup);
  //auditorio1.bindPopup("<b>Auditório Principal</b><br>Palcos de Palestras e Abertura");



  // 6. Função para acionar os filtros pelos botões na tela

  //  window.filtrarMapa = function(categoria) {
  //  map.removeLayer(estandesGroup);
  //  map.removeLayer(auditoriosGroup);

  //  if (categoria === 'todos') {
  //    map.addLayer(estandesGroup);
  //    map.addLayer(auditoriosGroup);
  //  } else if (categoria === 'estandes') {
 //     map.addLayer(estandesGroup);
 //   } else if (categoria === 'auditorios') {
  //    map.addLayer(auditoriosGroup);
   // }
 // };



  //FERRAMENTA DE DESENVOLVEDOR: Descobrir coordenadas ao clicar
  
   // map.on('click', function(e) {
   // var y = Math.round(e.latlng.lat);
   // var x = Math.round(e.latlng.lng);
    
    // Mostra um aviso na tela com as coordenadas exatas
   // alert("Coordenada: [" + y + ", " + x + "]");
   // console.log("Coordenada copiada: [" + y + ", " + x + "]");
 // });
});