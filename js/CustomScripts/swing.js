/**
 * Created by Kiko on 10/1/2015.
 */





function CreateObjects(scene){
    this.scene = scene;
    this.currentObject = new THREE.Mesh();
    this.createCylinder = function(radiusTop, radiusBottom, height, radiusSegments, heightSegments){
        var geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments );
        console.log(geometry.faces[0].vertexColors.length);

        var material = new THREE.MeshPhongMaterial( {color : 0x0000ff} );
        //var color = new THREE.Color(Math.random(), Math.random(), Math.random());
        // material.color = color;
        var cylinder = new THREE.Mesh( geometry, material );
        this.currentObject = cylinder;
        this.currentObject.castShadow = true;
        this.scene.add( cylinder );
    };
    this.createTorus = function(radius, tube, radialSegments, tubularSegments, arc) {
        var geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
        var material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
        var torus = new THREE.Mesh( geometry, material );
        this.currentObject = torus;
        this.currentObject.castShadow = true;
        scene.add( torus );
    };
    this.createKnotTorus =  function(radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
        var geometry = new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
        var material = new THREE.MeshPhongMaterial({color: 0xffff00});
        var torusKnot = new THREE.Mesh(geometry, material)
        material.color = new THREE.Color(Math.random(), Math.random, Math.random());
        this.currentObject = torusKnot;
        this.currentObject.castShadow = true;
        scene.add(torusKnot);
    };
    this.createRectangle = function(width, height, depth, widthSegments, heightSegments, depthSegments){
        var geometry = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
        var material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
        var cube = new THREE.Mesh( geometry, material );
        this.currentObject = cube;
        this.currentObject.castShadow = true;
        scene.add( cube );
    };
    this.createCircle = function ( radius, segments ){
        var material = new THREE.MeshPhongMaterial({
            color: 0x00ffff,
            side: THREE.DoubleSide
        });
        var circleGeometry = new THREE.CircleGeometry( radius, segments );
        var circle = new THREE.Mesh( circleGeometry, material );
        this.currentObject = circle;
        this.currentObject.castShadow = true;
        scene.add( circle );
    };
    this.createSphere = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength){
        var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        var sphere = new THREE.Mesh( geometry, material );
        this.currentObject = sphere;
        scene.add( sphere );
    };

}

function sideWaySwing(scene, group){
    var object = new CreateObjects(scene);
    object.createCylinder(2, 2, 60, 20, 20);
    object.currentObject.position.set(0, 30, 0);
    group.add(object.currentObject);
    object.createCylinder(2, 2, 60, 20, 20);
    object.currentObject.position.set(0, 30, 30);
    group.add(object.currentObject);
    object.createTorus(15, 3, 16, 100, Math.PI);
    object.currentObject.position.set(0, 59, 15);
    object.currentObject.rotateY(Math.PI/2);
    group.add(object.currentObject);
    object.createCylinder(2, 2, 28, 20, 20);
    object.currentObject.position.set(0, 58, 15);
    object.currentObject.rotateX(Math.PI/2);
    group.add(object.currentObject);
    group.position.set(-105, 0, 0);
    var obj = group.clone();
    object.createCylinder(1, 1, 105, 20, 20);
    object.currentObject.position.set(-52.5, 58,14);
    object.currentObject.rotateZ(Math.PI/2);
    group.add(object.currentObject);
    group.add(obj);

}
function chairSwing(scene, pivot){
    var object = new CreateObjects(scene);
    var group = new THREE.Object3D();
    var final = new THREE.Object3D();
    for (var i = 0; i < 13; i++) {
        object.createTorus(2, 0.3, 15, 15, Math.PI*2);
        object.currentObject.position.set(i*3, 15, 0);
        if (i%2==1){
            object.currentObject.rotateX(Math.PI/2);
        }
        group.add(object.currentObject);
    }
    group.position.set(-119, 22, -1);
    var newChains = new THREE.Object3D();
    var secondChains = new THREE.Object3D();
    group.rotateY(Math.PI/2);
    group.rotateZ(Math.PI/2);
    group.clone(newChains);
    newChains.translateZ(-20);
    secondChains.add(group);
    secondChains.add(newChains);
    var chair = new THREE.Object3D();
    var chair1 = new THREE.Object3D();
    object.createRectangle(15, 2, 10, 15, 15, 15);
    object.currentObject.position.set(-129, 21, 14);
    chair.add(object.currentObject);
    object.createCylinder(0.8, 0.8, 9, 7, 7);
    object.currentObject.position.set(-121, 21, 14);
    object.currentObject.rotateZ(Math.PI/2);
    chair.add(object.currentObject);
    object.createCylinder(0.8, 0.8, 9, 7, 7);
    object.currentObject.position.set(-137, 21, 14);
    object.currentObject.rotateZ(Math.PI/2);
    chair.add(object.currentObject);
    chair.add(secondChains);
    chair.clone(chair1);
    chair1.translateX(-55);
    final.add(chair, chair1);
    final.position.set(118, -58, -14);
    pivot.add(final);
    pivot.position.set(-118, 58, 14);
}

function creatingSwing(scene, swing){
    var sideWaySwingObj = new THREE.Object3D();
    var chairSwingObj = new THREE.Object3D();
    var final = new THREE.Object3D();
    sideWaySwing(scene, sideWaySwingObj);
    chairSwing(scene, chairSwingObj);
    final.add(chairSwingObj, sideWaySwingObj);
    final.position.set(324, 0, 172);
    final.rotateY(Math.PI/2 );
    var swing2 = new THREE.Object3D();
    var swing3 = new THREE.Object3D();
    var swing4 = new THREE.Object3D();

    final.clone(swing2);
    final.clone(swing3);
    final.clone(swing4);
    swing2.position.set(324, 0, -506);
    swing3.position.set(-324, 0, -506);
    swing4.position.set(-324, 0, 172);

    swing.add(final);
    swing.add(swing2);
    swing.add(swing3);
    swing.add(swing4);
}
