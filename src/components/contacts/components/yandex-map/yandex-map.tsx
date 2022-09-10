import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [59.96848, 30.31655],
  zoom: 16,
};

const coordinates = [
  [59.96848, 30.31655],
];

function YandexMap() : JSX.Element{
return(
  <YMaps>
    <Map defaultState={mapData} width={649} height={336}>
      {coordinates.map((coordinate)=> <Placemark geometry={coordinate} key={coordinate[0]}/>)}
    </Map>
  </YMaps>
    );
}

export default YandexMap;
