import * as THREE from "THREE";
import OrbitControls from "three-orbitcontrols";
import { makeGrid } from "./threeGeom.js";

export function threeInit() {
  //three vars
  var camera;
  var scene;
  var renderer;
  var light;
  var lightAmb;
  var controls;

  ///////////////SETUP SCENE///////////////////////
  let threeDiv = document.createElement("div");
  document.body.appendChild(threeDiv);
  threeDiv.id = "threeDiv";
  threeDiv.className = "threeDiv";

  //setup scene
  init();
  //call loop when done
  animate();

  function init() {
    scene = new THREE.Scene();

    // set up the renderer
    renderer = window.renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(600, 600);

    //put to div
    threeDiv.appendChild(renderer.domElement);

    /////////////// CAMERA ///////////////////////
    //set up the camera
    if (camera === undefined) {
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.set(2, 2, 2);
    }
    //SUPER IMPORTANT: renderer.domElement solves DAT.GUI
    // issue with drop downmenu not reposniding
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0); //center of andorra models

    /////////////// LIGHTS ///////////////////////
    //Create a PointLight and turn on shadows for the light

    var light = new THREE.PointLight(0xffffff, 20, 1000);
    light.position.set(10, 10, 10);
    scene.add(light);

    ////AXIS GRID HELPERS
    let axes = new THREE.AxesHelper(100);
    scene.add(axes);

    //make goemtry
    scene.add(makeGrid(5, 5));
  }

  //loop
  function animate() {
    requestAnimationFrame(animate);
    render();
  }
  //render
  function render() {
    controls.update();
    renderer.render(scene, camera);
  }
}