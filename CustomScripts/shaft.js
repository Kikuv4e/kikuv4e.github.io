/**
 * Created by Kiko on 29/09/2015.
 */





function CreatingCylinderClass(scene){
    this.scene = scene;
    this.createCylinder = function(radiusTop, radiusBottom, height, radiusSegments, heightSegments){
        var geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments );
        console.log(geometry.faces[0].vertexColors.length);

        var material = new THREE.MeshPhongMaterial( {color : 0x0000ff} );
        //var color = new THREE.Color(Math.random(), Math.random(), Math.random());
        // material.color = color;

        var cylinder = new THREE.Mesh( geometry, material );
        this.cylinder = cylinder;
        this.cylinder.castShadow = true;
        this.scene.add( cylinder );
    };
    this.objectExist = function(){
        if (isNaN(this.cylinder)) {
            return false;
        }
        return true;
    };

}




function makeStairs(group){
    var cyl = new CreatingCylinderClass(scene);
    cyl.createCylinder(2, 2, 100, 10, 10);
    group.add(cyl.cylinder);
    cyl.cylinder.position.set( 25, 50, 0);
    cyl.createCylinder(2, 2, 100, 10, 10);
    group.add(cyl.cylinder);
    cyl.cylinder.position.set(0, 50, 0);

    var distance = 0;
    for (var i = 0; i < 9; i++){
        cyl.createCylinder(2, 2, 25, 10, 10);
        cyl.cylinder.position.set( 12.5, 10 + distance, 0);
        cyl.cylinder.rotateZ(Math.PI/2);
        group.add(cyl.cylinder);
        distance += 10;
    }
}
function createShaft(final, upper, side, side1) {
    makeStairs(upper);
    upper.translateY(100);
    upper.translateZ(-1.5);
    upper.scale.set(1, 2, 1.7);
    upper.rotateX(Math.PI/2);

    makeStairs(side);
    makeStairs(side1);
    side1.translateZ(197);
    final.add(upper);
    final.add(side);
    final.add(side1);
    final.scale.set(2, 1, 1);
    final.position.set(-34, 0, 230);
}
