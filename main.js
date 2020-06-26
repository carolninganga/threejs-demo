let scene, camera, renderer, sphere;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 
        75,
        window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.SphereGeometry(2, 8, 6);
    //var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

    const texture = new THREE.TextureLoader().load('textures/ny.jpeg')
    const material = new THREE.MeshBasicMaterial( { map: texture} );

    sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    camera.position.z = 5;
}

function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	renderer.render( scene, camera );
    }

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
			// Our Javascript will go here.
			