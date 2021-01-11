# APP PLAN :

    Combien d'Objets ?

        - Ardoise
        - Palette
        - Stylo

    ET un objet global qui va servire à controller et les 3 autres

        - App


# Class Ardoise:

    Propriétés :
        - la balise canvas
        - le context
        - la largeur
        - la hauteur
        - le booléen de control : isDrawing

    Méthodes :
        - Se construire (fond blanc)
        - S'effacer


# Class Palette :

    Propriétés :
        - la balise canvas
        - le context
        - la largeur
        - la hauteur

    Méthodes :
        - Se construire (double dégradé)
        - Récupérer une couleur (getImageData)


# Class Stylo :

    Propriétés :
        - position X
        - position Y
        - couleur
        - épaisseur

    Méthodes :
        - changer de couleur
        - changer d'épaisseur
        - commencer à dessiner (booléen a true)
        - dessiner
        - arrèter de dessiner (booléen a false)


# Class App :

    Propriétés :
        - une instance de Ardoise
        - une instance de Palette
        - une instance de Stylo

    Méthodes :
        - démarrer l'application (tous les events listeners)
