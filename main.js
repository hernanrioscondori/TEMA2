import {GLTFLoader} from "GLTFLoader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
  //  mockWithVideo('tema2.mp4');
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "targets.mind",
    });
    const {renderer, scene, camera} = mindarThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbbff, 1);
    scene.add(light);
 const anchor = mindarThree.addAnchor(0);
    const loader= new GLTFLoader();
    loader.load("scene.gltf", (gltf) =>{
      gltf.scene.scale.set(0.1, 0.1, 0.1);
      gltf.scene.position.set(0, -0.4, 0);
     anchor.group.add(gltf.scene);
    });

  

    
    

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
