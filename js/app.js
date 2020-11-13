import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, //FOV
    window.innerWidth / innerHeight, //aspect Ratio
    0.1, //near
    2000 //far
);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-0.175, 1.998, 0);

camera.position.set(0,6,12);
  
scene.add(camera);




//////////////////////////////////////////////////////

/////////////////////////////////////////////////////

let floorGeo = new THREE.BoxGeometry( 12.26, 0.57, 10.3 );
let floorMat = new THREE.MeshStandardMaterial( {color: 0xD2691E} );
let floor = new THREE.Mesh( floorGeo, floorMat );
floor.recieveShadow = true;
floor.position.set(-0.17,1.998,-0.110);
floor.rotation.set(0,-26.5* Math.PI / 180,0);

let wallGeo1 = new THREE.BoxGeometry(0.4,2.1,8.9);
let wallMesh = new THREE.MeshStandardMaterial ( {color: 0xffffff} );
let wall1 = new THREE.Mesh(wallGeo1, wallMesh);
wall1.position.set(-3.561,3.271,-1.775);
wall1.rotation.set(0,-26.5* Math.PI / 180,0);
wall1.castShadow = true;
wall1.recieveShadow = true;
scene.add(wall1);

let floorGeo2 = new THREE.BoxGeometry(4.54,0.4,8.8);
let floor2 = new THREE.Mesh(floorGeo2,wallMesh);
floor2.position.set(1.653,4.406,0.824);
floor2.rotation.set(0,-26.5* Math.PI / 180,0);
floor2.recieveShahdow = true;
floor2.castShadow = true;
scene.add(floor,floor2);


let wallGeo4 = new THREE.BoxGeometry(0.4,3,8.9);
let wall2 = new THREE.Mesh(wallGeo4, wallMesh);
wall2.position.set(3.779,3.4,1.884);
wall2.rotation.set(0,-26.5* Math.PI / 180,0);
wall2.castShadow = true;
scene.add(wall2);

let wallGeo2 = new THREE.BoxGeometry(0.4,1.4,8.9);
let wall3 = new THREE.Mesh(wallGeo2, wallMesh);
wall3.position.set(-3.561,7.013,-1.775);
wall3.rotation.set(0,-26.5* Math.PI / 180,0);
wall3.castShadow = true;
scene.add(wall3);

let wallGeo3 = new THREE.BoxGeometry(0.42,2.1,0.5);
let wall4 = new THREE.Mesh(wallGeo3,wallMesh);
wall4.position.set(-5.435,5.319,1.982);
wall4.rotation.set(0,-26.5* Math.PI / 180,0);
wall4.castShadow = true;
wall4.recieveShadow = true;
scene.add(wall4);
let wall5 = new THREE.Mesh(wallGeo3,wallMesh);
wall5.position.set(-1.686,5.319,-5.536);
wall5.rotation.set(0,-26.5* Math.PI / 180,0);
wall5.recieveShadow = true;
wall5.castShadow= true;
scene.add(wall5);

let wallGeo5 = new THREE.BoxGeometry(8.3,2.4,0.4)
let wall6 = new THREE.Mesh(wallGeo5, wallMesh);
wall6.position.set(1.892,3.258,-3.834);
wall6.rotation.set(0,-26.5* Math.PI / 180,0);
wall6.castShadow = true;
wall6.recieveShadow = true;
scene.add(wall6)

let wallGeo6 = new THREE.BoxGeometry(7.72,2.4,0.40);
let wall7 = new THREE.Mesh(wallGeo6,wallMesh);
wall7.position.set( 2.042,4.921,-3.760);
wall7.rotation.set(0,-26.5*Math.PI / 180, -18.96 * Math.PI / 180);
wall7.castShadow = true;
wall7.recieveShadow = true;
scene.add(wall7);

let wallGeo7 = new THREE.BoxGeometry(3,2.4,0.4);
let wallGeo8 = new THREE.BoxGeometry(2.18,1.18,0.4);
let wall8 = new THREE.Mesh(wallGeo7,wallMesh);
let wall9 = new THREE.Mesh(wallGeo8,wallMesh);
wall8.position.set(-0.742,5.053,-5.148);
wall8.rotation.set(0, -26.5 * Math.PI/180, 90 * Math.PI/180 );
wall9.position.set(-0.724,6.722,-5.139);
wall9.rotation.set(0,-26.5*Math.PI / 180, -18.96 * Math.PI / 180);
scene.add(wall8,wall9);

let tableGeo = new THREE.CylinderGeometry(1,-0.74,0.4,32);
let tableMesh = new THREE.MeshPhysicalMaterial({color: 0xff0000});
let table = new THREE.Mesh(tableGeo,tableMesh);
table.castShadow = true;
table.position.set(0,2.454,0);
scene.add(table);

let sofaGeo1 = new THREE.BoxGeometry(2.26,0.38,0.72);
let sofaMesh = new THREE.MeshStandardMaterial({color: 0x32ABAA});
let sofa1 = new THREE.Mesh(sofaGeo1,sofaMesh);
sofa1.position.set(0,2.261,-2.116);
let sofa2 = new THREE.Mesh(sofaGeo1,sofaMesh);
sofa2.position.set(2.129,2.261,-0.154);
sofa2.rotation.set(0,-82* Math.PI / 180,0);
sofa1.castShadow = true;
sofa2.castShadow = true;
scene.add(sofa1,sofa2);

let ragGeo = new THREE.CircleGeometry(1.5,30);
let ragMesh = new THREE.MeshStandardMaterial({color: 0x322FAA})
let rag = new THREE.Mesh(ragGeo,ragMesh);
rag.position.set(0,2.313,0)
rag.rotation.set(-90*Math.PI/180,0,0);
rag.recieveShadow = true;
scene.add(rag);

let houseFloorGeo = new THREE.PlaneGeometry(8,8.8);
let houseFloorMesh = new THREE.MeshStandardMaterial({color: 0xffffff});
let houseFloor = new THREE.Mesh(houseFloorGeo,houseFloorMesh);
houseFloor.position.set(0.03,2.302,0.082);
houseFloor.rotation.set(-90 *Math.PI/180, 0 , -26.5*Math.PI/180);
houseFloor.reciveShadow = true;
scene.add(houseFloor);

let doorGeo = new THREE.BoxGeometry ( 1, 1.5, 0.05);
let doorMesh = new THREE.MeshStandardMaterial( {color: 0x8b4513});
let door = new THREE.Mesh (doorGeo,doorMesh);
door.position.set(-1.720,3.044,4.106);
door.rotation.set(0,-26.5* Math.PI / 180,0);
door.recieveShadow = true;
door.castShadow = true;
scene.add(door);
let dkGeo = new THREE.SphereGeometry(0.03,32);
let dkMesh = new THREE.MeshPhysicalMaterial({color: 0x000000});
let dknob1 = new THREE.Mesh (dkGeo,dkMesh);
dknob1.position.set(-2.122,2.991,3.952);
let dknob2 = new THREE.Mesh (dkGeo,dkMesh);
dknob2.position.set(-2.080,2.991,3.880);
scene.add(dknob1,dknob2);


let roofGeo = new THREE.BoxGeometry(11,0.4,9.9);
let roofMesh = new THREE.MeshStandardMaterial({color: 0xff0000});
let roof = new THREE.Mesh(roofGeo,roofMesh);
roof.position.set (0.182,6.161,0.091);
roof.rotation.set (0,-26.5* Math.PI / 180,-18.96* Math.PI / 180);
roof.castShadow = true;
roof.recieveShadow = true;
scene.add(roof);


let windowGeo1 = new THREE.BoxGeometry(0.1,3,8.1);
let windowMesh = new THREE.MeshPhysicalMaterial({color: 0xd1f1f5, transmission: 0.5, opacity: 1, transparent: true});
let window1 = new THREE.Mesh(windowGeo1,windowMesh);
window1.position.set(-3.66,5.186,-1.740);
window1.rotation.set(0,-26.5* Math.PI / 180,0);
scene.add(window1);
let windowGeo2 = new THREE.BoxGeometry(8.10,2.71,0.1);
let window2 = new THREE.Mesh(windowGeo2,windowMesh);
window2.position.set(-1.817,3.527,4.005);
window2.rotation.set(0,-26.5* Math.PI / 180,0);
scene.add(window2);


let fBoxGeo = new THREE.BoxGeometry(0.14,0.5,7.5);
let bushGeo = new THREE.CylinderGeometry(0.06,0.06,7.350);
let bushMesh = new THREE.MeshPhysicalMaterial( {color : 0x008000});
let fBox = new THREE.Mesh ( fBoxGeo, doorMesh);
fBox.position.set(-0.567,4.712,0.423);
fBox.rotation.set(0, -26.5 * Math.PI/180,0);
let bush = new THREE.Mesh (bushGeo,bushMesh);
bush.position.set(-0.577,5.006,0.413);
bush.rotation.set(90*Math.PI/180, 0 , 26.5*Math.PI/180);
fBox.castShadow = true;
bush. castShadow = true;
scene.add(fBox,bush);

let wallGeo10 = new THREE.BoxGeometry(8.7,0.23,0.1);
let wall10 = new THREE.Mesh(wallGeo10, wallMesh);
wall10.position.set (-1.701,5.8,4.063);
wall10.rotation.set (0,-26.5*Math.PI / 180, -18.96 * Math.PI / 180);
wall10.castShadow = true;
scene.add(wall10);
let wallGeo9 = new THREE.BoxGeometry(2.76,1.33,0.1);
let wall11 = new THREE.Mesh ( wallGeo9 , wallMesh);
wall11.position.set(-4.333,6.278,2.750);
wall11.castShadow = true;
wall11.rotation.set(0,-26.5*Math.PI / 180, -18.96 * Math.PI / 180);
scene.add(wall11);
let wallGeo11 = new THREE.BoxGeometry(4.28,1.2,0.1);
let wall12 = new THREE.Mesh(wallGeo11,wallMesh);
wall12.position.set(-3.452,5.493,3.189);
wall12.rotation.set(0,-26.5*Math.PI / 180, 0);
wall12.castShadow = true;
scene.add(wall12);
let wallGeo12 = new THREE.BoxGeometry(3.24,0.49,0.1);
let wall13 = new THREE.Mesh(wallGeo12,wallMesh);
wall13.position.set(-1.772,5.569,4.027);
wall13.rotation.set(0,-26.5*Math.PI / 180, -18.96 * Math.PI / 180);
wall13.castShadow = true; 
scene.add(wall13);
let wallGeo13 = new THREE.BoxGeometry(4.28,0.44,0.1);
let wall14 = new THREE.Mesh(wallGeo13,wallMesh);
wall14.position.set (-1.122,5.099,4.351);
wall14.rotation.set(0,-26.5*Math.PI / 180, 0);
wall14.castShadow = true;
scene.add(wall14);



let stGeo = new THREE.BoxGeometry(0.14,0.08,1.02);
let stMesh = new THREE.MeshPhysicalMaterial({color: 0x8b4513});
let st1 = new THREE.Mesh (stGeo,stMesh);
st1.position.set(1.203,4.508,-3.594)
st1.rotation.set(0, -26.5*Math.PI/180,0);
let st2 = new THREE.Mesh (stGeo,stMesh);
st2.position.set(1.007,4.270,-3.694);
st2.rotation.set(0, -26.5*Math.PI/180,0);
let st3 = new THREE.Mesh (stGeo,stMesh);
st3.position.set(0.811,4.032,-3.790);
st3.rotation.set(0, -26.5*Math.PI/180,0);
let st4 = new THREE.Mesh (stGeo,stMesh);
st4.position.set(0.615,3.794,-3.894);
st4.rotation.set(0, -26.5*Math.PI/180,0);
let st5 = new THREE.Mesh (stGeo,stMesh);
st5.position.set(0.419,3.556,-3.995);
st5.rotation.set(0, -26.5*Math.PI/180,0);
let st6 = new THREE.Mesh (stGeo,stMesh);
st6.position.set(0.223,3.318,-4.100);
st6.rotation.set(0, -26.5*Math.PI/180,0);
let st7 = new THREE.Mesh (stGeo,stMesh);
st7.position.set(0.027,3.080,-4.204);
st7.rotation.set(0, -26.5*Math.PI/180,0);
let st8 = new THREE.Mesh (stGeo,stMesh);
st8.position.set(-0.169,2.842,-4.300);
st8.rotation.set(0, -26.5*Math.PI/180,0);
let st9 = new THREE.Mesh (stGeo,stMesh);
st9.position.set(-0.365,2.604,-4.404);
st9.rotation.set(0, -26.5*Math.PI/180,0);
let st10 = new THREE.Mesh (stGeo,stMesh);
st10.position.set(-0.561,2.366,-4.500);
st10.rotation.set(0, -26.5*Math.PI/180,0);
st1.castShadow = true;
st2.castShadow = true;
st3.castShadow = true;
st4.castShadow = true;
st5.castShadow = true;
st6.castShadow = true;
st7.castShadow = true;
st8.castShadow = true;
st9.castShadow = true;
st10.castShadow = true;


scene.add(st1,st2,st3,st4,st5,st6,st7,st8,st9,st10);

const light = new THREE.PointLight( 0xffffff, 2, 100 );
light.position.set( -13.714, 16.283, 3.021 );
light.castShadow = true;
scene.add( light );


light.shadow.mapSize.width = 512; 
light.shadow.mapSize.height = 512; 
light.shadow.camera.near = 0.5; 
light.shadow.camera.far = 500; 





function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}



animate();