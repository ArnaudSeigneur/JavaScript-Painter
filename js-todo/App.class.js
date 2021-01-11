// Classe App
class App {

    // la classe mère embarque et controle les 3 autres
    // pour facilité le passage de data d'un Objet à un autre.
	constructor(ardoiseSelector, paletteSelector) {
		this.ardoise = new Ardoise(ardoiseSelector);
		this.palette = new Palette(paletteSelector);
		this.stylo = new Stylo();
	}

    // la classe mère lance toutes les ecoutes d'events
	initEvents() {
		
        	//commencer à dessiner : enfoncement de la souris
            
            //dessiner : déplacement de la souris
            
            //arrêter de dessiner : relachement de la souris
            
            //changer epaisseur du stylo
            
            //changer la ouleur du stylo (avec les boutons)
            
            //changer la couleur avec la palette
            
            //survol de la palette, afficher le cursor zoom
            
            //effacer l'ardoise

	}

}
