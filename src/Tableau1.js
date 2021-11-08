/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload() {
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2terrain1', 'assets/level/background-2/bg2-terrain-1.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bgterrain1', 'assets/level/background-1/bg-terrain-1.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('gWoodenbridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gBox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gTree', 'assets/level/ground/g-tree-1.png');
        this.load.image('gStone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gFellentree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gLeft1', 'assets/level/ground/g-left.png');


        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for (let i = 1; i <= 3; i++) {
            this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for (let i = 1; i <= 3; i++) {
            this.load.image('filterBloody' + i, 'assets/level/filters/bloody/frame' + i + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for (let i = 1; i <= 3; i++) {
            this.load.image('bg-animation-' + i, 'assets/level/background-2/bg-animation/bg-animation-' + i + '.png');

        }
        for(let i=1;i<=3;i++){
            this.load.image('filterBloody'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */

    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès


        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        let bgterrain1=this.add.image(820,200, 'bgterrain1').setOrigin(0,0);
        this.bg1Container.add(bgterrain1);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(400,360, 'gTree1').setOrigin(0,1);
        //tree1.setTintFill(#000000); // pratique pour dbugger
        this.groundContainer.add(tree1);


        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions


        let gWater=this.add.image(600,400, 'gWater').setOrigin(0,0).setScale(2,1);
        this.groundContainer.add(gWater);

        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);

        let gMid=this.add.image(1200,380, 'gMid').setOrigin(0,0).setScale(2.5,1);
        this.groundContainer.add(gMid);

        let gLeft=this.add.image(1050,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);

        let gStone4=this.add.image(1080,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone4);

        let gTree1=this.add.image(1080,-100, 'gTree1').setOrigin(0,0);
        this.groundContainer.add(gTree1);
        gTree1.angle=-9

        let gTree=this.add.image(1320,-10, 'gTree').setOrigin(0,0);
        this.groundContainer.add(gTree);

        let gMushroom1=this.add.image(300,280, 'gMushroom1').setOrigin(0,0);
        this.groundContainer.add(gMushroom1);

        let gTree3=this.add.image(130,-100, 'gTree3').setOrigin(0,0);
        this.groundContainer.add(gTree3);

        let gStone2=this.add.image(540,360, 'gStone2').setOrigin(0,1);
        this.groundContainer.add(gStone2);

        let gBox2=this.add.image(675,360, 'gBox2').setOrigin(0,1).setScale(0.75,0.75);
        this.groundContainer.add(gBox2);

        let gStone5=this.add.image(1340,390, 'gStone5').setOrigin(0,1);
        this.groundContainer.add(gStone5);

        let gRight=this.add.image(1540,765, 'gRight').setOrigin(0,1);
        this.groundContainer.add(gRight);

        let gFellentree1=this.add.image(1650,390, 'gFellentree1').setOrigin(0,1);
        this.groundContainer.add(gFellentree1);
        gFellentree1.angle=5

        let gLeft1=this.add.image(2050,390, 'gLeft1').setOrigin(0,0).setScale(3,1);
        this.groundContainer.add(gLeft1);





        let gWoodenbridge=this.add.image(570,290, 'gWoodenbridge').setOrigin(0,0);
        this.groundContainer.add(gWoodenbridge);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);



        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);


        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */

        this.filterBloody = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody2'},
                {key:'filterBloody3'},


            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBloody.play('bloody');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2500, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterBloody.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterBloody.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
