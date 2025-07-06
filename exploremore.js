function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.createElement('canvas'),
        antialias: true
    });
    renderer.setSize(window.innerWidth * 0.8, 600);
    document.getElementById('model-container').appendChild(renderer.domElement);

    camera.position.z = 5;

    const landGeometry = new THREE.PlaneGeometry(10, 10);
    const landMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const land = new THREE.Mesh(landGeometry, landMaterial);
    land.rotation.x = -Math.PI / 2;
    scene.add(land);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

document.getElementById('generate-btn').addEventListener('click', generateModel);

function generateModel(e) {
    e.preventDefault();
    const numRooms = parseInt(document.getElementById('num-rooms').value);
    const landArea = parseFloat(document.getElementById('land-area').value);

    // Clear existing rooms
    scene.children.forEach((child) => {
        if (child !== camera && child !== renderer && child !== land) {
            scene.remove(child);
        }
    });

    // Generate rooms
    const avgRoomArea = landArea * 0.6 / numRooms;
    const roomLength = roomWidth = Math.sqrt(avgRoomArea);
    const rows = Math.ceil(Math.sqrt(numRooms));
    const cols = Math.ceil(numRooms / rows);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const roomGeometry = new THREE.BoxGeometry(roomWidth, 3, roomLength);
            const roomMaterial = new THREE};
        }
