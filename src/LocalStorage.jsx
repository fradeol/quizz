
export default function localStorage() {
// Memory limit : 10Mb

    console.log( Storage );

    console.log( window.localStorage );
    console.log( '' );

    const storage = window.localStorage;

    // nombre d'éléments contenus dans l'objet Storage.
    console.log( 'Length (local) : ', storage.length );
    console.log( '' );

    // Ajouter ou Modifier un element
    storage.setItem( 'firstname', "Bruce" );

    // Récuperation d'un element 
    const firstname = storage.getItem( 'firstname' );

    console.log( 'Firstname : ', firstname );
    console.log( '' );

    // Récupération de la valeur associée à une clé
    const key = storage.key(0);

    console.log( 'Key 0 : ', key );
    console.log( '' );

    // Remove specific item
    // storage.removeItem( 'firstname' );
    // console.log( '' );

    // // Remove all items
    // // storage.clear();

    console.log( 'Space : ', localStorageSpace() );
    console.log( '' );

    function localStorageSpace()
    {
        const storage = window.localStorage;
        let total = 0;

        for (let key in storage)
        {
            if (!storage.hasOwnProperty(key)) continue;
            total += ((storage[key].length + key.length) * 2);
        }

        return (total / 1024).toFixed(2);
    }
}