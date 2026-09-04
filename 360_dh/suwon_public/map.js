var container = document.getElementById('kakaomap');
var options = {
    center: new kakao.maps.LatLng(37.566826, 126.978656), // 초기 위도, 경도
    level: 3
};
var map = new kakao.maps.Map(container, options);

// 2. 특정 위치에 마커 생성 예시
var markerPosition = new kakao.maps.LatLng(37.566826, 126.978656);
var marker = new kakao.maps.Marker({ position: markerPosition });
marker.setMap(map);

// 3. Krpano에서 씬이 전환될 때 카카오 맵 중심 이동시키기 연동
function krpano_scene_changed(sceneName) {
    let targetLat, targetLng;
    
    // 씬 이름에 따라 카카오맵 좌표 변경
    if (sceneName === 'scene_1') {
        targetLat = 37.566826; targetLng = 126.978656;
    } else if (sceneName === 'scene_2') {
        targetLat = 37.570000; targetLng = 126.980000;
    }
    
    if(targetLat && targetLng) {
        var moveLatLon = new kakao.maps.LatLng(targetLat, targetLng);
        map.setCenter(moveLatLon);
        marker.setPosition(moveLatLon);
    }
}