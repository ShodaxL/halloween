/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload() {

        this.load.image('voiture-1', '![](../assets/level/car.png)');


        this.load.image('drawing', '![](../assets/level/fond-de-jeu-de-ferme.jpg)');
    }
    create(){


        let voiture = this.add.image(200, 200, 'voiture-1').setOrigin(0, 0);
        this.groundContainer.add(voiture-1);

        let drawing = this.add.image(200, 200, 'drawing').setOrigin(0, 0);
        this.groundContainer.add(drawing);

            this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2500, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterBloody.scrollFactorX=0;
        this.weatherRain.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
        this.walk.scrollFactorX=0;

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
                    me.speed=2;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-2;
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
        this.weatherRain.setAlpha(Phaser.Math.Between(95,100)/100)

    }


}
